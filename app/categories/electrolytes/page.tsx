'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ElectrolytesPage() {
  const sections = [
    {
      title: 'Что такое электролиты?',
      content: 'Электролиты — это минералы (магний, калий, натрий и др.), которые регулируют водный баланс, мышечные сокращения и нервную проводимость. Особенно важны при интенсивных тренировках и обильном потоотделении.',
      icon: '💧'
    },
    {
      title: 'Дозировка',
      content: 'Магний: 300-400 мг/день, Калий: 3500-4700 мг/день (преимущественно из пищи). Потребность возрастает при интенсивных тренировках и жаркой погоде.',
      icon: '⚖️'
    },
    {
      title: 'Время приема',
      content: 'До и во время длительных тренировок, особенно в жаркую погоду. При коротких тренировках (менее часа) в прохладных условиях достаточно обычной воды.',
      icon: '⏰'
    },
    {
      title: 'Преимущества',
      content: 'Профилактика судорог, поддержка водно-солевого баланса, улучшение выносливости, ускорение восстановления, профилактика обезвоживания.',
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
          Электролиты
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
              Исследования (Nielsen et al., 2019) подтверждают критическую важность электролитов при интенсивных нагрузках. 
              Особенно важно восполнение при тренировках длительностью более часа или в условиях высокой температуры.
            </p>
            <p className="font-semibold mt-4">Признаки дефицита электролитов:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Мышечные судороги и спазмы</li>
              <li>Головокружение и слабость</li>
              <li>Нарушение координации</li>
              <li>Тошнота</li>
              <li>Учащенное сердцебиение</li>
            </ul>
            <p className="font-semibold mt-4">Важные рекомендации:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Контролируйте потребление при почечной недостаточности</li>
              <li>Не превышайте рекомендуемые дозировки</li>
              <li>Используйте специальные спортивные напитки при длительных тренировках</li>
              <li>Увеличивайте потребление в жаркую погоду</li>
              <li>Сочетайте с достаточным потреблением воды</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </main>
  )
} 