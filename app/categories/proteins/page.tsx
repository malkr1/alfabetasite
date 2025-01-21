'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ProteinCalculator from '@/app/components/ProteinCalculator'

export default function ProteinsPage() {
  const sections = [
    {
      title: 'Что такое протеин?',
      content: 'Протеин — это белковая добавка, которая помогает восстанавливать и наращивать мышечную массу. Состоит из аминокислот, необходимых для роста и восстановления тканей.',
      icon: '🥛'
    },
    {
      title: 'Виды протеина',
      content: 'Сывороточный, казеиновый, яичный, соевый, гороховый. Каждый тип имеет свои преимущества и особенности усвоения.',
      icon: '🔄'
    },
    {
      title: 'Как принимать',
      content: 'Рекомендуемая дозировка: 20-30 грамм после тренировки или между приемами пищи. Общее потребление белка: 1.6-2.2 г на кг веса тела.',
      icon: '⏰'
    },
    {
      title: 'Преимущества',
      content: 'Ускоряет восстановление мышц, способствует их росту, помогает контролировать вес, удобный способ получения качественного белка.',
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
          Протеин
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
          className="mt-12"
        >
          <ProteinCalculator />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Выбор протеина</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            При выборе протеина обратите внимание на:
          </p>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
            <li>Тип протеина (быстрый или медленный)</li>
            <li>Содержание белка на порцию (минимум 20г)</li>
            <li>Наличие дополнительных ингредиентов</li>
            <li>Качество сырья и репутацию производителя</li>
            <li>Индивидуальную переносимость компонентов</li>
          </ul>
        </motion.div>
      </motion.div>
    </main>
  )
} 