/**
 * Buttonコンポーネント
 * 再利用可能なボタンコンポーネント
 */

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
}) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2';
  
  const variantStyles = {
    primary: 'bg-ocean-emerald hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-ocean-sunset hover:bg-orange-600 text-white shadow-lg hover:shadow-xl',
    outline: 'border-2 border-ocean-emerald text-ocean-emerald hover:bg-ocean-emerald hover:text-white',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedStyles}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
};
