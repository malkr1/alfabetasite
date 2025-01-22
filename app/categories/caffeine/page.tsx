'use client'
import React from 'react'
import CategoryLayout from '../../components/CategoryLayout'
import { motion } from 'framer-motion'

export default function CaffeinePage() {
  const sections = [
    {
      title: 'Что такое кофеин?',
      content: 'Кофеин — природный стимулятор, который улучшает концентрацию, бодрость и физическую производительность. Это самая широко используемая психоактивная субстанция в мире.',
      icon: '☕'
    },
    {
      title: 'Механизм действия',
      content: 'Кофеин блокирует рецепторы аденозина в мозге, уменьшая усталость и сонливость. Также он увеличивает выработку адреналина и улучшает мобилизацию жирных кислот.',
      icon: '🧠'
    },
    {
      title: 'Дозировка',
      content: 'Рекомендуемая доза: 200-400 мг за 30-60 минут до тренировки. Для начинающих рекомендуется начинать с меньших доз (100-200 мг) для оценки индивидуальной реакции.',
      icon: '⚖️'
    },
    {
      title: 'Преимущества',
      content: 'Повышение энергии и концентрации, улучшение силовых показателей, ускорение жиросжигания, снижение восприятия усталости во время тренировок.',
      icon: '💪'
    }
  ]

  const sources = [
    {
      name: 'Кофе',
      amount: '80-100 мг',
      serving: '1 чашка (240 мл)',
      icon: '☕'
    },
    {
      name: 'Энергетик',
      amount: '150-200 мг',
      serving: '1 банка (330 мл)',
      icon: '🥤'
    },
    {
      name: 'Предтреник',
      amount: '200-300 мг',
      serving: '1 порция',
      icon: '⚡'
    },
    {
      name: 'Таблетки',
      amount: '200 мг',
      serving: '1 таблетка',
      icon: '💊'
    }
  ]

  const warnings = [
    {
      title: 'Время приема',
      content: 'Избегайте приема за 6 часов до сна',
      icon: '⏰'
    },
    {
      title: 'Толерантность',
      content: 'Может развиваться привыкание',
      icon: '⚠️'
    },
    {
      title: 'Побочные эффекты',
      content: 'Бессонница, тревожность, учащенное сердцебиение',
      icon: '❗'
    },
    {
      title: 'Ограничения',
      content: 'Не рекомендуется при проблемах с сердцем и давлением',
      icon: '🚫'
    }
  ]

  return (
    <CategoryLayout title="Кофеин">
      <div className="space-y-8">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900/50 rounded-xl p-6 shadow-lg border border-gray-700/50
              hover:border-yellow-500/30 transition-all duration-300"
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
          Источники кофеина
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sources.map((source, index) => (
            <motion.div
              key={source.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{source.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-100">
                    {source.name}
                  </h3>
                  <p className="text-yellow-400 text-sm">
                    {source.amount}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {source.serving}
                  </p>
                </div>
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
          Предупреждения
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {warnings.map((warning, index) => (
            <motion.div
              key={warning.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <span className="text-2xl">{warning.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-100 mb-1">
                  {warning.title}
                </h3>
                <p className="text-gray-300">
                  {warning.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </CategoryLayout>
  )
} 