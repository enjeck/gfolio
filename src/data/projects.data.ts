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
    link: "https://github.com/enjeck/TutCode",
    img: "/images/tutcode.png",
    name: "TutCode - site to simultaneously view tutorials and code",
    excerpt: `A website where people can simultaneously code and watch/read
      tutorials. It's a more convenient way to learn and practice
      how to code (with HTML, CSS and JavaScript) on the same page`,
    tools: "JavaScript · CSS"
  },
  {
    link: "/",
    img: "/images/gfolio.png",
    name: "Gfolio (this website)",
    excerpt: `A personal website simulating the Google Search platform. Developed with
      HTML, CSS and React`,
    tools: "React · CSS"
  },
  {
    link: "https://enjeck.com/",
    img: "/images/enjeck.png",
    name: "Personal Website",
    excerpt: `My personal website, designed and developed from scratch. It
      features a lot of hover effects, custom styling and a blog.`,
    tools: "Gatsby · CSS"
  },
  {
    link: "https://github.com/enjeck/libre-logos",
    img: "/images/libre-logos.svg",
    name: "Libre Logos",
    excerpt: `A project to provide free logos to open source projects.
      Website and logos designed and built by yours truly. 
      The website is responsive and the individual logo pages are 
      programmatically-generated.`,
    tools: "Gatsby · CSS"
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
    link: "https://github.com/enjeck/CrazyPassword",
    img: "/images/bg1.png",
    name: "Crazy Password",
    excerpt: `A password validation game with ridiculous requirements. 
      Using Django for this project was overkill, but I really wanted to 
      play around with regular expressions in Python`,
    tools: "Python · Django"
  },
  {
    link: "https://github.com/enjeck/Geo-Guess",
    img: "/images/geo-guess.png",
    name: "Geo Guess",
    excerpt: `A distance guessing game. You are shown random cities around the world,
      and you have to guess how far you are from the random city. The better your
      guess, the higher your score.`,
    tools: "JavaScript · Python"
  },
  {
    link: "https://github.com/enjeck/Blobby",
    img: "/images/blobby.png",
    name: "Blobby",
    excerpt: `Generative blob SVG characters using Python. No characters are the same! 
      Each Blobby character has a different body shape. The shape is always unique, 
      and the colors and eyes are randomly applied to each shape.`,
    tools: "JavaScript · Python"
  },
  {
    link: "https://github.com/enjeck/Google-Sheet-to-website",
    img: "/images/bg1.png",
    name: "Google Sheet to Website",
    excerpt: `An experiment with building a website directly from Google Sheets. You edit a spreadsheet,
      enter a link to the spreadsheet, and your changes are reflected on the website.`,
    tools: "JavaScript · PHP"
  },
  {
    link: "https://github.com/enjeck/CryptoAlgoVisualizer",
    img: "/images/CryptographyVisualizer.png",
    name: "Crypto Algorithm Visualizer",
    excerpt: `Visualizations of various cryptography algorithms. 
      Currently has Caesar's Cipher and Mono Alphabetic Cipher.`,
    tools: "JavaScript · CSS"
  },
  {
    link: "https://github.com/enjeck/btns",
    img: "/images/bg1.png",
    name: "btns",
    excerpt: `A collection of buttons with cool hover effects.`,
    tools: "HTML · CSS"
  },
];
