'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { trackFormSubmit } from '@/lib/analytics';
import { AGENT, PHONE } from '@/lib/constants';
import TrackedPhoneLink from '@/components/ui/TrackedPhoneLink';
import TrackedEmailLink from '@/components/ui/TrackedEmailLink';

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(/^[\d\s\-\(\)]+$/, 'Please enter a valid phone number')
    .refine((val) => {
      // Count only digits, not formatting characters
      const digitCount = (val.match(/\d/g) || []).length;
      return digitCount >= 10;
    }, 'Phone number must be at least 10 digits'),
  interest: z.enum(['buying', 'selling', 'both', 'general'], {
    required_error: 'Please select an interest',
  }),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be less than 1000 characters'),
  // Honeypot field for spam protection (hidden from users)
  website: z.string().max(0, 'Spam detected').optional(),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'success' | 'error'
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      interest: undefined,
      message: '',
      website: '', // Honeypot field
    },
  });

  const onSubmit = async (data) => {
    // Check honeypot field
    if (data.website && data.website.length > 0) {
      // Spam detected - silently fail
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          interest: data.interest,
          message: data.message,
          sourceUrl: typeof window !== 'undefined' ? window.location.href : '',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Track successful form submission
      trackFormSubmit('contact', true);

      setSubmitStatus('success');
      setSubmitMessage('Thank you! Your message has been sent. We\'ll get back to you soon.');
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      trackFormSubmit('contact', false);
      setSubmitStatus('error');
      setSubmitMessage(
        `Sorry, something went wrong sending your message. Please call or text ${AGENT.name} at ${PHONE.marketing}.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Honeypot field - hidden from users */}
        <input type="text" {...register('website')} className="hidden" tabIndex={-1} autoComplete="off" />

        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
            Name <span className="text-amber-400">*</span>
          </label>
          <input
            id="name"
            type="text"
            {...register('name')}
            className={`w-full rounded-lg border px-4 py-3 bg-luxury-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
              errors.name ? 'border-red-500' : 'border-stone-700'
            }`}
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
            Email <span className="text-amber-400">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className={`w-full rounded-lg border px-4 py-3 bg-luxury-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
              errors.email ? 'border-red-500' : 'border-stone-700'
            }`}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
            Phone <span className="text-amber-400">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className={`w-full rounded-lg border px-4 py-3 bg-luxury-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
              errors.phone ? 'border-red-500' : 'border-stone-700'
            }`}
            placeholder="(702) 555-1234"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
          )}
        </div>

        {/* Interest Field */}
        <div>
          <label htmlFor="interest" className="block text-sm font-semibold text-white mb-2">
            I&apos;m interested in <span className="text-amber-400">*</span>
          </label>
          <select
            id="interest"
            {...register('interest')}
            className={`w-full rounded-lg border px-4 py-3 bg-luxury-900 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 ${
              errors.interest ? 'border-red-500' : 'border-stone-700'
            }`}
          >
            <option value="">Please select...</option>
            <option value="buying">Buying a Home</option>
            <option value="selling">Selling a Home</option>
            <option value="both">Both Buying & Selling</option>
            <option value="general">General Question</option>
          </select>
          {errors.interest && (
            <p className="mt-1 text-sm text-red-400">{errors.interest.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
            Message <span className="text-amber-400">*</span>
          </label>
          <textarea
            id="message"
            rows={6}
            {...register('message')}
            className={`w-full rounded-lg border px-4 py-3 bg-luxury-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none ${
              errors.message ? 'border-red-500' : 'border-stone-700'
            }`}
            placeholder="Tell us about your goals, timeline, or any questions you have..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-amber-500 px-8 py-4 text-base font-semibold text-navy-900 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {/* Status Message */}
        {submitStatus !== 'idle' && (
          <div
            className={`rounded-lg border p-4 ${
              submitStatus === 'success'
                ? 'border-green-500 bg-green-500/10 text-green-400'
                : 'border-red-500 bg-red-500/10 text-red-400'
            }`}
          >
            <p className="text-sm">{submitMessage}</p>
            {submitStatus === 'error' && (
              <div className="mt-3 text-sm">
                <p className="font-semibold">Or contact us directly:</p>
                <p className="mt-1">
                  <TrackedPhoneLink
                    phone={PHONE.marketing}
                    location="contact_form_error"
                    className="text-amber-400 hover:text-amber-500 underline"
                  >
                    {PHONE.marketing}
                  </TrackedPhoneLink>
                  {' '}
                  |{' '}
                  <TrackedEmailLink
                    email={AGENT.email}
                    location="contact_form_error"
                    className="text-amber-400 hover:text-amber-500 underline"
                  >
                    {AGENT.email}
                  </TrackedEmailLink>
                </p>
              </div>
            )}
          </div>
        )}
      </form>
    </div>
  );
}

