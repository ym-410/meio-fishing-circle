/**
 * Headerコンポーネント
 * スクロールに応じて透過度が変わるヘッダー
 */

'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'どんなサークル？', href: '#about' },
    { label: 'サークルの特色', href: '#features' },
    { label: '写真', href: '#gallery' },
    { label: '質問', href: '#faq' },
    { label: 'DM', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-sky-900/10 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between bg-white/88 backdrop-blur-xl rounded-3xl px-4 py-3 shadow-2xl border border-white/70">
          <a
            href="#hero"
            className="text-2xl font-bold text-sky-900"
          >
            FISHING CIRCLE
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sky-900 font-semibold hover:text-emerald-500 transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden transition-colors duration-300 text-sky-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="メニューを開閉"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <ul className="md:hidden mt-4 space-y-2 bg-white/96 backdrop-blur-xl rounded-3xl p-4 shadow-2xl border border-white/70">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-2 px-3 rounded-2xl text-sky-900 font-semibold transition-colors duration-200 hover:bg-sky-50 hover:text-emerald-500"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};
