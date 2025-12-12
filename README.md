# Gfolio - Google-style Portfolio Website

A personal portfolio website that mimics the Google Search interface, built with Next.js, React, and TypeScript. This project provides a unique and familiar way to showcase your projects, blog posts, and professional information.

## ✨ Features

- 🔍 **Google-like Search Interface** - Familiar search experience for browsing your content
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Customizable** - Easy-to-edit configuration files for personalizing your portfolio
- 📝 **Multiple Content Types** - Support for projects, blog posts, images, and more
- ⚡ **Fast & Modern** - Built with Next.js for optimal performance
- 🎯 **TypeScript Support** - Type-safe code for better maintainability
- 📦 **Well-Organized** - Clean project structure following best practices

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/gfolio-nextjs.git
   cd gfolio-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization Guide

This portfolio is designed to be easily customizable. Here's how to make it your own:

### 1. Personal Information

Edit `src/config/portfolio.config.ts`:

```typescript
export const PERSONAL_INFO: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio here...",
  location: "Your Location",
  email: "your.email@example.com",
  website: "https://yourwebsite.com",
};
```

### 2. Skills & Interests

Update your skills in the same config file:

```typescript
export const SKILLS: SkillsConfig = {
  technical: ["HTML", "CSS", "JavaScript", "React", "Python"],
  interests: ["Open Source", "UI Design", "Documentation"],
};
```

### 3. Social Links

Add your social media profiles:

```typescript
export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/yourusername",
    icon: "/images/github-icon.png",
    label: "GitHub - Explore my projects",
  },
  // Add more social links...
];
```

### 4. Projects

Add your projects in `src/data/projects.data.ts`:

```typescript
export const PROJECTS: Project[] = [
  {
    link: "https://github.com/yourusername/project",
    img: "/images/project-thumbnail.png",
    name: "Project Name",
    excerpt: "Project description...",
    tools: "React · TypeScript · CSS"
  },
  // Add more projects...
];
```

### 5. Blog Posts

Add blog posts in `src/data/blog.data.ts`:

```typescript
export const BLOG_POSTS: BlogPost[] = [
  {
    link: "https://yourblog.com/post",
    img: "/images/post-featured.jpg",
    icon: "/images/category-icon.png",
    name: "Blog Post Title",
    excerpt: "Post description...",
    category: "JavaScript",
    date: "2 days ago"
  },
  // Add more posts...
];
```

### 6. Images

Place your images in the `public/images/` directory and they'll automatically be available at `/images/your-image.png`.

## 📁 Project Structure

```
gfolio-nextjs/
├── public/              # Static files (images, etc.)
│   └── images/          # Image assets
├── src/
│   ├── components/      # React components
│   ├── config/          # Configuration files
│   │   └── portfolio.config.ts  # Main config - EDIT THIS!
│   ├── constants/       # App-wide constants
│   ├── data/            # Data files
│   │   ├── projects.data.ts     # Your projects - EDIT THIS!
│   │   ├── blog.data.ts         # Your blog posts - EDIT THIS!
│   │   ├── images.data.ts       # Image gallery
│   │   └── content.data.ts      # Auto-generated content
│   ├── helpers/         # Helper functions
│   ├── pages/           # Next.js pages/routes
│   ├── styles/          # CSS stylesheets
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Utility functions
├── package.json
└── README.md
```

## 🛠️ Key Files to Edit

When customizing your portfolio, focus on these files:

1. **`src/config/portfolio.config.ts`** - Personal info, skills, social links
2. **`src/data/projects.data.ts`** - Your projects
3. **`src/data/blog.data.ts`** - Your blog posts
4. **`public/images/`** - Add your images here

The rest of the files handle the functionality and don't typically need editing.

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎯 Content Categories

The portfolio supports these content categories:

- **About** - Personal information and skills
- **Works/Projects** - Your projects and work
- **Writing/Blog** - Blog posts and articles
- **Images** - Image gallery
- **Social** - Social media links

## 🔍 How the Search Works

The search functionality filters content across all categories. Content is automatically aggregated from:

- Personal information (about section)
- Projects (works section)
- Blog posts (writing section)

The search is case-insensitive and searches through titles and descriptions.

## 🎨 Styling

- CSS files are located in `src/styles/` and component-specific CSS files
- The site uses a Google-inspired design language
- Mobile-first responsive design approach
- Custom CSS for each major component

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on:

- Code style and conventions
- How to submit pull requests
- Development workflow
- Testing guidelines

## 📄 TypeScript Support

This project is built with TypeScript for better type safety and developer experience. Key type definitions are in `src/types/index.ts`.

## 🐛 Troubleshooting

### Images not loading
- Ensure images are in `public/images/`
- Use paths like `/images/your-image.png` (with leading slash)
- Check file extensions match exactly

### Content not appearing
- Verify data files export the correct arrays
- Check that imports in pages are correct
- Ensure TypeScript types match your data structure

### Build errors
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors: `npm run lint`
- Clear `.next` folder and rebuild

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

1. Build the project: `npm run build`
2. Deploy the `.next` and `public` folders
3. Ensure Node.js 18+ is available on the server

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 📧 Support

If you need help customizing your portfolio:

1. Check the documentation above
2. Look at the inline comments in config files
3. Open an issue on GitHub
4. Review the [CONTRIBUTING.md](CONTRIBUTING.md) guide

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Original design inspired by Google Search
- Built with Next.js and React
- Icons from various sources

---

**Happy customizing! 🚀**
