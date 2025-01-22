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

  const ingredients = [
    {
      name: 'Кофеин',
      amount: '150-300 мг',
      effect: 'Энергия и фокус',
      icon: '☕'
    },
    {
      name: 'Креатин',
      amount: '3-5 г',
      effect: 'Сила и мощность',
      icon: '🔋'
    },
    {
      name: 'Бета-аланин',
      amount: '2-5 г',
      effect: 'Выносливость',
      icon: '🏃'
    },
    {
      name: 'L-цитруллин',
      amount: '6-8 г',
      effect: 'Пампинг',
      icon: '💪'
    },
    {
      name: 'Таурин',
      amount: '1-2 г',
      effect: 'Концентрация',
      icon: '🎯'
    },
    {
      name: 'Витамины B',
      amount: '100% RDA',
      effect: 'Метаболизм',
      icon: '🧬'
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
            className="bg-gray-900/50 rounded-xl p-6 shadow-lg border border-gray-700/50
              hover:border-red-500/30 transition-all duration-300"
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 bg-gray-900/50 rounded-xl p-6 shadow-lg border border-gray-700/50"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-100">
          Состав и дозировки
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={ingredient.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{ingredient.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-100">
                    {ingredient.name}
                  </h3>
                  <p className="text-blue-400 text-sm">
                    {ingredient.amount}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {ingredient.effect}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </CategoryLayout>
  )
} 