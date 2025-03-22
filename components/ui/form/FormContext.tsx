'use client';

import React, { createContext, useContext, useState, ReactNode, useCallback, useMemo } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Type Definitions
type FormState = Record<string, string>;
type FormErrors = Record<string, string>; // Added missing type definition

interface FormContextType {
  formState: FormState;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  errors: FormErrors;
  setErrors: React.Dispatch<React.SetStateAction<FormErrors>>;
  resetForm: () => void;
  setFormState: React.Dispatch<React.SetStateAction<FormState>>;
  setFieldValue: (name: string, value: string) => void;
}

// Create Context
const FormContext = createContext<FormContextType | undefined>(undefined);

// Provider Component
interface FormProviderProps {
  children: (context: FormContextType) => ReactNode;
  initialState: FormState;
}

// Optimize FormProvider to prevent unnecessary re-renders
export function FormProvider({ children, initialState }: FormProviderProps) {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});

  // Use useCallback for functions to stabilize references
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  }, [errors]);

  const setFieldValue = useCallback((name: string, value: string) => {
    setFormState(prev => ({ ...prev, [name]: value }));
  }, []);

  const resetForm = useCallback(() => {
    setFormState(initialState);
    setErrors({});
  }, [initialState]);

  const validateForm = (formData: Record<string, string>) => {
    const errors: Record<string, string> = {};
    
    // Trim inputs before validation
    if (!formData.name?.trim()) errors.name = 'Name is required';
    
    if (!formData.email?.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      // More comprehensive email validation
      errors.email = 'Please enter a valid email address';
    }
    
    return errors;
  };

  const handleFormSubmit = async (formData: Record<string, string>) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app with better error handling
      // const response = await fetch('/api/newsletter/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      // 
      // if (!response.ok) {
      //   const errorData = await response.json().catch(() => ({}));
      //   console.error('Subscription error:', errorData);
      //   throw new Error(errorData.message || 'Subscription failed');
      // }
      
      return {
        success: true,
        message: 'You have successfully subscribed to our newsletter!'
      };
    } catch (error) {
      console.error('Form submission error:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to subscribe. Please try again later.'
      };
    }
  };

  // Memoize the context value
  const contextValue = useMemo(() => ({ 
    formState, 
    handleChange, 
    errors, 
    setErrors,
    resetForm,
    setFormState,
    setFieldValue
  }), [formState, handleChange, errors, setErrors, resetForm, setFormState, setFieldValue]);

  return (
    <>
      
      {children(contextValue)}
    </>
  );
}

// Custom Hook to use the context
export function useForm() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
}

// Removing unrelated component definition and sample JSX implementation code
// These should be in their own files