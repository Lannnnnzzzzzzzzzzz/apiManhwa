import ManhwaCard from '@/components/ManhwaCard';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function getPopular() {
  try {
    const res = await fetch(`${API_URL}/popular`, {
      next: { revalidate: 3600 }
    });
    if (!res.ok) return { data: [] };
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching popular:', error);
    return { data: [] };
  }
}

async function getLatest() {
  try {
    const res = await fetch(`${API_URL}/lastupdate`, {
      next: { revalidate: 600 }
    });
    if (!res.ok) return { data: [] };
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching latest:', error);
    return { data: [] };
  }
}

export default async function HomePage() {
  const [popular, latest] = await Promise.all([
    getPopular(),
    getLatest()
  ]);

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">
          Manhwa Populer Hari Ini
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {popular?.data && popular.data.length > 0 ? (
            popular.data.map((manhwa: any) => (
              <ManhwaCard
                key={manhwa.slug}
                slug={manhwa.slug}
                title={manhwa.title}
                image={manhwa.image || manhwa.imageUrl}
                latestChapter={manhwa.latestChapter || manhwa.chapter}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-[var(--text-secondary)] py-8">
              Tidak ada data
            </p>
          )}
        </div>
      </section>

      <div className="h-px bg-[var(--border-color)] my-12"></div>

      <section>
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">
          Update Terbaru
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {latest?.data && latest.data.length > 0 ? (
            latest.data.map((manhwa: any) => (
              <ManhwaCard
                key={manhwa.slug}
                slug={manhwa.slug}
                title={manhwa.title}
                image={manhwa.image || manhwa.imageUrl}
                latestChapter={manhwa.latestChapter || manhwa.chapter}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-[var(--text-secondary)] py-8">
              Tidak ada data
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
