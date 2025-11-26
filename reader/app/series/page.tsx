import ManhwaCard from '@/components/ManhwaCard';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://apimanhwa.lnncloud.app/api';

async function getAllSeries() {
  try {
    const res = await fetch(`${API_URL}/series-list?page=1`, {
      next: { revalidate: 3600 },
      cache: 'force-cache'
    });
    if (!res.ok) return { data: [] };
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching series:', error);
    return { data: [] };
  }
}

export default async function AllSeriesPage() {
  const series = await getAllSeries();

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">
        Semua Series
      </h1>

      {series?.data && series.data.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {series.data.map((manhwa: any) => (
            <ManhwaCard
              key={manhwa.slug}
              slug={manhwa.slug}
              title={manhwa.title}
              image={manhwa.image || manhwa.imageUrl}
              latestChapter={manhwa.latestChapter || manhwa.chapter}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-[var(--text-secondary)] py-16">
          Tidak ada data
        </p>
      )}
    </div>
  );
}
