'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '@heroui/react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        isIconOnly
        variant='ghost'
        aria-label='Toggle theme'
        className='w-9 h-9'
      >
        <div className='w-5 h-5' />
      </Button>
    )
  }

  return (
    <Button
      isIconOnly
      variant='ghost'
      onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label='Toggle theme'
      className='w-9 h-9'
    >
      {theme === 'light' ? (
        <MoonIcon className='w-5 h-5' />
      ) : (
        <SunIcon className='w-5 h-5' />
      )}
    </Button>
  )
}
