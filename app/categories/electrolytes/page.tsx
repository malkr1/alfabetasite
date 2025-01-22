'use client'
import React from 'react'
import CategoryLayout from '../../components/CategoryLayout'
import { motion } from 'framer-motion'

export default function ElectrolytesPage() {
  const sections = [
    {
      title: 'Что такое электролиты?',
      content: 'Электролиты — это минералы в крови и других жидкостях организма, которые несут электрический заряд. Основные электролиты включают натрий, калий, кальций и магний. Они критически важны для гидратации, нервной и мышечной функции.',
      icon: '⚡'
    },
    {
      title: 'Когда нужны?',
      content: 'Особенно важны при интенсивных тренировках, в жаркую погоду, при длительных кардио нагрузках. Потеря электролитов с потом должна быть компенсирована для поддержания оптимальной работоспособности.',
      icon: '💦'
    },
    {
      title: 'Симптомы дефицита',
      content: 'Мышечные судороги, слабость, головокружение, обезвоживание, нарушение координации. При тяжелых нагрузках риск дефицита возрастает.',
      icon: '⚠️'
    },
    {
      title: 'Источники',
      content: 'Спортивные напитки, электролитные порошки, минеральная вода, соленые закуски. Также содержатся в бананах (калий), молочных продуктах (кальций), орехах (магний).',
      icon: '🥤'
    }
  ]

  const minerals = [
    {
      name: 'Натрий',
      role: 'Регулирует водный баланс и нервную функцию',
      source: 'Соль, спортивные напитки',
      icon: '🧂'
    },
    {
      name: 'Калий',
      role: 'Важен для мышечной функции и сердечного ритма',
      source: 'Бананы, картофель, авокадо',
      icon: '🍌'
    },
    {
      name: 'Магний',
      role: 'Участвует в сокращении мышц и энергообмене',
      source: 'Орехи, семена, зелень',
      icon: '🥜'
    },
    {
      name: 'Кальций',
      role: 'Необходим для мышечных сокращений',
      source: 'Молочные продукты, зелень',
      icon: '🥛'
    }
  ]

  const recommendations = [
    {
      title: 'До тренировки',
      content: 'Убедитесь в достаточном потреблении электролитов',
      icon: '⏰'
    },
    {
      title: 'Во время',
      content: 'Пейте электролитные напитки при длительных нагрузках',
      icon: '🏃'
    },
    {
      title: 'После',
      content: 'Восполните потерянные с потом электролиты',
      icon: '🔄'
    },
    {
      title: 'Мониторинг',
      content: 'Следите за симптомами дефицита',
      icon: '👀'
    }
  ]

  return (
    <CategoryLayout title="Электролиты">
      <div className="space-y-8">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900/50 rounded-xl p-6 shadow-lg border border-gray-700/50
              hover:border-blue-500/30 transition-all duration-300"
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
          Основные электролиты
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {minerals.map((mineral, index) => (
            <motion.div
              key={mineral.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <span className="text-2xl">{mineral.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-100 mb-1">
                  {mineral.name}
                </h3>
                <p className="text-gray-300 mb-1">
                  {mineral.role}
                </p>
                <p className="text-gray-400 text-sm">
                  Источники: {mineral.source}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-8 bg-gray-900/50 rounded-xl p-6 shadow-lg border border-gray-700/50"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-100">
          Рекомендации по приему
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {recommendations.map((rec, index) => (
            <motion.div
              key={rec.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <span className="text-2xl">{rec.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-100 mb-1">
                  {rec.title}
                </h3>
                <p className="text-gray-300">
                  {rec.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </CategoryLayout>
  )
} 