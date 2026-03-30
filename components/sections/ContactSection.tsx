/**
 * ContactSectionコンポーネント
 * お問い合わせ・SNSリンクセクション
 */

import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { Instagram, MessageCircle, MapPin } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-sky-200 to-emerald-100 text-sky-900">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="気になったらDM"
          subtitle="見学だけでもOK。まずはひとこと。"
          className="[&_h2]:text-sky-900 [&_p]:text-sky-700"
        />

        <div className="max-w-4xl mx-auto">
          <div className="text-center bg-white/75 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-2xl">
            <h3 className="text-3xl font-black mb-4 whitespace-nowrap text-sky-900">
              JOIN US!
            </h3>
            <p className="text-sky-700 font-semibold mb-6">
              迷っててもOK。<br />
              まずは質問からで大丈夫。
            </p>
            <div className="space-y-3 pt-2 max-w-md mx-auto">
              <a
                href="https://www.instagram.com/meio_fishing/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 text-white rounded-3xl font-bold shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Instagram className="w-5 h-5" />
                DMで参加申し込み
              </a>
              <a
                href="#about"
                className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-white text-sky-800 rounded-3xl font-bold shadow-xl transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                まずは質問する
              </a>
              <a
                href="#gallery"
                className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-sky-100 text-sky-800 rounded-3xl font-bold transition-all duration-300 hover:scale-105"
              >
                <MapPin className="w-5 h-5" />
                活動の雰囲気を見る
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
