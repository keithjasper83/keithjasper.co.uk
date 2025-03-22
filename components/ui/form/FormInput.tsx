'use client';

import React from 'react';

type InputProps = {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  className?: string;
  error?: string;
};

export function FormInput({
  id,
  name,
  label,
  type = 'text',
  value,
  onChange,
  required = false,
  autoComplete,
  placeholder,
  className = '',
  error,
}: InputProps) {
  return (
    <div className="w-full">
      <label 
        htmlFor={id}
        className="block text-sm font-semibold leading-6 text-white mb-2"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="mt-1">
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          autoComplete={autoComplete}
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