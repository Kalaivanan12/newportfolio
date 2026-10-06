# 🚀 Kalaivanan — Space Theme Portfolio

A stunning 3D animated portfolio built with React + Vite featuring:
- 🌌 Live starfield + nebula background
- 🪐 3D CSS orbital animation (Hero section)
- 🧠 Real-time AI Neural Network visualization (About section)
- ✨ Scroll-triggered reveal animations
- 📱 Fully responsive (mobile-first)
- 💫 Space/Purple/Gold theme

## 🛠 Setup

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

Open http://localhost:5173 in your browser.

## 📁 Project Structure

```
src/
├── components/
│   ├── SpaceCanvas.jsx      # Animated starfield background
│   ├── Navbar.jsx           # Fixed responsive navigation
│   ├── Hero.jsx             # Hero + 3D orbit animation
│   ├── About.jsx            # About + AI neural network
│   ├── Skills.jsx           # Skill cards with progress bars
│   ├── Projects.jsx         # Project showcase grid
│   ├── Contact.jsx          # Contact form + social links
│   └── Footer.jsx           # Footer with back-to-top
├── hooks/
│   └── useScrollReveal.js   # Intersection Observer hook
├── styles/
│   └── index.css            # Global styles + CSS variables
├── App.jsx
└── main.jsx
```

## ✏️ Customization

### Personal Info
- `src/components/Hero.jsx` — Name, tagline, stats
- `src/components/About.jsx` — Bio text, years/projects count
- `src/components/Skills.jsx` — Edit the `skills` and `tools` arrays
- `src/components/Projects.jsx` — Edit the `projects` array with your real projects
- `src/components/Contact.jsx` — Email, location, GitHub/LinkedIn URLs

### Colors
Edit CSS variables in `src/styles/index.css`:
```css
--gold: #f0c040;
--purple: #8b5cf6;
```

### Contact Form
In `src/components/Contact.jsx`, replace the `handleSubmit` function with:
- **EmailJS**: https://www.emailjs.com
- **Formspree**: https://formspree.io
- **Your own backend API**

## 🚀 Deployment

Deploy to **Vercel** (recommended):
```bash
npm i -g vercel
vercel
```

Or **Netlify**:
```bash
npm run build
# drag & drop the dist/ folder to netlify.com
```
