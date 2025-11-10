'use client'

import { Button as HeroButton } from '@heroui/react'
import { cn } from '@/lib/utils'

export interface ButtonProps {
  children: React.ReactNode
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'ghost'
    | 'danger'
    | 'danger-soft'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  return (
    <HeroButton
      variant={variant}
      size={size}
      className={cn(
        'transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
        className
      )}
      {...props}
    >
      {children}
    </HeroButton>
  )
}
