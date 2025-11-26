# Changelog

## [1.1.0] - 2025-11-26

### Added
- Vercel deployment support with `vercel.json` configuration
- New documentation page with clean, modern UI
- API entry point at `/api/index.js` for Vercel
- Vercel deployment guide (`VERCEL_DEPLOYMENT.md`)
- `.vercelignore` file for optimized deployments
- Build script in package.json
- Deploy buttons for Vercel and Netlify in README

### Changed
- Updated documentation UI with simplified design
- Redesigned homepage with better code syntax highlighting
- Updated README with Vercel deployment instructions
- Changed color scheme to blue-based theme (removed purple)
- Improved endpoint documentation layout
- Better mobile responsiveness

### Technical Details
- Express.js app now compatible with both Vercel and Netlify
- All routes properly configured for serverless deployment
- Static documentation served from `/public/index.html`
- Maintained backward compatibility with existing Netlify deployment

## [1.0.0] - Previous Version

### Features
- Project Updates endpoint
- Latest Update endpoint
- Popular Manhwa endpoint
- Series List with filters
- Genres List endpoint
- Series Detail endpoint
- Chapter Images endpoint
- Search endpoint
- Download ZIP functionality
- Download PDF functionality
- Intelligent caching (10 min TTL)
- CORS support
- Dynamic view counter
- Chapter navigation (prev/next)
- Netlify Functions deployment
