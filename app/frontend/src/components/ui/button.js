import React from 'react';

const Button = ({ children, className = '', variant = 'default', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    default: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white',
    ghost: 'text-slate-700 hover:bg-slate-100',
  };

  const variantClasses = variants[variant] || variants.default;

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
