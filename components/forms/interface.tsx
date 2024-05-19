import React from "react";

export interface InputProps {
  label?: React.ReactNode;
  name: string;
  disabled?: boolean;
  placeholder?: string;
  autocomplete?: string;
  className?: string;
  value?: any;
  labelDisplay?: boolean;
}
