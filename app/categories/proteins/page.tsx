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
      content: 'Протеин — это белковая добавка, которая помогает восстанавливать и наращивать мышечную массу. Состоит из аминокислот, необходимых для роста и восстановления тканей. Это один из важнейших нутриентов для спортсменов.',
      icon: '🧬'
    },
    {
      title: 'Научные данные',
      content: 'Исследования показывают, что оптимальное потребление белка для роста мышц составляет 1.6-2.2 г/кг массы тела. Прием протеина после тренировки ускоряет восстановление на 20-30% и значительно уменьшает мышечную боль.',
      icon: '📊'
    },
    {
      title: 'Дозировка',
      content: 'Стандартный прием: 20-30г на порцию. Суточная норма: 1.6-2.2г белка на кг веса. Оптимальное распределение: каждые 3-4 часа по 0.4г/кг для максимального синтеза мышечного белка.',
      icon: '⚖️'
    },
    {
      title: 'Механизм действия',
      content: 'Протеин расщепляется на аминокислоты, которые используются для восстановления и роста мышечных волокон. Особенно важны BCAA и лейцин, которые напрямую стимулируют синтез мышечного белка.',
      icon: '⚡'
    }
  ]

  const benefits = [
    {
      title: 'Восстановление',
      description: 'Ускоряет восстановление мышц после нагрузок',
      icon: '🔄'
    },
    {
      title: 'Рост',
      description: 'Обеспечивает материал для роста мышц',
      icon: '📈'
    },
    {
      title: 'Сила',
      description: 'Способствует увеличению силовых показателей',
      icon: '💪'
    },
    {
      title: 'Сохранение',
      description: 'Предотвращает потерю мышечной массы',
      icon: '🛡️'
    }
  ]

  const recommendations = [
    {
      title: 'Форма',
      content: 'Сывороточный изолят - самая быстрая и качественная форма',
      icon: '💊'
    },
    {
      title: 'Время приема',
      content: 'В течение 30 минут после тренировки для лучшего эффекта',
      icon: '⏰'
    },
    {
      title: 'Сочетание',
      content: 'Лучше усваивается с углеводами после тренировки',
      icon: '🤝'
    },
    {
      title: 'Распределение',
      content: 'Равномерно в течение дня каждые 3-4 часа',
      icon: '📅'
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

  const proteinTypes = [
    {
      title: 'Сывороточный',
      description: 'Быстрое усвоение (30-60 мин). Идеален после тренировки. Богат BCAA.',
      icon: '🥛',
      color: 'from-blue-400/20 to-blue-300/20'
    },
    {
      title: 'Казеиновый',
      description: 'Медленное усвоение (6-8 часов). Лучший выбор перед сном. Предотвращает катаболизм.',
      icon: '🌙',
      color: 'from-indigo-400/20 to-indigo-300/20'
    },
    {
      title: 'Яичный',
      description: 'Среднее усвоение. Полный аминокислотный профиль. Подходит при непереносимости лактозы.',
      icon: '🥚',
      color: 'from-amber-400/20 to-amber-300/20'
    },
    {
      title: 'Растительный',
      description: 'Гипоаллергенный. Подходит веганам. Рекомендуется комбинировать разные источники.',
      icon: '🌱',
      color: 'from-green-400/20 to-green-300/20'
    }
  ]

  return (
    <CategoryLayout title="Протеин">
      <div className="space-y-12">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-900/50 rounded-xl p-6 shadow-lg border border-gray-700/50"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-100">
            Типы протеина
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {proteinTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`rounded-lg p-4 bg-gradient-to-br ${type.color} border border-gray-700/30`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{type.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-100 mb-2">
                      {type.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {type.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gray-900/50 rounded-xl p-6 shadow-lg border border-gray-700/50"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-100">
            Преимущества
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gray-900/50 rounded-xl p-6 shadow-lg border border-gray-700/50"
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
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-gray-900/50 rounded-xl p-6 shadow-lg border border-gray-700/50"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-100">
            Научные исследования
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
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
      </div>

      <div className="mt-12">
        <ProteinCalculator />
      </div>
    </CategoryLayout>
  )
} 