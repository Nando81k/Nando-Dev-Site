const db = require('../config/database');

// Create tables
const createTables = async () => {
  try {
    // Projects table
    await db.query(`
      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        tech_stack TEXT[] NOT NULL,
        github_url VARCHAR(255),
        live_url VARCHAR(255),
        image_url VARCHAR(255),
        featured BOOLEAN DEFAULT false,
        status VARCHAR(50) DEFAULT 'completed', -- completed, in-progress, planning
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Blog posts table
    await db.query(`
      CREATE TABLE IF NOT EXISTS blog_posts (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        slug VARCHAR(255) UNIQUE NOT NULL,
        content TEXT NOT NULL,
        excerpt TEXT,
        tags TEXT[] DEFAULT '{}',
        published BOOLEAN DEFAULT false,
        featured BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Contact submissions table
    await db.query(`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(255),
        message TEXT NOT NULL,
        status VARCHAR(50) DEFAULT 'new', -- new, read, replied
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log('✅ Database tables created successfully');
  } catch (error) {
    console.error('❌ Error creating tables:', error);
    throw error;
  }
};

const seedData = async () => {
  try {
    // Seed projects
    await db.query(`
      INSERT INTO projects (title, description, tech_stack, github_url, live_url, featured, status) VALUES
      ('FYLA - Task Management App', 'A full-stack task management application that helps teams stay organized. Built with real-time collaboration features and a clean, intuitive interface.', ARRAY['React', 'Node.js', 'Express', 'PostgreSQL', 'Socket.io'], 'https://github.com/nando/fyla', 'https://fyla-app.netlify.app', true, 'completed'),
      ('Barbershop Booking System', 'Modern booking system for barbershops with appointment scheduling, customer management, and payment integration.', ARRAY['React', 'Express', 'PostgreSQL', 'Stripe API'], 'https://github.com/nando/barbershop-app', null, true, 'completed'),
      ('Portfolio Website v2', 'This very website! Built with PERN stack and designed to showcase my personality and skills.', ARRAY['React', 'Express', 'PostgreSQL', 'Tailwind CSS'], 'https://github.com/nando/portfolio-v2', null, false, 'in-progress')
      ON CONFLICT DO NOTHING
    `);

    // Seed blog posts
    await db.query(`
      INSERT INTO blog_posts (title, slug, content, excerpt, tags, published, featured) VALUES
      ('From Spectrum to Code: My Journey', 'from-spectrum-to-code', 'Back in 2021, I made a decision that changed everything. I walked away from my job at Spectrum and decided to teach myself how to code...', 'The story of how I transitioned from customer service to software development', ARRAY['journey', 'career-change', 'self-taught'], true, true),
      ('Why I Choose the PERN Stack', 'why-pern-stack', 'PostgreSQL, Express, React, Node.js. These four technologies have become my go-to stack for building robust web applications...', 'My thoughts on why PERN is an excellent choice for full-stack development', ARRAY['web-development', 'pern', 'tech-stack'], true, false),
      ('Building Clean APIs: Lessons Learned', 'building-clean-apis', 'API design is an art form. After building several projects, here are the patterns and practices I''ve learned...', 'Best practices for designing maintainable and scalable APIs', ARRAY['api-design', 'backend', 'best-practices'], true, false)
      ON CONFLICT (slug) DO NOTHING
    `);

    console.log('✅ Sample data seeded successfully');
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    throw error;
  }
};

module.exports = { createTables, seedData };
