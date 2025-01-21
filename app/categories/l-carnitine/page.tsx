'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function LCarnitinePage() {
  const sections = [
    {
      title: 'Что такое L-карнитин?',
      content: 'L-карнитин — это аминокислота, которая играет ключевую роль в транспорте жирных кислот в митохондрии клеток, где они используются для производства энергии. Это делает его популярной добавкой для поддержки жиросжигания и энергетического обмена.',
      icon: '🔥'
    },
    {
      title: 'Дозировка',
      content: 'Рекомендуемая дозировка: 1-3 грамма в день. Для максимальной эффективности принимать за 30-60 минут до кардиотренировки. Начинать с малых доз для оценки индивидуальной реакции.',
      icon: '⚖️'
    },
    {
      title: 'Формы выпуска',
      content: 'Доступен в виде L-карнитина тартрата, ацетил L-карнитина (ALCAR) и L-карнитина L-тартрата (LCLT). Выпускается в форме капсул, порошка и жидкости.',
      icon: '💊'
    },
    {
      title: 'Эффекты',
      content: 'Улучшает транспорт жирных кислот, поддерживает энергетический обмен, может способствовать жиросжиганию при регулярных кардиотренировках, улучшает восстановление после нагрузок.',
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
          L-карнитин
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
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Научные данные и рекомендации</h2>
          <div className="text-gray-600 leading-relaxed space-y-4">
            <p>
              Исследования (Fielding et al., 2018) показывают, что эффективность L-карнитина выше при сочетании с аэробными нагрузками. 
              Наибольший эффект наблюдается при регулярном приеме в сочетании с кардиотренировками.
            </p>
            <p className="font-semibold mt-4">Оптимальное применение:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Принимать за 30-60 минут до кардиотренировки</li>
              <li>Сочетать с углеводами для лучшего усвоения</li>
              <li>Поддерживать регулярный прием для накопительного эффекта</li>
              <li>Комбинировать с регулярными кардиотренировками</li>
              <li>Контролировать питьевой режим во время тренировок</li>
            </ul>
            <p className="font-semibold mt-4">Предостережения:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Возможна тошнота при приеме больших доз</li>
              <li>Начинать с минимальной дозировки</li>
              <li>При беременности и кормлении грудью проконсультироваться с врачом</li>
              <li>Не превышать рекомендуемые дозировки</li>
              <li>Хранить в сухом, прохладном месте</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </main>
  )
} 