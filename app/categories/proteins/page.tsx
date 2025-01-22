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

  const studies = [
    {
      title: 'Оптимальное потребление белка',
      authors: 'Morton RW, et al.',
      year: '2018',
      journal: 'British Journal of Sports Medicine',
      description: 'Мета-анализ 49 исследований показал, что оптимальное потребление белка для роста мышц составляет 1.6-2.2 г/кг массы тела. Дальнейшее увеличение не дает дополнительных преимуществ.',
      link: 'https://doi.org/10.1136/bjsports-2017-097608',
      icon: '📊'
    },
    {
      title: 'Распределение белка в течение дня',
      authors: 'Schoenfeld BJ, et al.',
      year: '2018',
      journal: 'Journal of the International Society of Sports Nutrition',
      description: 'Исследование показало, что для максимального синтеза мышечного белка оптимально потреблять 0.4г/кг белка каждые 3-4 часа.',
      link: 'https://doi.org/10.1186/s12970-018-0215-1',
      icon: '⏰'
    },
    {
      title: 'Сравнение источников белка',
      authors: 'van Vliet S, et al.',
      year: '2015',
      journal: 'The Journal of Nutrition',
      description: 'Анализ показал, что сывороточный протеин превосходит другие источники по скорости усвоения и содержанию лейцина.',
      link: 'https://doi.org/10.3945/jn.114.203208',
      icon: '🥛'
    },
    {
      title: 'Влияние на восстановление',
      authors: 'Davies RW, et al.',
      year: '2018',
      journal: 'Nutrients',
      description: 'Систематический обзор подтверждает, что прием белка после тренировки ускоряет восстановление и уменьшает мышечную боль на 20-30%.',
      link: 'https://doi.org/10.3390/nu10020180',
      icon: '🔄'
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 bg-gray-900/50 rounded-xl p-6 shadow-lg border border-gray-700/50"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-100">
          Научные исследования
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {studies.map((study) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-700/50 
                transition-all duration-300 border border-gray-700/30"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl">{study.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-100 mb-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">
                    {study.authors} ({study.year}) - {study.journal}
                  </p>
                  <p className="text-gray-300 mb-3 text-sm">
                    {study.description}
                  </p>
                  <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm 
                      transition-colors flex items-center gap-1"
                  >
                    Читать исследование
                    <span className="text-xs">↗</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </CategoryLayout>
  )
} 