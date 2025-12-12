import { PersonalInfo, SkillsConfig, SocialLink, SiteMetadata } from '../types';

/**
 * PORTFOLIO CONFIGURATION FILE
 * ============================
 * 
 * This is the central configuration file for your portfolio website.
 * Edit this file to customize your portfolio with your own information.
 * 
 * INSTRUCTIONS:
 * 1. Update PERSONAL_INFO with your details
 * 2. Update SKILLS with your technical skills and interests
 * 3. Update SOCIAL_LINKS with your social media profiles
 * 4. Update SITE_METADATA for SEO and site information
 * 5. Add your projects in src/data/projects.data.ts
 * 6. Add your blog posts in src/data/blog.data.ts
 * 7. Add your images in src/data/images.data.ts
 */

/**
 * Personal Information
 * Edit this section with your own information
 */
export const PERSONAL_INFO: PersonalInfo = {
  name: "Your Name",
  title: "Developer & Technical Writer",
  bio: `I am a developer and technical writer. 
    I have a passion for creating dynamic, responsive, adaptable websites.
    Problem solver, high-attention to detail, and creative person. I strive for 
    clarity, simplicity and creativity in my work`,
  location: "Earth",
  email: "your.email@example.com",
  website: "https://yourwebsite.com",
};

/**
 * Skills Configuration
 * List your technical skills, tools, and interests
 */
export const SKILLS: SkillsConfig = {
  technical: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "GraphQL",
    "Gatsby",
    "Python",
  ],
  interests: [
    "Open Source",
    "Hugo",
    "Documentation",
    "UI Design",
    "UX Research",
    "Inkscape",
  ],
  // Optional: Organize skills into categories
  categories: {
    "Frontend": ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
    "Backend": ["Python", "GraphQL"],
    "Design": ["UI Design", "UX Research", "Inkscape"],
    "Other": ["Open Source", "Documentation", "Hugo"],
  },
};

/**
 * Social Media Links
 * Add your social media profiles here
 */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/yourusername",
    icon: "/images/github-icon.png",
    label: "GitHub - Explore my projects and code",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/yourusername/",
    icon: "/images/linkedIn-icon.png",
    label: "LinkedIn - Connect and share experiences",
  },
  {
    platform: "Email",
    url: "mailto:your.email@example.com",
    icon: "/images/gmail-icon.png",
    label: "Email - Get in touch",
  },
];

/**
 * Site Metadata
 * Used for SEO and site information
 */
export const SITE_METADATA: SiteMetadata = {
  title: "Your Name - Portfolio",
  description: "Personal portfolio website showcasing projects, writing, and skills",
  keywords: [
    "portfolio",
    "developer",
    "technical writer",
    "react",
    "nextjs",
    "web development",
  ],
  author: "Your Name",
  siteUrl: "https://yourwebsite.com",
  ogImage: "/images/og-image.png",
};

/**
 * Search Options
 * Define the search categories available on your site
 */
export const SEARCH_OPTIONS = [
  {
    name: "everything about you",
    value: "all",
  },
  {
    name: "about",
    value: "about",
  },
  {
    name: "works",
    value: "works",
  },
  {
    name: "writing",
    value: "writing",
  },
  {
    name: "images",
    value: "images",
  },
  {
    name: "social",
    value: "social",
  },
];

/**
 * Navigation Configuration
 * Define available sections/pages
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
