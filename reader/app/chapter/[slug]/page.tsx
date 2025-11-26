'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface ChapterData {
  title: string;
  images: string[];
  seriesSlug?: string;
  prevChapter?: string;
  nextChapter?: string;
}

export default function ChapterPage({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();
  const [slug, setSlug] = useState<string>('');
  const [chapter, setChapter] = useState<ChapterData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    params.then(p => setSlug(p.slug));
  }, [params]);

  useEffect(() => {
    if (!slug) return;

    async function loadChapter() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/chapter/${slug}`);
        const data = await res.json();

        if (data.success && data.data) {
          setChapter(data.data);
        }
      } catch (error) {
        console.error('Error loading chapter:', error);
      } finally {
        setLoading(false);
      }
    }

    loadChapter();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-[var(--bg-hover)] border-t-[var(--primary)] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!chapter) {
    return (
      <div className="max-w-[900px] mx-auto px-4 py-8">
        <p className="text-center text-[var(--text-secondary)]">Chapter tidak ditemukan</p>
      </div>
    );
  }

  return (
    <div className="max-w-[900px] mx-auto px-4 py-8">
      <div className="bg-[var(--bg-primary)] rounded-xl p-6 shadow-md mb-6">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg text-[var(--text-secondary)] hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] transition-all mb-4"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"></path>
          </svg>
          Kembali
        </button>

        <h1 className="text-xl font-semibold text-[var(--text-primary)] mb-1">
          {chapter.title}
        </h1>
      </div>

      <div className="bg-[var(--bg-primary)] rounded-xl overflow-hidden mb-6">
        {chapter.images && chapter.images.length > 0 ? (
          <div className="flex flex-col">
            {chapter.images.map((imageUrl, index) => (
              <div key={index} className="relative w-full">
                <Image
                  src={imageUrl}
                  alt={`Page ${index + 1}`}
                  width={900}
                  height={1200}
                  className="w-full h-auto"
                  unoptimized
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-[var(--text-secondary)] py-16">
            Tidak ada gambar tersedia
          </p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        {chapter.prevChapter && (
          <button
            onClick={() => router.push(`/chapter/${chapter.prevChapter}`)}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[var(--primary)] text-white rounded-lg font-medium hover:bg-[var(--primary-dark)] transition-all hover:-translate-y-0.5"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"></path>
            </svg>
            Chapter Sebelumnya
          </button>
        )}

        {chapter.nextChapter && (
          <button
            onClick={() => router.push(`/chapter/${chapter.nextChapter}`)}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[var(--primary)] text-white rounded-lg font-medium hover:bg-[var(--primary-dark)] transition-all hover:-translate-y-0.5"
          >
            Chapter Selanjutnya
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
