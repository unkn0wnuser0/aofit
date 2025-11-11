'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input, TextArea } from '@/components/ui/Input'
import { Card } from '@/components/ui/Card'
import { Checkbox } from '@heroui/react'
import { cn } from '@/lib/utils'

interface ContactSectionProps {
  title?: string
  description?: string
  className?: string
}

interface FormData {
  name: string
  email: string
  goal: string
  consent: boolean
}

interface FormErrors {
  name?: string
  email?: string
  goal?: string
  consent?: string
}

export function ContactSection({
  title = 'Ready to Transform Your Fitness?',
  description = 'Get in touch to start your personalized fitness journey today.',
  className,
}: ContactSectionProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    goal: '',
    consent: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')
  const [formStartTime] = useState(Date.now())

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.goal.trim()) {
      newErrors.goal = 'Please tell us about your fitness goals'
    } else if (formData.goal.trim().length < 10) {
      newErrors.goal = 'Please provide more details about your goals'
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to the privacy policy'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'Anna Oblomova Fit Website',
          formStartTime,
          honeypot: '', // Anti-spam honeypot field
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', goal: '', consent: false })
        setErrors({})
      } else {
        setSubmitStatus('error')
        console.error('Contact form error:', result.error)
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error('Contact form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className={cn('py-20 bg-background', className)}>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>{title}</h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              {description}
            </p>
          </div>

          {/* Contact Form */}
          <Card className='max-w-2xl mx-auto'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Name Field */}
              <Input
                label='Full Name *'
                type='text'
                placeholder='Enter your full name'
                value={formData.name}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, name: value }))
                }
                error={errors.name}
                required
              />

              {/* Email Field */}
              <Input
                label='Email Address *'
                type='email'
                placeholder='Enter your email address'
                value={formData.email}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, email: value }))
                }
                error={errors.email}
                required
              />

              {/* Goals Field */}
              <TextArea
                label='Fitness Goals & Message *'
                placeholder="Tell us about your fitness goals, current fitness level, and what you'd like to achieve..."
                value={formData.goal}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, goal: value }))
                }
                rows={5}
                error={errors.goal}
                required
              />

              {/* Consent Checkbox */}
              <div className='space-y-2'>
                <Checkbox
                  isSelected={formData.consent}
                  onChange={(checked: boolean) =>
                    setFormData((prev) => ({ ...prev, consent: checked }))
                  }
                >
                  <Checkbox.Control className='mr-3'>
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                  <Checkbox.Content>
                    <label className='text-sm text-muted-foreground leading-relaxed cursor-pointer'>
                      I agree to the privacy policy and consent to being
                      contacted about fitness coaching services *
                    </label>
                  </Checkbox.Content>
                </Checkbox>
                {errors.consent && (
                  <div className='text-sm text-red-600'>{errors.consent}</div>
                )}
              </div>

              {/* Submit Button */}
              <div className='pt-4'>
                <Button
                  type='submit'
                  variant='primary'
                  size='lg'
                  disabled={isSubmitting}
                  className='w-full'
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </Button>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className='bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 text-sm'>
                  Thank you for your message! We'll get back to you within 24
                  hours.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className='bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 text-sm'>
                  Sorry, there was an error sending your message. Please try
                  again or contact us directly.
                </div>
              )}
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
