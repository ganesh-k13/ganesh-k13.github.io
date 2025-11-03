# Portfolio Visualizations Guide

## Overview

The portfolio now includes interactive data visualizations powered by **Recharts** and **Framer Motion**.

## Components

### 1. CareerTimeline (`src/components/CareerTimeline.jsx`)
- **Type**: Vertical timeline with hover interactions
- **Library**: Framer Motion
- **Data**: Job roles, companies, durations, impact metrics
- **Features**: 
  - Scroll-triggered animations
  - Hover to reveal impact and technologies
  - Scale effect on hover

### 2. OpenSourceChart (`src/components/OpenSourceChart.jsx`)
- **Type**: Pie chart
- **Library**: Recharts
- **Data**: Contribution counts by project
- **Features**: Interactive legend and tooltips

## Data Source

All visualization data is stored in `src/data/visuals.json`:

```json
{
  "careerTimeline": [...],
  "openSourceImpact": [...]
}
```

## Modifying Visualization Data

### Add Career Entry
```json
{
  "company": "New Company",
  "role": "Role Title",
  "start": "YYYY-MM",
  "end": "YYYY-MM",
  "duration": "X years",
  "impact": "Key achievement",
  "technologies": ["Tech1", "Tech2"]
}
```

### Update Open Source Stats
```json
{
  "project": "ProjectName",
  "contributions": 50,
  "role": "Contributor"
}
```

## Libraries Used

| Library | Version | Purpose | Bundle Impact |
|---------|---------|---------|---------------|
| Recharts | ^2.10.3 | Charts (Bar, Pie) | ~50KB gzipped |
| Framer Motion | ^10.18.0 | Animations | ~30KB gzipped |

## Performance

- **Lazy Loading**: Charts render only when scrolled into view
- **Responsive**: All charts adapt to mobile/tablet/desktop
- **Static**: No backend required, all data bundled at build time
- **Total Added Size**: ~80KB gzipped

## Customization

### Change Chart Colors
Edit component files:
```jsx
// OpenSourceChart.jsx
const COLORS = ['#3b82f6', '#6366f1', '#8b5cf6']
```

### Adjust Animation Speed
```jsx
// CareerTimeline.jsx
transition={{ duration: 0.5, delay: idx * 0.2 }}
```

### Modify Chart Dimensions
```jsx
<ResponsiveContainer width="100%" height={400}>
```

## Mobile Optimization

- Charts use `ResponsiveContainer` for fluid sizing
- Timeline stacks vertically on all screen sizes
- Touch-friendly hover states (tap to reveal on mobile)

## Rebuild After Changes

```bash
npm install  # Install new dependencies
npm run dev  # Test locally
npm run build  # Build for production
```

Changes to `visuals.json` auto-rebuild on push via GitHub Actions.
