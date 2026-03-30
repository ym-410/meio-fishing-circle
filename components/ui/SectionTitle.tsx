/**
 * SectionTitleコンポーネント
 * セクションの見出しを統一的に表示するコンポーネント
 */

import React from 'react';

interface SectionTitleProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  className = '',
}) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl md:text-5xl font-black text-sky-900 mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sky-700 text-base md:text-lg font-semibold max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
