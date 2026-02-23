/**
 * HeroSectionコンポーネント
 * トップのヒーローセクション
 */

'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-cyan-800"
    >
      {/* 背景エフェクト */}
      <div className="absolute inset-0">
        {/* 波のパターン */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,200,255,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.2),transparent_40%)]"></div>
        </div>
        {/* グリッドパターン */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]"></div>
      </div>

      {/* メインコンテンツ */}
      <div className="relative px-6 max-w-6xl mx-auto z-10 text-center">
        {/* キャッチコピー */}
        
        <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 animate-fade-in-delay leading-tight">
          青春を、<br className="md:hidden" />釣りあげよう<span className="text-cyan-400">。</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-cyan-100 mb-12 max-w-3xl mx-auto animate-fade-in-delay-2 leading-relaxed font-[family-name:var(--font-zen-old-mincho)]">
          青い海と最高の仲間たち<br className="md:hidden" />
          一生の思い出がここから始まる
        </p>

        {/* CTAボタン */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
          <a
            href="#about"
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
          >
            <span className="relative z-10">活動を見る</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/30 transition-all duration-300 hover:bg-white/20 hover:scale-105"
          >
            入会について
          </a>
        </div>

        {/* 追加情報 */}
        <div className="mt-16 flex flex-wrap gap-8 justify-center text-cyan-100/80 text-sm animate-fade-in-delay-2">
          <div className="flex items-center gap-2">
            <span>初心者大歓迎</span>
          </div>
          <div className="flex items-center gap-2">
            <span>大学生限定</span>
          </div>
        </div>
      </div>

      {/* スクロール促進アイコン */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10 opacity-60 hover:opacity-100 transition-opacity"
      >
        <ChevronDown className="w-10 h-10 text-cyan-300" />
      </a>
    </section>
  );
};
