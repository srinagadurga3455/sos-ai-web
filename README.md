# LifeLink - UX Case Study Website

A single-page portfolio case study showcasing **LifeLink**, an AI-powered healthcare and emergency-assistance mobile app. Built with React, Vite, and Tailwind CSS.

## 🎨 Design Philosophy

Matches the visual restraint and structure of portfolio case studies like debbierhim.com:
- **Generous whitespace** for breathing room
- **One confident accent color** (teal) for routine actions
- **Large clean headline typography**
- **Full-width image blocks** with phone-frame mockups
- **Short punchy paragraphs** with bolded key phrases
- **No clutter** - minimal, focused content

## 🎯 Color System

- **Coral Red (#E5484D)** - Reserved exclusively for emergency actions (SOS trigger, alerts)
- **Teal (#2F9E8F)** - Routine actions (calling contacts, booking doctors)
- **Warm Off-White (#F3F1EC)** - Background
- **Near-Black (#1A1A1A)** - Text

## 📐 Structure

### Navigation
Simple top bar with "LifeLink" wordmark and Work/About/Contact links, sticky on scroll.

### Hero Section
- Case Study eyebrow label
- Large headline: "Making emergency care effortless when every second counts"
- LifeLink branding with tagline
- Meta information (Role, Tool, Platform)
- Two CTA buttons (View Prototype, Try the App)
- Hero image: phone-frame mockup of SOS Sent screen

### Content Sections
1. **Context** - Problem statement paragraph
2. **Project Overview** - Goals & Solution (two-column layout)
3. **Design Process** - 6-step visual diagram
4. **Understanding the User** - User types and competitive analysis
5. **Pain Points & Solutions** - Side-by-side comparison
6. **Doing the Groundwork** - Screens & flows gallery, usability study
7. **Prototyping the Design** - Feature blocks with alternating image layouts
8. **Style Guide** - Color palette, typography, usage philosophy
9. **Final Thoughts** - Reflection and what's next

### Footer
Contact email, Try the App link, Back to top, copyright

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Responsive Design

- Max content width: 1100px (centered)
- Mobile breakpoint: 375px
- Fully responsive with stack layouts on mobile
- Touch-friendly tap targets

## ✨ Features

- Smooth scroll animations
- Sticky navigation header
- Phone-frame mockup component for app screenshots
- Alternating feature block layouts
- Subtle fade-in animations on scroll
- Fully accessible markup

## 🔗 Customization

### Update Links

Edit `src/components/Hero.jsx` and `src/components/Footer.jsx`:
- Figma prototype link
- Expo/APK download link
- Contact email

### Add Screenshots

Replace placeholder mockups in:
- `src/components/Hero.jsx` (hero image)
- `src/components/FeatureBlock.jsx` (feature screenshots)
- `src/components/InsideTheApp.jsx` (flow screens)

Import actual images:
```jsx
import heroImage from './assets/hero-screenshot.png'
```

## 📦 Tech Stack

- **React 18** - UI library
- **Vite 5** - Build tool
- **Tailwind CSS 3** - Styling
- **Inter Font** - Typography

## 📄 License

All rights reserved © 2026 LifeLink Case Study

## 🎯 Design Credits

Inspired by the clean, portfolio-style case studies at debbierhim.com/work/mobile-app-design-ux
