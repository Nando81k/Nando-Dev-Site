const express = require('express');
const db = require('../config/database');
const router = express.Router();

// GET /api/projects - Get all projects
router.get('/', async (req, res) => {
  try {
    const { featured } = req.query;
    let query = 'SELECT * FROM projects ORDER BY created_at DESC';
    let params = [];

    if (featured === 'true') {
      query =
        'SELECT * FROM projects WHERE featured = true ORDER BY created_at DESC';
    }

    const result = await db.query(query, params);
    res.json({
      success: true,
      data: result.rows,
      count: result.rows.length,
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch projects',
    });
  }
});

// GET /api/projects/:id - Get single project
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.query('SELECT * FROM projects WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'Project not found',
      });
    }

    res.json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch project',
    });
  }
});

// POST /api/projects - Create new project (admin only - add auth later)
router.post('/', async (req, res) => {
  try {
    const {
      title,
      description,
      tech_stack,
      github_url,
      live_url,
      image_url,
      featured,
      status,
    } = req.body;

    const result = await db.query(
      `INSERT INTO projects (title, description, tech_stack, github_url, live_url, image_url, featured, status) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [
        title,
        description,
        tech_stack,
        github_url,
        live_url,
        image_url,
        featured || false,
        status || 'completed',
      ]
    );

    res.status(201).json({
      success: true,
      data: result.rows[0],
      message: 'Project created successfully! 🚀',
    });
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to create project',
    });
  }
});

module.exports = router;
