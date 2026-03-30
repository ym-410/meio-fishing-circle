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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-200 via-cyan-100 to-emerald-100"
    >
      {/* 背景エフェクト */}
      <div className="absolute inset-0">
        {/* 波のパターン */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_110%,rgba(56,189,248,0.25),transparent_55%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.18),transparent_35%)]"></div>
        </div>
        <div className="absolute -top-20 -right-10 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl"></div>
      </div>

      {/* メインコンテンツ */}
      <div className="relative px-6 max-w-6xl mx-auto z-10 text-center pt-20">

        {/* キャッチコピー */}
        <h1 className="text-4xl md:text-7xl font-black text-sky-900 mb-6 animate-fade-in-delay leading-[1.05] tracking-tight">
          青春を、釣り上げよう。
        </h1>
        
        <p className="text-lg md:text-2xl text-sky-800 mb-10 max-w-3xl mx-auto animate-fade-in-delay-2 leading-relaxed font-bold">
          初心者歓迎！
          <br className="md:hidden" />
          名桜大学フィッシングサークル
        </p>

        {/* CTAボタン */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
          <a
            href="#about"
            className="group relative px-9 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white rounded-3xl font-bold overflow-hidden transition-all duration-300 hover:scale-105 shadow-xl"
          >
            <span className="relative z-10">どんなサークル？</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="#contact"
            className="px-9 py-4 bg-white/80 text-sky-800 rounded-3xl font-bold transition-all duration-300 hover:bg-white hover:scale-105 shadow-xl"
          >
            まずはDMする
          </a>
        </div>

        {/* 追加情報 */}
        <div className="mt-12 flex flex-wrap gap-3 justify-center text-sky-900 text-sm md:text-base animate-fade-in-delay-2 font-bold">
          <div className="px-4 py-2 rounded-full bg-white/70 shadow-md">
            初心者歓迎
          </div>
          <div className="px-4 py-2 rounded-full bg-white/70 shadow-md">
            交友関係が欲しい人も！
          </div>
          <div className="px-4 py-2 rounded-full bg-white/70 shadow-md">
            料理が好きな人も！
          </div>
        </div>
      </div>

      {/* スクロール促進アイコン */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10 opacity-60 hover:opacity-100 transition-opacity"
      >
        <ChevronDown className="w-10 h-10 text-sky-600" />
      </a>
    </section>
  );
};
