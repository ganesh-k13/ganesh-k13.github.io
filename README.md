# Ganesh Kathiresan - Portfolio Website

Personal portfolio website deployed at [https://ganesh-k13.github.io/](https://ganesh-k13.github.io/)

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **Recharts** - Data visualization
- **Framer Motion** - Animations
- **GitHub Pages** - Hosting

## Features

- 🌙 Dark theme with AWS-inspired color palette
- 📱 Fully responsive design
- ⚡ Fast loading with Vite optimization
- 🎯 Smooth scroll navigation with active section highlighting
- 🔗 SEO optimized with Open Graph meta tags
- 🚀 Automated deployment via GitHub Actions
- 📊 Interactive visualizations (skill charts, career timeline, contribution graphs)
- ✨ Smooth animations with Framer Motion

## Local Development

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to view the site locally.

### Build for Production

```bash
npm run build
```

The optimized static files will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

### Setup GitHub Pages (First Time)

1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to `main` branch to trigger deployment

### Manual Deployment

Trigger the workflow manually from the Actions tab in GitHub.

## Project Structure

```
ganesh-k13.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Sticky navigation
│   │   ├── Hero.jsx            # About section
│   │   ├── CareerTimeline.jsx  # Interactive career timeline
│   │   ├── OpenSourceChart.jsx # Contribution pie chart
│   │   ├── Experience.jsx      # Work experience timeline
│   │   ├── OpenSource.jsx      # Open source contributions
│   │   ├── Skills.jsx          # Skills, education, publications
│   │   └── Contact.jsx         # Contact info and footer
│   ├── data/
│   │   └── visuals.json        # Visualization data
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   ├── index.css               # Global styles
│   └── data.js                 # Resume data
├── index.html                  # HTML entry point
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
└── README.md                   # This file
```

## Data Source

All content is extracted from the resume in `Ganesh_Kathiresan/ganeshk.tex` and structured in:
- `src/data.js` - Profile, experience, skills
- `src/data/visuals.json` - Visualization data (charts, timeline)

To update content, edit these files and rebuild.

See [VISUALIZATIONS.md](./VISUALIZATIONS.md) for detailed visualization customization guide.

## License

© 2025 Ganesh Kathiresan. All rights reserved.
