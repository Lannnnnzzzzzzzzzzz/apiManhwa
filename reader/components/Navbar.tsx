'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[var(--bg-primary)] border-b border-[var(--border-color)] shadow-md">
        <div className="max-w-[1400px] mx-auto px-4 h-[60px] flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSidebar}
              className="flex flex-col gap-1 w-6 h-6 hover:opacity-70 transition-opacity"
              aria-label="Toggle menu"
            >
              <span className="block w-full h-0.5 bg-[var(--text-primary)] rounded"></span>
              <span className="block w-full h-0.5 bg-[var(--text-primary)] rounded"></span>
              <span className="block w-full h-0.5 bg-[var(--text-primary)] rounded"></span>
            </button>
            <Link href="/" className="text-2xl font-bold text-[var(--primary)] whitespace-nowrap">
              MnhwaLnn
            </Link>
          </div>

          <form onSubmit={handleSearch} className="flex-1 max-w-[500px] hidden md:block">
            <div className="flex items-center bg-[var(--bg-secondary)] rounded-full px-4 focus-within:bg-[var(--bg-hover)] focus-within:ring-2 focus-within:ring-[var(--primary-light)] transition-all">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari manhwa..."
                className="flex-1 bg-transparent border-none outline-none py-2.5 text-sm text-[var(--text-primary)]"
              />
              <button type="submit" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors p-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </button>
            </div>
          </form>

          <div className="flex gap-2">
            <button className="p-2 rounded-full hover:bg-[var(--bg-hover)] text-[var(--text-secondary)] hover:text-[var(--primary)] transition-all" title="Bookmark">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>
            <button className="p-2 rounded-full hover:bg-[var(--bg-hover)] text-[var(--text-secondary)] hover:text-[var(--primary)] transition-all" title="History">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      <aside
        className={`fixed top-0 left-0 w-[260px] h-screen bg-[var(--bg-primary)] border-r border-[var(--border-color)] z-50 overflow-y-auto transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-[var(--border-color)]">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">Menu</h2>
          <button
            onClick={toggleSidebar}
            className="text-3xl leading-none text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
          >
            ×
          </button>
        </div>

        <nav className="py-4">
          <Link
            href="/"
            onClick={toggleSidebar}
            className="flex items-center gap-3 px-6 py-3 text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--primary)] transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>Beranda</span>
          </Link>

          <Link
            href="/popular"
            onClick={toggleSidebar}
            className="flex items-center gap-3 px-6 py-3 text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--primary)] transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>Populer</span>
          </Link>

          <Link
            href="/latest"
            onClick={toggleSidebar}
            className="flex items-center gap-3 px-6 py-3 text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--primary)] transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>Terbaru</span>
          </Link>

          <Link
            href="/series"
            onClick={toggleSidebar}
            className="flex items-center gap-3 px-6 py-3 text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--primary)] transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
            <span>Semua Series</span>
          </Link>

          <div className="h-px bg-[var(--border-color)] my-4"></div>

          <div className="px-6 py-2 text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">
            Genre
          </div>

          {['Action', 'Romance', 'Fantasy', 'Drama', 'Comedy'].map((genre) => (
            <Link
              key={genre}
              href={`/genre/${genre.toLowerCase()}`}
              onClick={toggleSidebar}
              className="block px-6 py-3 text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--primary)] transition-all"
            >
              {genre}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
