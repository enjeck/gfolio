import { ImageItem } from '../types';
import { PROJECTS } from './projects.data';
import { SOCIAL_LINKS } from '../config/portfolio.config';

/**
 * IMAGES DATA
 * ===========
 * 
 * This file combines images from projects and social links for the images gallery.
 * You can also add custom images here.
 * 
 * Each image should include:
 * - link: URL associated with the image
 * - img: Path to image file (place images in /public/images/)
 * - name: Image title/alt text
 * 
 * By default, this pulls images from your projects. You can add additional
 * custom images below.
 */

// Automatically generate image items from projects
const projectImages: ImageItem[] = PROJECTS.map(project => ({
  link: project.link,
  img: project.img,
  name: project.name,
}));

// Automatically generate image items from social links (those with icons)
const socialImages: ImageItem[] = SOCIAL_LINKS
  .filter(social => social.icon)
  .map(social => ({
    link: social.url,
    img: social.icon!,
    name: social.label || social.platform,
  }));

// Add any custom images here
const customImages: ImageItem[] = [
  // Example:
  // {
  //   link: "https://example.com",
  //   img: "/images/custom-image.png",
  //   name: "Custom Image Description",
  // }
];

// Combine all images
export const IMAGES: ImageItem[] = [
  ...projectImages,
  ...socialImages,
  ...customImages,
];
