const express = require('express');
const db = require('../config/database');
const router = express.Router();

// GET /api/blog - Get all blog posts
router.get('/', async (req, res) => {
  try {
    const { published, featured, tag } = req.query;
    let query = 'SELECT * FROM blog_posts';
    let conditions = [];
    let params = [];
    let paramCount = 0;

    if (published === 'true') {
      conditions.push(`published = $${++paramCount}`);
      params.push(true);
    }

    if (featured === 'true') {
      conditions.push(`featured = $${++paramCount}`);
      params.push(true);
    }

    if (tag) {
      conditions.push(`$${++paramCount} = ANY(tags)`);
      params.push(tag);
    }

    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ');
    }

    query += ' ORDER BY created_at DESC';

    const result = await db.query(query, params);
    res.json({
      success: true,
      data: result.rows,
      count: result.rows.length,
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch blog posts',
    });
  }
});

// GET /api/blog/:slug - Get single blog post by slug
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const result = await db.query('SELECT * FROM blog_posts WHERE slug = $1', [
      slug,
    ]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'Blog post not found',
      });
    }

    res.json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    console.error('Error fetching blog post:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch blog post',
    });
  }
});

// GET /api/blog/tags/all - Get all unique tags
router.get('/tags/all', async (req, res) => {
  try {
    const result = await db.query(`
      SELECT DISTINCT unnest(tags) as tag, COUNT(*) as count
      FROM blog_posts 
      WHERE published = true
      GROUP BY tag
      ORDER BY count DESC, tag ASC
    `);

    res.json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.error('Error fetching tags:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch tags',
    });
  }
});

// POST /api/blog - Create new blog post (admin only - add auth later)
router.post('/', async (req, res) => {
  try {
    const { title, slug, content, excerpt, tags, published, featured } =
      req.body;

    const result = await db.query(
      `INSERT INTO blog_posts (title, slug, content, excerpt, tags, published, featured) 
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [
        title,
        slug,
        content,
        excerpt,
        tags || [],
        published || false,
        featured || false,
      ]
    );

    res.status(201).json({
      success: true,
      data: result.rows[0],
      message: 'Blog post created successfully! ✍️',
    });
  } catch (error) {
    console.error('Error creating blog post:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to create blog post',
    });
  }
});

module.exports = router;
