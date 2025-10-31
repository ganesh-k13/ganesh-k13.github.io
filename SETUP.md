# Quick Setup Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
cd ganesh-k13.github.io
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Deploy to GitHub

#### First Time Setup
```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit: Portfolio website"

# Create repository on GitHub named: ganesh-k13.github.io
# Then push:
git remote add origin https://github.com/ganesh-k13/ganesh-k13.github.io.git
git branch -M main
git push -u origin main
```

#### Enable GitHub Pages
1. Go to: https://github.com/ganesh-k13/ganesh-k13.github.io/settings/pages
2. Under "Build and deployment" → Source: Select **GitHub Actions**
3. The site will automatically deploy on every push to `main`

#### View Your Site
After deployment completes (2-3 minutes), visit:
**https://ganesh-k13.github.io/**

---

## 📝 Updating Content

Edit `src/data.js` to update:
- Profile information
- Work experience
- Open source contributions
- Skills and technologies
- Education details

After editing, commit and push:
```bash
git add .
git commit -m "Update content"
git push
```

The site will automatically rebuild and redeploy.

---

## 🎨 Customization

### Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#1e3a8a',    // Dark blue
  accent: '#3b82f6',     // Bright blue
  dark: '#0f172a',       // Dark background
  darker: '#020617'      // Darker background
}
```

### Sections
Add/remove sections in `src/App.jsx` and create corresponding components in `src/components/`.

---

## 🐛 Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 3000
```

**Build fails?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Deployment not working?**
- Check Actions tab on GitHub for error logs
- Ensure GitHub Pages source is set to "GitHub Actions"
- Verify repository name is exactly: `ganesh-k13.github.io`
