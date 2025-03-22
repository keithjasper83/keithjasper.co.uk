import React from 'react';

interface IconsProps {
  name: string;
  className?: string;
  'aria-hidden'?: boolean;
}

export function Icons({ name, className = '', ...props }: IconsProps) {
  return (
    <i className={`pr-3 icon icon-${name} ${className}`} {...props} />
  );
}
