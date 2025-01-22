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
      icon: '💪',
    },
    {
      title: 'Креатин',
      description: 'Добавка для увеличения силы и мышечной массы',
      href: '/categories/creatine',
      icon: '🔋',
    },
    {
      title: 'BCAA',
      description: 'Аминокислоты для восстановления и защиты мышц',
      href: '/categories/bcaa',
      icon: '🧬',
    },
    {
      title: 'Предтренировочные комплексы',
      description: 'Добавки для повышения энергии и концентрации',
      href: '/categories/pre-workout',
      icon: '⚡',
    },
    {
      title: 'Кофеин',
      description: 'Природный стимулятор для повышения энергии и работоспособности',
      href: '/categories/caffeine',
      icon: '☕',
    },
    {
      title: 'Омега-3',
      description: 'Незаменимые жирные кислоты для здоровья и восстановления',
      href: '/categories/omega3',
      icon: '🐟',
    },
    {
      title: 'Витамин D',
      description: 'Важный витамин для иммунитета и здоровья костей',
      href: '/categories/vitamin-d',
      icon: '☀️',
    },
    {
      title: 'Электролиты',
      description: 'Минералы для поддержания водного баланса и работы мышц',
      href: '/categories/electrolytes',
      icon: '💧',
    },
    {
      title: 'L-Карнитин',
      description: 'Аминокислота для улучшения жиросжигания и энергии',
      href: '/categories/l-carnitine',
      icon: '🔥',
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
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
          className="text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
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
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={category.href}
                className="block h-full p-8 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h2 className="text-2xl font-bold mb-3 text-gray-800">{category.title}</h2>
                <p className="text-gray-600">{category.description}</p>
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
              className="w-full text-left px-6 py-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
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
              className="w-full text-left px-6 py-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
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