import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Rate limiting utility
export interface RateLimitResult {
  allowed: boolean
  resetTime?: number
}

// Content validation utilities
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validateName(name: string): boolean {
  // Basic name validation: letters, spaces, common punctuation
  const nameRegex = /^[a-zA-ZÀ-ÿ\s\-'.]{2,50}$/
  return nameRegex.test(name.trim())
}

export function sanitizeContent(content: string): string {
  // Remove potentially harmful characters while preserving basic formatting
  return content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]*>/g, '')
    .trim()
}