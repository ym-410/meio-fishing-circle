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
    <div className="bg-sky-50 p-6 rounded-3xl shadow-xl transition-all duration-300 hover:scale-105">
      <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
        <Icon className="w-8 h-8 text-emerald-500" />
      </div>
      <h3 className="text-xl font-bold text-sky-900 mb-2 ">{title}</h3>
      <p className="text-gray-600 font-semibold">{description}</p>
    </div>
  );
};
