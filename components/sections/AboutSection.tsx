/**
 * AboutSectionコンポーネント
 * サークル紹介セクション
 */

import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { Users, Heart, Target } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="名桜大学フィッシングサークル"
          subtitle="名桜大学生による、初心者大歓迎のフィッシングサークルです"
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* メンバー構成 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-ocean-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-ocean-emerald" />
            </div>
            <h3 className="text-xl font-bold text-ocean-navy mb-2">
              メンバー構成
            </h3>
            <p className="text-gray-600">
              総勢3名<br />
              男女比 3:1<br />
              初心者率 50%(前年度)
            </p>
          </div>

          {/* 活動理念 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-ocean-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-ocean-emerald" />
            </div>
            <h3 className="text-xl font-bold text-ocean-navy mb-2">
              活動理念
            </h3>
            <p className="text-gray-600">
              釣りを通じて<br />
              仲間との絆を深め<br />
              最高の思い出を作る
            </p>
          </div>

          {/* 活動内容 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-ocean-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-ocean-emerald" />
            </div>
            <h3 className="text-xl font-bold text-ocean-navy mb-2">
              活動内容
            </h3>
            <p className="text-gray-600">
              月1回程度の釣行<br /><br />
            </p>
          </div>
        </div>

        {/* 説明文 */}
        <div className="mt-12 max-w-3xl mx-auto">
          <p className="text-gray-700 leading-relaxed text-center">
            私たちフィッシングサークルは、「釣り未経験でも楽しめる」をモットーに、
            沖縄の美しい海で釣りを楽しむサークルです。
            初心者レクチャーも充実しているため、
            初心者でも気軽にご参加ください！
            釣りに興味がある人はもちろん！魚料理や調理に興味がある人も大歓迎です！
          </p>
        </div>
      </div>
    </section>
  );
};
