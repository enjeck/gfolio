/**
 * CONSTANTS
 * =========
 * 
 * Application-wide constants and configuration values
 */

/**
 * Route paths for navigation
 */
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  WORKS: '/works',
  BLOG: '/blog',
  WRITING: '/writing',
  IMAGES: '/images',
  SOCIAL: '/social',
  ALL: '/all',
} as const;

/**
 * Category identifiers
 * Used for filtering and organizing content
 */
export const CATEGORIES = {
  ABOUT: 'about',
  WORKS: 'works',
  WRITING: 'writing',
  PROJECTS: 'projects',
  BLOG: 'blog',
  SOCIAL: 'social',
} as const;

/**
 * Default placeholder image
 * Used when no specific image is provided
 */
export const DEFAULT_PLACEHOLDER = '/images/bg1.png';

/**
 * Result count message template
 * Used for displaying search results count
 */
export const RESULT_COUNT_TEMPLATE = (count: number, time: number) =>
  `About ${count} results (${time.toFixed(2)} seconds)`;

/**
 * Keyboard key codes
 */
export const KEY_CODES = {
  ENTER: 13,
  ESCAPE: 27,
  SPACE: 32,
  ARROW_UP: 38,
  ARROW_DOWN: 40,
} as const;

/**
 * Breakpoints for responsive design
 */
export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1280,
} as const;
