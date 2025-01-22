'use client'
import React from 'react'
import CategoryLayout from '../../components/CategoryLayout'
import { motion } from 'framer-motion'

export default function LCarnitinePage() {
  const sections = [
    {
      title: 'Что такое L-карнитин?',
      content: 'L-карнитин — это аминокислотоподобное соединение, которое играет важную роль в энергетическом обмене. Он помогает транспортировать жирные кислоты в митохондрии клеток, где они используются для производства энергии.',
      icon: '⚡'
    },
    {
      title: 'Дозировка',
      content: 'Рекомендуемая дозировка: 2-4 грамма в день. Лучше принимать до тренировки. При приеме натощак усвоение улучшается. Можно разделить на несколько приемов в течение дня.',
      icon: '⚖️'
    },
    {
      title: 'Преимущества',
      content: 'Может способствовать улучшению жиросжигания, повышению выносливости, ускорению восстановления после тренировок, уменьшению мышечной усталости.',
      icon: '💪'
    },
    {
      title: 'Формы выпуска',
      content: 'Доступен в виде L-карнитина тартрата (порошок, капсулы), ацетил-L-карнитина (ALCAR), пропионил-L-карнитина (PLCAR) и жидкого L-карнитина.',
      icon: '💊'
    }
  ]

  const benefits = [
    {
      title: 'Жиросжигание',
      description: 'Помогает в транспорте жирных кислот для окисления',
      icon: '🔥'
    },
    {
      title: 'Выносливость',
      description: 'Может улучшать аэробную производительность',
      icon: '🏃'
    },
    {
      title: 'Восстановление',
      description: 'Способствует снижению мышечной усталости',
      icon: '🔄'
    },
    {
      title: 'Энергия',
      description: 'Участвует в производстве энергии из жиров',
      icon: '⚡'
    }
  ]

  const recommendations = [
    {
      title: 'Время приема',
      content: 'За 30-60 минут до тренировки',
      icon: '⏰'
    },
    {
      title: 'Сочетание',
      content: 'Хорошо сочетается с кофеином и альфа-липоевой кислотой',
      icon: '🤝'
    },
    {
      title: 'Питание',
      content: 'Лучше принимать натощак для улучшения усвоения',
      icon: '🍽️'
    },
    {
      title: 'Длительность',
      content: 'Курсовой прием 2-3 месяца с перерывом',
      icon: '📅'
    }
  ]

  return (
    <CategoryLayout title="L-карнитин">
      <div className="space-y-8">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700/50
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
        className="mt-12 bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700/50"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-100">
          Польза для здоровья
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="flex items-start space-x-4 bg-gray-900/50 rounded-lg p-4 border border-gray-700/50"
            >
              <span className="text-2xl">{benefit.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-100 mb-1">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
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
        className="mt-8 bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700/50"
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
              className="flex items-start space-x-4 bg-gray-900/50 rounded-lg p-4 border border-gray-700/50"
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