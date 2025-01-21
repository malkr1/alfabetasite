'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function BcaaPage() {
  const sections = [
    {
      title: 'Что такое BCAA?',
      content: 'BCAA (Branched Chain Amino Acids) — это аминокислоты с разветвлённой цепью: лейцин, изолейцин и валин. Они являются важнейшими компонентами для роста и восстановления мышц.',
      icon: '🧬'
    },
    {
      title: 'Состав',
      content: 'Оптимальное соотношение аминокислот в BCAA — 2:1:1 (лейцин:изолейцин:валин). Некоторые производители предлагают соотношение 4:1:1 для усиленной анаболической реакции.',
      icon: '⚖️'
    },
    {
      title: 'Применение',
      content: 'Рекомендуется принимать до, во время или после тренировки. Дозировка: 5-10 грамм в день, в зависимости от интенсивности тренировок и массы тела.',
      icon: '⏰'
    },
    {
      title: 'Эффекты',
      content: 'Снижает мышечную усталость, ускоряет восстановление, уменьшает мышечную боль после тренировок, помогает сохранить мышечную массу при диете.',
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
          BCAA
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
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Кому подходят BCAA?</h2>
          <div className="text-gray-600 leading-relaxed space-y-4">
            <p>BCAA особенно рекомендуются:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Спортсменам на интенсивных тренировках</li>
              <li>При работе на сушке или дефиците калорий</li>
              <li>Веганам и вегетарианцам</li>
              <li>При утренних тренировках натощак</li>
              <li>В периоды высокообъемных тренировок</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </main>
  )
} 