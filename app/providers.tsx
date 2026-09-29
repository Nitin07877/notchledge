"use client"
import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  // defaultTheme="light" से तेरी साइट हर नए यूज़र के लिए बाय-डिफ़ॉल्ट वाइट खुलेगी
  return (
    <ThemeProvider attribute="class" 
      defaultTheme="light" 
      enableSystem={false}>
      {children}
    </ThemeProvider>
  )
}