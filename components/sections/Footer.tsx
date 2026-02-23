/**
 * Footerコンポーネント
 * サイトのフッター
 */

import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ocean-navy text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">名桜大学フィッシングサークル</h3>
          <p className="text-gray-300 mb-4">
            名桜大学フィッシングサークル
          </p>
          <div className="flex justify-center gap-6 mb-4">
            <a
              href="#about"
              className="text-gray-300 hover:text-ocean-emerald transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#features"
              className="text-gray-300 hover:text-ocean-emerald transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#gallery"
              className="text-gray-300 hover:text-ocean-emerald transition-colors duration-200"
            >
              Gallery
            </a>
            <a
              href="#faq"
              className="text-gray-300 hover:text-ocean-emerald transition-colors duration-200"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-ocean-emerald transition-colors duration-200"
            >
              Contact
            </a>
          </div>
          <p className="text-sm text-gray-400">
            &copy; {currentYear} 名桜大学フィッシングサークル. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
