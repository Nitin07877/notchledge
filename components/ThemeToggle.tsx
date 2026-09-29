"use client"
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // UI रेंडर होने तक वेट करो ताकि कोई ग्लिच ना आए
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <button 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed bottom-6 right-6 p-3 rounded-full shadow-2xl border border-gray-200 dark:border-gray-700 bg-white text-black dark:bg-gray-800 dark:text-white z-50 transition-all duration-300 hover:scale-110"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}