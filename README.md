# Nando's Portfolio Site 🚀

Welcome to my personal portfolio site built with the PERN stack! This is where I showcase my journey, projects, and the cool stuff I'm building.

## 🔥 Tech Stack

- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Express.js + Node.js
- **Database**: PostgreSQL
- **Styling**: Tailwind CSS with custom themes
- **Features**: Dark/Light mode, Mobile responsive, Blog, GitHub integration

## 🎨 Design Philosophy

- **Personality**: Witty, chill, analytical
- **Colors**: Teal, red, purple accents
- **Feel**: Edgy, clean, modern
- **Mobile-first**: Responsive design

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm run install-all
   ```

2. **Set up PostgreSQL database**:
   ```bash
   # Create database
   createdb nando_portfolio
   
   # Run migrations (after setting up)
   cd server && npm run migrate
   ```

3. **Set up environment variables**:
   ```bash
   # In server/.env
   DATABASE_URL=postgresql://username:password@localhost:5432/nando_portfolio
   JWT_SECRET=your_jwt_secret_here
   PORT=5000
   
   # In client/.env
   VITE_API_URL=http://localhost:5000
   VITE_GITHUB_USERNAME=your_github_username
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom hooks
│   │   ├── context/       # React context
│   │   └── utils/         # Utility functions
├── server/                 # Express backend
│   ├── routes/            # API routes
│   ├── models/            # Database models
│   ├── middleware/        # Express middleware
│   └── config/            # Database config
└── shared/                # Shared utilities
```

## 🎯 Features

- **Home/Hero**: Bold intro with animated typing
- **About**: Journey from Spectrum → Clover → The Marcy Lab School
- **Projects**: Showcase with live links and tech stacks
- **Blog**: Personal posts and technical content
- **GitHub Activity**: Live contribution chart
- **Resume**: Downloadable PDF
- **Contact**: Form and social links
- **Theme Toggle**: Dark/Light mode with custom accents

## 🔧 Development

This site reflects my journey as a developer who's not afraid to be different. It's built with modern best practices, clean code, and just the right amount of swagger.

## 📧 Contact

Want to build something cool together? Hit me up!

---

*"I got tired of being skill-less. So I leveled up."* - Nando
