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

  return (
    <CategoryLayout title="Кофеин">
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