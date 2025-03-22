'use client';

import React from 'react';

type StatusProps = {
  message: string;
  success?: boolean;
  className?: string;
};

export function FormStatus({
  message,
  success = true,
  className = '',
}: StatusProps) {
  return (
    <div className={`p-4 mb-6 rounded ${success ? 'bg-green-800 text-white' : 'bg-red-800 text-white'} ${className}`}>
      {message}
    </div>
  );
}