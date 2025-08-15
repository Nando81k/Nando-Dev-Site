const express = require('express');
const { body, validationResult } = require('express-validator');
const db = require('../config/database');
const router = express.Router();

// POST /api/contact - Submit contact form
router.post(
  '/',
  [
    body('name')
      .trim()
      .isLength({ min: 2, max: 100 })
      .withMessage('Name must be between 2 and 100 characters'),
    body('email')
      .isEmail()
      .normalizeEmail()
      .withMessage('Please provide a valid email'),
    body('message')
      .trim()
      .isLength({ min: 10, max: 1000 })
      .withMessage('Message must be between 10 and 1000 characters'),
    body('subject')
      .optional()
      .trim()
      .isLength({ max: 200 })
      .withMessage('Subject cannot exceed 200 characters'),
  ],
  async (req, res) => {
    try {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          error: 'Validation failed',
          details: errors.array(),
        });
      }

      const { name, email, subject, message } = req.body;

      // Store in database
      const result = await db.query(
        `INSERT INTO contact_submissions (name, email, subject, message) 
       VALUES ($1, $2, $3, $4) RETURNING id, created_at`,
        [name, email, subject || 'Portfolio Contact', message]
      );

      // TODO: Send email notification
      // This would typically use nodemailer or similar service

      res.status(201).json({
        success: true,
        data: {
          id: result.rows[0].id,
          submitted_at: result.rows[0].created_at,
        },
        message: "Thanks for reaching out! I'll get back to you soon. 📧",
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to submit contact form',
      });
    }
  }
);

// GET /api/contact - Get all contact submissions (admin only - add auth later)
router.get('/', async (req, res) => {
  try {
    const { status } = req.query;
    let query = 'SELECT * FROM contact_submissions';
    let params = [];

    if (status) {
      query += ' WHERE status = $1';
      params.push(status);
    }

    query += ' ORDER BY created_at DESC';

    const result = await db.query(query, params);
    res.json({
      success: true,
      data: result.rows,
      count: result.rows.length,
    });
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch contact submissions',
    });
  }
});

// PATCH /api/contact/:id/status - Update contact submission status
router.patch('/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['new', 'read', 'replied'].includes(status)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid status. Must be: new, read, or replied',
      });
    }

    const result = await db.query(
      'UPDATE contact_submissions SET status = $1 WHERE id = $2 RETURNING *',
      [status, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'Contact submission not found',
      });
    }

    res.json({
      success: true,
      data: result.rows[0],
      message: 'Status updated successfully',
    });
  } catch (error) {
    console.error('Error updating contact submission:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update contact submission',
    });
  }
});

module.exports = router;
