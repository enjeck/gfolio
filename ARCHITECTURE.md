# Architecture Diagram

Visual representation of the new portfolio architecture.

## 🏗️ System Architecture

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

## 📊 Data Flow Diagram

```
┌────────────────────────────────────────────────────────────────┐
│                          DATA FLOW                             │
└────────────────────────────────────────────────────────────────┘

1. CONFIGURATION
   └─→ portfolio.config.ts
       ├─→ PERSONAL_INFO (name, bio, etc.)
       ├─→ SKILLS (technical, interests)
       ├─→ SOCIAL_LINKS (GitHub, LinkedIn, etc.)
       └─→ SITE_METADATA (SEO data)
            │
            ▼
2. SOURCE DATA
   ├─→ projects.data.ts ──→ PROJECTS[]
   │   └─→ Uses: PERSONAL_INFO for defaults
   │
   └─→ blog.data.ts ──→ BLOG_POSTS[]
            │
            ▼
3. DERIVED DATA (Auto-Generated)
   ├─→ images.data.ts ──→ IMAGES[]
   │   └─→ Built from: PROJECTS + SOCIAL_LINKS
   │
   └─→ content.data.ts ──→ CONTENT[]
       └─→ Built from: PROJECTS + BLOG_POSTS + PERSONAL_INFO + SKILLS
            │
            ▼
4. UTILITIES & FILTERS
   └─→ filters.ts
       ├─→ filterByCategory(category)
       ├─→ searchContent(query)
       └─→ filterByCategories(categories[])
            │
            ▼
5. COMPONENTS
   └─→ Use filtered/processed data
       ├─→ AllResultsCard
       ├─→ ProjectCard
       ├─→ BlogCard
       └─→ ImageGallery
            │
            ▼
6. PAGES
   └─→ Compose components
       ├─→ /about
       ├─→ /projects
       ├─→ /blog
       └─→ /images
```

## 🔄 Component Interaction

```
┌──────────────────────────────────────────────────────────────┐
│                        PAGE LEVEL                             │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│  index.js (Home)                                              │
│  ├─→ Logo                                                     │
│  ├─→ SearchBox ──→ search input & dropdown                   │
│  ├─→ BoxMenuDrop                                              │
│  └─→ ProfileMenuDrop                                          │
│                                                               │
│  about.js                                                     │
│  ├─→ Header ──→ SearchBox (top)                              │
│  ├─→ FilterMenu ──→ navigation tabs                          │
│  ├─→ AllResultsCard ──→ displays filtered CONTENT            │
│  └─→ Footer                                                   │
│                                                               │
│  projects.js                                                  │
│  ├─→ Header                                                   │
│  ├─→ FilterMenu                                               │
│  ├─→ ProjectCard (repeated) ──→ displays PROJECTS            │
│  └─→ Footer                                                   │
│                                                               │
│  blog.js                                                      │
│  ├─→ Header                                                   │
│  ├─→ FilterMenu                                               │
│  ├─→ BlogCard (repeated) ──→ displays BLOG_POSTS             │
│  └─→ Footer                                                   │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

## 🎨 Styling Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                      STYLING LAYERS                           │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│  Layer 1: Global Styles (styles/globals.css)                 │
│  ├─→ CSS Reset                                                │
│  ├─→ Typography                                               │
│  ├─→ Colors & Variables                                       │
│  └─→ Base element styles                                      │
│                                                               │
│  Layer 2: Layout Styles (styles/search.css)                  │
│  ├─→ Page layouts                                             │
│  ├─→ Grid systems                                             │
│  └─→ Responsive breakpoints                                   │
│                                                               │
│  Layer 3: Component Styles (components/*.css)                │
│  ├─→ header.css                                               │
│  ├─→ footer.css                                               │
│  ├─→ searchbox.css                                            │
│  ├─→ allResultsCard.css                                       │
│  └─→ ... (each component has its own CSS)                    │
│                                                               │
│  Layer 4: Page-Specific Styles (pages/*.css)                 │
│  ├─→ projectsPage.css                                         │
│  ├─→ blogPage.css                                             │
│  ├─→ imagesPage.css                                           │
│  └─→ notFound.css                                             │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

## 🔍 Search Flow

```
┌──────────────────────────────────────────────────────────────┐
│                       SEARCH PROCESS                          │
└──────────────────────────────────────────────────────────────┘

User Input
    │
    ├─→ Home Page Search
    │   ├─→ SearchBox component
    │   ├─→ Enter keyword or select category
    │   └─→ Navigate to: /about, /projects, /writing, etc.
    │
    ├─→ Top Search (on other pages)
    │   ├─→ TopSearchBox component
    │   ├─→ Filter current page content
    │   └─→ Real-time filtering
    │
    └─→ Filter Menu
        ├─→ FilterMenu component
        ├─→ Tab navigation
        └─→ Switch between: All | Images | Videos | News | etc.
            │
            ▼
        Data Processing
            │
            ├─→ filterByCategory(category)
            │   └─→ Returns matching CONTENT items
            │
            ├─→ searchContent(query)
            │   └─→ Returns items matching query string
            │
            └─→ Display Results
                ├─→ AllResultsCard (for text results)
                ├─→ ProjectCard (for projects)
                ├─→ BlogCard (for blog posts)
                └─→ ImageGallery (for images)
```

## 📦 Import Structure

```
┌──────────────────────────────────────────────────────────────┐
│                     IMPORT HIERARCHY                          │
└──────────────────────────────────────────────────────────────┘

Pages/Components
    ↓
Import from Index Files (Barrel Exports)
    ├─→ import { PROJECTS } from '@/data'
    ├─→ import { PERSONAL_INFO } from '@/config'
    ├─→ import { Project } from '@/types'
    └─→ import { filterByCategory } from '@/utils/filters'
        ↓
Index Files Re-export
    ├─→ data/index.ts
    │   └─→ exports from *.data.ts files
    ├─→ config/index.ts
    │   └─→ exports from portfolio.config.ts
    └─→ types/index.ts
        └─→ exports all interfaces
            ↓
Source Files
    ├─→ projects.data.ts
    ├─→ blog.data.ts
    ├─→ portfolio.config.ts
    └─→ Type definitions
```

## 🎯 File Dependency Graph

```
portfolio.config.ts (Config)
    ↓
    ├─→ projects.data.ts (Uses config for defaults)
    │   └─→ images.data.ts (Derived from projects)
    │
    └─→ blog.data.ts (Independent)
        │
        └─→ content.data.ts (Aggregates all data)
            │
            └─→ filters.ts (Operates on content)
                │
                └─→ Components (Use filtered data)
                    │
                    └─→ Pages (Compose components)
```

## 🔒 Type Safety Flow

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

---

## 📝 Summary

The architecture follows these key principles:

1. **Unidirectional Data Flow**: Config → Data → Components → Pages
2. **Separation of Concerns**: Data, logic, and presentation are separate
3. **Type Safety**: Everything is typed from source to UI
4. **Single Source of Truth**: Config is the canonical source
5. **Derived Data**: Secondary data auto-generated from primary
6. **Layered Architecture**: Clear boundaries between layers
7. **Dependency Injection**: Components receive data via props

This makes the codebase:
- ✅ Easy to understand
- ✅ Easy to modify
- ✅ Easy to test
- ✅ Easy to scale
- ✅ Hard to break
