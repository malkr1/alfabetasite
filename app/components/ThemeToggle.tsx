'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = theme === 'dark'

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`fixed top-4 right-4 p-2 rounded-full w-16 h-8 flex items-center z-50
        ${isDark ? 'bg-gray-800' : 'bg-blue-100'} 
        border-2 ${isDark ? 'border-blue-500' : 'border-blue-300'}
        shadow-lg hover:shadow-xl transition-all duration-300`}
    >
      <motion.div
        animate={{
          x: isDark ? 32 : 0,
          rotate: isDark ? 360 : 0
        }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 15 
        }}
        className={`w-6 h-6 rounded-full flex items-center justify-center
          ${isDark ? 'bg-gray-900' : 'bg-white'}
          shadow-md`}
      >
        {isDark ? '🌙' : '☀️'}
      </motion.div>
    </motion.button>
  )
} 