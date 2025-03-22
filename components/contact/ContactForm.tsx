'use client';

import { FormEvent, useState } from 'react';
import { 
  Form, 
  FormInput, 
  FormTextarea, 
  FormButton 
} from '../ui/form';

export default function ContactForm() {
  const initialFormState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  const handleFormSubmit = async (formData: Record<string, string>) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real app, you would make an actual API call here
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });
    
    return {
      success: true,
      message: 'Thank you! Your message has been sent.'
    };
  };

  const validateForm = (formData: Record<string, string>) => {
    const errors: Record<string, string> = {};
    
    if (!formData.firstName) errors.firstName = 'First name is required';
    if (!formData.lastName) errors.lastName = 'Last name is required';
    
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.message) errors.message = 'Message is required';
    
    return errors;
  };

  return (
    <Form
      onSubmit={handleFormSubmit}
      initialState={initialFormState}
      title="Send a Message"
      validateForm={validateForm}
    >
      {({ formState, handleChange, errors, isSubmitting }) => (
        <>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <FormInput
              id="firstName"
              name="firstName"
              label="First name"
              value={formState.firstName}
              onChange={handleChange}
              required
              autoComplete="given-name"
              error={errors.firstName}
            />
            
            <FormInput
              id="lastName"
              name="lastName"
              label="Last name"
              value={formState.lastName}
              onChange={handleChange}
              required
              autoComplete="family-name"
              error={errors.lastName}
            />
            
            <div className="sm:col-span-2">
              <FormInput
                id="email"
                name="email"
                type="email"
                label="Email"
                value={formState.email}
                onChange={handleChange}
                required
                autoComplete="email"
                error={errors.email}
              />
            </div>
            
            <div className="sm:col-span-2">
              <FormInput
                id="phone"
                name="phone"
                type="tel"
                label="Phone number"
                value={formState.phone}
                onChange={handleChange}
                autoComplete="tel"
                error={errors.phone}
              />
            </div>
            
            <div className="sm:col-span-2">
              <FormTextarea
                id="message"
                name="message"
                label="Message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={4}
                error={errors.message}
              />
            </div>
          </div>
          
          <div className="mt-8 flex justify-end">
            <FormButton
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </FormButton>
          </div>
        </>
      )}
    </Form>
  );
}