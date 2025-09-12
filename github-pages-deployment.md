# GitHub Pages Deployment Guide for Sachin Kumar's Portfolio

## Prerequisites

- GitHub account
- Git installed on your machine
- Your portfolio code ready

## Step 1: Create GitHub Repository

### 1.1 Create New Repository

1. Go to [GitHub.com](https://github.com)
2. Click "New" or "+" → "New repository"
3. Repository name: `sachin-kumar-portfolio` (or your preferred name)
4. Make it **Public** (required for free GitHub Pages)
5. Don't initialize with README (we have existing code)
6. Click "Create repository"

### 1.2 Note Your Repository URL

Your repo URL will be: `https://github.com/YOUR_USERNAME/sachin-kumar-portfolio`

## Step 2: Prepare Your Local Code

### 2.1 Install gh-pages Package

```bash

cd /app/frontend

yarn add --dev gh-pages

```

### 2.2 Update package.json

Add these configurations to your `package.json`:

```json

{

  "name": "sachin-kumar-portfolio",

  "homepage": "https://YOUR_GITHUB_USERNAME.github.io/sachin-kumar-portfolio",

  "scripts": {

    "predeploy": "yarn build",

    "deploy": "gh-pages -d build",

    "start": "craco start",

    "build": "craco build",

    "test": "craco test"

  }

}

```

**Replace `YOUR_GITHUB_USERNAME`** with your actual GitHub username!

### 2.3 Update Environment Variables

Create `.env.production` file in frontend directory:

```bash

# /app/frontend/.env.production

REACT_APP_BACKEND_URL=https://YOUR_GITHUB_USERNAME.github.io/sachin-kumar-portfolio

```

## Step 3: Initialize Git and Push to GitHub

### 3.1 Initialize Git Repository

```bash

cd /app/frontend

git init

git add .

git commit -m "Initial portfolio commit"

```

### 3.2 Connect to GitHub Repository

```bash

git branch -M main

git remote add origin https://github.com/YOUR_USERNAME/sachin-kumar-portfolio.git

git push -u origin main

```

## Step 4: Deploy to GitHub Pages

### 4.1 Build and Deploy

```bash

yarn deploy

```

This command will:

1. Build your React app (`yarn build`)
2. Create/update `gh-pages` branch
3. Deploy to GitHub Pages automatically

### 4.2 Wait for Deployment

- First deployment takes 5-10 minutes
- Subsequent deployments take 2-3 minutes

## Step 5: Configure GitHub Pages Settings

### 5.1 Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source": Select "Deploy from a branch"
5. Branch: Select `gh-pages`
6. Folder: Select `/ (root)`
7. Click "Save"

### 5.2 Custom Domain (Optional)

If you have a custom domain:

1. In Pages settings, add your domain
2. Check "Enforce HTTPS"
3. Create CNAME file in your repository root

## Step 6: Access Your Live Portfolio

Your portfolio will be available at:

**https://YOUR_GITHUB_USERNAME.github.io/sachin-kumar-portfolio**

## Step 7: Set Up Automatic Deployments (Optional)

### 7.1 GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml

name: Deploy to GitHub Pages


on:

push:

branches: [main ]


jobs:

build-and-deploy:

runs-on: ubuntu-latest

steps:

    - name: Checkout

uses: actions/checkout@v3


    - name: Setup Node.js

uses: actions/setup-node@v3

with:

node-version: '18'

cache: 'yarn'


    - name: Install dependencies

run: yarn install


    - name: Build

run: yarn build


    - name: Deploy

uses: peaceiris/actions-gh-pages@v3

with:

github_token: ${{ secrets.GITHUB_TOKEN }}

publish_dir: ./build

```

## Complete Commands Summary

```bash

# 1. Install gh-pages

cd /app/frontend

yarn add --dev gh-pages


# 2. Update package.json (manually edit the file)


# 3. Initialize and push to GitHub

git init

git add .

git commit -m "Initial portfolio commit"

git branch -M main

git remote add origin https://github.com/YOUR_USERNAME/sachin-kumar-portfolio.git

git push -u origin main


# 4. Deploy to GitHub Pages

yarn deploy


# 5. Future updates (after making changes)

git add .

git commit -m "Update portfolio content"

git push origin main

yarn deploy

```

## Troubleshooting

### Common Issues:

1. **404 Error**: Check if `homepage` in package.json matches your repository name
2. **Blank Page**: Ensure all paths are relative, check browser console for errors
3. **Build Fails**: Check for any compilation errors in your React code
4. **Deployment Fails**: Verify GitHub repository permissions and branch settings

### Debugging Steps:

```bash

# Check build locally

yarn build

npx serve -s build


# Check Git status

git status

git remote -v


# Redeploy if needed

yarn deploy

```

## Future Content Updates

### To Update Your Portfolio:

1. Edit `/app/frontend/src/mock.js` with new content
2. Test locally: `yarn start`
3. Commit changes: `git add . && git commit -m "Update content"`
4. Push to GitHub: `git push origin main`
5. Deploy: `yarn deploy`
6. Wait 2-3 minutes for changes to appear live

## Performance Optimization for GitHub Pages

### Recommended Optimizations:

1. **Add sitemap.xml** in public folder
2. **Add robots.txt** for SEO
3. **Optimize images** for web
4. **Add meta tags** for social sharing
5. **Enable service worker** for caching

Your portfolio will be live at: **https://YOUR_GITHUB_USERNAME.github.io/sachin-kumar-portfolio**

## Security & Best Practices

- Never commit sensitive API keys
- Keep dependencies updated
- Use HTTPS (automatically enabled by GitHub Pages)
- Add security headers if using custom domain
- Monitor deployment status in GitHub Actions tab

---

**Congratulations!** Your professional portfolio will be live on GitHub Pages, accessible worldwide, and completely free! 🎉
