'use client'
import React from 'react'
import CategoryLayout from '../../components/CategoryLayout'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ProteinCalculator from '@/app/components/ProteinCalculator'

export default function ProteinsPage() {
  const sections = [
    {
      title: 'Что такое протеин?',
      content: 'Протеин — это белковая добавка, которая помогает восстанавливать и наращивать мышечную массу. Состоит из аминокислот, необходимых для роста и восстановления тканей.',
      icon: '🥛'
    },
    {
      title: 'Виды протеина',
      content: 'Сывороточный, казеиновый, яичный, соевый, гороховый. Каждый тип имеет свои преимущества и особенности усвоения.',
      icon: '🔄'
    },
    {
      title: 'Как принимать',
      content: 'Рекомендуемая дозировка: 20-30 грамм после тренировки или между приемами пищи. Общее потребление белка: 1.6-2.2 г на кг веса тела.',
      icon: '⏰'
    },
    {
      title: 'Преимущества',
      content: 'Ускоряет восстановление мышц, способствует их росту, помогает контролировать вес, удобный способ получения качественного белка.',
      icon: '💪'
    }
  ]

  return (
    <CategoryLayout title="Протеин">
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
        className="mt-12"
      >
        <ProteinCalculator />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 bg-gray-900/50 rounded-xl p-6 shadow-lg border border-gray-700/50"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-100">Выбор протеина</h2>
        <p className="text-gray-300 mb-4">
          При выборе протеина обратите внимание на:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Тип протеина (быстрый или медленный)</li>
          <li>Содержание белка на порцию (минимум 20г)</li>
          <li>Наличие дополнительных ингредиентов</li>
          <li>Качество сырья и репутацию производителя</li>
          <li>Индивидуальную переносимость компонентов</li>
        </ul>
      </motion.div>
    </CategoryLayout>
  )
} 