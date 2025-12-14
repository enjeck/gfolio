/**
 * EXAMPLE BLOG POSTS FILE
 * ========================
 * 
 * This template shows how to add your blog posts.
 * Copy the examples below and customize with your own articles.
 * 
 * FILE LOCATION: src/data/blog.data.ts
 */

import { BlogPost } from './src/types';

export const BLOG_POSTS: BlogPost[] = [
  // EXAMPLE 1: Technical Tutorial
  {
    link: "https://yourblog.com/react-hooks-guide",
    img: "/images/blog/react-hooks.jpg",
    icon: "/images/icons/react-icon.png",
    name: "Complete Guide to React Hooks",
    excerpt: `Learn everything about React Hooks from useState and useEffect to 
      custom hooks. Includes practical examples and best practices for building 
      modern React applications.`,
    category: "React",
    date: "2 days ago"
  },

  // EXAMPLE 2: Design Article
  {
    link: "https://medium.com/@you/design-systems",
    img: "/images/blog/design-systems.jpg",
    icon: "/images/icons/design-icon.png",
    name: "Building Scalable Design Systems",
    excerpt: `A deep dive into creating design systems that scale with your product. 
      Learn about design tokens, component architecture, and maintaining consistency 
      across teams.`,
    category: "Design",
    date: "1 week ago"
  },

  // EXAMPLE 3: Career Development
  {
    link: "https://dev.to/you/becoming-senior-developer",
    img: "/images/blog/career-growth.jpg",
    icon: "/images/icons/career-icon.png",
    name: "The Path to Senior Developer",
    excerpt: `What does it take to grow from junior to senior developer? Discover 
      the technical and soft skills needed, along with practical advice from my 
      journey in the industry.`,
    category: "Career",
    date: "2 weeks ago"
  },

  // EXAMPLE 4: Technology Comparison
  {
    link: "https://yourblog.com/nextjs-vs-gatsby",
    img: "/images/blog/framework-comparison.jpg",
    icon: "/images/icons/js-icon.png",
    name: "Next.js vs Gatsby: Choosing the Right Framework",
    excerpt: `An in-depth comparison of Next.js and Gatsby for static site generation. 
      Performance benchmarks, use cases, and which one to choose for your next project.`,
    category: "JavaScript",
    date: "3 weeks ago"
  },

  // EXAMPLE 5: Best Practices
  {
    link: "https://hashnode.com/@you/typescript-best-practices",
    img: "/images/blog/typescript-tips.jpg",
    icon: "/images/icons/typescript-icon.png",
    name: "10 TypeScript Best Practices You Should Know",
    excerpt: `Level up your TypeScript skills with these essential best practices. 
      From type safety to advanced generics, learn how to write better, more 
      maintainable TypeScript code.`,
    category: "TypeScript",
    date: "1 month ago"
  },

  // EXAMPLE 6: Problem Solving
  {
    link: "https://yourblog.com/debugging-production-issues",
    img: "/images/blog/debugging.jpg",
    icon: "/images/icons/bug-icon.png",
    name: "Debugging Production Issues Like a Pro",
    excerpt: `How to effectively debug production issues without losing your mind. 
      Tools, techniques, and strategies for quickly identifying and fixing problems 
      in live applications.`,
    category: "DevOps",
    date: "1 month ago"
  },

  // EXAMPLE 7: Opinion/Thought Leadership
  {
    link: "https://medium.com/@you/future-of-web-development",
    img: "/images/blog/future-web.jpg",
    icon: "/images/icons/web-icon.png",
    name: "The Future of Web Development in 2024",
    excerpt: `Exploring upcoming trends in web development: AI-assisted coding, 
      WebAssembly, edge computing, and more. What should developers focus on to 
      stay relevant?`,
    category: "Opinion",
    date: "2 months ago"
  },

  // EXAMPLE 8: Personal Experience
  {
    link: "https://dev.to/you/my-first-open-source-contribution",
    img: "/images/blog/open-source.jpg",
    icon: "/images/icons/github-icon.png",
    name: "My First Open Source Contribution: Lessons Learned",
    excerpt: `A personal story about making my first open source contribution. 
      The challenges I faced, what I learned, and why you should contribute too.`,
    category: "Open Source",
    date: "3 months ago"
  },
];

/**
 * TIPS FOR ADDING YOUR BLOG POSTS:
 * 
 * 1. IMAGES:
 *    - Featured images should be high quality
 *    - Recommended size: 1200x630px (good for social sharing)
 *    - Use descriptive filenames
 *    - Store in public/images/blog/
 * 
 * 2. ICONS:
 *    - Small category icons (e.g., language/framework logos)
 *    - Recommended size: 48x48px or 64x64px
 *    - Store in public/images/icons/
 *    - PNG format with transparency works best
 * 
 * 3. EXCERPTS:
 *    - Keep it 2-3 sentences
 *    - Make it engaging and informative
 *    - Include key takeaways or benefits
 *    - Avoid clickbait
 * 
 * 4. CATEGORIES:
 *    - Use consistent category names
 *    - Common categories: JavaScript, React, Design, Career, Tutorial
 *    - Categories can match your icon themes
 * 
 * 5. DATES:
 *    - Use relative dates for recent posts ("2 days ago", "1 week ago")
 *    - Use absolute dates for older posts ("Jan 2024", "3 months ago")
 *    - Keep dates updated or use actual date strings
 * 
 * 6. LINKS:
 *    - Link to the actual blog post (Medium, Dev.to, your blog, etc.)
 *    - Ensure links are permanent and won't change
 *    - Use HTTPS
 * 
 * 7. ORDER:
 *    - Most recent posts first
 *    - Posts appear in the order listed here
 */
