import tutcode from "../images/tutcode.png";
import enjeck from "../images/enjeck.png";
import ll from "../images/libre-logos.svg";
import gfolio from "../images/gfolio.png";
import jpg2svg from "../images/jpg2svg.png";
import gg from "../images/geo-guess.png";
import blobby from "../images/blobby.png";
import cav from "../images/CryptographyVisualizer.png"
import placeholder from "../images/bg1.png";
export const ProjectsContent = [
  {
    link: "https://github.com/enjeck/TutCode",
    img: tutcode,
    name: "TutCode - site to simultaneously  view tutorials and code",
    excerpt: `A website where people can simultaneously code and watch/read
    tutorials. It's a more convenient way to learn and practice
    how to code (with HTML, CSS and JavaScript) on the same page`,
    tools: "JavaScript · CSS"
  },
  {
    link: `${window.location.origin}`,
    img: gfolio,
    name: "Gfolio (this website)",
    excerpt: `A personal website simulating the Google Search platform. Developed with
    HTML, CSSS and React`,
    tools: "React · CSS"
  },
  {
    link: "https://enjeck.com/",
    img: enjeck,
    name: "Personal Website",
    excerpt: `My personal website, designed and developed from scratch. It
    features a lot of hover effects, custom styling and a blog.`,
    tools: "Gatsby · CSS"
  },
  {
    link: "https://github.com/enjeck/libre-logos",
    img: ll,
    name: "Libre Logos",
    excerpt: `A project to provide free logos to open source projects.
    Website and logos designed and built by yours truly. 
    The website is responsive and the individual logo pages are 
    programmatically-generated.`,
    tools: "Gatsby · CSS"
  },
  {
    link: "https://github.com/enjeck/jpg2svg",
    img: jpg2svg,
    name: "jpg2svg",
    excerpt: `An program to convert JPG/JPEG images into SVG. It comes with a web interface where 
    you can upload an image, have it converted to SVG in the server, and you can 
    download the converted SVG file if you want.`,
    tools: "JavaScript · Python"
  },
  {
    link: "https://github.com/enjeck/CrazyPassword",
    img: placeholder,
    name: "Crazy Password",
    excerpt: `A password validation game with ridiculous requirements. 
    Using Django for this project was overkill, but I really wanted to 
     play around with regular expressions in Python`,
    tools: "Python"
  },
  {
    link: "https://github.com/enjeck/Geo-Guess",
    img: gg,
    name: "Geo Guess",
    excerpt: `A distance guessing game. You are shown random cities around the world,
    and you have to guess how far you are from the random city. The better your
    guesss, the higher your score.`,
    tools: "JavaScript · Python"
  },
  {
    link: "https://github.com/enjeck/Blobby",
    img: blobby,
    name: "Blobby",
    excerpt: `Generative blob SVG characters using Python. No characters are the same! 
    Each Blobby character has a different body shape. The shape is always unique, 
    and the colors and eyes are randomly applied to each shape.`,
    tools: "JavaScript · Python"
  },
  {
    link: "https://github.com/enjeck/Google-Sheet-to-website",
    img: placeholder,
    name: "Google Sheet to Website",
    excerpt: `An experiment with building a website directly from Google Sheets. You edit a spreadsheet,
    enter a link to the spreadsheet, and your changes are reflected on the website. `,
    tools: "JavaScript · PHP"
  },
  {
    link: "https://github.com/enjeck/CryptoAlgoVisualizer",
    img: cav,
    name: "Crypto Algorithm Visualizer",
    excerpt: `Visualizations of various cryptography algorithms. 
    Currently has Caesar's Cipher and Mono Alphabetic Cipher.`,
    tools: "JavaScript · CSS"
  },
  {
    link: "https://github.com/enjeck/btns",
    img: placeholder,
    name: "btns",
    excerpt: `A collection of buttons with cool hover effects.`,
    tools: "JavaScript · CSS"
  }
];
