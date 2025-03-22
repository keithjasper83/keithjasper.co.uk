'use client';

import { 
  Form, 
  FormInput, 
  FormButton 
} from '../ui/form';

export default function NewsletterForm() {
  const initialFormState = {
    email: '',
    name: '',
  };

  const handleFormSubmit = async (formData: Record<string, string>) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would make an actual API call here
      // const response = await fetch('/api/newsletter/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      // if (!response.ok) throw new Error('Subscription failed');
      
      return {
        success: true,
        message: 'You have successfully subscribed to our newsletter!'
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to subscribe. Please try again later.'
      };
    }
  };

  const validateForm = (formData: Record<string, string>) => {
    const errors: Record<string, string> = {};
    
    if (!formData.name?.trim()) errors.name = 'Name is required';
    
    if (!formData.email?.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    return errors;
  };

  return (
    <Form
      onSubmit={handleFormSubmit}
      initialState={initialFormState}
      title="Subscribe to our Newsletter"
      validateForm={validateForm}
      className="bg-gray-800 p-6 rounded-lg shadow-md max-w-md mx-auto"
    >
      {({ formState, handleChange, errors, isSubmitting }) => (
        <>
          <div className="space-y-4">
            <FormInput
              id="name"
              name="name"
              label="Your name"
              value={formState.name}
              onChange={handleChange}
              required
              error={errors.name}
              placeholder="John Doe"
            />
            
            <FormInput
              id="email"
              name="email"
              type="email"
              label="Your email address"
              value={formState.email}
              onChange={handleChange}
              required
              autoComplete="email"
              error={errors.email}
              placeholder="john@example.com"
            />
          </div>
          
          <div className="mt-6">
            <FormButton
              type="submit"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </FormButton>
          </div>
        </>
      )}
    </Form>
  );
}