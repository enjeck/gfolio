import { ContentItem } from '../types';
import { PROJECTS } from './projects.data';
import { BLOG_POSTS } from './blog.data';
import { PERSONAL_INFO, SKILLS } from '../config/portfolio.config';

/**
 * CONTENT DATA
 * ============
 * 
 * This file aggregates all content for the search functionality.
 * It automatically generates searchable content from:
 * - Personal info (about section)
 * - Skills (about section)
 * - Projects (works section)
 * - Blog posts (writing section)
 * 
 * You can also add custom content items here.
 */

// About section content
const aboutContent: ContentItem[] = [
  {
    category: "about",
    link: "/about#me",
    name: "Me, Myself and I",
    excerpt: PERSONAL_INFO.bio
  },
  {
    category: "about",
    link: "/about#skills",
    name: "An overview of my technical skills and interests",
    excerpt: `${SKILLS.technical.join(', ')}, ${SKILLS.interests.join(', ')}.`
  },
];

// Works section content (from projects)
const worksContent: ContentItem[] = PROJECTS.map(project => ({
  category: "works",
  link: project.link,
  name: project.name,
  excerpt: project.excerpt,
}));

// Writing section content (from blog posts)
const writingContent: ContentItem[] = BLOG_POSTS.map(post => ({
  category: "writing",
  link: post.link,
  name: post.name,
  excerpt: post.excerpt,
}));

// Add any custom content here
const customContent: ContentItem[] = [
  // Example:
  // {
  //   category: "custom-category",
  //   link: "/custom-page",
  //   name: "Custom Content Title",
  //   excerpt: "Description of custom content"
  // }
];

// Combine all content
export const CONTENT: ContentItem[] = [
  ...aboutContent,
  ...worksContent,
  ...writingContent,
  ...customContent,
];
