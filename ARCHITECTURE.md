# Architecture Diagram

Visual representation of the new portfolio architecture.

### Directory Structure

```
gfolio/
│
├── public/                          # Static assets
│   ├── images/                      # All images (projects, blog, icons)
│   ├── 404.html
│   ├── CNAME
│   └── index.html
│
├── src/
│   │
│   ├── components/                  # React components
│   │   ├── accordion.js/css
│   │   ├── allResultsCard.js/css
│   │   ├── boxmenudrop.js/css
│   │   ├── filtermenu.js/css
│   │   ├── footer.js/css
│   │   ├── header.js/css
│   │   ├── layout.js
│   │   ├── logo.js/css
│   │   ├── mobileSearch.js/css
│   │   ├── profilemenudrop.js/css
│   │   ├── searchbox.js/css
│   │   ├── topSearchbox.js/css
│   │   └── all.js                   # Component exports
│   │
│   ├── config/                      # ⭐ EDIT THESE FILES
│   │   ├── portfolio.config.ts      # Main configuration (personal info, skills, social)
│   │   └── index.ts                 # Config exports
│   │
│   ├── constants/                   # App-wide constants
│   │   └── index.ts                 # Routes, categories, breakpoints
│   │
│   ├── data/                        # ⭐ EDIT THESE FILES
│   │   ├── projects.data.ts         # Your projects
│   │   ├── blog.data.ts             # Your blog posts
│   │   ├── images.data.ts           # Auto-generated from projects
│   │   ├── content.data.ts          # Auto-generated for search
│   │   ├── index.ts                 # Data exports
│   │   │
│   │   └── [OLD FILES - Keep as reference]
│   │       ├── content.js
│   │       ├── projectsContent.js
│   │       ├── blogContent.js
│   │       └── imagesContent.js
│   │
│   ├── helpers/                     # Legacy helper functions
│   │   └── searchFilter.js          # Use utils/filters.ts instead
│   │
│   ├── pages/                       # Next.js pages (routes)
│   │   ├── _app.js                  # App wrapper
│   │   ├── index.js                 # Home page (/)
│   │   ├── about.js                 # About page (/about)
│   │   ├── all.js                   # All results (/all)
│   │   ├── blog.js                  # Blog page (/blog)
│   │   ├── images.js                # Images page (/images)
│   │   ├── projects.js              # Projects page (/projects)
│   │   ├── social.js                # Social page (/social)
│   │   ├── works.js                 # Works page (/works)
│   │   ├── writing.js               # Writing page (/writing)
│   │   ├── 404.js                   # 404 page
│   │   └── *.css                    # Page-specific styles
│   │
│   ├── styles/                      # Global styles
│   │   ├── globals.css              # Global CSS
│   │   └── search.css               # Search-specific styles
│   │
│   ├── types/                       # ⭐ TypeScript type definitions
│   │   └── index.ts                 # All type interfaces
│   │
│   └── utils/                       # Utility functions
│       └── filters.ts               # Filter and search utilities
│
├── CONTRIBUTING.md                  # Contribution guidelines
├── MIGRATION.md                     # Migration from old structure
├── QUICKSTART.md                    # Quick setup guide
├── README.md                        # Main documentation
├── EXAMPLE.config.ts                # Example configuration file
├── EXAMPLE.projects.ts              # Example projects file
├── EXAMPLE.blog.ts                  # Example blog posts file
│
├── next.config.js/ts                # Next.js configuration
├── tsconfig.json                    # TypeScript configuration
├── package.json                     # Dependencies and scripts
├── eslint.config.mjs                # ESLint configuration
└── postcss.config.mjs               # PostCSS configuration
```

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        USER INTERFACE                            │
│                      (Browser / Client)                          │
└───────────────────────────┬─────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                         NEXT.JS APP                              │
│                                                                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │     Home     │  │    About     │  │   Projects   │          │
│  │   (index)    │  │   (about)    │  │  (projects)  │  ...     │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘          │
│         │                  │                  │                   │
│         └──────────────────┼──────────────────┘                  │
│                            │                                      │
│                            ▼                                      │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    COMPONENTS                            │   │
│  │  Header | Footer | SearchBox | Cards | Menus | etc.    │   │
│  └────────────────────────┬─────────────────────────────────┘   │
│                            │                                      │
└────────────────────────────┼──────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                      DATA LAYER                                  │
│                                                                   │
│  ┌────────────────────┐        ┌────────────────────┐          │
│  │  UTILS & FILTERS   │        │     CONSTANTS      │          │
│  │  - filterByCategory│        │  - ROUTES          │          │
│  │  - searchContent   │        │  - CATEGORIES      │          │
│  │  - etc.            │        │  - KEY_CODES       │          │
│  └─────────┬──────────┘        └────────────────────┘          │
│            │                                                     │
│            ▼                                                     │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              AGGREGATED DATA (Auto-Generated)            │   │
│  │                                                           │   │
│  │  ┌──────────────────┐      ┌──────────────────┐        │   │
│  │  │  content.data.ts │      │  images.data.ts  │        │   │
│  │  │  (for search)    │      │  (for gallery)   │        │   │
│  │  └─────────┬────────┘      └─────────┬────────┘        │   │
│  │            │                          │                  │   │
│  │            └──────────┬───────────────┘                  │   │
│  │                       │                                  │   │
│  └───────────────────────┼──────────────────────────────────┘   │
│                          │                                       │
│                          ▼                                       │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                  SOURCE DATA                             │   │
│  │                                                           │   │
│  │  ┌──────────────────┐      ┌──────────────────┐        │   │
│  │  │ projects.data.ts │      │  blog.data.ts    │        │   │
│  │  │   (EDIT THIS)    │      │   (EDIT THIS)    │        │   │
│  │  └────────┬─────────┘      └────────┬─────────┘        │   │
│  │           │                          │                   │   │
│  │           └──────────┬───────────────┘                   │   │
│  │                      │                                   │   │
│  └──────────────────────┼───────────────────────────────────┘   │
│                         │                                        │
│                         ▼                                        │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                  CONFIGURATION                           │   │
│  │                                                           │   │
│  │              portfolio.config.ts (EDIT THIS)             │   │
│  │                                                           │   │
│  │  - PERSONAL_INFO    - SITE_METADATA                      │   │
│  │  - SKILLS           - SEARCH_OPTIONS                     │   │
│  │  - SOCIAL_LINKS     - NAVIGATION_SECTIONS               │   │
│  │                                                           │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
                            ▲
                            │
                ┌───────────┴────────────┐
                │                        │
        ┌───────┴────────┐     ┌────────┴─────────┐
        │ TYPE DEFINITIONS│     │   PUBLIC ASSETS  │
        │   (types/)      │     │   (images/)      │
        └─────────────────┘     └──────────────────┘
```

## Type Safety Flow

```
┌──────────────────────────────────────────────────────────────┐
│                   TYPE CHECKING FLOW                          │
└──────────────────────────────────────────────────────────────┘

types/index.ts
    ↓ defines
    ├─→ Project interface
    ├─→ BlogPost interface
    ├─→ ContentItem interface
    ├─→ PersonalInfo interface
    └─→ etc.
        ↓ enforces
    ┌─────────────────────┐
    │   Data Files        │
    ├─────────────────────┤
    │ projects.data.ts    │ ← Must match Project[]
    │ blog.data.ts        │ ← Must match BlogPost[]
    │ portfolio.config.ts │ ← Must match PersonalInfo
    └─────────────────────┘
        ↓ type-safe data flows to
    ┌─────────────────────┐
    │   Components        │
    ├─────────────────────┤
    │ Props are typed     │
    │ State is typed      │
    │ Returns are typed   │
    └─────────────────────┘
        ↓ catches errors at
    ┌─────────────────────┐
    │  Compile Time       │
    ├─────────────────────┤
    │ TypeScript compiler │
    │ ESLint checks       │
    │ IDE warnings        │
    └─────────────────────┘
```