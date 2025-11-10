import { NextRequest, NextResponse } from 'next/server'
import { checkRateLimit, getRemainingTime } from '@/lib/rateLimiter'
import { analyzeContent, validateEmail, validateName, sanitizeContent } from '@/lib/spamFilter'
import { trackSpamAttempt } from '@/lib/spamMonitoring'

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
               request.headers.get('x-real-ip') || 
               'unknown'

    // Check rate limit
    const rateLimitResult = checkRateLimit(ip)
    if (!rateLimitResult.allowed) {
      trackSpamAttempt('rate-limit')
      const remainingTime = getRemainingTime(rateLimitResult.resetTime!)
      return NextResponse.json(
        { 
          success: false, 
          error: `Too many submissions. Please try again in ${remainingTime}.`
        },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { 
      name, 
      email, 
      goal, 
      consent, 
      timestamp, 
      source,
      honeypot, // Anti-spam honeypot field
      formStartTime // For timing validation
    } = body

    // Honeypot check - if filled, it's likely a bot
    if (honeypot && honeypot.trim() !== '') {
      trackSpamAttempt('honeypot')
      console.log(`Honeypot triggered from IP: ${ip}`)
      return NextResponse.json(
        { success: false, error: 'Invalid submission' },
        { status: 400 }
      )
    }

    // Timing validation - too fast = likely bot
    const submissionTime = Date.now()
    const formDuration = formStartTime ? submissionTime - formStartTime : 0
    if (formDuration < 3000) { // Less than 3 seconds is suspicious
      trackSpamAttempt('timing')
      console.log(`Suspiciously fast submission (${formDuration}ms) from IP: ${ip}`)
      return NextResponse.json(
        { success: false, error: 'Please take your time filling out the form' },
        { status: 400 }
      )
    }

    // Basic validation
    if (!name || !email || !goal || !consent) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Advanced validation
    if (!validateName(name)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid name' },
        { status: 400 }
      )
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Content analysis for spam detection
    const goalAnalysis = analyzeContent(goal)
    if (goalAnalysis.isSpam) {
      trackSpamAttempt('content')
      console.log(`Spam detected from IP: ${ip}, confidence: ${goalAnalysis.confidence}%, reasons: ${goalAnalysis.reasons.join(', ')}`)
      return NextResponse.json(
        { success: false, error: 'Your message appears to contain inappropriate content. Please revise and try again.' },
        { status: 400 }
      )
    }

    // Get the Google Apps Script URL from environment variable
    const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL
    
    if (!GOOGLE_SCRIPT_URL) {
      console.error('Google Apps Script URL not configured')
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Forward the request to Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        goal: goal.trim(),
        consent,
        timestamp: timestamp || new Date().toISOString(),
        source: source || 'AO Fit Website',
      }),
    })

    if (!response.ok) {
      console.error('Google Apps Script request failed:', response.status)
      return NextResponse.json(
        { success: false, error: 'Failed to process submission' },
        { status: 502 }
      )
    }

    const result = await response.json()

    if (result.success) {
      trackSpamAttempt('success')
      return NextResponse.json({
        success: true,
        message: 'Contact form submitted successfully',
      })
    } else {
      console.error('Google Apps Script error:', result)
      return NextResponse.json(
        { success: false, error: 'Failed to process submission' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}