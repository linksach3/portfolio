#!/bin/bash

# GitHub Pages Deployment Script for Sachin Kumar's Portfolio
# Make this file executable: chmod +x deploy-to-github.sh

echo "🚀 Starting GitHub Pages deployment setup..."

# Colors for output
RED='\33[0;31m'
GREEN='\33[0;32m'
BLUE='\33[0;34m'
YELLOW='\33[1;33m'
NC='\33[0m' # No Color

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo -e "${RED}❌ Git is not installed. Please install Git first.${NC}"
    exit 1
fi

# Check if yarn is available
if ! command -v yarn &> /dev/null; then
    echo -e "${RED}❌ Yarn is not installed. Please install Yarn first.${NC}"
    exit 1
fi

echo -e "${BLUE}📋 Before proceeding, make sure you have:${NC}"
echo "1. Created a GitHub repository named 'portfolio'"
echo "2. Updated package.json homepage with your GitHub username"
echo "3. Your GitHub username ready"
echo ""

read -p "Have you completed the above steps? (y/n): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}⚠️  Please complete the setup steps first and run this script again${NC}"
    exit 1
fi

# Get GitHub username
echo -e "${BLUE}🔧 GitHub Setup${NC}"
read -p "Enter your GitHub username: " GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo -e "${RED}❌ GitHub username cannot be empty${NC}"
    exit 1
fi

# Update package.json with actual username
echo -e "${BLUE}📝 Updating package.json with your GitHub username...${NC}"
sed -i.bak "s/YOUR_GITHUB_USERNAME/$GITHUB_USERNAME/g" package.json

# Update .env.production file
echo -e "${BLUE}📝 Updating .env.production...${NC}"
sed -i.bak "s/YOUR_GITHUB_USERNAME/$GITHUB_USERNAME/g" .env.production

# Initialize git if not already initialized
if [ ! -d ".git" ]; then
    echo -e "${BLUE}🔧 Initializing Git repository...${NC}"
    git init
    git branch -M main
else
    echo -e "${GREEN}✅ Git repository already initialized${NC}"
fi

# Add remote origin
REPO_URL="https://github.com/$GITHUB_USERNAME/portfolio.git"
echo -e "${BLUE}🔗 Adding remote origin: $REPO_URL${NC}"

# Remove existing origin if it exists
git remote remove origin 2>/dev/null || true
git remote add origin $REPO_URL

# Stage all files
echo -e "${BLUE}📁 Staging files for commit...${NC}"
git add .

# Commit changes
echo -e "${BLUE}💾 Creating initial commit...${NC}"
git commit -m "Initial portfolio commit - ready for GitHub Pages deployment"

# Push to GitHub
echo -e "${BLUE}⬆️  Pushing to GitHub...${NC}"
echo "You may be prompted to enter your GitHub credentials."
git push -u origin main

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Successfully pushed to GitHub!${NC}"
else
    echo -e "${RED}❌ Failed to push to GitHub. Please check your credentials and try again.${NC}"
    exit 1
fi

# Deploy to GitHub Pages
echo -e "${BLUE}🚀 Deploying to GitHub Pages...${NC}"
yarn deploy

if [ $? -eq 0 ]; then
    echo -e "${GREEN}🎉 Deployment successful!${NC}"
    echo ""
    echo -e "${BLUE}📍 Your portfolio will be available at:${NC}"
    echo -e "${GREEN}https://$GITHUB_USERNAME.github.io/sachin-kumar-portfolio${NC}"
    echo ""
    echo -e "${YELLOW}⏱️  Note: It may take 5-10 minutes for the site to be fully available.${NC}"
    echo ""
    echo -e "${BLUE}📋 Next steps:${NC}"
    echo "1. Go to your GitHub repository settings"
    echo "2. Navigate to 'Pages' section"
    echo "3. Ensure source is set to 'gh-pages' branch"
    echo "4. Wait for deployment to complete"
    echo ""
    echo -e "${GREEN}🎊 Congratulations! Your portfolio is now live on GitHub Pages!${NC}"
else
    echo -e "${RED}❌ Deployment failed. Please check the errors above.${NC}"
    exit 1
fi

# Clean up backup files
rm -f package.json.bak .env.production.bak

echo -e "${BLUE}🧹 Cleanup completed${NC}"
echo -e "${GREEN}✨ All done! Your portfolio is deployed to GitHub Pages!${NC}"