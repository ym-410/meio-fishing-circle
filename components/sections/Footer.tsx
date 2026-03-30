/**
 * Footerコンポーネント
 * サイトのフッター
 */

import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sky-50 text-sky-900 py-10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-black mb-2">名桜大学フィッシングサークル</h3>
          <p className="text-sky-700 mb-4 font-semibold">
            釣る。作る。海でチルる。
          </p>
          <div className="flex justify-center gap-6 mb-4">
            <a
              href="#about"
              className="text-sky-700 hover:text-emerald-500 transition-colors duration-200 font-semibold"
            >
              About
            </a>
            <a
              href="#features"
              className="text-sky-700 hover:text-emerald-500 transition-colors duration-200 font-semibold"
            >
              Features
            </a>
            <a
              href="#gallery"
              className="text-sky-700 hover:text-emerald-500 transition-colors duration-200 font-semibold"
            >
              Gallery
            </a>
            <a
              href="#faq"
              className="text-sky-700 hover:text-emerald-500 transition-colors duration-200 font-semibold"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-sky-700 hover:text-emerald-500 transition-colors duration-200 font-semibold"
            >
              Contact
            </a>
          </div>
          <p className="text-sm text-sky-600">
            &copy; {currentYear} 名桜大学フィッシングサークル. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
