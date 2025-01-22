'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import PracticalGuides from './components/PracticalGuides'
import SupplementInfo from './components/SupplementInfo'
import ThemeToggle from './components/ThemeToggle'

export default function Home() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  
  const categories = [
    {
      title: 'Протеин',
      description: 'Белковые добавки для роста мышц и восстановления',
      href: '/categories/proteins',
      icon: '💪',
      gradient: 'from-blue-500/5 to-purple-500/5',
      borderGradient: 'border-gradient-to-r from-blue-500/50 to-purple-500/50'
    },
    {
      title: 'Креатин',
      description: 'Добавка для увеличения силы и мышечной массы',
      href: '/categories/creatine',
      icon: '🔋',
      gradient: 'from-purple-500/5 to-pink-500/5',
      borderGradient: 'border-gradient-to-r from-purple-500/50 to-pink-500/50'
    },
    {
      title: 'BCAA',
      description: 'Аминокислоты для восстановления и защиты мышц',
      href: '/categories/bcaa',
      icon: '🧬',
      gradient: 'from-green-500/5 to-teal-500/5',
      borderGradient: 'border-gradient-to-r from-green-500/50 to-teal-500/50'
    },
    {
      title: 'Предтренировочные комплексы',
      description: 'Добавки для повышения энергии и концентрации',
      href: '/categories/pre-workout',
      icon: '⚡',
      gradient: 'from-yellow-500/10 to-red-500/10',
      hoverGradient: 'hover:from-yellow-500/20 hover:to-red-500/20',
      borderGradient: 'from-yellow-500/50 to-red-500/50'
    },
    {
      title: 'Кофеин',
      description: 'Природный стимулятор для повышения энергии и работоспособности',
      href: '/categories/caffeine',
      icon: '☕',
      gradient: 'from-orange-500/10 to-red-500/10',
      hoverGradient: 'hover:from-orange-500/20 hover:to-red-500/20',
      borderGradient: 'from-orange-500/50 to-red-500/50'
    },
    {
      title: 'Омега-3',
      description: 'Незаменимые жирные кислоты для здоровья и восстановления',
      href: '/categories/omega3',
      icon: '🐟',
      gradient: 'from-blue-500/10 to-cyan-500/10',
      hoverGradient: 'hover:from-blue-500/20 hover:to-cyan-500/20',
      borderGradient: 'from-blue-500/50 to-cyan-500/50'
    },
    {
      title: 'Витамин D',
      description: 'Важный витамин для иммунитета и здоровья костей',
      href: '/categories/vitamin-d',
      icon: '☀️',
      gradient: 'from-yellow-500/10 to-orange-500/10',
      hoverGradient: 'hover:from-yellow-500/20 hover:to-orange-500/20',
      borderGradient: 'from-yellow-500/50 to-orange-500/50'
    },
    {
      title: 'Электролиты',
      description: 'Минералы для поддержания водного баланса и работы мышц',
      href: '/categories/electrolytes',
      icon: '💧',
      gradient: 'from-cyan-500/10 to-blue-500/10',
      hoverGradient: 'hover:from-cyan-500/20 hover:to-blue-500/20',
      borderGradient: 'from-cyan-500/50 to-blue-500/50'
    },
    {
      title: 'L-Карнитин',
      description: 'Аминокислота для улучшения жиросжигания и энергии',
      href: '/categories/l-carnitine',
      icon: '🔥',
      gradient: 'from-red-500/10 to-orange-500/10',
      hoverGradient: 'hover:from-red-500/20 hover:to-orange-500/20',
      borderGradient: 'from-red-500/50 to-orange-500/50'
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-colors duration-300">
      <ThemeToggle />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
      >
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:to-purple-400"
        >
          Гид по спортивному питанию
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto"
        >
          Узнайте всё о спортивных добавках: состав, применение, эффективность
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.02,
                transition: {
                  duration: 0.2,
                  ease: "easeOut"
                }
              }}
              whileTap={{ scale: 0.98 }}
              className="transform-gpu"
            >
              <Link
                href={category.href}
                className={`block h-full p-8 rounded-2xl border border-transparent 
                  bg-gradient-to-br ${category.gradient}
                  dark:bg-gradient-to-br dark:from-gray-800/50 dark:to-gray-700/50
                  hover:shadow-lg hover:border-opacity-50 hover:${category.borderGradient}
                  dark:hover:shadow-blue-900/20
                  transition-all duration-300 relative overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-white/5 dark:bg-black/5 rounded-2xl" />
                <div className="relative z-10">
                  <motion.div 
                    className="text-5xl mb-4 inline-block transform-gpu"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: {
                        duration: 0.2,
                        ease: "easeOut"
                      }
                    }}
                  >
                    {category.icon}
                  </motion.div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100">{category.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300">{category.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                  dark:via-blue-400/5
                  translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Сворачиваемые разделы */}
        <div className="space-y-6">
          {/* Ключевая информация */}
          <motion.div>
            <button
              onClick={() => setExpandedSection(expandedSection === 'info' ? null : 'info')}
              className="w-full text-left px-6 py-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300
                border border-transparent hover:border-blue-200"
            >
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 flex items-center">
                Ключевая информация {expandedSection === 'info' ? '▼' : '▶'}
              </h2>
            </button>
            {expandedSection === 'info' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4"
              >
                <SupplementInfo />
              </motion.div>
            )}
          </motion.div>

          {/* Практические руководства */}
          <motion.div>
            <button
              onClick={() => setExpandedSection(expandedSection === 'guides' ? null : 'guides')}
              className="w-full text-left px-6 py-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300
                border border-transparent hover:border-purple-200"
            >
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 flex items-center">
                Практические руководства {expandedSection === 'guides' ? '▼' : '▶'}
              </h2>
            </button>
            {expandedSection === 'guides' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4"
              >
                <PracticalGuides />
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </main>
  )
} 