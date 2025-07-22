# 🛠️ Technical Setup Guide

This guide covers the technical setup for developers working with this barbershop template.

## 📋 **Prerequisites**

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## 🚀 **Quick Start**

```bash
# Clone the repository
git clone https://github.com/[your-username]/modern-barbershop-template.git

# Navigate to project directory
cd modern-barbershop-template

# Install dependencies
npm install

# Start development server
npm run dev

# Open your browser to http://localhost:3000
```

## 📁 **Project Structure**
```
src/
├── components/
│   ├── BarbershopLanding.tsx    # Main landing page component
│   ├── HeroSection.tsx          # Hero section with image carousel
│   ├── ServicesSection.tsx      # Services showcase with pricing
│   ├── BookingModal.tsx         # Interactive booking system
│   ├── AboutSection.tsx         # About the business section
│   ├── TestimonialsSection.tsx  # Customer reviews section
│   ├── ContactSection.tsx       # Contact information
│   ├── Navigation.tsx           # Header navigation
│   └── Footer.tsx               # Footer section
├── App.tsx                      # Main app component
├── main.tsx                     # Entry point
└── index.css                    # Global styles with Tailwind
```

## ⚡ **Available Scripts**

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint for code quality
```

## 🎨 **Customization Guide**

### **Colors & Branding**
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'gold': '#your-brand-color',    // Replace with client's brand color
      'dark': '#your-dark-color',     // Custom dark theme
    }
  },
}
```

### **Content Updates**
1. **Services**: Edit the `services` array in `src/components/BarbershopLanding.tsx`
2. **Business Info**: Update content in each component file
3. **Images**: Replace placeholder images with client's photos
4. **Contact**: Update contact information in `ContactSection.tsx`

### **Typography**
The template uses Inter font. To change:
1. Update Google Fonts link in `index.html`
2. Modify font family in `tailwind.config.js`

## 🔧 **Technical Stack Details**

### **Core Technologies**
- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

### **Key Features**
- **Hot Module Replacement** - Instant updates during development
- **TypeScript Support** - Full type checking
- **ESLint Configuration** - Code quality enforcement
- **Responsive Design** - Mobile-first approach
- **Modern CSS** - CSS Grid, Flexbox, custom properties

## 📱 **Responsive Breakpoints**

```css
/* Mobile First Approach */
sm: 640px   # Small devices (landscape phones)
md: 768px   # Medium devices (tablets)
lg: 1024px  # Large devices (desktops)
xl: 1280px  # Extra large devices
2xl: 1536px # 2X Extra large devices
```

## 🚀 **Deployment Options**

### **GitHub Pages**
```bash
npm run build
# Deploy dist/ folder to GitHub Pages
```

### **Vercel** (Recommended)
```bash
npm i -g vercel
vercel --prod
```

### **Netlify**
```bash
npm run build
# Drag and drop dist/ folder to Netlify
```

## 🔍 **SEO Optimization**

### **Meta Tags**
Update in `index.html`:
```html
<title>Your Business Name - Location</title>
<meta name="description" content="Your business description">
```

### **Performance Tips**
- Images are optimized with placeholder service
- Lazy loading implemented where appropriate
- Minimal JavaScript bundle size
- CSS is purged in production build

## 🐛 **Troubleshooting**

### **Common Issues**

**Port 3000 already in use:**
```bash
# Kill process on port 3000
npx kill-port 3000
# Or specify different port
npm run dev -- --port 3001
```

**Node modules issues:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors:**
```bash
# Check TypeScript compilation
npx tsc --noEmit
```

## 🔧 **Development Tips**

1. **Component Structure**: Each section is a separate component for easy customization
2. **State Management**: Uses React hooks for local state (booking modal, image carousel)
3. **Styling**: Tailwind utility classes for rapid development
4. **Type Safety**: Full TypeScript coverage for better maintainability

## 📦 **Building for Production**

```bash
# Create optimized production build
npm run build

# Test production build locally
npm run preview
```

The build will be output to the `dist/` directory, ready for deployment.

---

**Need help with setup?** Contact our development team for technical support. 