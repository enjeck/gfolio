/**
 * UTILITY FUNCTIONS
 * =================
 * 
 * Helper functions for data filtering and searching
 */

import { ContentItem } from '../types';
import { CONTENT } from '../data/content.data';

/**
 * Filter content by category
 * @param category - The category to filter by (e.g., 'about', 'works', 'writing')
 * @returns Array of content items matching the category
 */
export const filterByCategory = (category: string): ContentItem[] => {
  return CONTENT.filter((item) => item.category === category);
};

/**
 * Search content by query string
 * Searches through name and excerpt fields
 * @param query - Search query string
 * @returns Array of content items matching the query
 */
export const searchContent = (query: string): ContentItem[] => {
  const lowercaseQuery = query.toLowerCase();
  return CONTENT.filter(
    (item) =>
      item.name.toLowerCase().includes(lowercaseQuery) ||
      item.excerpt.toLowerCase().includes(lowercaseQuery)
  );
};

/**
 * Get content by multiple categories
 * @param categories - Array of categories to include
 * @returns Array of content items matching any of the categories
 */
export const filterByCategories = (categories: string[]): ContentItem[] => {
  return CONTENT.filter((item) => categories.includes(item.category));
};

/**
 * Get all unique categories from content
 * @returns Array of unique category strings
 */
export const getAllCategories = (): string[] => {
  const categories = CONTENT.map((item) => item.category);
  return Array.from(new Set(categories));
};
