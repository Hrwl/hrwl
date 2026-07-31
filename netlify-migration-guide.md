# Netlify Migration Guide

This guide outlines the steps to migrate the HRWL portfolio from GitHub Pages to Netlify. These steps will clean up the code and leverage Netlify's native features for better performance and SEO.

## Status: Preparation Complete
The following preparations have already been made in the current codebase:
- [x] **_redirects file**: Created in `/public/_redirects` for native SPA routing.
- [x] **Absolute SEO URLs**: Standardized all meta tags to use `https://hrwl.studio/...`.
- [x] **PNG OG Images**: All preview images are `.png` for maximum compatibility.

---

## Migration Steps

### 1. Connect to Netlify
1. Log in to Netlify and click **"Add new site"** -> **"Import an existing project"**.
2. Connect your GitHub repository.
3. Use the following build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

### 2. Code Cleanup (Post-Migration)
Once the site is live on Netlify, you can remove the GitHub Pages "hacks" that are no longer needed:

#### A. Delete 404.html
Remove `public/404.html`. Netlify uses the `_redirects` file instead.

#### B. Clean index.html
Open `index.html` and remove the `Single Page Apps for GitHub Pages` script in the `<head>` (lines 90-103). 

#### C. Remove CNAME
You can delete the `public/CNAME` file as Netlify handles custom domains via its own settings panel.

### 3. Enable Netlify Prerendering (Crucial for SEO)
To ensure social media bots (Facebook, X, LinkedIn) always see your OpenGraph tags correctly:
1. Go to your Site settings in Netlify.
2. Go to **Build & deploy** > **Post processing** > **Prerendering**.
3. Click **Enable prerendering**.
4. This allows Netlify to serve a static version of your site to bots, ensuring previews like the specific Case Study images show up perfectly.

### 4. Verification
After migrating, test your links (especially deep links like `/work/noxisros`) using these tools:
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

---

## Why Netlify?
- **Native Routing**: No more "redirect flashes" or `/?/` query strings during reloads.
- **Better Performance**: Global Edge network for faster asset delivery.
- **Prerendering**: Native support for SPA SEO without complex SSG setups.
