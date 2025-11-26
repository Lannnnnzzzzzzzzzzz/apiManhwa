# MnhwaLnn - Manhwa Reader

Web aplikasi untuk membaca manhwa terbaru dan terpopuler dengan desain clean ala Bilibili.

## Tech Stack

- **Next.js 15** - React framework dengan App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling dengan Bilibili color scheme
- **API** - Menggunakan apimanhwa.lnncloud.app

## Fitur

- ✅ Homepage dengan manhwa populer & terbaru
- ✅ Detail series dengan daftar chapter
- ✅ Chapter reader dengan navigasi
- ✅ Search functionality
- ✅ Responsive design (mobile & desktop)
- ✅ Sidebar navigation dengan hamburger menu
- ✅ Bilibili-inspired color scheme (cyan & pink)

## Setup & Development

1. Install dependencies:
```bash
cd reader
npm install
```

2. Environment variables sudah di-set di `.env.local`:
```
NEXT_PUBLIC_API_URL=https://apimanhwa.lnncloud.app/api
```

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
npm start
```

## API Endpoints

- `GET /api/popular` - Manhwa populer
- `GET /api/lastupdate` - Update terbaru
- `GET /api/series-list` - Semua series
- `GET /api/search?q={query}` - Pencarian
- `GET /api/series/{slug}` - Detail series
- `GET /api/chapter/{slug}` - Chapter reader

## Color Scheme

Terinspirasi dari Bilibili:
- Primary: `#00a1d6` (cyan)
- Secondary: `#fb7299` (pink)
- Background: `#f4f5f7` (light gray)
- Text: `#18191c` (dark gray)

## Pages

- `/` - Homepage
- `/popular` - Manhwa populer
- `/latest` - Update terbaru
- `/series` - Semua series
- `/series/[slug]` - Detail series
- `/chapter/[slug]` - Chapter reader
- `/search?q=query` - Hasil pencarian

## Deployment

Deploy ke Vercel:
```bash
vercel --prod
```

Atau platform lain yang support Next.js.
