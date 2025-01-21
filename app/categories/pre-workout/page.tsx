'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PreWorkoutPage() {
  const sections = [
    {
      title: 'Что такое предтренировочный комплекс?',
      content: 'Предтренировочный комплекс (pre-workout) — это добавка, содержащая компоненты для повышения энергии, выносливости и концентрации во время тренировок.',
      icon: '⚡'
    },
    {
      title: 'Основные компоненты',
      content: 'Кофеин, бета-аланин, цитруллин малат, креатин, таурин, аргинин. Каждый компонент влияет на определенные аспекты тренировочной эффективности.',
      icon: '🧪'
    },
    {
      title: 'Как принимать',
      content: 'Принимать за 20-30 минут до тренировки. Начинать с половины рекомендуемой дозы для оценки индивидуальной реакции. Не принимать поздно вечером.',
      icon: '⏰'
    },
    {
      title: 'Эффекты',
      content: 'Повышение энергии и мотивации, улучшение концентрации, увеличение силовых показателей, усиление мышечной накачки, повышение выносливости.',
      icon: '💪'
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
          Предтренировочные комплексы
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Важные предупреждения</h2>
          <div className="text-gray-600 leading-relaxed space-y-4">
            <p>Перед использованием предтренировочных комплексов учитывайте:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Индивидуальную чувствительность к кофеину</li>
              <li>Время тренировки (не рекомендуется принимать поздно вечером)</li>
              <li>Наличие противопоказаний (сердечно-сосудистые заболевания, гипертония)</li>
              <li>Возможность возникновения толерантности при регулярном применении</li>
              <li>Необходимость периодов отдыха от приема добавки</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </main>
  )
} 