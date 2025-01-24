'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import PracticalGuides from './components/PracticalGuides'
import SupplementInfo from './components/SupplementInfo'
import SupplementQuiz from './components/SupplementQuiz'
import SupplementStack from './components/SupplementStack'
import AnimatedBackground from './components/AnimatedBackground'
import ScrollAnimation from './components/ScrollAnimation'

export default function Home() {
  const [expandedKey, setExpandedKey] = useState(false)
  const [expandedGuide, setExpandedGuide] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const categories = [
    // Основные добавки для мышц (оттенки синего)
    {
      title: 'Протеин',
      description: 'Белковые добавки для роста мышц и восстановления',
      href: '/categories/proteins',
      gradient: 'from-blue-500/30 to-blue-400/30',
      borderGradient: 'from-blue-300 to-blue-200'
    },
    {
      title: 'Креатин',
      description: 'Повышение силы и мышечной массы',
      href: '/categories/creatine',
      gradient: 'from-blue-600/30 to-blue-500/30',
      borderGradient: 'from-blue-400 to-blue-300'
    },
    {
      title: 'BCAA',
      description: 'Аминокислоты для восстановления и защиты мышц',
      href: '/categories/bcaa',
      gradient: 'from-blue-700/30 to-blue-600/30',
      borderGradient: 'from-blue-500 to-blue-400'
    },

    // Энергетические добавки (оттенки красного)
    {
      title: 'Предтренировочный комплекс',
      description: 'Энергия и фокус для эффективных тренировок',
      href: '/categories/pre-workout',
      gradient: 'from-red-500/30 to-red-400/30',
      borderGradient: 'from-red-300 to-red-200'
    },
    {
      title: 'Кофеин',
      description: 'Природный стимулятор для повышения энергии',
      href: '/categories/caffeine',
      gradient: 'from-red-600/30 to-red-500/30',
      borderGradient: 'from-red-400 to-red-300'
    },
    {
      title: 'L-карнитин',
      description: 'Аминокислота для улучшения жиросжигания',
      href: '/categories/lcarnitine',
      gradient: 'from-red-700/30 to-red-600/30',
      borderGradient: 'from-red-500 to-red-400'
    },

    // Здоровье и восстановление (оттенки зеленого)
    {
      title: 'Омега-3',
      description: 'Незаменимые жирные кислоты для здоровья',
      href: '/categories/omega3',
      gradient: 'from-green-500/30 to-green-400/30',
      borderGradient: 'from-green-300 to-green-200'
    },
    {
      title: 'Витамин D',
      description: 'Важный витамин для иммунитета и костей',
      href: '/categories/vitamind',
      gradient: 'from-green-600/30 to-green-500/30',
      borderGradient: 'from-green-400 to-green-300'
    },
    {
      title: 'Электролиты',
      description: 'Минералы для водного баланса и работы мышц',
      href: '/categories/electrolytes',
      gradient: 'from-green-700/30 to-green-600/30',
      borderGradient: 'from-green-500 to-green-400'
    }
  ]

  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      
      {/* Mobile Menu Button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-lg bg-gray-800/80 backdrop-blur-sm border border-gray-700/50"
        >
          <motion.div
            animate={isMobileMenuOpen ? "open" : "closed"}
            className="w-6 h-5 relative"
          >
            <motion.span
              className="absolute w-full h-0.5 bg-gray-200 transform-origin-center"
              variants={{
                open: { rotate: 45, y: 8 },
                closed: { rotate: 0, y: 0 }
              }}
            />
            <motion.span
              className="absolute w-full h-0.5 bg-gray-200 top-2"
              variants={{
                open: { opacity: 0 },
                closed: { opacity: 1 }
              }}
            />
            <motion.span
              className="absolute w-full h-0.5 bg-gray-200 top-4 transform-origin-center"
              variants={{
                open: { rotate: -45, y: -8 },
                closed: { rotate: 0, y: 0 }
              }}
            />
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-64 bg-gray-900/95 backdrop-blur-sm p-6 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
            >
              <div className="space-y-4">
                {categories.map((category) => (
                  <Link
                    key={category.title}
                    href={category.href}
                    className="block p-3 rounded-lg bg-gradient-to-br hover:scale-105 transition-transform
                      ${category.gradient} border-t border-l border-r border-b border-opacity-50
                      hover:border-opacity-75 ${category.borderGradient}"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <h3 className="font-medium text-gray-100">{category.title}</h3>
                    <p className="text-sm text-gray-400">{category.description}</p>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto space-y-8"
        >
          <ScrollAnimation>
            <h1 className="text-6xl font-bold text-center bg-clip-text text-transparent 
              bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
              Спортивное питание
            </h1>
            <p className="text-gray-400 text-center text-xl mb-8">
              Гид по спортивным добавкам
            </p>
          </ScrollAnimation>

          <div className="space-y-12">
            {/* Основные добавки */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent 
                bg-gradient-to-r from-blue-400 to-blue-300">
                Основные добавки для мышц
              </h2>
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {categories.slice(0, 3).map((category) => (
                  <Link
                    key={category.title}
                    href={category.href}
                    className={`block p-6 rounded-xl bg-gradient-to-br hover:scale-105 transition-all duration-300
                      ${category.gradient} border border-gray-700/50 hover:border-gray-500/50 shadow-lg
                      hover:shadow-xl backdrop-blur-sm`}
                  >
                    <h3 className="text-xl font-semibold text-gray-100 mb-2">{category.title}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Энергетические добавки */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent 
                bg-gradient-to-r from-red-400 to-red-300">
                Энергетические добавки
              </h2>
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {categories.slice(3, 6).map((category) => (
                  <Link
                    key={category.title}
                    href={category.href}
                    className={`block p-6 rounded-xl bg-gradient-to-br hover:scale-105 transition-all duration-300
                      ${category.gradient} border border-gray-700/50 hover:border-gray-500/50 shadow-lg
                      hover:shadow-xl backdrop-blur-sm`}
                  >
                    <h3 className="text-xl font-semibold text-gray-100 mb-2">{category.title}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Здоровье и восстановление */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent 
                bg-gradient-to-r from-green-400 to-green-300">
                Здоровье и восстановление
              </h2>
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {categories.slice(6, 9).map((category) => (
                  <Link
                    key={category.title}
                    href={category.href}
                    className={`block p-6 rounded-xl bg-gradient-to-br hover:scale-105 transition-all duration-300
                      ${category.gradient} border border-gray-700/50 hover:border-gray-500/50 shadow-lg
                      hover:shadow-xl backdrop-blur-sm`}
                  >
                    <h3 className="text-xl font-semibold text-gray-100 mb-2">{category.title}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <button
              onClick={() => setExpandedKey(!expandedKey)}
              className="w-full text-left p-4 rounded-lg bg-gray-800/80 backdrop-blur-sm 
                border border-gray-700/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-blue-400">
                  Ключевая информация
                </h2>
                <motion.span
                  animate={{ rotate: expandedKey ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-400"
                >
                  ▼
                </motion.span>
              </div>
            </button>

            <AnimatePresence>
              {expandedKey && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 space-y-4">
                    <SupplementInfo />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setExpandedGuide(!expandedGuide)}
              className="w-full text-left p-4 rounded-lg bg-gray-800/80 backdrop-blur-sm 
                border border-gray-700/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-blue-400">
                  Практические руководства
                </h2>
                <motion.span
                  animate={{ rotate: expandedGuide ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-400"
                >
                  ▼
                </motion.span>
              </div>
            </button>

            <AnimatePresence>
              {expandedGuide && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 space-y-4">
                    <PracticalGuides />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div>
            <SupplementStack />
          </div>

          <div>
            <SupplementQuiz />
          </div>
        </motion.div>
      </div>
    </main>
  )
} 