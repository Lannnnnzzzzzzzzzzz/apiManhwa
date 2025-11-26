# Vercel Deployment Guide

## Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ramadhanu27/Manhwaindo-API)

## Manual Deployment

### 1. Install Vercel CLI (Optional)

```bash
npm install -g vercel
```

### 2. Login to Vercel

```bash
vercel login
```

### 3. Deploy

```bash
vercel
```

Follow the prompts to complete deployment.

### 4. Deploy to Production

```bash
vercel --prod
```

## Configuration

The project includes `vercel.json` which configures:

- All API routes are handled by `server.js`
- Serverless function configuration
- Automatic routing

## Environment Variables

Set these in Vercel Dashboard or via CLI:

```bash
vercel env add BASE_URL
# Enter: https://manhwaindo.app
```

## File Structure

```
project/
├── vercel.json          # Vercel configuration
├── api/
│   └── index.js        # API entry point for Vercel
├── server.js           # Main Express app
├── routes/
│   └── api.js         # API routes
└── utils/
    └── scraper.js     # Scraping utilities
```

## Vercel Configuration (`vercel.json`)

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/server.js"
    },
    {
      "src": "/(.*)",
      "dest": "/server.js"
    }
  ]
}
```

## Testing Deployment

After deployment, test these endpoints:

```bash
# API Info
curl https://your-project.vercel.app/api

# Popular Manhwa
curl https://your-project.vercel.app/api/popular

# Search
curl https://your-project.vercel.app/api/search?q=solo
```

## Troubleshooting

### Module not found errors
- Ensure all dependencies are in `package.json`
- Run `npm install` before deploying

### Timeout errors
- Vercel has 10s timeout for Hobby plan
- Upgrade to Pro for 60s timeout
- Consider implementing caching

### CORS errors
- CORS is already configured in the app
- Check browser console for specific errors

## Monitoring

Monitor your deployment at:
- Dashboard: https://vercel.com/dashboard
- Analytics: Available in Vercel dashboard
- Logs: Real-time logs in Vercel dashboard

## Custom Domain

1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings > Domains
4. Add your custom domain
5. Follow DNS configuration instructions

## Performance Tips

1. Enable caching (already implemented - 10 min TTL)
2. Use CDN for static assets
3. Monitor function execution time
4. Optimize scraping code
5. Consider upgrading plan for better performance

## Limits (Hobby Plan)

- Bandwidth: 100 GB/month
- Serverless Function Execution: 100 GB-Hrs
- Serverless Function Duration: 10s max
- Build Minutes: 6000 minutes/month

For higher limits, upgrade to Pro plan.
