import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FiArrowLeft, 
  FiCalendar, 
  FiClock, 
  FiUser, 
  FiTag,
  FiShare2,
  FiBookmark,
  FiHeart,
  FiMessageCircle,
  FiTwitter,
  FiLinkedin,
  FiLink
} from 'react-icons/fi'

const BlogPost = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)

  // Enhanced blog posts data with full content
  const blogPostsData = {
    "bootcamp-to-production": {
      id: 1,
      title: "From Bootcamp to Production: My First Full-Stack App",
      subtitle: "Lessons learned building FYLA from conception to deployment",
      excerpt: "Building FYLA taught me more about real-world development than any tutorial ever could. Here's what I learned about user authentication, database design, and deployment challenges.",
      slug: "bootcamp-to-production",
      category: "Development",
      tags: ["React", "Node.js", "PostgreSQL", "Full Stack", "Learning"],
      author: "Fernando Martinez",
      date: "2024-12-15",
      readTime: "8 min read",
      featured: true,
      published: true,
      views: 1247,
      likes: 89,
      image: "/api/placeholder/800/400",
      
      content: `
# Introduction

When I started building FYLA (Find Your Local Artist), I thought I knew what I was getting into. After all, I had completed The Marcy Lab School's curriculum, built several projects, and felt confident in my abilities. But nothing—and I mean nothing—prepared me for the reality of building a production-ready application from scratch.

This post chronicles the journey from initial concept to deployed application, including the mistakes I made, the lessons I learned, and the moments when I questioned everything I thought I knew about software development.

## The Concept: More Than Just Another App

FYLA started as a simple idea: create a platform where beauty professionals could showcase their work and connect with clients. Easy, right? Just build a basic CRUD app with some nice styling and call it a day.

I was so wrong.

What seemed like a straightforward concept quickly evolved into a complex ecosystem involving:
- Real-time messaging between clients and artists
- Image upload and optimization
- Appointment scheduling with conflict detection
- Payment processing integration
- Mobile-responsive design
- User authentication and authorization

Each feature brought its own set of challenges that no tutorial had prepared me for.

## The Technical Deep Dive

### Authentication: It's Not Just Login and Logout

My first major reality check came when implementing user authentication. I thought: "JWT tokens, bcrypt for passwords, how hard can it be?"

The tutorials made it look simple:
\`\`\`javascript
// Hash password
const hashedPassword = await bcrypt.hash(password, 10)
// Generate token
const token = jwt.sign({ userId }, process.env.JWT_SECRET)
\`\`\`

But production authentication involves so much more:
- Password reset flows
- Email verification
- Token expiration and refresh
- Role-based access control
- Session management across devices

I spent three weeks just on authentication, learning about security best practices, OWASP guidelines, and the importance of proper error handling (never reveal why a login failed!).

### Database Design: Relationships Are Complicated

Coming from simple tutorial projects where you might have a Users table and a Posts table, FYLA's database requirements were overwhelming:

- Users (with different roles: artists, clients, admins)
- Profiles (with different schemas for artists vs clients)
- Services (offered by artists)
- Appointments (with complex availability logic)
- Messages (real-time, with read receipts)
- Reviews and ratings
- Media files and galleries

The relationships between these entities required careful planning. I learned the hard way that changing your database schema after you have production data is... not fun.

### Real-Time Features: Welcome to WebSocket Hell

Adding real-time messaging seemed like a great idea until I actually tried to implement it. Socket.io documentation makes it look straightforward, but handling:
- Connection management
- User presence indicators
- Message delivery confirmation
- Offline message queuing
- Scaling across multiple server instances

...required a deep dive into WebSocket architecture that I definitely didn't see coming.

## The Deployment Reality Check

Local development: Everything works perfectly.
Production deployment: Everything breaks.

This seems to be a universal truth in software development. Here's what caught me off guard:

### Environment Variables Are Critical
My app worked perfectly on localhost but crashed immediately on Heroku. Why? Environment variables. What seemed obvious in hindsight took me hours to debug.

### Database Migrations in Production
Changing my local PostgreSQL schema was easy. Migrating production data without losing information or causing downtime? That's a whole different skill set.

### Image Upload at Scale
Cloudinary integration worked great for my test uploads of 5-10 images. But when beta users started uploading hundreds of high-resolution photos, I learned about:
- Image optimization
- CDN configuration
- Storage costs
- Upload progress indicators
- Error handling for failed uploads

## The User Feedback Loop

One of the biggest surprises was how differently real users interacted with my app compared to how I (the developer) used it.

I designed elegant workflows that made perfect sense to me. Users found them confusing.
I created what I thought were intuitive interfaces. Users clicked on things that weren't buttons and missed actual buttons.
I built features I was sure users would love. They ignored them completely and asked for features I hadn't considered.

This taught me the invaluable lesson that assumptions are dangerous. User testing and feedback loops aren't nice-to-haves—they're essential.

## Performance: It Matters More Than You Think

My app felt fast on my development machine with a small dataset. But when I deployed it with real user data and tested it on slower connections, the performance issues became obvious:

- Images took forever to load
- Database queries slowed down with more data
- The bundle size was enormous
- Mobile performance was terrible

I learned about:
- Code splitting and lazy loading
- Database query optimization
- Image compression and responsive images
- Performance monitoring and analytics

## The Bugs You Never Saw Coming

No amount of testing prepared me for the weird edge cases real users would discover:
- Users entering emoji in text fields that weren't designed for it
- Timezone handling for appointment scheduling
- Browser compatibility issues (yes, people still use old browsers)
- Mobile keyboard behavior affecting UI layouts
- Race conditions in real-time features

Each bug taught me something new about defensive programming and the importance of comprehensive error handling.

## What I Wish I Had Known

If I could go back and give my past self advice, here's what I'd say:

### Start with MVP, Really Mean It
Don't try to build everything at once. I wanted FYLA to have every feature I could think of. This led to scope creep and delayed my initial launch by months.

### Invest in Tooling Early
Set up proper logging, monitoring, and error tracking from day one. When things break in production (and they will), you'll need visibility into what's happening.

### Database Design Is Critical
Spend extra time on your database schema. It's much easier to add features to a well-designed database than to refactor a poorly designed one.

### Testing Isn't Optional
Write tests as you build, not after. Future you will thank past you when you need to make changes and want to ensure you haven't broken anything.

### Performance Budget From Day One
Don't treat performance as an afterthought. Set performance budgets and monitor them throughout development.

## The Rewarding Moments

Despite all the challenges, building FYLA was incredibly rewarding:
- Seeing real users sign up and use the app
- Getting feedback from beauty professionals about how it helped their business
- Solving complex technical problems
- Learning skills that no tutorial could teach

## Looking Forward

FYLA is still evolving. There are features to add, performance improvements to make, and user feedback to incorporate. But the foundation is solid, and I'm confident in my ability to iterate and improve.

The journey from bootcamp to production taught me that building real applications is messy, complicated, and full of surprises. But it's also the best way to level up as a developer.

## Key Takeaways

1. **Real applications are complex** - Be prepared for challenges tutorials don't cover
2. **User feedback is invaluable** - Test with real users as early as possible
3. **Performance matters** - Monitor it from day one
4. **Database design is critical** - Invest time upfront to save pain later
5. **Production is different** - Local development success doesn't guarantee production success
6. **Security is hard** - Follow best practices and stay updated on vulnerabilities
7. **Documentation saves time** - Document your decisions and architecture

Building FYLA was one of the most challenging and educational experiences of my development journey. If you're working on your first production app, embrace the challenges—they're where the real learning happens.

---

*What's your experience been with your first production app? I'd love to hear about your challenges and victories in the comments below.*
      `,
      
      tableOfContents: [
        { id: "introduction", title: "Introduction" },
        { id: "the-concept", title: "The Concept: More Than Just Another App" },
        { id: "technical-deep-dive", title: "The Technical Deep Dive" },
        { id: "deployment-reality", title: "The Deployment Reality Check" },
        { id: "user-feedback", title: "The User Feedback Loop" },
        { id: "performance", title: "Performance: It Matters More Than You Think" },
        { id: "bugs", title: "The Bugs You Never Saw Coming" },
        { id: "what-i-wish", title: "What I Wish I Had Known" },
        { id: "rewarding-moments", title: "The Rewarding Moments" },
        { id: "key-takeaways", title: "Key Takeaways" }
      ]
    },
    
    "leading-first-tech-team": {
      id: 2,
      title: "Leading My First Tech Team: Lessons from Project Managing PATCH",
      subtitle: "From developer to project manager: navigating the challenges of technical leadership",
      excerpt: "Transitioning from developer to project manager taught me valuable lessons about communication, sprint planning, and keeping a team motivated through challenges.",
      slug: "leading-first-tech-team",
      category: "Leadership",
      tags: ["Project Management", "Scrum", "Leadership", "Team Building"],
      author: "Fernando Martinez",
      date: "2024-11-28",
      readTime: "6 min read",
      featured: false,
      published: true,
      views: 892,
      likes: 67,
      image: "/api/placeholder/800/400",
      
      content: `
# From Code to Leadership: My First PM Experience

When I was asked to take on the Project Manager and Scrum Master roles for PATCH, a health tracking application, I thought: "How hard can it be? I understand the technical side, I know the team, and I've been in enough standups to know how this works."

I was about to learn that leadership is a completely different skill set from development.

## The Project: PATCH Health Tracker

PATCH was designed to help individuals track symptoms, log blood sugar levels, and manage medication schedules. Our team of four developers had varying experience levels, and the timeline was tight: 8 weeks from concept to deployment.

As both PM and developer, I had to balance writing code with keeping the team on track, managing stakeholder expectations, and ensuring we delivered quality software on time.

## Week 1: The Honeymoon Phase

Everything started smoothly. I set up our sprint planning, created a backlog, and assigned tasks. The team was motivated, communication was good, and I felt like a natural leader.

I thought: "This PM thing is easy! Why do people make such a big deal about it?"

## Week 2-3: Reality Sets In

That's when the challenges began:

### Challenge #1: Scope Creep
Our client kept adding "small features" that seemed simple but had complex implications. As a developer, I could see the technical debt building. As a PM, I had to say no while maintaining a positive relationship.

### Challenge #2: Team Dynamics
One team member consistently missed deadlines but was excellent when they delivered. Another was reliable but needed more guidance on complex tasks. Balancing personalities and work styles while maintaining team morale became a daily challenge.

### Challenge #3: Technical Decisions vs. Timeline
Should we implement the quick solution that might cause problems later, or invest time in the proper approach that might delay delivery? These decisions required balancing technical excellence with business needs.

## What I Learned About Communication

### Lesson 1: Over-communicate, Then Communicate Some More
What seemed obvious to me wasn't always clear to others. I learned to:
- Document decisions and share them with the team
- Follow up on verbal agreements with written summaries
- Create multiple channels for different types of communication (Slack for quick updates, email for important decisions, face-to-face for complex discussions)

### Lesson 2: Different People Need Different Communication Styles
Some team members preferred detailed written instructions, others worked better with quick verbal explanations. Part of being an effective leader was adapting my communication style to each person's needs.

### Lesson 3: Bad News Doesn't Get Better with Time
When we discovered a major technical issue that would delay delivery, my instinct was to try to solve it before informing stakeholders. Big mistake. Transparency and early communication of problems builds trust and allows for collaborative problem-solving.

## Sprint Planning: The Art of Realistic Estimation

Coming from a development background, I thought I understood estimation. Planning for a team taught me I knew nothing.

### The Velocity Reality Check
Our initial velocity estimates were wildly optimistic. We planned 40 story points for our first sprint and completed 22. Instead of pushing the team harder, I realized our estimates were the problem.

### Breaking Down Tasks
What seemed like simple features often had hidden complexity:
- "Add login functionality" became 15 different tasks
- "Create user dashboard" required database schema changes, API endpoints, frontend components, and responsive design considerations

### Buffer Time Is Not Optional
Murphy's Law applies to software development. Things will go wrong, bugs will be discovered, and requirements will change. Building buffer time into sprints isn't pessimistic—it's realistic.

## Keeping the Team Motivated

### Celebrating Small Wins
When you're focused on the big picture, it's easy to overlook progress. I learned to celebrate completed features, solved bugs, and personal achievements. These small celebrations kept morale high during challenging periods.

### Protecting the Team
Part of being a good PM is shielding your team from unnecessary stress and distractions. This meant:
- Handling difficult stakeholder conversations
- Managing scope creep
- Making tough decisions about feature cuts
- Taking responsibility for delays without throwing team members under the bus

### Individual Growth Opportunities
Each team member had different career goals. I tried to assign tasks that not only served the project but also helped individuals grow in areas they cared about.

## The Technical Leadership Balancing Act

### When to Code, When to Manage
Trying to be both PM and developer meant constantly switching contexts. I learned to:
- Block time for deep development work
- Batch management tasks when possible
- Delegate coding tasks when PM duties were critical
- Communicate clearly when I was wearing which hat

### Technical Decision Making
Having development experience helped me understand the implications of different technical choices, but I had to resist the urge to make all technical decisions myself. The team had good ideas, and collaborative decision-making led to better solutions.

## Crisis Management: When Everything Goes Wrong

In week 5, we discovered a fundamental issue with our data model that required significant refactoring. The team was frustrated, stakeholders were concerned, and I was questioning my leadership abilities.

This crisis taught me:

### Stay Calm and Solution-Focused
Panic is contagious. As a leader, maintaining composure helps the team focus on solutions rather than problems.

### Involve the Team in Problem-Solving
The developers who discovered the issue also had ideas for fixing it. Including them in the solution process turned a setback into a team-building experience.

### Communicate Transparently
I explained the situation to stakeholders, took responsibility for not catching it earlier, and presented a clear plan for moving forward. Honesty and accountability built trust despite the setback.

## What Worked Well

### Daily Standups
Consistent, focused standups kept everyone aligned and surfaced blockers early.

### Retrospectives
Regular retrospectives helped us continuously improve our process and address team concerns.

### Pair Programming
Encouraging pair programming improved code quality and knowledge sharing across the team.

### Clear Documentation
Maintaining clear requirements, decisions, and architecture documentation prevented confusion and rework.

## What I'd Do Differently

### Start with Team Norms
I should have established clear team norms and communication guidelines from day one rather than assuming everyone had the same expectations.

### More Stakeholder Education
I could have done a better job educating stakeholders about the development process and why certain decisions were necessary.

### Better Work-Life Balance
Trying to excel as both PM and developer led to long hours and eventual burnout. Setting better boundaries would have been healthier for everyone.

## The Results

Despite the challenges, PATCH was delivered successfully:
- 1 week ahead of the revised schedule
- All core features implemented
- 95% test coverage
- Client satisfaction rating of 4.8/5
- Team retention: all members stayed for the next project

More importantly, I learned skills that made me a better developer and leader.

## Key Leadership Lessons

1. **Communication is everything** - Over-communicate and adapt your style to each team member
2. **Trust your team** - They often have better solutions than you do
3. **Plan for problems** - Buffer time and risk mitigation aren't optional
4. **Celebrate progress** - Small wins keep morale high during long projects
5. **Take responsibility** - Good leaders protect their team and own the outcomes
6. **Stay solution-focused** - Problems are opportunities to improve
7. **Invest in relationships** - Team dynamics determine project success

## Moving Forward

Leading PATCH taught me that I enjoy the leadership aspects of software development. It's challenging and stressful, but seeing a team come together to solve complex problems is incredibly rewarding.

The experience has made me a better developer too. Understanding the broader context of projects, the importance of communication, and the challenges of coordinating multiple people has improved how I approach all aspects of software development.

---

*Have you made the transition from developer to leadership? I'd love to hear about your experiences and lessons learned.*
      `,
      
      tableOfContents: [
        { id: "introduction", title: "From Code to Leadership" },
        { id: "the-project", title: "The Project: PATCH Health Tracker" },
        { id: "honeymoon", title: "Week 1: The Honeymoon Phase" },
        { id: "reality", title: "Week 2-3: Reality Sets In" },
        { id: "communication", title: "What I Learned About Communication" },
        { id: "sprint-planning", title: "Sprint Planning: The Art of Realistic Estimation" },
        { id: "motivation", title: "Keeping the Team Motivated" },
        { id: "balancing-act", title: "The Technical Leadership Balancing Act" },
        { id: "crisis", title: "Crisis Management: When Everything Goes Wrong" },
        { id: "lessons", title: "Key Leadership Lessons" }
      ]
    }
    // Add more blog posts as needed...
  }

  useEffect(() => {
    const postData = blogPostsData[slug]
    if (postData) {
      setPost(postData)
      // Simulate getting related posts
      const related = Object.values(blogPostsData)
        .filter(p => p.slug !== slug && p.category === postData.category)
        .slice(0, 3)
      setRelatedPosts(related)
    }
    setLoading(false)
  }, [slug])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getCategoryColor = (category) => {
    const colors = {
      Development: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      Leadership: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
      Journey: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
    }
    return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
  }

  const handleShare = (platform) => {
    const url = window.location.href
    const title = post.title
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`)
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`)
        break
      case 'copy':
        navigator.clipboard.writeText(url)
        // You could add a toast notification here
        break
    }
  }

  if (loading) {
    return (
      <div className="pt-24 section-padding">
        <div className="container-max max-w-4xl">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 dark:bg-dark-600 rounded w-64 mb-8" />
            <div className="h-12 bg-gray-300 dark:bg-dark-600 rounded w-full mb-4" />
            <div className="h-6 bg-gray-300 dark:bg-dark-600 rounded w-3/4 mb-8" />
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-4 bg-gray-300 dark:bg-dark-600 rounded w-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="pt-24 section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link to="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 section-padding"
    >
      <div className="container-max max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
          >
            <FiArrowLeft size={20} />
            <span>Back to Blog</span>
          </button>
        </motion.div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          {/* Category */}
          <div className="flex items-center space-x-4 mb-6">
            <span className={`px-4 py-2 rounded-full font-medium ${getCategoryColor(post.category)}`}>
              {post.category}
            </span>
            {post.featured && (
              <span className="text-yellow-500 font-medium">★ Featured</span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {post.title}
          </h1>

          {/* Subtitle */}
          {post.subtitle && (
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {post.subtitle}
            </p>
          )}

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-300 mb-8">
            <div className="flex items-center space-x-2">
              <FiUser size={16} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiCalendar size={16} />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiClock size={16} />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiUser size={16} />
              <span>{post.views} views</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <button
                onClick={() => setLiked(!liked)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  liked
                    ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
                    : 'bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
                }`}
              >
                <FiHeart size={16} fill={liked ? 'currentColor' : 'none'} />
                <span>{post.likes + (liked ? 1 : 0)}</span>
              </button>
              
              <button
                onClick={() => setBookmarked(!bookmarked)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  bookmarked
                    ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                    : 'bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
                }`}
              >
                <FiBookmark size={16} fill={bookmarked ? 'currentColor' : 'none'} />
                <span>Save</span>
              </button>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">Share:</span>
              <button
                onClick={() => handleShare('twitter')}
                className="p-2 rounded-lg bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
                title="Share on Twitter"
              >
                <FiTwitter size={16} />
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="p-2 rounded-lg bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                title="Share on LinkedIn"
              >
                <FiLinkedin size={16} />
              </button>
              <button
                onClick={() => handleShare('copy')}
                className="p-2 rounded-lg bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
                title="Copy link"
              >
                <FiLink size={16} />
              </button>
            </div>
          </div>
        </motion.header>

        <div className="grid lg:grid-cols-4 gap-12">
          {/* Table of Contents */}
          {post.tableOfContents && (
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-32">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {post.tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors py-1"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </motion.aside>
          )}

          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={post.tableOfContents ? "lg:col-span-3" : "lg:col-span-4"}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-dark-700">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tags</h4>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium flex items-center space-x-1"
                  >
                    <FiTag size={14} />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 pt-12 border-t border-gray-200 dark:border-dark-700"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Related Posts
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="card group hover:scale-105"
                >
                  <span className={`px-3 py-1 rounded-full text-xs font-medium mb-3 inline-block ${getCategoryColor(relatedPost.category)}`}>
                    {relatedPost.category}
                  </span>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>{formatDate(relatedPost.date)}</span>
                    <span>{relatedPost.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <div className="card bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 border-primary-200 dark:border-primary-800 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Enjoyed this post?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'd love to hear your thoughts and experiences. Let's connect and continue the conversation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link to="/blog" className="btn-secondary">
                Read More Posts
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default BlogPost
