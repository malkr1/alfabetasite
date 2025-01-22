'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface CategoryLayoutProps {
  title: string
  children: React.ReactNode
}

export default function CategoryLayout({ title, children }: CategoryLayoutProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center text-gray-400 
              hover:text-gray-200 transition-colors"
          >
            <span className="mr-2">←</span>
            Вернуться на главную
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 
            shadow-xl shadow-blue-500/10"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r 
              from-blue-400 to-purple-400"
          >
            {title}
          </motion.h1>

          <div className="prose prose-invert max-w-none">
            {children}
          </div>
        </motion.div>
      </div>
    </main>
  )
} 