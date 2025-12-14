/**
 * EXAMPLE PROJECTS FILE
 * =====================
 * 
 * This template shows how to add your projects.
 * Copy the examples below and customize with your own projects.
 * 
 * FILE LOCATION: src/data/projects.data.ts
 */

import { Project } from './src/types';

export const PROJECTS: Project[] = [
  // EXAMPLE 1: Web Application
  {
    link: "https://github.com/username/awesome-app",
    img: "/images/awesome-app.png",
    name: "Awesome Todo App",
    excerpt: `A modern, feature-rich todo application with real-time sync, 
      collaborative lists, and smart notifications. Built with React and Firebase.`,
    tools: "React · TypeScript · Firebase · Material-UI"
  },

  // EXAMPLE 2: Open Source Library
  {
    link: "https://github.com/username/react-awesome-library",
    img: "/images/library-preview.png",
    name: "React Awesome Library",
    excerpt: `A collection of reusable React components with TypeScript support, 
      comprehensive documentation, and 95% test coverage. Used by 1000+ developers.`,
    tools: "React · TypeScript · Storybook · Jest"
  },

  // EXAMPLE 3: Mobile App
  {
    link: "https://apps.apple.com/app/myapp",
    img: "/images/mobile-app.png",
    name: "Fitness Tracker Mobile App",
    excerpt: `Cross-platform mobile app for tracking workouts and nutrition. 
      Features include workout plans, progress charts, and social sharing.`,
    tools: "React Native · Expo · Redux · Node.js"
  },

  // EXAMPLE 4: Design Project
  {
    link: "https://dribbble.com/shots/12345678",
    img: "/images/design-system.png",
    name: "Modern Design System",
    excerpt: `Comprehensive design system with 50+ components, design tokens, 
      and accessibility guidelines. Implemented in Figma and code.`,
    tools: "Figma · CSS · Design Tokens · Storybook"
  },

  // EXAMPLE 5: API/Backend Project
  {
    link: "https://github.com/username/api-project",
    img: "/images/api-docs.png",
    name: "E-commerce REST API",
    excerpt: `Scalable REST API for e-commerce platforms. Features include 
      authentication, payment processing, inventory management, and real-time updates.`,
    tools: "Node.js · Express · PostgreSQL · Redis"
  },

  // EXAMPLE 6: Educational Content
  {
    link: "https://youtube.com/c/yourchannel",
    img: "/images/tutorial-series.png",
    name: "Web Development Tutorial Series",
    excerpt: `30-part video series teaching modern web development. Covers HTML, 
      CSS, JavaScript, React, and deployment. Watched by 50,000+ learners.`,
    tools: "JavaScript · React · Video Production · Teaching"
  },

  // EXAMPLE 7: Game/Interactive Project
  {
    link: "https://username.github.io/puzzle-game",
    img: "/images/puzzle-game.png",
    name: "3D Puzzle Game",
    excerpt: `Browser-based 3D puzzle game with procedurally generated levels. 
      Features leaderboards, achievements, and multiplayer mode.`,
    tools: "Three.js · JavaScript · WebGL · Socket.io"
  },

  // EXAMPLE 8: Data Visualization
  {
    link: "https://github.com/username/data-viz",
    img: "/images/data-visualization.png",
    name: "COVID-19 Data Dashboard",
    excerpt: `Interactive dashboard visualizing global COVID-19 data with real-time 
      updates, multiple chart types, and exportable reports.`,
    tools: "React · D3.js · Python · FastAPI"
  },
];

/**
 * TIPS FOR ADDING YOUR PROJECTS:
 * 
 * 1. IMAGES:
 *    - Place images in public/images/
 *    - Use descriptive names: "project-name.png"
 *    - Recommended size: 1200x630px
 *    - Formats: PNG, JPG, or SVG
 * 
 * 2. LINKS:
 *    - Can be GitHub repos, live demos, or external sites
 *    - Use HTTPS for security
 *    - Ensure links are publicly accessible
 * 
 * 3. DESCRIPTIONS:
 *    - Keep excerpts concise but informative (2-3 sentences)
 *    - Highlight key features or achievements
 *    - Use clear, simple language
 * 
 * 4. TOOLS:
 *    - Separate with " · " (space-dot-space)
 *    - List most important/relevant tools first
 *    - Use official capitalization (React, not react)
 * 
 * 5. ORDER:
 *    - Put your best/most recent projects first
 *    - Projects appear in the order listed here
 */
