'use client';

import React from 'react';

type TextareaProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
  placeholder?: string;
  className?: string;
  error?: string;
};

export function FormTextarea({
  id,
  name,
  label,
  value,
  onChange,
  required = false,
  rows = 4,
  placeholder,
  className = '',
  error,
}: TextareaProps) {
  return (
    <div className="w-full">
      <label 
        htmlFor={id}
        className="block text-sm font-semibold leading-6 text-white mb-2"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="mt-1">
        <textarea
          id={id}
          name={name}
          rows={rows}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className={`block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ${
            error ? 'ring-red-500' : 'ring-white/10'
          } focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 ${className}`}
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}