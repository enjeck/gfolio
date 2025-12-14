/**
 * Calculate the relative time from a given date to now.
 * @param {string} dateString - The date string to calculate from.
 * @returns {string} - The relative time string (e.g. "3 years ago", "5 days ago").
 */
export function getRelativeTime(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 365) {
        return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    }
    const years = Math.floor(diffDays / 365);
    return `${years} year${years > 1 ? 's' : ''} ago`;
}
