'use client'

import { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export class HydrationErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    // Only log hydration errors in development
    if (
      process.env.NODE_ENV === 'development' &&
      error.message?.includes('hydration')
    ) {
      console.warn('Hydration error caught by boundary:', error.message)
    }
  }

  render() {
    if (this.state.hasError) {
      // In production, just render children normally to avoid breaking the app
      // In development, you can return a fallback UI
      return this.props.children
    }

    return this.props.children
  }
}
