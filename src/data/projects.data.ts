import { Project } from '../types';

/**
 * PROJECTS DATA
 * =============
 * 
 * Add your projects here. Each project should include:
 * - link: URL to the project (GitHub, live site, etc.)
 * - img: Path to project image (place images in /public/images/)
 * - name: Project title
 * - excerpt: Project description
 * - tools: Technologies used (separate with · character)
 * 
 * EXAMPLE:
 * {
 *   link: "https://github.com/username/project",
 *   img: "/images/project-name.png",
 *   name: "Project Name",
 *   excerpt: "A description of what your project does and why it's cool",
 *   tools: "React · TypeScript · CSS"
 * }
 */

export const PROJECTS: Project[] = [
  {
    link: "/",
    img: "/images/gfolio.png",
    name: "Gfolio (this website)",
    excerpt: `A personal website simulating the Google Search platform. Developed with
      React and Next.js`,
    tools: "React · Next.js · CSS"
  },
  {
    link: "https://enjeck.com/",
    img: "/images/enjeckblog.png",
    name: "Personal Website",
    excerpt: `My personal website, designed and developed from scratch. It
      features a lot of hover effects, custom styling and a blog.`,
    tools: "Next.js · CSS"
  },
  {
    link: "https://enjeck.com/libre-logos/",
    img: "/images/librelogos2.png",
    name: "Libre Logos",
    excerpt: `A project to provide free logos to open source projects.
      Website and logos designed and built by yours truly. 
      The website is responsive and the individual logo pages are 
      programmatically-generated.`,
    tools: "Next.js · CSS"
  },
  {
    link: "https://github.com/enjeck/jpg2svg",
    img: "/images/jpg2svg.png",
    name: "jpg2svg",
    excerpt: `A program to convert JPG/JPEG images into SVG. It comes with a web interface where 
      you can upload an image, have it converted to SVG in the server, and you can 
      download the converted SVG file if you want.`,
    tools: "JavaScript · Python"
  },
  {
    link: "https://enjeck.com/Blobby/",
    img: "/images/blobbies2.png",
    name: "Blobby",
    excerpt: `Generative blob SVG characters using Python. No characters are the same! 
      Each Blobby character has a different body shape. The shape is always unique, 
      and the colors and eyes are randomly applied to each shape.`,
    tools: "JavaScript · Python"
  },
  {
    link: "https://enjeck.com/btns",
    img: "/images/btns2.png",
    name: "btns",
    excerpt: `A collection of buttons with cool hover effects.`,
    tools: "HTML · CSS"
  },
];
