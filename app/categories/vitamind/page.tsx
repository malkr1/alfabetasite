'use client'
import React from 'react'
import CategoryLayout from '../../components/CategoryLayout'
import { motion } from 'framer-motion'

export default function VitaminDPage() {
  const sections = [
    {
      title: 'Что такое витамин D?',
      content: 'Витамин D — жирорастворимый витамин, который играет ключевую роль в усвоении кальция, здоровье костей, иммунитете и мышечной функции. Он уникален тем, что может синтезироваться в коже под воздействием солнечного света.',
      icon: '☀️'
    },
    {
      title: 'Дозировка',
      content: 'Рекомендуемая дозировка: 2000-4000 МЕ в день. При дефиците могут назначаться более высокие дозы под контролем врача. Важно регулярно проверять уровень витамина D в крови.',
      icon: '⚖️'
    },
    {
      title: 'Преимущества',
      content: 'Укрепляет кости и зубы, поддерживает иммунную систему, улучшает мышечную функцию, может помогать в профилактике депрессии и усталости.',
      icon: '💪'
    },
    {
      title: 'Источники',
      content: 'Жирная рыба, яичные желтки, обогащенные продукты. Основной источник — синтез в коже под воздействием UVB-лучей. В средних широтах часто требуется дополнительный прием.',
      icon: '🍳'
    }
  ]

  const benefits = [
    {
      title: 'Кости',
      description: 'Необходим для усвоения кальция и здоровья костей',
      icon: '🦴'
    },
    {
      title: 'Иммунитет',
      description: 'Поддерживает работу иммунной системы',
      icon: '🛡️'
    },
    {
      title: 'Мышцы',
      description: 'Улучшает мышечную функцию и силу',
      icon: '💪'
    },
    {
      title: 'Настроение',
      description: 'Может помогать в профилактике депрессии',
      icon: '😊'
    }
  ]

  const recommendations = [
    {
      title: 'Форма приема',
      content: 'Предпочтительно в форме D3 (холекальциферол)',
      icon: '💊'
    },
    {
      title: 'Время приема',
      content: 'Лучше принимать с жирной пищей для лучшего усвоения',
      icon: '🍽️'
    },
    {
      title: 'Мониторинг',
      content: 'Регулярно проверяйте уровень в крови',
      icon: '🔬'
    },
    {
      title: 'Сочетание',
      content: 'Хорошо сочетается с витамином K2 и магнием',
      icon: '🤝'
    }
  ]

  return (
    <CategoryLayout title="Витамин D">
      <div className="space-y-8">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700/50
              hover:border-orange-500/30 transition-all duration-300"
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