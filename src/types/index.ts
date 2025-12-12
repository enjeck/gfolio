/**
 * Core type definitions for the portfolio website
 * These types ensure data consistency and provide better IDE support
 */

/**
 * Represents a content item in the portfolio
 * Used for general searchable content across the site
 */
export interface ContentItem {
  /** Category of the content (e.g., 'about', 'works', 'writing') */
  category: string;
  /** URL or path where this content links to */
  link: string;
  /** Display name/title of the content */
  name: string;
  /** Short description or preview text */
  excerpt: string;
}

/**
 * Represents a project with detailed information
 * Used for the projects/works page
 */
export interface Project {
  /** URL or path to the project */
  link: string;
  /** Path to project thumbnail/preview image */
  img: string;
  /** Project title */
  name: string;
  /** Detailed project description */
  excerpt: string;
  /** Technologies/tools used (e.g., "React · TypeScript · CSS") */
  tools: string;
}

/**
 * Represents a blog post or article
 * Used for the blog/writing section
 */
export interface BlogPost {
  /** URL to the blog post */
  link: string;
  /** Path to featured image */
  img: string;
  /** Path to category icon */
  icon: string;
  /** Blog post title */
  name: string;
  /** Blog post excerpt/summary */
  excerpt: string;
  /** Post category (e.g., "JavaScript", "Design") */
  category: string;
  /** Relative date string (e.g., "2 days ago") */
  date: string;
}

/**
 * Represents an image item for the images gallery
 */
export interface ImageItem {
  /** URL or path associated with the image */
  link: string;
  /** Path to the image file */
  img: string;
  /** Image title/alt text */
  name: string;
}

/**
 * Social media link configuration
 */
export interface SocialLink {
  /** Platform name (e.g., "GitHub", "LinkedIn") */
  platform: string;
  /** URL to social profile */
  url: string;
  /** Path to platform icon */
  icon?: string;
  /** Display text for the link */
  label?: string;
}

/**
 * Personal information configuration
 */
export interface PersonalInfo {
  /** Full name */
  name: string;
  /** Professional title/role */
  title: string;
  /** Brief bio */
  bio: string;
  /** Location */
  location: string;
  /** Email address */
  email?: string;
  /** Personal website URL */
  website?: string;
}

/**
 * Skills configuration
 */
export interface SkillsConfig {
  /** List of technical skills */
  technical: string[];
  /** List of interests */
  interests: string[];
  /** Optional skill categories for organization */
  categories?: {
    [category: string]: string[];
  };
}

/**
 * Search dropdown option
 */
export interface SearchOption {
  /** Display text for the option */
  name: string;
  /** Value used for routing/filtering */
  value: string;
}

/**
 * Site metadata configuration
 */
export interface SiteMetadata {
  /** Site title */
  title: string;
  /** Site description for SEO */
  description: string;
  /** Keywords for SEO */
  keywords: string[];
  /** Author name */
  author: string;
  /** Site URL */
  siteUrl: string;
  /** Default OG image */
  ogImage?: string;
}
