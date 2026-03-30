/**
 * AboutSectionコンポーネント
 * サークル紹介セクション
 */

import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { Fish, UtensilsCrossed, Waves } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-sky-50/60">
      <div className="container mx-auto px-4">
        <SectionTitle
          title={
            <>
              <span className="whitespace-nowrap">どんなサークル？</span>
            </>
          }
          subtitle={
            <>
              読まなくても伝わる3ワード。
              <br className="sm:hidden" />
              釣る。作る。眺める。
            </>
          }
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* 釣る */}
          <div className="text-center bg-white rounded-3xl p-7 shadow-xl transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Fish className="w-8 h-8 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-bold text-sky-900 mb-2">
              🎣 釣る
            </h3>
            <p className="text-gray-600 font-semibold">
              月1くらいで海へ。
            </p>
          </div>

          {/* 作る */}
          <div className="text-center bg-white rounded-3xl p-7 shadow-xl transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <UtensilsCrossed className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-sky-900 mb-2">
              🍳 作る
            </h3>
            <p className="text-gray-600 font-semibold">
              釣った魚をみんなで調理。
            </p>
          </div>

          {/* 眺める */}
          <div className="text-center bg-white rounded-3xl p-7 shadow-xl transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Waves className="w-8 h-8 text-sky-500" />
            </div>
            <h3 className="text-2xl font-bold text-sky-900 mb-2">
              🌊 眺める
            </h3>
            <p className="text-gray-600 font-semibold">
              海風の中でゆるく話す。
            </p>
          </div>
        </div>

        {/* 説明文 */}
        <div className="mt-12 max-w-4xl mx-auto text-center bg-emerald-100/50 rounded-3xl p-8">
          <p className="text-sky-900 text-2xl md:text-4xl font-black leading-tight">
            ガチ部活じゃない。<br />
            友達と海で遊ぶサークル。
          </p>
        </div>
      </div>
    </section>
  );
};
