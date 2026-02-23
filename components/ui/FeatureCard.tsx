/**
 * FeatureCardコンポーネント
 * サークルの特徴を表示するカードコンポーネント
 */

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="w-14 h-14 bg-ocean-emerald/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-ocean-emerald" />
      </div>
      <h3 className="text-xl font-bold text-ocean-navy mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
