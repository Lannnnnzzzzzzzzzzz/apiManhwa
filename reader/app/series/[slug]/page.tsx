import Link from 'next/link';
import Image from 'next/image';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function getSeries(slug: string) {
  try {
    const res = await fetch(`${API_URL}/series/${slug}`, {
      next: { revalidate: 3600 }
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.success ? data.data : null;
  } catch (error) {
    console.error('Error fetching series:', error);
    return null;
  }
}

export default async function SeriesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const series = await getSeries(slug);

  if (!series) {
    return (
      <div className="max-w-[1000px] mx-auto px-4 py-8">
        <p className="text-center text-[var(--text-secondary)]">Series tidak ditemukan</p>
      </div>
    );
  }

  return (
    <div className="max-w-[1000px] mx-auto px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2.5 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg text-[var(--text-secondary)] hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] transition-all mb-6"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"></path>
        </svg>
        Kembali
      </Link>

      <div className="bg-[var(--bg-primary)] rounded-xl p-8 shadow-md mb-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="relative w-full md:w-[200px] h-[300px] md:h-auto md:aspect-[2/3] flex-shrink-0 mx-auto md:mx-0">
            <Image
              src={series.image || series.imageUrl || '/placeholder.png'}
              alt={series.title}
              fill
              className="object-cover rounded-lg"
              unoptimized
            />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
              {series.title}
            </h1>

            {series.genres && series.genres.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {series.genres.map((genre: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[var(--primary-light)] text-white rounded-full text-sm font-medium"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            )}

            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              {series.synopsis || 'Tidak ada sinopsis tersedia.'}
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-[var(--bg-secondary)] rounded-lg text-sm text-[var(--text-secondary)]">
                Status: {series.status || 'Ongoing'}
              </div>
              <div className="px-4 py-2 bg-[var(--bg-secondary)] rounded-lg text-sm text-[var(--text-secondary)]">
                Author: {series.author || 'Unknown'}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[var(--bg-primary)] rounded-xl p-8 shadow-md">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">
          Daftar Chapter
        </h2>

        {series.chapters && series.chapters.length > 0 ? (
          <div className="flex flex-col gap-2">
            {series.chapters.map((chapter: any) => (
              <Link
                key={chapter.slug}
                href={`/chapter/${chapter.slug}`}
                className="flex justify-between items-center p-4 bg-[var(--bg-secondary)] rounded-lg hover:bg-[var(--primary-light)] hover:text-white transition-all hover:translate-x-1"
              >
                <span className="font-medium">{chapter.title}</span>
                {chapter.date && (
                  <span className="text-sm text-[var(--text-tertiary)]">
                    {chapter.date}
                  </span>
                )}
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-[var(--text-secondary)] py-8">
            Belum ada chapter tersedia
          </p>
        )}
      </div>
    </div>
  );
}
