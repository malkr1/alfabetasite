'use client'
import React from 'react'
import CategoryLayout from '../../components/CategoryLayout'
import { motion } from 'framer-motion'

export default function BcaaPage() {
  const sections = [
    {
      title: 'Что такое BCAA?',
      content: 'BCAA (Branched Chain Amino Acids) — это комплекс из трех незаменимых аминокислот: лейцина, изолейцина и валина. Они играют важную роль в синтезе белка и восстановлении мышц.',
      icon: '🧬'
    },
    {
      title: 'Состав',
      content: 'Оптимальное соотношение аминокислот в BCAA — 2:1:1 (лейцин:изолейцин:валин). Лейцин является наиболее важным компонентом, так как он напрямую стимулирует синтез белка.',
      icon: '⚗️'
    },
    {
      title: 'Как принимать',
      content: 'Рекомендуемая доза: 5-10 грамм до и/или после тренировки. BCAA можно принимать как во время тренировки, так и между приемами пищи для поддержания анаболического состояния.',
      icon: '⚖️'
    },
    {
      title: 'Эффекты',
      content: 'Уменьшение мышечной усталости, ускорение восстановления, снижение мышечного распада при диете, поддержка иммунной системы во время интенсивных тренировок.',
      icon: '💪'
    }
  ]

  const benefits = [
    {
      title: 'Восстановление',
      description: 'Ускоряет процессы восстановления после тренировок',
      icon: '🔄'
    },
    {
      title: 'Защита мышц',
      description: 'Предотвращает катаболизм при интенсивных тренировках',
      icon: '🛡️'
    },
    {
      title: 'Энергия',
      description: 'Может использоваться как источник энергии при тренировках',
      icon: '⚡'
    },
    {
      title: 'Выносливость',
      description: 'Помогает увеличить продолжительность тренировок',
      icon: '🏃'
    }
  ]

  return (
    <CategoryLayout title="BCAA">
      <div className="space-y-8">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900/50 rounded-xl p-6 shadow-lg border border-gray-700/50
              hover:border-green-500/30 transition-all duration-300"
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
          Дополнительные преимущества
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    </CategoryLayout>
  )
} 