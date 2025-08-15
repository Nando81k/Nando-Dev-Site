const express = require('express');
const router = express.Router();

// Mock GitHub data for now - replace with actual GitHub API calls
const mockGitHubData = {
  user: {
    login: 'nando81k', // Replace with your actual GitHub username
    name: 'Nando',
    bio: 'Full-Stack Developer | Building dope software',
    public_repos: 25,
    followers: 45,
    following: 30,
    avatar_url: 'https://github.com/nando81k.png',
  },
  repos: [
    {
      name: 'FYLA',
      description: 'Task management app with real-time collaboration',
      language: 'JavaScript',
      stargazers_count: 12,
      html_url: 'https://github.com/nando81k/fyla',
      topics: ['react', 'nodejs', 'postgresql'],
    },
    {
      name: 'barbershop-app',
      description: 'Modern booking system for barbershops',
      language: 'JavaScript',
      stargazers_count: 8,
      html_url: 'https://github.com/nando81k/barbershop-app',
      topics: ['react', 'express', 'stripe'],
    },
  ],
  contributions: {
    total: 847,
    weeks: [], // This would be populated with actual contribution data
  },
};

// GET /api/github/user - Get GitHub user info
router.get('/user', async (req, res) => {
  try {
    // TODO: Replace with actual GitHub API call
    // const response = await fetch(`https://api.github.com/users/${process.env.GITHUB_USERNAME}`, {
    //   headers: {
    //     'Authorization': `token ${process.env.GITHUB_TOKEN}`
    //   }
    // });

    res.json({
      success: true,
      data: mockGitHubData.user,
    });
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch GitHub user data',
    });
  }
});

// GET /api/github/repos - Get GitHub repositories
router.get('/repos', async (req, res) => {
  try {
    const { featured } = req.query;

    // TODO: Replace with actual GitHub API call
    // const response = await fetch(`https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos?sort=updated&per_page=10`, {
    //   headers: {
    //     'Authorization': `token ${process.env.GITHUB_TOKEN}`
    //   }
    // });

    let repos = mockGitHubData.repos;

    if (featured === 'true') {
      // Filter for featured repos (you can define logic for this)
      repos = repos.filter((repo) => repo.stargazers_count > 5);
    }

    res.json({
      success: true,
      data: repos,
      count: repos.length,
    });
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch GitHub repositories',
    });
  }
});

// GET /api/github/contributions - Get GitHub contribution data
router.get('/contributions', async (req, res) => {
  try {
    // TODO: This would typically use GitHub's GraphQL API or a service like GitHub's contribution graph
    // For now, returning mock data

    res.json({
      success: true,
      data: mockGitHubData.contributions,
      message:
        'GitHub contribution data (mock data - implement with GitHub API)',
    });
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch GitHub contribution data',
    });
  }
});

// GET /api/github/stats - Get combined GitHub stats
router.get('/stats', async (req, res) => {
  try {
    res.json({
      success: true,
      data: {
        user: mockGitHubData.user,
        repoCount: mockGitHubData.repos.length,
        totalStars: mockGitHubData.repos.reduce(
          (acc, repo) => acc + repo.stargazers_count,
          0
        ),
        totalContributions: mockGitHubData.contributions.total,
        topLanguages: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
      },
    });
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch GitHub stats',
    });
  }
});

module.exports = router;
