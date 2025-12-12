import { BlogPost } from '../types';

/**
 * BLOG POSTS DATA
 * ===============
 * 
 * Add your blog posts here. Each post should include:
 * - link: URL to the blog post
 * - img: Path to featured image (place images in /public/images/)
 * - icon: Path to category icon
 * - name: Post title
 * - excerpt: Post summary/description
 * - category: Post category (e.g., "JavaScript", "Design")
 * - date: Relative date string (e.g., "2 days ago")
 * 
 * EXAMPLE:
 * {
 *   link: "https://yourblog.com/post-title",
 *   img: "/images/post-featured.jpg",
 *   icon: "/images/category-icon.png",
 *   name: "Your Blog Post Title",
 *   excerpt: "A brief summary of what the post is about",
 *   category: "JavaScript",
 *   date: "1 week ago"
 * }
 */

export const BLOG_POSTS: BlogPost[] = [
  {
    link: "https://enjeck.com/blog",
    img: "/images/svg-advantages-and-disadvantages.jpg",
    icon: "/images/js-icon.png",
    name: "Advantages and disadvantages of SVG",
    excerpt: `Created in 1999, SVG has grown to become the most popular vector 
      image format for the web. This article will cover the advantages and disadvantages 
      of SVG (Scalable Vector Graphics) as a format for displaying images on the web.`,
    category: "JavaScript",
    date: "15 hours ago"
  },
  {
    link: "https://enjeck.com/blog",
    img: "/images/distance-two-locations.jpg",
    icon: "/images/js-icon.png",
    name: "How to calculate the distance between two locations using JavaScript",
    excerpt: `The most popular way of calculating the distance between two points on a 
      sphere is using the Haversine equation. 
      If you have the coordinates (that is; longitude and latitude) of the starting and 
      destination locations, you can use this equation to calculate it.`,
    category: "JavaScript",
    date: "2 days ago"
  },
  {
    link: "https://enjeck.com/blog",
    img: "/images/geolocation-api.jpg",
    icon: "/images/js-icon.png",
    name: "Getting user location with the Geolocation API",
    excerpt: `Knowing a user's location can be a very important feature of a web app. 
      You can use the location information to personalise the user experience,
      give users directions, suggest friends or events in a person's locality, or to
      power a particular feature.`,
    category: "JavaScript",
    date: "1 day ago"
  },
];
