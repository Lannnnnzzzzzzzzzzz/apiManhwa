# Panduan Deploy MnhwaLnn ke Vercel

## Metode 1: Deploy via Vercel Dashboard (Paling Mudah)

### Step 1: Push ke GitHub
```bash
# Di folder reader/
git init
git add .
git commit -m "Initial commit - MnhwaLnn"

# Buat repo baru di GitHub, lalu:
git remote add origin https://github.com/username/mnhwalnn.git
git branch -M main
git push -u origin main
```

### Step 2: Import ke Vercel
1. Buka [vercel.com](https://vercel.com)
2. Login dengan GitHub account
3. Click **"Add New Project"**
4. Select repository **mnhwalnn**
5. Vercel auto-detect Next.js ✅

### Step 3: Configure Environment Variables
Di Vercel dashboard, tambahkan:
- **Variable Name:** `NEXT_PUBLIC_API_URL`
- **Value:** `https://apimanhwa.lnncloud.app/api`

### Step 4: Deploy!
- Click **"Deploy"**
- Tunggu 1-2 menit
- Done! 🎉

---

## Metode 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login
```bash
vercel login
```

### Step 3: Deploy dari folder reader
```bash
cd reader
vercel
```

Ikuti prompt:
- Set up and deploy? **Y**
- Which scope? (pilih account Anda)
- Link to existing project? **N**
- Project name? **mnhwalnn** (atau nama lain)
- In which directory? **./** (default)
- Override settings? **N**

### Step 4: Set Environment Variable
```bash
vercel env add NEXT_PUBLIC_API_URL
```
Paste: `https://apimanhwa.lnncloud.app/api`

Choose environments:
- Production: **Y**
- Preview: **Y**
- Development: **Y**

### Step 5: Deploy Production
```bash
vercel --prod
```

---

## Metode 3: Deploy Manual (Tanpa Git)

```bash
cd reader
vercel --prod
```

Vercel akan:
1. Build project
2. Upload files
3. Deploy ke production

URL akan muncul: `https://mnhwalnn.vercel.app`

---

## Update/Redeploy

### Via GitHub (Auto):
```bash
git add .
git commit -m "Update feature"
git push
```
Vercel auto-deploy setiap push! ✅

### Via CLI:
```bash
cd reader
vercel --prod
```

---

## Custom Domain (Optional)

1. Buka project di Vercel Dashboard
2. Go to **Settings → Domains**
3. Add custom domain: `mnhwalnn.com`
4. Update DNS records di domain provider:
   - **Type:** A
   - **Name:** @
   - **Value:** 76.76.21.21

   atau

   - **Type:** CNAME
   - **Name:** www
   - **Value:** cname.vercel-dns.com

5. Tunggu propagasi DNS (5-30 menit)

---

## Troubleshooting

### Error: "Environment Variable tidak terbaca"
- Pastikan variable name: `NEXT_PUBLIC_API_URL` (harus prefix `NEXT_PUBLIC_`)
- Redeploy setelah menambah env variable

### Error: "Build Failed"
```bash
# Test build locally dulu:
cd reader
npm run build
```

### Error: "Images tidak muncul"
- Cek `next.config.ts` sudah ada `remotePatterns`
- Cek API URL correct di `.env.local`

---

## Monitoring

- **Analytics:** Vercel Dashboard → Analytics
- **Logs:** Vercel Dashboard → Deployments → View Function Logs
- **Performance:** Vercel Speed Insights (gratis)

---

## Tips

1. **Preview Deployments**: Setiap branch/PR auto dapat preview URL
2. **Rollback**: Bisa rollback ke deployment sebelumnya di dashboard
3. **Environment per Branch**: Set different env untuk production/preview
4. **Free Tier**: 100GB bandwidth/bulan (cukup untuk start)

---

## Resources

- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- Vercel CLI: https://vercel.com/docs/cli
