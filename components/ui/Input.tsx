'use client'

import {
  TextField,
  Label,
  Input as HeroInput,
  TextArea as HeroTextArea,
} from '@heroui/react'
import { cn } from '@/lib/utils'

export interface InputProps {
  label?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  type?: 'text' | 'email' | 'password' | 'tel' | 'url'
  disabled?: boolean
  required?: boolean
  className?: string
  error?: string
}

export function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  disabled = false,
  required = false,
  className,
  error,
  ...props
}: InputProps) {
  return (
    <TextField className={cn('w-full', className)} {...props}>
      {label && <Label className='text-sm font-medium'>{label}</Label>}
      <HeroInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        required={required}
        className={cn(
          'transition-colors',
          error && 'border-red-500 focus:border-red-500'
        )}
      />
      {error && <div className='text-sm text-red-600 mt-1'>{error}</div>}
    </TextField>
  )
}

export interface TextAreaProps {
  label?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
  required?: boolean
  rows?: number
  className?: string
  error?: string
}

export function TextArea({
  label,
  placeholder,
  value,
  onChange,
  disabled = false,
  required = false,
  rows = 4,
  className,
  error,
  ...props
}: TextAreaProps) {
  return (
    <TextField className={cn('w-full', className)} {...props}>
      {label && <Label className='text-sm font-medium'>{label}</Label>}
      <HeroTextArea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        required={required}
        rows={rows}
        className={cn(
          'transition-colors resize-none',
          error && 'border-red-500 focus:border-red-500'
        )}
      />
      {error && <div className='text-sm text-red-600 mt-1'>{error}</div>}
    </TextField>
  )
}
