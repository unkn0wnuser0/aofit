'use client'

import { Card as HeroCard } from '@heroui/react'
import { cn } from '@/lib/utils'

export interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'transparent' | 'default' | 'secondary' | 'tertiary' | 'quaternary'
}

export function Card({
  children,
  className,
  variant = 'default',
  ...props
}: CardProps) {
  return (
    <HeroCard
      variant={variant}
      className={cn('p-6 transition-all duration-200', className)}
      {...props}
    >
      {children}
    </HeroCard>
  )
}

export function CardHeader({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex flex-col space-y-1.5 pb-4', className)}>
      {children}
    </div>
  )
}

export function CardTitle({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h3
      className={cn(
        'text-2xl font-semibold leading-none tracking-tight',
        className
      )}
    >
      {children}
    </h3>
  )
}

export function CardDescription({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p className={cn('text-sm text-muted-foreground', className)}>{children}</p>
  )
}

export function CardContent({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cn('pt-0', className)}>{children}</div>
}

export function CardFooter({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex items-center pt-4', className)}>{children}</div>
  )
}
