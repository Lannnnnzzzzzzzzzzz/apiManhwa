import Link from 'next/link';
import Image from 'next/image';

interface ManhwaCardProps {
  slug: string;
  title: string;
  image: string;
  latestChapter?: string;
}

export default function ManhwaCard({ slug, title, image, latestChapter }: ManhwaCardProps) {
  return (
    <Link href={`/series/${slug}`}>
      <div className="bg-[var(--bg-primary)] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(0,161,214,0.2)] shadow-[0_2px_8px_var(--shadow)]">
        <div className="relative w-full aspect-[3/4] bg-[var(--bg-secondary)]">
          <Image
            src={image || '/placeholder.png'}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            unoptimized
          />
        </div>
        <div className="p-3">
          <h3 className="text-sm font-medium text-[var(--text-primary)] mb-1 line-clamp-2">
            {title}
          </h3>
          <p className="text-xs text-[var(--text-tertiary)]">
            {latestChapter || 'N/A'}
          </p>
        </div>
      </div>
    </Link>
  );
}
