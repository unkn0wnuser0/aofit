// In-memory rate limiter for contact form submissions
// For production, consider using Redis or a database

interface RateLimitData {
  count: number
  resetTime: number
}

const rateLimitMap = new Map<string, RateLimitData>()

// Rate limit configuration
const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 minutes in milliseconds
const RATE_LIMIT_MAX_REQUESTS = 3 // Maximum 3 submissions per window per IP

export interface RateLimitResult {
  allowed: boolean
  resetTime?: number
  remaining: number
}

export function checkRateLimit(ip: string): RateLimitResult {
  const now = Date.now()
  const key = `contact_${ip}`
  
  const existing = rateLimitMap.get(key)
  
  if (!existing || now >= existing.resetTime) {
    // First request or window has expired
    const resetTime = now + RATE_LIMIT_WINDOW
    rateLimitMap.set(key, { count: 1, resetTime })
    
    return {
      allowed: true,
      remaining: RATE_LIMIT_MAX_REQUESTS - 1
    }
  }
  
  if (existing.count >= RATE_LIMIT_MAX_REQUESTS) {
    // Rate limit exceeded
    return {
      allowed: false,
      resetTime: existing.resetTime,
      remaining: 0
    }
  }
  
  // Increment count
  existing.count++
  rateLimitMap.set(key, existing)
  
  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX_REQUESTS - existing.count
  }
}

export function getRemainingTime(resetTime: number): string {
  const now = Date.now()
  const remaining = Math.max(0, resetTime - now)
  
  const minutes = Math.ceil(remaining / (60 * 1000))
  return `${minutes} minute${minutes !== 1 ? 's' : ''}`
}

// Cleanup expired entries periodically
export function cleanupExpiredEntries(): void {
  const now = Date.now()
  
  for (const [key, data] of rateLimitMap.entries()) {
    if (now >= data.resetTime) {
      rateLimitMap.delete(key)
    }
  }
}

// Run cleanup every 30 minutes
setInterval(cleanupExpiredEntries, 30 * 60 * 1000)