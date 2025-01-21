'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CaffeinePage() {
  const sections = [
    {
      title: 'Что такое кофеин?',
      content: 'Кофеин — это природный стимулятор, который улучшает концентрацию, бодрость и физическую производительность. Это один из самых изученных и безопасных спортивных стимуляторов.',
      icon: '☕'
    },
    {
      title: 'Механизм действия',
      content: 'Кофеин блокирует рецепторы аденозина в мозге, уменьшая усталость. Также он увеличивает выброс адреналина и повышает мобилизацию жирных кислот для энергии.',
      icon: '🧠'
    },
    {
      title: 'Дозировка',
      content: 'Эффективная доза: 3-6 мг на кг веса тела. Для большинства это 200-400 мг перед тренировкой. Начинайте с малых доз для оценки индивидуальной реакции.',
      icon: '⚖️'
    },
    {
      title: 'Преимущества',
      content: 'Повышает энергию и концентрацию, улучшает силовые показатели, ускоряет жиросжигание, увеличивает выносливость, уменьшает восприятие усталости.',
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
          Кофеин
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
            <p>При использовании кофеина учитывайте:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Индивидуальную чувствительность к кофеину</li>
              <li>Время приема (не позднее 6 часов до сна)</li>
              <li>Возможность привыкания при регулярном употреблении</li>
              <li>Противопоказания при сердечно-сосудистых заболеваниях</li>
              <li>Необходимость достаточного потребления воды</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </main>
  )
} 