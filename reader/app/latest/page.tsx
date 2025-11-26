import ManhwaCard from '@/components/ManhwaCard';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://apimanhwa.lnncloud.app/api';

async function getLatest() {
  try {
    const res = await fetch(`${API_URL}/lastupdate`, {
      next: { revalidate: 600 },
      cache: 'force-cache'
    });
    if (!res.ok) return { data: [] };
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching latest:', error);
    return { data: [] };
  }
}

export default async function LatestPage() {
  const latest = await getLatest();

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">
        Update Terbaru
      </h1>

      {latest?.data && latest.data.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {latest.data.map((manhwa: any) => (
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
