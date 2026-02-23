/**
 * FeaturesSectionコンポーネント
 * サークルの特徴・メリットを紹介するセクション
 */

import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { FeatureCard } from '../ui/FeatureCard';
import { Gift, GraduationCap, Car, Users, Calendar, MapPin } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Gift,
      title: '体験は手ぶらでOK',
      description: '見学時は釣り竿やリール、仕掛けなど、必要な道具は全て無料で貸し出します。手ぶらで参加OK！',
    },
    {
      icon: GraduationCap,
      title: '初心者レクチャー',
      description: '経験豊富な先輩が基礎から丁寧に教えます。釣りが初めてでも安心です。',
    },
    {
      icon: Car,
      title: '車での送迎',
      description: '車がない方も大丈夫。メンバーで乗り合わせて釣り場まで送迎します。',
    },
    {
      icon: Users,
      title: '初心者が多数',
      description: '昨年はメンバーの半数が未経験からスタート。同じレベルの仲間と一緒に成長できます。',
    },
    {
      icon: Calendar,
      title: '柔軟な参加スタイル',
      description: '月1-2回の活動。授業やバイトに合わせて自由に参加できます。',
    },
    {
      icon: MapPin,
      title: '沖縄の絶景スポット',
      description: '沖縄本島の人気釣りスポットや、離島遠征で新しい場所を開拓します。',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="選ばれる理由"
          subtitle="初心者でも安心して始められる6つのポイント"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
