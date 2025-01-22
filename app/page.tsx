'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import PracticalGuides from './components/PracticalGuides'
import SupplementInfo from './components/SupplementInfo'

export default function Home() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  
  const categories = [
    {
      title: 'Протеин',
      description: 'Белковые добавки для роста мышц и восстановления',
      href: '/categories/proteins',
      gradient: 'from-blue-900/30 to-purple-900/30',
      borderGradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Креатин',
      description: 'Повышение силы и мышечной массы',
      href: '/categories/creatine',
      gradient: 'from-purple-900/30 to-pink-900/30',
      borderGradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'BCAA',
      description: 'Аминокислоты для восстановления и защиты мышц',
      href: '/categories/bcaa',
      gradient: 'from-green-900/30 to-teal-900/30',
      borderGradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Предтренировочный комплекс',
      description: 'Энергия и фокус для эффективных тренировок',
      href: '/categories/pre-workout',
      gradient: 'from-red-900/30 to-orange-900/30',
      borderGradient: 'from-red-500 to-orange-500'
    },
    {
      title: 'Кофеин',
      description: 'Природный стимулятор для повышения энергии',
      href: '/categories/caffeine',
      gradient: 'from-yellow-900/30 to-amber-900/30',
      borderGradient: 'from-yellow-500 to-amber-500'
    },
    {
      title: 'Омега-3',
      description: 'Незаменимые жирные кислоты для здоровья',
      href: '/categories/omega3',
      gradient: 'from-cyan-900/30 to-blue-900/30',
      borderGradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Витамин D',
      description: 'Важный витамин для иммунитета и костей',
      href: '/categories/vitamin-d',
      gradient: 'from-indigo-900/30 to-violet-900/30',
      borderGradient: 'from-indigo-500 to-violet-500'
    },
    {
      title: 'Электролиты',
      description: 'Минералы для водного баланса и работы мышц',
      href: '/categories/electrolytes',
      gradient: 'from-emerald-900/30 to-green-900/30',
      borderGradient: 'from-emerald-500 to-green-500'
    },
    {
      title: 'L-карнитин',
      description: 'Аминокислота для улучшения жиросжигания',
      href: '/categories/l-carnitine',
      gradient: 'from-rose-900/30 to-pink-900/30',
      borderGradient: 'from-rose-500 to-pink-500'
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r 
            from-blue-400 to-purple-400"
        >
          Спортивное питание
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl mb-8 text-gray-300"
        >
          Гид по спортивным добавкам
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={category.href}>
                <div className={`group h-full p-6 rounded-xl bg-gradient-to-br ${category.gradient} 
                  backdrop-blur-sm border border-transparent relative overflow-hidden
                  transition-all duration-300 hover:scale-[1.02]`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.borderGradient} opacity-0 
                    group-hover:opacity-20 transition-opacity duration-300`} />
                  <div className={`absolute inset-0 border-2 border-transparent bg-gradient-to-br ${category.borderGradient} 
                    mask-border opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <h2 className="text-xl font-semibold mb-2 text-gray-100">
                    {category.title}
                  </h2>
                  <p className="text-gray-300">
                    {category.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Сворачиваемые разделы */}
        <div className="space-y-6 mt-12">
          {/* Ключевая информация */}
          <motion.div>
            <button
              onClick={() => setExpandedSection(expandedSection === 'info' ? null : 'info')}
              className="w-full text-left px-6 py-4 bg-gray-800/80 backdrop-blur-sm 
                rounded-xl shadow-lg hover:shadow-xl transition-all duration-300
                border border-transparent hover:border-blue-500/30"
            >
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
                from-blue-400 to-purple-400 flex items-center">
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
              className="w-full text-left px-6 py-4 bg-gray-800/80 backdrop-blur-sm 
                rounded-xl shadow-lg hover:shadow-xl transition-all duration-300
                border border-transparent hover:border-purple-500/30"
            >
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
                from-blue-400 to-purple-400 flex items-center">
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
      </div>
    </main>
  )
} 