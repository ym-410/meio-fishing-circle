/**
 * ContactSectionコンポーネント
 * お問い合わせ・SNSリンクセクション
 */

import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { Instagram } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-sky-200 to-emerald-100 text-sky-900">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="気になったらDM"
          subtitle="見学だけでもOK！お気軽にどうぞ！"
          className="[&_h2]:text-sky-900 [&_p]:text-sky-700"
        />

        <div className="max-w-4xl mx-auto">
          <div className="text-center bg-white/75 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-2xl">
          
          
            <p className="text-sky-700 font-semibold mb-6">
              迷っててもOK！<br />
              質問・相談受付中
            </p>
            <div className="space-y-3 pt-2 max-w-md mx-auto">
              <a
                href="https://www.instagram.com/meio_fishing/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-[linear-gradient(135deg,_#feda75_0%,_#fa7e1e_25%,_#d62976_50%,_#962fbf_75%,_#4f5bd5_100%)] text-white rounded-3xl font-bold shadow-xl transition-all duration-300 hover:scale-105 hover:brightness-110"
              >
                <Instagram className="w-5 h-5" />
                DMでお問い合わせ
              </a>

              <a
                href="https://lin.ee/qgAErrV"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-[linear-gradient(135deg,_#06C755_0%,_#00B900_100%)] text-white rounded-3xl shadow-xl transition-all duration-300 hover:scale-105 hover:brightness-110"
                aria-label="公式LINEでお問い合わせ"
              >
                <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-black text-[#06C755]">
                  LINE
                </span>
                <span className="text-left leading-tight">
                  <span className="block text-base font-black">公式LINEでお問い合わせ</span>
                </span>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
