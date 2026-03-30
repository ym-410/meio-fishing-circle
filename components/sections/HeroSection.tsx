/**
 * HeroSectionコンポーネント
 * トップのヒーローセクション
 */

'use client';

import React from 'react';
import { CalendarDays, ChevronDown, MapPin } from 'lucide-react';

const nextEvent = {
  date: '未定',
  time: '',
  place: '未定',
};

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 背景画像 */}
      <div className="absolute inset-0 bg-[url('/sea.webp')] bg-cover bg-center" />

      {/* 可読性確保のためのオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-900/45 via-cyan-900/35 to-emerald-900/40" />

      {/* 背景エフェクト */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-55">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_110%,rgba(56,189,248,0.35),transparent_55%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.25),transparent_35%)]"></div>
        </div>
        <div className="absolute -top-20 -right-10 h-72 w-72 rounded-full bg-sky-300/35 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-emerald-300/35 blur-3xl"></div>
      </div>

      {/* メインコンテンツ */}
      <div className="relative px-6 max-w-6xl mx-auto z-10 text-center pt-20">
        {/* キャッチコピー */}
        <h1 className="text-3xl md:text-7xl font-black text-white mb-6 animate-fade-in-delay leading-[1.05] tracking-tight drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
          青春を、釣り上げよう
        </h1>

        <p className="text-lg md:text-2xl text-sky-100 mb-10 max-w-3xl mx-auto animate-fade-in-delay-2 leading-relaxed font-bold drop-shadow-[0_6px_18px_rgba(0,0,0,0.3)]">
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
            className="px-9 py-4 bg-white/85 text-sky-800 rounded-3xl font-bold transition-all duration-300 hover:bg-white hover:scale-105 shadow-xl"
          >
            まずはDMする
          </a>
        </div>

        {/* 追加情報 */}
        <div className="mt-6 flex flex-wrap gap-2 justify-center text-sky-900 text-xs md:text-sm animate-fade-in-delay-2 font-bold">
          <div className="px-3 py-1.5 rounded-2xl bg-white/88 shadow-md border border-white/70">
            交友関係が欲しい人も！
          </div>
          <div className="px-3 py-1.5 rounded-2xl bg-white/88 shadow-md border border-white/70">
            初心者歓迎
          </div>
          <div className="px-3 py-1.5 rounded-2xl bg-white/88 shadow-md border border-white/70">
            料理が好きな人も！
          </div>
        </div>

        {/* 近々の日程 */}
        <div className="mt-6 flex justify-center animate-fade-in-delay-2">
          <div className="w-full max-w-md bg-white/90 rounded-2xl px-5 py-4 shadow-xl border border-white/70 text-left">
            <p className="inline-flex items-center gap-1 text-xs font-bold text-sky-700">
              <CalendarDays className="w-4 h-4" />
              近々の予定
            </p>
            <p className="mt-1 text-lg font-black text-sky-900">{nextEvent.date} {nextEvent.time}</p>
            <p className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-sky-700">
              <MapPin className="w-4 h-4" />
              {nextEvent.place}
            </p>
          </div>
        </div>
      </div>

      {/* スクロール促進アイコン */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10 opacity-60 hover:opacity-100 transition-opacity"
      >
        <ChevronDown className="w-10 h-10 text-white" />
      </a>
    </section>
  );
};
