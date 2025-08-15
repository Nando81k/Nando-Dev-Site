import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Google Analytics tracking
export const usePageTracking = () => {
  const location = useLocation()

  useEffect(() => {
    // Google Analytics 4 page view tracking
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: location.pathname + location.search
      })
    }
    
    // Simple page view logging for development
    console.log(`Page view: ${location.pathname}`)
  }, [location])
}

// Safe version that doesn't require Router context
export const usePageTrackingSafe = () => {
  useEffect(() => {
    // Only track if we have location
    if (typeof window !== 'undefined') {
      const path = window.location.pathname + window.location.search
      
      // Google Analytics 4 page view tracking
      if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
          page_path: path
        })
      }
      
      // Simple page view logging for development
      console.log(`Page view: ${path}`)
    }
  }, [])
}

// Event tracking utilities
export const trackEvent = (eventName, parameters = {}) => {
  // Google Analytics event tracking
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, parameters)
  }
  
  // Development logging
  console.log(`Event tracked: ${eventName}`, parameters)
}

// Common tracking events
export const trackDownload = (fileName, fileType) => {
  trackEvent('download', {
    file_name: fileName,
    file_type: fileType
  })
}

export const trackContactForm = (formType, status) => {
  trackEvent('contact_form_submit', {
    form_type: formType,
    status: status
  })
}

export const trackProjectView = (projectName) => {
  trackEvent('project_view', {
    project_name: projectName
  })
}

export const trackSkillDemo = (skillName, demoType) => {
  trackEvent('skill_demo_interaction', {
    skill_name: skillName,
    demo_type: demoType
  })
}

export const trackNavigation = (section) => {
  trackEvent('navigation_click', {
    section: section
  })
}

// Performance tracking
export const trackPerformance = () => {
  if ('performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0]
        if (perfData) {
          trackEvent('page_timing', {
            page_load_time: Math.round(perfData.loadEventEnd - perfData.fetchStart),
            dom_content_loaded: Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart),
            first_paint: Math.round(performance.getEntriesByType('paint')[0]?.startTime || 0)
          })
        }
      }, 1000)
    })
  }
}

// Hook to initialize all tracking
export const useAnalytics = () => {
  usePageTracking()
  
  useEffect(() => {
    trackPerformance()
  }, [])
}
