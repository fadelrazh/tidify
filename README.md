# 🏠 Tidify - Modern Accommodation Platform

A beautiful, modern accommodation booking platform built to showcase **FDS (Fadel Design System)** - a custom design system built from scratch with TypeScript, CSS Modules, and React.

## ✨ Features

- 🎨 **Custom Design System (FDS)** - Built from scratch, zero external CSS frameworks
- ☀️ **Light Theme Optimized** - Bright and welcoming design for travel experiences
- 📱 **Fully Responsive** - Mobile-first design principles
- ⚡ **Next.js 15** - Server-side rendering and static generation
- 🔤 **TypeScript** - Full type safety throughout the application
- 🧩 **Modular Components** - Reusable, composable UI components
- 🚀 **Performance Optimized** - Modern React patterns and best practices

## 🎯 Why FDS?

This project demonstrates a **completely custom design system** built without any external CSS frameworks like Tailwind, Material-UI, or Bootstrap. The goal is to showcase:

- **Design Token Architecture** - Scalable design tokens for colors, typography, spacing
- **Component Library** - Professional, accessible React components
- **CSS Modules** - Scoped styling with zero runtime overhead
- **TypeScript Integration** - Type-safe component APIs and props
- **Undetectable Framework** - No CSS framework fingerprints (Wappalyzer-proof!)

## 🏗️ Project Structure

```
tidify/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles with design tokens
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Homepage
│   ├── fds/                    # Fadel Design System
│   │   ├── components/         # UI Components
│   │   │   ├── Button/         # Button component
│   │   │   ├── Card/           # Card component
│   │   │   ├── Layout/         # Layout component
│   │   │   └── ...
│   │   ├── tokens/             # Design tokens
│   │   ├── utils/              # Utility functions
│   │   ├── hooks/              # Custom React hooks
│   │   ├── types.ts            # TypeScript definitions
│   │   └── index.ts            # Main export file
│   └── ...
├── package.json
└── README.md
```

## 🎨 FDS Components

### Button

```tsx
import { Button } from "@/fds";

<Button variant="primary" size="lg">
  Primary Button
</Button>;
```

### Card

```tsx
import { Card } from "@/fds";

<Card interactive padding="md">
  <Card.Image src="..." alt="..." />
  <Card.Body>
    <h3>Card Title</h3>
    <p>Card content...</p>
  </Card.Body>
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card>;
```

### Layout

```tsx
import { Layout } from "@/fds";

<Layout maxWidth="xl" padding>
  {/* Your content */}
</Layout>;
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/tidify.git
cd tidify
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Built With

- **[Next.js 15](https://nextjs.org/)** - React framework with SSR/SSG
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and developer experience
- **[CSS Modules](https://github.com/css-modules/css-modules)** - Scoped CSS styling
- **[React 18](https://reactjs.org/)** - Modern React with hooks and concurrent features

## 🎯 Design System Philosophy

FDS follows these principles:

1. **Design Tokens First** - All visual properties derived from tokens
2. **Component Composition** - Flexible, composable component APIs
3. **Accessibility** - WCAG 2.1 AA compliance built-in
4. **Performance** - Zero runtime CSS, optimal bundle size
5. **Developer Experience** - Comprehensive TypeScript support

## 📚 Design Tokens

FDS uses a systematic approach to design tokens:

```css
/* Colors */
--color-primary-500: #0ea5e9;
--color-neutral-100: #f5f5f5;

/* Typography */
--font-size-lg: 1.125rem;
--font-weight-semibold: 600;

/* Spacing */
--spacing-4: 1rem;
--spacing-8: 2rem;

/* Border Radius */
--radius-md: 0.375rem;
--radius-lg: 0.5rem;
```

## ☀️ Light Theme Design

FDS uses a bright, welcoming light theme optimized for travel platforms:

```css
:root {
  --color-background: #ffffff;
  --color-text-primary: #171717;
  --color-primary-500: #2563eb;
  --color-accent-500: #facc15;
}
```

## 🧪 Testing the Design System

You can verify that no external CSS frameworks are detected by using browser tools like:

- **Wappalyzer** browser extension
- **BuiltWith** website analyzer
- Browser DevTools inspection

The website should show zero framework dependencies in styling! 🎉

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About

Created by **Fadel** as a portfolio project to demonstrate:

- Custom design system development
- Modern React/Next.js patterns
- TypeScript expertise
- CSS architecture skills
- Component library design

---

**Note**: This is a portfolio project showcasing frontend development skills. The accommodation listings are demo data for design system demonstration purposes.
