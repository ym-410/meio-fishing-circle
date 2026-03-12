/**
 * ContactSectionコンポーネント
 * お問い合わせ・SNSリンクセクション
 */

import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { Instagram } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-ocean-navy text-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="お問い合わせ"
          subtitle="気になったら、まずは気軽にご連絡ください！"
          className="text-white [&_h2]:text-white [&_p]:text-gray-300"
        />

        <div className="max-w-4xl mx-auto">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 whitespace-nowrap">
              まずは見学・体験参加から！
            </h3>
            <p className="text-gray-200 mb-6">
              見学時道具は全て無料貸出。<br />手ぶらで気軽に参加できます。
            </p>
            <a
              href="https://www.instagram.com/meio_fishing/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
              DMで参加申し込み
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
