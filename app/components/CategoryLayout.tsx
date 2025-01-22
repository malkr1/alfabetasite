'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

interface CategoryLayoutProps {
  title: string
  children: React.ReactNode
}

export default function CategoryLayout({ title, children }: CategoryLayoutProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 
      dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-colors duration-300">
      <ThemeToggle />
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <span className="mr-2">←</span>
            Вернуться на главную
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r 
              from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          >
            {title}
          </motion.h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {children}
          </div>
        </motion.div>
      </div>
    </main>
  )
} 