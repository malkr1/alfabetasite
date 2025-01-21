'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CreatineATPChart, CreatineStrengthChart } from '@/app/components/Infographics'

export default function CreatinePage() {
  const sections = [
    {
      title: 'Что такое креатин?',
      content: 'Креатин — это натуральное вещество, которое помогает производить энергию для мышечных сокращений. Он хранится в мышцах в виде креатинфосфата.',
      icon: '🔋'
    },
    {
      title: 'Как принимать',
      content: 'Рекомендуемая дозировка: 5 грамм в день. Можно принимать в любое время, с водой или другими напитками. Фаза загрузки необязательна.',
      icon: '⏰'
    },
    {
      title: 'Эффекты',
      content: 'Увеличивает силу и мышечную массу, улучшает восстановление между подходами, повышает работоспособность при высокоинтенсивных тренировках.',
      icon: '💪'
    },
    {
      title: 'Безопасность',
      content: 'Один из самых изученных и безопасных спортивных добавок. Подходит для длительного применения. Побочные эффекты минимальны.',
      icon: '✅'
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-16">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <Link 
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          ← Вернуться на главную
        </Link>

        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Креатин
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{section.icon}</div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{section.title}</h2>
              <p className="text-gray-600 leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <CreatineATPChart />
          <CreatineStrengthChart />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Научные исследования</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-blue-600">📊</span>
              <div>
                <h3 className="font-semibold text-gray-800">Мета-анализ 250+ исследований</h3>
                <p className="text-gray-600">Подтверждает эффективность и безопасность креатина для увеличения силы и мышечной массы</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600">🧪</span>
              <div>
                <h3 className="font-semibold text-gray-800">Долгосрочные исследования</h3>
                <p className="text-gray-600">Показывают отсутствие негативных эффектов при приеме до 30 грамм в день в течение 5 лет</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600">🎯</span>
              <div>
                <h3 className="font-semibold text-gray-800">Клинические испытания</h3>
                <p className="text-gray-600">Демонстрируют увеличение силовых показателей на 5-15% за 4-8 недель приема</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  )
} 