'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Omega3Page() {
  const sections = [
    {
      title: 'Что такое Омега-3?',
      content: 'Омега-3 — это незаменимые жирные кислоты (EPA и DHA), которые организм не может производить самостоятельно. Они играют важную роль в здоровье сердца, суставов и общем восстановлении.',
      icon: '🐟'
    },
    {
      title: 'Дозировка и прием',
      content: 'Рекомендуемая дозировка: 1-3 грамма EPA/DHA в сутки. Принимать лучше с едой для улучшения усвоения. При приеме натощак возможен рыбный привкус.',
      icon: '⚖️'
    },
    {
      title: 'Преимущества',
      content: 'Снижает воспаление в организме, поддерживает здоровье суставов и сердечно-сосудистой системы, улучшает восстановление после тренировок, может способствовать снижению боли в мышцах.',
      icon: '💪'
    },
    {
      title: 'Источники',
      content: 'Основные источники: жирная рыба (лосось, скумбрия, сардины), рыбий жир, водоросли. В форме добавок доступны в виде капсул или жидкого масла.',
      icon: '🌊'
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
          Омега-3
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
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Научные данные и предупреждения</h2>
          <div className="text-gray-600 leading-relaxed space-y-4">
            <p>
              Научные исследования (Calder, 2015) подтверждают пользу Омега-3 для сердечно-сосудистой системы. 
              Регулярный прием может снижать воспаление и улучшать восстановление после тренировок.
            </p>
            <p className="font-semibold mt-4">Важные предупреждения:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Проконсультируйтесь с врачом при приеме антикоагулянтов (риск кровотечений)</li>
              <li>Выбирайте качественные добавки от проверенных производителей</li>
              <li>Храните в холодильнике для предотвращения прогоркания</li>
              <li>Начинайте с малых доз для оценки переносимости</li>
              <li>При появлении рыбной отрыжки принимайте капсулы с едой или замороженными</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </main>
  )
} 