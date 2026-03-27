# Kocúr Mikeš - Landing Page

> A beautiful retro-style landing page for the classic Slovak fairy tale "Kocúr Mikeš" inspired by Josef Lada's illustrations.

## 🎨 Design Features

- **Retro 60s/70s Josef Lada Style**: Handcrafted SVG cat illustration with period-appropriate typography
- **Color Palette**: 
  - Lime Green (#7cb342) - Primary accent
  - Black (#1a1a1a) - Text and contrast
  - White (#fff) - Background
  - Red (#e53935) - Accent (cat's scarf)
  
- **Layout**: Hero section, 3 content sections (About, Story, Legacy), Footer
- **Animations**:
  - Fade-in on scroll (AOS library)
  - Floating and tilting effects on cat illustration
  - Hover effects on interactive elements
  - Smooth page transitions

## 📱 Responsive Design

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (under 480px)

## 🌐 Multilingual Support

Supports language switching between:
- **SK** (Slovak) - Default
- **CZ** (Czech)
- **EN** (English)

Language preference is saved to localStorage.

## 🚀 Deployment

### Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:8000`

### Production

```bash
npm start
```

### Dokku Deployment

```bash
git remote add dokku dokku@your-server.com:mikes
git push dokku master
```

The app includes a `Procfile` for Dokku deployment:
```
web: npx http-server . -p $PORT -c-1
```

## 📋 Project Structure

```
mikes-website/
├── index.html          # HTML structure with SVG cat
├── styles.css          # Retro design + animations
├── script.js           # Language switching + AOS init
├── package.json        # Project metadata
├── Procfile            # Dokku deployment config
└── README.md           # This file
```

## ✨ Features

- ✅ Pure HTML/CSS/JS (no build step required)
- ✅ External AOS library for scroll animations
- ✅ Mobile-first responsive design
- ✅ Language switcher with localStorage persistence
- ✅ Accessible keyboard navigation
- ✅ Print-friendly styles
- ✅ Performance optimized (minimal dependencies)

## 🎭 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 Content

### Sections

1. **Hero** - Animated cat illustration with title and tagline
2. **About** - Introduction to the fairy tale
3. **Story** - The journey of Tom Mikeš
4. **Legacy** - Josef Lada's artistic influence
5. **Footer** - Copyright and attribution

## 🎬 Animations

- **Page Load**: Smooth fade-in effects
- **Scroll**: Fade-up animations on content sections
- **Hover**: Scale and shadow effects on titles
- **Interactive**: Cat blinks and tilts subtly
- **Floating**: Cat illustration floats up and down

## 🔧 Technologies

- **HTML5** - Semantic markup
- **CSS3** - Grid, Flexbox, Custom Properties, Animations
- **Vanilla JavaScript** - No frameworks
- **AOS Library** - Scroll animations
- **SVG** - Vector cat illustration
- **http-server** - Simple static file serving

## 📄 License

MIT

## 👨‍💻 Author

Claudio - Senior Coder Specialist

---

**URL**: mikes.sardonicrepulsion.com
