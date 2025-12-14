# Customization Quick Start Guide

This guide will help you quickly customize your Gfolio portfolio. Follow these steps in order!

## 📋 Checklist

- [ ] Update personal information
- [ ] Add your skills
- [ ] Add social links
- [ ] Add your projects
- [ ] Add blog posts (if you have any)
- [ ] Add your images
- [ ] Update site metadata
- [ ] Test locally
- [ ] Deploy!

## 🚀 5-Minute Setup

### Step 1: Personal Info (2 minutes)

Open `src/config/portfolio.config.ts` and update:

```typescript
export const PERSONAL_INFO = {
  name: "Your Name Here",           // ← Change this
  title: "Your Title Here",         // ← Change this
  bio: `Your bio here...`,          // ← Change this
  location: "Your Location",        // ← Change this
  email: "your@email.com",          // ← Change this (optional)
  website: "https://yoursite.com",  // ← Change this (optional)
};
```

### Step 2: Skills (1 minute)

In the same file:

```typescript
export const SKILLS = {
  technical: [
    "HTML",      // ← Replace with your skills
    "CSS",
    "JavaScript",
    // Add more...
  ],
  interests: [
    "UI Design",  // ← Replace with your interests
    "Writing",
    // Add more...
  ],
};
```

### Step 3: Social Links (1 minute)

Still in `portfolio.config.ts`:

```typescript
export const SOCIAL_LINKS = [
  {
    platform: "GitHub",
    url: "https://github.com/YOUR-USERNAME",  // ← Change this
    icon: "/images/github-icon.png",
    label: "GitHub - My projects",
  },
  // Add more social links...
];
```

### Step 4: Projects (Variable time)

Open `src/data/projects.data.ts`:

```typescript
export const PROJECTS = [
  {
    link: "https://github.com/you/project",    // ← Your project link
    img: "/images/project-screenshot.png",     // ← Your project image
    name: "Project Name",                      // ← Your project name
    excerpt: "Project description...",         // ← What it does
    tools: "React · TypeScript · CSS"          // ← Tech used
  },
  // Add more projects...
];
```

### Step 5: Blog Posts (Optional)

Open `src/data/blog.data.ts`:

```typescript
export const BLOG_POSTS = [
  {
    link: "https://yourblog.com/post",
    img: "/images/blog/post-image.jpg",
    icon: "/images/icons/category-icon.png",
    name: "Blog Post Title",
    excerpt: "What the post is about...",
    category: "JavaScript",
    date: "2 days ago"
  },
  // Add more posts...
];
```

## 📸 Adding Images

1. Place your images in `public/images/`
2. Reference them as `/images/filename.png` (with leading slash!)
3. Recommended sizes:
   - Project screenshots: 1200x630px
   - Blog featured images: 1200x630px
   - Icons: 48x48px or 64x64px

## ✅ Test Your Changes

```bash
# Start the dev server
npm run dev

# Open http://localhost:3000
# Check each page:
# - Home page (/)
# - About (/about)
# - Projects (/projects)
# - Blog (/blog)
# - Images (/images)
```

## 🎨 Common Customizations

### Change Colors

Edit CSS files in `src/styles/globals.css`:

```css
:root {
  --primary-color: #4285f4;  /* Blue (Google style) */
  --text-color: #202124;     /* Dark text */
  /* Change these to your preferred colors */
}
```

### Update Site Title

Edit `src/config/portfolio.config.ts`:

```typescript
export const SITE_METADATA = {
  title: "Your Name - Portfolio",  // ← Browser tab title
  description: "Your description",
  // ...
};
```

### Change Search Options

In `src/config/portfolio.config.ts`:

```typescript
export const SEARCH_OPTIONS = [
  { name: "everything", value: "all" },
  { name: "about", value: "about" },
  // Customize these if needed...
];
```
