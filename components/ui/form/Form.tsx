'use client';

import React, { FormEvent, useState, ReactNode } from 'react';
import { FormProvider, useForm } from './FormContext';
import { FormStatus } from './FormStatus';

// Define the types for the child render prop function
type RenderProps = {
  formState: Record<string, string>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  errors: Record<string, string>;
  isSubmitting: boolean;
}

type ChildFunction = (props: RenderProps) => React.ReactNode;

interface FormProps {
  children: ChildFunction;
  onSubmit: (formData: Record<string, string>) => Promise<{ success: boolean; message: string }>;
  initialState: Record<string, string>;
  title?: string;
  className?: string;
  validateForm?: (formData: Record<string, string>) => Record<string, string>;
}

export function Form({
  children,
  onSubmit,
  initialState,
  title,
  className = '',
  validateForm,
}: FormProps) {
  const [status, setStatus] = useState<{ success?: boolean; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: FormEvent, formState: Record<string, string>, setErrors: (errors: Record<string, string>) => void, resetForm: () => void) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ message: 'Sending...' });
    
    // Validate form if validateForm function is provided
    if (validateForm) {
      const validationErrors = validateForm(formState);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        setStatus({ success: false, message: 'Please fix the errors in the form.' });
        setIsSubmitting(false);
        return;
      }
    }
    
    try {
      const result = await onSubmit(formState);
      setStatus({
        success: result.success,
        message: result.message,
      });
      
      if (result.success) {
        resetForm();
      }
    } catch (error) {
      setStatus({
        success: false,
        message: 'An unexpected error occurred. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <FormProvider initialState={initialState}>
      {context => {
        const { formState, handleChange, errors, setErrors, resetForm } = context;
        
        return (
          <form 
            onSubmit={(e) => handleSubmit(e, formState, setErrors, resetForm)}
            className={`bg-gray-900 p-6 rounded-lg shadow-md ${className}`}
            aria-labelledby={title ? "form-title" : undefined}
          >
            {title && (
              <h2 id="form-title" className="text-2xl font-bold text-white mb-6">
                {title}
              </h2>
            )}
            
            {status.message && (
              <FormStatus
                message={status.message}
                success={status.success}
              />
            )}
            
            {children({ 
              formState, 
              handleChange, 
              errors,
              isSubmitting
            })}
          </form>
        );
      }}
    </FormProvider>
  );
}