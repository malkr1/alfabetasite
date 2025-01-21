'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function VitaminDPage() {
  const sections = [
    {
      title: 'Что такое Витамин D?',
      content: 'Витамин D — это жирорастворимый витамин, который играет ключевую роль в усвоении кальция, поддержании иммунитета и гормонального баланса. Часто называется "солнечным витамином", так как вырабатывается в коже под действием солнечных лучей.',
      icon: '☀️'
    },
    {
      title: 'Дозировка и прием',
      content: 'Рекомендуемая дозировка: 1000-4000 МЕ в день, зависит от уровня дефицита. Лучше принимать утром с жиросодержащей пищей для улучшения усвоения.',
      icon: '⚖️'
    },
    {
      title: 'Преимущества',
      content: 'Укрепляет иммунную систему, поддерживает здоровье костей и мышц, влияет на гормональный фон (включая тестостерон), улучшает настроение и когнитивные функции.',
      icon: '💪'
    },
    {
      title: 'Признаки дефицита',
      content: 'Мышечная слабость, частые простуды, усталость, плохое настроение, медленное восстановление после тренировок. Особенно актуально в регионах с малым количеством солнечных дней.',
      icon: '🌧️'
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
          Витамин D
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
              Исследования (Holick, 2017) показывают, что дефицит витамина D напрямую коррелирует с мышечной слабостью 
              и снижением спортивных показателей. Особенно важен для силовых атлетов и спортсменов, тренирующихся в помещении.
            </p>
            <p className="font-semibold mt-4">Важные рекомендации:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Регулярно проверяйте уровень витамина D в крови</li>
              <li>При приеме больших доз контролируйте уровень кальция (риск гиперкальциемии)</li>
              <li>Сочетайте прием с витамином K2 для лучшего усвоения кальция</li>
              <li>Принимайте с жирной пищей для улучшения усвоения</li>
              <li>В летние месяцы умеренное пребывание на солнце может заменить добавки</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </main>
  )
} 