import { Helmet } from 'react-helmet-async'

const SEOHead = ({ 
  title = "Fernando Martinez - Full Stack Developer", 
  description = "Full Stack Developer specializing in React, Node.js, and modern web technologies. View my portfolio, projects, and technical blog.",
  keywords = "Fernando Martinez, Full Stack Developer, React, Node.js, JavaScript, Web Developer, Portfolio, Software Engineer",
  image = "/og-image.jpg",
  url = "https://fernandomartinez.dev",
  type = "website"
}) => {
  const fullTitle = title.includes("Fernando Martinez") ? title : `${title} | Fernando Martinez`
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Fernando Martinez" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Fernando Martinez Portfolio" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@fernando_codes" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#0891b2" />
      <meta name="msapplication-TileColor" content="#0891b2" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Fernando Martinez",
          "jobTitle": "Full Stack Developer",
          "description": description,
          "url": url,
          "image": image,
          "sameAs": [
            "https://linkedin.com/in/fernando-martinez",
            "https://github.com/nando81k",
            "https://twitter.com/fernando_codes"
          ],
          "knowsAbout": [
            "React",
            "Node.js",
            "JavaScript",
            "TypeScript",
            "PostgreSQL",
            "Full Stack Development",
            "Web Development"
          ]
        })}
      </script>
    </Helmet>
  )
}

export default SEOHead
