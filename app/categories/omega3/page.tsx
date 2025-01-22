'use client'
import React from 'react'
import CategoryLayout from '../../components/CategoryLayout'
import { motion } from 'framer-motion'

export default function Omega3Page() {
  const sections = [
    {
      title: 'Что такое Омега-3?',
      content: 'Омега-3 — это семейство полиненасыщенных жирных кислот, включающее EPA и DHA, которые являются важными компонентами клеточных мембран. Они обладают противовоспалительными свойствами и критически важны для работы мозга и сердца.',
      icon: '🧬'
    },
    {
      title: 'Научные данные',
      content: 'Исследования показывают, что омега-3 снижают воспаление на 20-35%, улучшают чувствительность к инсулину на 15-20% и ускоряют восстановление после тренировок. Также они важны для когнитивных функций и здоровья суставов.',
      icon: '📊'
    },
    {
      title: 'Дозировка',
      content: 'Для спортсменов: 2-3г в день (EPA+DHA), для общего здоровья: 1-2г в день. Оптимальное соотношение EPA:DHA = 2:1. Принимать с едой для лучшего усвоения. Курс: минимум 8-12 недель для заметного эффекта.',
      icon: '⚖️'
    },
    {
      title: 'Механизм действия',
      content: 'EPA и DHA встраиваются в клеточные мембраны, улучшая их текучесть. Они регулируют воспалительные процессы, снижая выработку провоспалительных веществ, что ускоряет восстановление и уменьшает мышечную боль.',
      icon: '🔬'
    }
  ]

  const benefits = [
    {
      title: 'Восстановление',
      description: 'Снижают воспаление и ускоряют регенерацию',
      icon: '🔄'
    },
    {
      title: 'Суставы',
      description: 'Поддерживают здоровье суставов и связок',
      icon: '🦴'
    },
    {
      title: 'Метаболизм',
      description: 'Улучшают чувствительность к инсулину',
      icon: '⚡'
    },
    {
      title: 'Когнитивные функции',
      description: 'Поддерживают здоровье мозга и концентрацию',
      icon: '🧠'
    }
  ]

  const recommendations = [
    {
      title: 'Время приема',
      content: 'Принимать во время еды для лучшего усвоения',
      icon: '⏰'
    },
    {
      title: 'Форма выпуска',
      content: 'Предпочтительны триглицериды с высокой концентрацией',
      icon: '💊'
    },
    {
      title: 'Хранение',
      content: 'Хранить в холодильнике для предотвращения окисления',
      icon: '❄️'
    },
    {
      title: 'Предостережения',
      content: 'Проконсультироваться при приеме антикоагулянтов',
      icon: '⚠️'
    }
  ]

  const studies = [
    {
      title: 'Влияние на воспаление',
      authors: 'Calder PC, et al.',
      year: '2020',
      journal: 'Nature Reviews Immunology',
      description: 'Мета-анализ показал, что прием 2-3г EPA+DHA в день снижает маркеры воспаления на 20-35% и ускоряет восстановление после интенсивных тренировок.',
      link: 'https://doi.org/10.1038/s41577-019-0276-7',
      icon: '🔬'
    },
    {
      title: 'Метаболические эффекты',
      authors: 'Abbott KA, et al.',
      year: '2021',
      journal: 'Clinical Nutrition',
      description: 'Исследование выявило улучшение чувствительности к инсулину на 15-20% и снижение воспаления жировой ткани при приеме омега-3 в течение 12 недель.',
      link: 'https://doi.org/10.1016/j.clnu.2020.12.020',
      icon: '📊'
    },
    {
      title: 'Восстановление мышц',
      authors: 'Philpott JD, et al.',
      year: '2019',
      journal: 'European Journal of Sport Science',
      description: 'Прием омега-3 (3г/день) уменьшил мышечную боль на 35% и ускорил восстановление силовых показателей после интенсивных тренировок.',
      link: 'https://doi.org/10.1080/17461391.2018.1505714',
      icon: '💪'
    },
    {
      title: 'Когнитивные функции',
      authors: 'Dyall SC, et al.',
      year: '2022',
      journal: 'Frontiers in Aging Neuroscience',
      description: 'DHA улучшает пластичность мозга и когнитивные функции, особенно память и скорость обработки информации при регулярном приеме 1-2г в день.',
      link: 'https://doi.org/10.3389/fnagi.2022.885228',
      icon: '🧠'
    }
  ]

  return (
    <CategoryLayout title="Омега-3">
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
            Преимущества
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
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
          transition={{ duration: 0.5, delay: 0.4 }}
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
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
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
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gray-900/50 rounded-xl p-6 shadow-lg border border-gray-700/50"
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
      </div>
    </CategoryLayout>
  )
} 