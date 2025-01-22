'use client'
import React from 'react'
import CategoryLayout from '../../components/CategoryLayout'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CreatineATPChart, CreatineStrengthChart } from '@/app/components/Infographics'

export default function CreatinePage() {
  const sections = [
    {
      title: 'Что такое креатин?',
      content: 'Креатин — это натуральное вещество, которое помогает обеспечивать мышцы энергией во время интенсивных тренировок. Он является одной из самых изученных и эффективных спортивных добавок.',
      icon: '💪'
    },
    {
      title: 'Как принимать',
      content: 'Рекомендуемая доза: 5 грамм в день. Можно принимать в любое время дня, до или после тренировки. Фаза загрузки (20г/день в течение недели) необязательна, но может ускорить насыщение мышц.',
      icon: '⚖️'
    },
    {
      title: 'Эффекты',
      content: 'Увеличение силы и мышечной массы, улучшение восстановления между подходами, повышение работоспособности при высокоинтенсивных тренировках.',
      icon: '📈'
    },
    {
      title: 'Безопасность',
      content: 'Креатин является одной из самых безопасных добавок. Многочисленные исследования подтверждают его безопасность при длительном применении. Важно пить достаточно воды.',
      icon: '✅'
    }
  ]

  return (
    <CategoryLayout title="Креатин">
      <div className="space-y-8">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900/50 rounded-xl p-6 shadow-lg border border-gray-700/50
              hover:border-purple-500/30 transition-all duration-300"
          >
            <div className="flex items-start">
              <span className="text-3xl mr-4">{section.icon}</span>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-gray-100">
                  {section.title}
                </h2>
                <p className="text-gray-300">
                  {section.content}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <CreatineATPChart />
        <CreatineStrengthChart />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 bg-gray-900/50 rounded-xl p-6 shadow-lg border border-gray-700/50"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-100">
          Научные исследования
        </h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-blue-400">📊</span>
            <div>
              <h3 className="font-semibold text-gray-100">
                Мета-анализ 250+ исследований
              </h3>
              <p className="text-gray-300">
                Подтверждает эффективность и безопасность креатина для увеличения силы и мышечной массы
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-400">🧪</span>
            <div>
              <h3 className="font-semibold text-gray-100">
                Долгосрочные исследования
              </h3>
              <p className="text-gray-300">
                Показывают отсутствие негативных эффектов при приеме до 30 грамм в день в течение 5 лет
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-400">🎯</span>
            <div>
              <h3 className="font-semibold text-gray-100">
                Клинические испытания
              </h3>
              <p className="text-gray-300">
                Демонстрируют увеличение силовых показателей на 5-15% за 4-8 недель приема
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </CategoryLayout>
  )
} 