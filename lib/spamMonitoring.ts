// Spam monitoring and analytics for contact form submissions

interface SpamStats {
  total: number
  blocked: number
  successful: number
  byReason: Record<string, number>
  byHour: Record<string, number>
  byDay: Record<string, number>
}

// In-memory storage (for production, use a database)
let spamStats: SpamStats = {
  total: 0,
  blocked: 0,
  successful: 0,
  byReason: {},
  byHour: {},
  byDay: {}
}

export type SpamAttemptType = 
  | 'rate-limit' 
  | 'honeypot' 
  | 'timing' 
  | 'content' 
  | 'validation'
  | 'success'

export function trackSpamAttempt(type: SpamAttemptType, reason?: string): void {
  const now = new Date()
  const hour = now.getHours().toString().padStart(2, '0')
  const day = now.toISOString().split('T')[0] // YYYY-MM-DD
  
  spamStats.total++
  
  if (type === 'success') {
    spamStats.successful++
  } else {
    spamStats.blocked++
    
    // Track by reason
    const reasonKey = reason || type
    spamStats.byReason[reasonKey] = (spamStats.byReason[reasonKey] || 0) + 1
  }
  
  // Track by hour
  spamStats.byHour[hour] = (spamStats.byHour[hour] || 0) + 1
  
  // Track by day
  spamStats.byDay[day] = (spamStats.byDay[day] || 0) + 1
  
  // Log significant events
  if (type !== 'success') {
    console.log(`[SPAM BLOCKED] Type: ${type}, Reason: ${reason || 'N/A'}, Time: ${now.toISOString()}`)
  }
}

export function getSpamStats(): SpamStats {
  return { ...spamStats }
}

export function getSpamStatsForPeriod(days: number = 7): {
  stats: SpamStats
  dailyBreakdown: Array<{
    date: string
    total: number
    blocked: number
    successful: number
  }>
} {
  const now = new Date()
  const cutoffDate = new Date(now.getTime() - (days * 24 * 60 * 60 * 1000))
  
  const dailyBreakdown: Array<{
    date: string
    total: number
    blocked: number
    successful: number
  }> = []
  
  // Generate daily breakdown for the requested period
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(now.getTime() - (i * 24 * 60 * 60 * 1000))
    const dateKey = date.toISOString().split('T')[0]
    
    const dayTotal = spamStats.byDay[dateKey] || 0
    // For simplicity, we'll estimate blocked vs successful
    // In a real implementation, you'd track these separately
    const estimated = estimateBlockedVsSuccessful(dayTotal)
    
    dailyBreakdown.push({
      date: dateKey,
      total: dayTotal,
      blocked: estimated.blocked,
      successful: estimated.successful
    })
  }
  
  return {
    stats: spamStats,
    dailyBreakdown
  }
}

function estimateBlockedVsSuccessful(total: number): { blocked: number; successful: number } {
  // Based on overall stats, estimate the breakdown
  const totalAttempts = spamStats.total || 1
  const blockedRatio = spamStats.blocked / totalAttempts
  
  const blocked = Math.round(total * blockedRatio)
  const successful = total - blocked
  
  return { blocked, successful }
}

export function resetSpamStats(): void {
  spamStats = {
    total: 0,
    blocked: 0,
    successful: 0,
    byReason: {},
    byHour: {},
    byDay: {}
  }
  console.log('[SPAM STATS] Statistics reset')
}

export function getTopSpamReasons(limit: number = 5): Array<{ reason: string; count: number }> {
  return Object.entries(spamStats.byReason)
    .sort(([, a], [, b]) => b - a)
    .slice(0, limit)
    .map(([reason, count]) => ({ reason, count }))
}

export function getHourlySpamPattern(): Array<{ hour: string; count: number }> {
  const pattern: Array<{ hour: string; count: number }> = []
  
  for (let i = 0; i < 24; i++) {
    const hour = i.toString().padStart(2, '0')
    pattern.push({
      hour: `${hour}:00`,
      count: spamStats.byHour[hour] || 0
    })
  }
  
  return pattern
}

// Periodic cleanup of old data (run daily)
export function cleanupOldStats(): void {
  const now = new Date()
  const cutoffDate = new Date(now.getTime() - (30 * 24 * 60 * 60 * 1000)) // 30 days
  const cutoffDateKey = cutoffDate.toISOString().split('T')[0]
  
  // Remove old daily stats
  Object.keys(spamStats.byDay).forEach(dateKey => {
    if (dateKey < cutoffDateKey) {
      delete spamStats.byDay[dateKey]
    }
  })
  
  console.log(`[SPAM STATS] Cleaned up stats older than ${cutoffDateKey}`)
}

// Schedule daily cleanup
if (typeof setInterval !== 'undefined') {
  setInterval(cleanupOldStats, 24 * 60 * 60 * 1000) // Run daily
}