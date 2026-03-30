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
      title: '手ぶらで体験OK',
      description: '道具は貸し出し。まずは来るだけ。',
    },
    {
      icon: GraduationCap,
      title: '初心者スタート多め',
      description: '釣り未経験でもなじみやすい。',
    },
    {
      icon: Car,
      title: '車なしでも参加可',
      description: '乗り合わせで海まで行ける。',
    },
    {
      icon: Users,
      title: 'ひとり参加でも安心',
      description: '私たちが空気を作ります！',
    },
    {
      icon: Calendar,
      title: 'ゆるい参加ペース',
      description: '授業とバイト優先でOK。',
    },
    {
      icon: MapPin,
      title: '沖縄での釣り',
      description: '綺麗な夕暮れはいいですよ。',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="サークルの特色"
          subtitle="初心者でも大丈夫！"
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
