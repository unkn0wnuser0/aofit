// Advanced spam detection for contact forms

export interface SpamAnalysisResult {
  isSpam: boolean
  confidence: number
  reasons: string[]
}

// Common spam indicators
const SPAM_KEYWORDS = [
  'seo', 'marketing', 'bitcoin', 'crypto', 'investment', 'loan', 'viagra',
  'casino', 'gambling', 'click here', 'make money', 'earn money', 'work from home',
  'guaranteed', 'limited time', 'act now', 'congratulations', 'winner',
  'free money', 'cash prize', 'inheritance', 'beneficiary', 'urgent',
  'confidential business', 'business proposal', 'partnership', 'million dollars',
  'transfer funds', 'bank account', 'wire transfer', 'western union'
]

const SUSPICIOUS_PATTERNS = [
  /\$[\d,]+/, // Money amounts
  /\b\d{1,3}(?:,\d{3})*(?:\.\d{2})?\s*(?:USD|EUR|GBP|dollars?|euros?|pounds?)/i,
  /https?:\/\/[^\s]+/g, // URLs
  /\b[A-Z]{2,}\b/g, // Excessive capitals
  /[!]{3,}/, // Multiple exclamation marks
  /\d{10,}/, // Long number sequences (phone numbers, etc.)
  /\b(?:call|text|whatsapp)\s+(?:me|us)\b/i
]

export function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  
  // Basic format validation
  if (!emailRegex.test(email)) {
    return false
  }
  
  // Check for suspicious patterns
  const suspiciousEmailPatterns = [
    /^[a-z]+\d+@/, // Simple pattern + numbers
    /\+.*@/, // Plus addressing (could be legitimate but often spam)
    /@[^.]+$/, // No TLD
    /\.{2,}/, // Multiple consecutive dots
  ]
  
  return !suspiciousEmailPatterns.some(pattern => pattern.test(email))
}

export function validateName(name: string): boolean {
  const trimmedName = name.trim()
  
  // Length validation
  if (trimmedName.length < 2 || trimmedName.length > 100) {
    return false
  }
  
  // Character validation (letters, spaces, common punctuation)
  const nameRegex = /^[a-zA-ZÀ-ÿ\u0100-\u017F\u0180-\u024F\u1E00-\u1EFF\s\-'.]{2,}$/
  if (!nameRegex.test(trimmedName)) {
    return false
  }
  
  // Check for suspicious patterns
  const suspiciousNamePatterns = [
    /^\d+/, // Starts with numbers
    /\b(?:admin|test|user|guest|anonymous)\b/i,
    /^[a-z]+\d+$/i, // Simple word + numbers
    /[!@#$%^&*()+={}[\]|\\:";'<>?,./]/, // Special characters
  ]
  
  return !suspiciousNamePatterns.some(pattern => pattern.test(trimmedName))
}

export function analyzeContent(content: string): SpamAnalysisResult {
  const reasons: string[] = []
  let spamScore = 0
  
  const lowerContent = content.toLowerCase()
  
  // Check for spam keywords
  const foundKeywords = SPAM_KEYWORDS.filter(keyword => 
    lowerContent.includes(keyword.toLowerCase())
  )
  
  if (foundKeywords.length > 0) {
    spamScore += foundKeywords.length * 20
    reasons.push(`Contains spam keywords: ${foundKeywords.join(', ')}`)
  }
  
  // Check for suspicious patterns
  SUSPICIOUS_PATTERNS.forEach((pattern, index) => {
    const matches = content.match(pattern)
    if (matches && matches.length > 0) {
      spamScore += matches.length * 15
      switch (index) {
        case 0:
        case 1:
          reasons.push('Contains monetary amounts')
          break
        case 2:
          reasons.push('Contains URLs')
          break
        case 3:
          reasons.push('Excessive capital letters')
          break
        case 4:
          reasons.push('Excessive punctuation')
          break
        case 5:
          reasons.push('Long number sequences')
          break
        case 6:
          reasons.push('Suspicious contact requests')
          break
      }
    }
  })
  
  // Check message length (too short or too long can be suspicious)
  if (content.length < 10) {
    spamScore += 30
    reasons.push('Message too short')
  } else if (content.length > 2000) {
    spamScore += 25
    reasons.push('Message unusually long')
  }
  
  // Check for repetitive content
  const words = content.toLowerCase().split(/\s+/)
  const wordFreq = new Map<string, number>()
  
  words.forEach(word => {
    if (word.length > 3) {
      wordFreq.set(word, (wordFreq.get(word) || 0) + 1)
    }
  })
  
  const repetitiveWords = Array.from(wordFreq.entries()).filter(([, count]) => count > 3)
  if (repetitiveWords.length > 0) {
    spamScore += repetitiveWords.length * 10
    reasons.push('Repetitive content detected')
  }
  
  // Check for common spam phrases
  const spamPhrases = [
    'business proposal',
    'urgent response',
    'confidential',
    'million dollar',
    'wire transfer',
    'business opportunity',
    'act now',
    'limited time'
  ]
  
  const foundPhrases = spamPhrases.filter(phrase => lowerContent.includes(phrase))
  if (foundPhrases.length > 0) {
    spamScore += foundPhrases.length * 25
    reasons.push(`Contains spam phrases: ${foundPhrases.join(', ')}`)
  }
  
  // Determine if it's spam (threshold: 50)
  const isSpam = spamScore >= 50
  const confidence = Math.min(100, spamScore)
  
  return {
    isSpam,
    confidence,
    reasons
  }
}

export function sanitizeContent(content: string): string {
  // Remove potentially harmful content while preserving legitimate formatting
  return content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove scripts
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: URLs
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .trim()
}

// Additional validation for form timing (bot detection)
export function validateFormTiming(startTime: number, submitTime: number): boolean {
  const timeDiff = submitTime - startTime
  
  // Too fast (likely bot) - less than 3 seconds
  if (timeDiff < 3000) {
    return false
  }
  
  // Too slow (suspicious) - more than 30 minutes
  if (timeDiff > 30 * 60 * 1000) {
    return false
  }
  
  return true
}