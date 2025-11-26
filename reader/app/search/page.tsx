'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ManhwaCard from '@/components/ManhwaCard';

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) {
      setLoading(false);
      return;
    }

    async function search() {
      setLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/search?q=${encodeURIComponent(query)}`
        );
        const data = await res.json();
        setResults(data.data || []);
      } catch (error) {
        console.error('Error searching:', error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }

    search();
  }, [query]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-[var(--bg-hover)] border-t-[var(--primary)] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-[var(--text-primary)] mb-2">
        Hasil Pencarian
      </h1>
      <p className="text-[var(--text-secondary)] mb-6">
        Menampilkan hasil untuk: <span className="font-medium">&quot;{query}&quot;</span>
      </p>

      {results.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {results.map((manhwa: any) => (
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
          Tidak ditemukan hasil untuk pencarian ini
        </p>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-[var(--bg-hover)] border-t-[var(--primary)] rounded-full animate-spin"></div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}
