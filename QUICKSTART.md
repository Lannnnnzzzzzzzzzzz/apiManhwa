# Quick Start Guide

## Deploy in 1 Click

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ramadhanu27/Manhwaindo-API)

### Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ramadhanu27/Manhwaindo-API)

## Local Development

```bash
# Clone repository
git clone https://github.com/ramadhanu27/Manhwaindo-API.git
cd Manhwaindo-API

# Install dependencies
npm install

# Create .env file
echo "PORT=3000" > .env
echo "BASE_URL=https://manhwaindo.app" >> .env

# Run development server
npm run dev
```

Server akan berjalan di: http://localhost:3000

## Test API

```bash
# API Info
curl http://localhost:3000/api

# Popular Manhwa
curl http://localhost:3000/api/popular

# Search
curl http://localhost:3000/api/search?q=solo

# Series Detail
curl http://localhost:3000/api/series/solo-leveling
```

## View Documentation

Buka browser dan akses: http://localhost:3000

## API Endpoints Summary

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api` | API information |
| GET | `/api/project?page=1` | Project updates |
| GET | `/api/lastupdate?page=1` | Latest updates |
| GET | `/api/popular` | Popular series |
| GET | `/api/genres` | All genres |
| GET | `/api/series-list` | All series with filters |
| GET | `/api/series/:slug` | Series detail |
| GET | `/api/chapter/:slug` | Chapter images |
| GET | `/api/search?q=query` | Search series |
| GET | `/api/download/:slug` | Download info |
| POST | `/api/download-multiple` | Download multiple chapters |
| GET | `/api/download-pdf/:slug` | Download as PDF |

## Next Steps

1. Read full documentation at [README.md](README.md)
2. Check deployment guide at [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md)
3. Star the repository if you find it useful!

## Need Help?

- Check [README.md](README.md) for detailed documentation
- Report issues on [GitHub Issues](https://github.com/ramadhanu27/Manhwaindo-API/issues)
- Read [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md) for deployment help
