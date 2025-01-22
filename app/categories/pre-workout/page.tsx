'use client'
import React from 'react'
import CategoryLayout from '../../components/CategoryLayout'
import { motion } from 'framer-motion'

export default function PreWorkoutPage() {
  const sections = [
    {
      title: 'Что такое предтренировочный комплекс?',
      content: 'Предтренировочный комплекс — это комбинация ингредиентов, направленных на повышение энергии, концентрации и работоспособности во время тренировки. Обычно включает кофеин, креатин, бета-аланин и другие компоненты.',
      icon: '⚡'
    },
    {
      title: 'Основные компоненты',
      content: 'Кофеин для энергии и фокуса, креатин для силы и мощности, бета-аланин для выносливости, L-цитруллин для пампинга, таурин для концентрации, витамины группы B для метаболизма энергии.',
      icon: '🧪'
    },
    {
      title: 'Как принимать',
      content: 'Принимать за 20-30 минут до тренировки. Начинать с половины рекомендуемой дозы для оценки индивидуальной реакции. Не использовать поздно вечером из-за содержания стимуляторов.',
      icon: '⏰'
    },
    {
      title: 'Эффекты',
      content: 'Повышение энергии и мотивации, улучшение силовых показателей, увеличение выносливости, усиление пампинга, повышение концентрации на тренировке.',
      icon: '💪'
    }
  ]

  return (
    <CategoryLayout title="Предтренировочный комплекс">
      <div className="space-y-8">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/50 dark:bg-gray-700/50 rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-start">
              <span className="text-3xl mr-4">{section.icon}</span>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                  {section.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {section.content}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </CategoryLayout>
  )
} 