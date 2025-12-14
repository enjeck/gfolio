/**
 * EXAMPLE CONFIGURATION FILE
 * ==========================
 * 
 * This is a template showing all available configuration options.
 * Copy this file to portfolio.config.ts and customize it with your information.
 * 
 * FILE LOCATION: src/config/portfolio.config.ts
 */

import { PersonalInfo, SkillsConfig, SocialLink, SiteMetadata } from './src/types';

/**
 * PERSONAL INFORMATION
 * ====================
 * Your basic professional information
 */
export const PERSONAL_INFO: PersonalInfo = {
  name: "Jane Doe",                          // Your full name
  title: "Full Stack Developer & Designer",  // Your professional title
  bio: `I'm a passionate developer who loves creating beautiful, 
    functional web experiences. With 5 years of experience in 
    modern web technologies, I specialize in React, TypeScript, 
    and UI/UX design.`,                      // Your bio (can be multi-line)
  location: "San Francisco, CA",             // Your location
  email: "jane.doe@example.com",             // Your email (optional)
  website: "https://janedoe.dev",            // Your website (optional)
};

/**
 * SKILLS & INTERESTS
 * ==================
 * List your technical skills and professional interests
 */
export const SKILLS: SkillsConfig = {
  // Main technical skills (will be displayed in about section)
  technical: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
  ],

  // Your interests and other skills
  interests: [
    "Open Source",
    "UI/UX Design",
    "Technical Writing",
    "Photography",
    "Teaching",
  ],

  // OPTIONAL: Organize skills into categories
  categories: {
    "Frontend": ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
    "Backend": ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    "Design & Other": ["UI/UX Design", "Technical Writing", "Photography"],
  },
};

/**
 * SOCIAL MEDIA LINKS
 * ==================
 * Add your social media and professional network profiles
 */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "GitHub",                              // Platform name
    url: "https://github.com/janedoe",              // Your profile URL
    icon: "/images/github-icon.png",                // Icon path (optional)
    label: "GitHub - Check out my open source work", // Display label (optional)
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/janedoe/",
    icon: "/images/linkedIn-icon.png",
    label: "LinkedIn - Let's connect professionally",
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/janedoe",
    icon: "/images/twitter-icon.png",
    label: "Twitter - Follow for tech thoughts",
  },
  {
    platform: "Email",
    url: "mailto:jane.doe@example.com",
    icon: "/images/gmail-icon.png",
    label: "Email - Get in touch",
  },
  // Add more social links as needed
];

/**
 * SITE METADATA
 * =============
 * Information used for SEO and site configuration
 */
export const SITE_METADATA: SiteMetadata = {
  title: "Jane Doe - Full Stack Developer",         // Browser tab title
  description: "Portfolio showcasing web development projects, technical writing, and design work", // Meta description
  keywords: [                                         // SEO keywords
    "portfolio",
    "web developer",
    "full stack",
    "react",
    "nextjs",
    "javascript",
    "typescript",
  ],
  author: "Jane Doe",                                // Author name
  siteUrl: "https://janedoe.dev",                   // Your site URL
  ogImage: "/images/og-image.png",                  // Open Graph image (optional)
};

/**
 * SEARCH OPTIONS
 * ==============
 * Define search categories (usually don't need to change these)
 */
export const SEARCH_OPTIONS = [
  { name: "everything about you", value: "all" },
  { name: "about", value: "about" },
  { name: "works", value: "works" },
  { name: "writing", value: "writing" },
  { name: "images", value: "images" },
  { name: "social", value: "social" },
];

/**
 * NAVIGATION SECTIONS
 * ===================
 * Available sections (usually don't need to change these)
 */
export const NAVIGATION_SECTIONS = {
  ALL: 'all',
  ABOUT: 'about',
  WORKS: 'works',
  PROJECTS: 'projects',
  WRITING: 'writing',
  BLOG: 'blog',
  IMAGES: 'images',
  SOCIAL: 'social',
} as const;
