# Mobile Version - Causa Efeito

## Overview

A completely new mobile version of the Causa Efeito website has been created with a different structure and user experience optimized for mobile devices.

## Key Features

### ✅ Mobile-First Design
- Responsive design optimized for mobile screens
- Touch-friendly interface with proper spacing
- Mobile-specific navigation patterns

### ✅ Standard Scrolling
- Removed snap-scroll functionality
- Smooth, natural scrolling experience
- Standard mobile scroll behavior

### ✅ New Structure
- Vertical, single-column layout
- Sectioned content (Hero, About, Services, Projects, Team, Contact)
- Mobile-optimized navigation menu

### ✅ Same Brand Elements
- **Colors**: `#F2EDE7` (beige), `#413C36` (dark brown), `#A69E93` (brownish-gray), white
- **Fonts**: Josefin Sans (primary), Kinta (decorative)
- **Images**: All existing images maintained and optimized for mobile

## Technical Implementation

### Automatic Device Detection
- App.jsx automatically detects screen size (< 768px = mobile)
- Serves appropriate version based on device
- Dynamic switching on resize

### Mobile Components
Located in `src/components/mobile/`:
- `MobileHeader.jsx` - Fixed header with hamburger menu
- `MobileHero.jsx` - Hero section with brand messaging
- `MobileAbout.jsx` - About section with animations
- `MobileServices.jsx` - Services showcase
- `MobileProjects.jsx` - Project portfolio grid
- `MobileTeam.jsx` - Team presentation
- `MobileContact.jsx` - Contact form and information
- `MobileFooter.jsx` - Footer with links and contact info

### Mobile Pages
- `MobileHomepage.jsx` - Main mobile homepage
- `MobileLivingCollection.jsx` - Mobile-optimized Living Collection with product modals
- `MobileProjectTemplate.jsx` - Individual project pages with galleries and details

### Features
- **Smooth animations** using Framer Motion
- **Intersection Observer** for scroll-triggered animations
- **Touch-friendly interactions**
- **Product modals** with detailed information in Living Collection
- **Image galleries** with touch navigation in project pages
- **Category filtering** in Living Collection
- **Newsletter subscription** forms
- **Optimized images** for mobile loading
- **Accessible navigation** with proper ARIA labels

## User Experience

### Navigation
- Fixed header with brand logo
- Hamburger menu with full-screen overlay
- Smooth scroll to sections
- Language toggle (PT/EN)

### Content Flow
1. **Hero** - Brand introduction with call-to-action
2. **About** - Studio information and values
3. **Services** - Service offerings with visuals
4. **Projects** - Portfolio grid with project navigation
5. **Team** - Team member presentations
6. **Contact** - Contact form and information

### Project Pages
- **Dynamic content** based on project ID
- **Image galleries** with touch navigation
- **Project details** (location, type, year, area)
- **Technical specifications**
- **Client information**
- **Newsletter subscription**
- **Related projects** suggestions

### Living Collection
- **Category filtering** (All, Furniture, Lighting, Textiles)
- **Product grid** with detailed cards
- **Product modals** with specifications
- **Material and dimension details**
- **Direct contact integration**

### Interactions
- Smooth scroll between sections
- Animated content on scroll
- Touch-optimized buttons and forms
- Responsive image galleries

## Performance
- Optimized for mobile data usage
- Efficient loading with lazy loading capabilities
- Minimal JavaScript for faster load times
- Compressed assets and optimized images

## Browser Support
- iOS Safari 12+
- Chrome Mobile 80+
- Firefox Mobile 68+
- Samsung Internet 10+

## Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Testing
Test the mobile version by:
1. Resizing browser window to < 768px width
2. Using browser dev tools mobile simulation
3. Accessing on actual mobile devices
