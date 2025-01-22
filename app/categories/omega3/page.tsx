'use client'
import React from 'react'
import CategoryLayout from '../../components/CategoryLayout'
import { motion } from 'framer-motion'

export default function Omega3Page() {
  const sections = [
    {
      title: 'Что такое Омега-3?',
      content: 'Омега-3 — это незаменимые жирные кислоты (EPA и DHA), которые организм не может производить самостоятельно. Они играют важную роль в здоровье сердца, суставов и общем восстановлении.',
      icon: '🐟'
    },
    {
      title: 'Дозировка и прием',
      content: 'Рекомендуемая дозировка: 1-3 грамма EPA/DHA в сутки. Принимать лучше с едой для улучшения усвоения. При приеме натощак возможен рыбный привкус.',
      icon: '⚖️'
    },
    {
      title: 'Преимущества',
      content: 'Снижает воспаление в организме, поддерживает здоровье суставов и сердечно-сосудистой системы, улучшает восстановление после тренировок, может способствовать снижению боли в мышцах.',
      icon: '💪'
    },
    {
      title: 'Источники',
      content: 'Основные источники: жирная рыба (лосось, скумбрия, сардины), рыбий жир, водоросли. В форме добавок доступны в виде капсул или жидкого масла.',
      icon: '🌊'
    }
  ]

  const benefits = [
    {
      title: 'Сердце',
      description: 'Поддерживает здоровье сердечно-сосудистой системы',
      icon: '❤️'
    },
    {
      title: 'Суставы',
      description: 'Уменьшает воспаление и боль в суставах',
      icon: '🦴'
    },
    {
      title: 'Мозг',
      description: 'Улучшает когнитивные функции и память',
      icon: '🧠'
    },
    {
      title: 'Восстановление',
      description: 'Ускоряет восстановление после тренировок',
      icon: '🔄'
    }
  ]

  const recommendations = [
    {
      title: 'Качество',
      content: 'Выбирайте очищенный рыбий жир от проверенных производителей',
      icon: '✅'
    },
    {
      title: 'Хранение',
      content: 'Храните в холодильнике для предотвращения прогоркания',
      icon: '❄️'
    },
    {
      title: 'Прием',
      content: 'Принимайте во время еды для лучшего усвоения',
      icon: '🍽️'
    },
    {
      title: 'Противопоказания',
      content: 'Проконсультируйтесь с врачом при приеме антикоагулянтов',
      icon: '⚕️'
    }
  ]

  return (
    <CategoryLayout title="Омега-3">
      <div className="space-y-8">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900/50 rounded-xl p-6 shadow-lg border border-gray-700/50
              hover:border-cyan-500/30 transition-all duration-300"
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
          Польза для здоровья
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="flex items-start space-x-4"
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