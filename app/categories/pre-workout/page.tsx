'use client'
import React from 'react'
import CategoryLayout from '../../components/CategoryLayout'
import { motion } from 'framer-motion'

export default function PreWorkoutPage() {
  const sections = [
    {
      title: 'Что такое предтренировочный комплекс?',
      content: 'Предтренировочный комплекс (pre-workout) — это комбинация активных ингредиентов, направленных на повышение энергии, силы, выносливости и концентрации во время тренировки. Основные компоненты включают кофеин, бета-аланин, цитруллин малат и креатин.',
      icon: '💪'
    },
    {
      title: 'Научные данные',
      content: 'Исследования показывают, что правильно подобранный предтренировочный комплекс может увеличить силовые показатели на 5-8%, выносливость на 12-18% и мышечную работоспособность на 10-15%. Эффективность зависит от состава и индивидуальной реакции.',
      icon: '📊'
    },
    {
      title: 'Дозировка',
      content: 'Принимать за 20-30 минут до тренировки. Начинать с половины рекомендуемой дозы для оценки переносимости. Не превышать рекомендуемую дозировку. Делать перерывы каждые 6-8 недель для предотвращения привыкания.',
      icon: '⚖️'
    },
    {
      title: 'Механизм действия',
      content: 'Кофеин блокирует усталость и повышает концентрацию, бета-аланин увеличивает буферную емкость мышц, цитруллин улучшает кровоток и доставку питательных веществ, креатин обеспечивает быстрое восполнение АТФ.',
      icon: '🧬'
    }
  ]

  const benefits = [
    {
      title: 'Энергия',
      description: 'Повышает физическую и ментальную энергию',
      icon: '⚡'
    },
    {
      title: 'Выносливость',
      description: 'Увеличивает время до наступления усталости',
      icon: '🏃'
    },
    {
      title: 'Сила',
      description: 'Улучшает силовые показатели и мощность',
      icon: '💪'
    },
    {
      title: 'Концентрация',
      description: 'Усиливает фокус и мотивацию на тренировке',
      icon: '🎯'
    }
  ]

  const recommendations = [
    {
      title: 'Время приема',
      content: 'За 20-30 минут до тренировки на пустой желудок',
      icon: '⏰'
    },
    {
      title: 'Гидратация',
      content: 'Пить достаточно воды во время тренировки',
      icon: '💧'
    },
    {
      title: 'Цикличность',
      content: 'Делать перерывы каждые 6-8 недель',
      icon: '📅'
    },
    {
      title: 'Предостережения',
      content: 'Не принимать поздно вечером и при проблемах с сердцем',
      icon: '⚠️'
    }
  ]

  const studies = [
    {
      title: 'Эффективность комплекса',
      authors: 'Martinez N, et al.',
      year: '2021',
      journal: 'Journal of the International Society of Sports Nutrition',
      description: 'Мета-анализ показал, что многокомпонентные предтренировочные добавки увеличивают силу на 5-8%, выносливость на 12-18% и улучшают восстановление между подходами на 20-25%.',
      link: 'https://doi.org/10.1186/s12970-021-00442-4',
      icon: '📊'
    },
    {
      title: 'Оптимальные компоненты',
      authors: 'Harty PS, et al.',
      year: '2022',
      journal: 'Sports Medicine',
      description: 'Наиболее эффективная комбинация включает кофеин (3-6 мг/кг), бета-аланин (2-5 г), цитруллин малат (6-8 г) и креатин (3-5 г). Синергетический эффект компонентов усиливает общую эффективность.',
      link: 'https://doi.org/10.1007/s40279-022-01671-6',
      icon: '🧪'
    },
    {
      title: 'Время действия',
      authors: 'Gonzalez AM, et al.',
      year: '2020',
      journal: 'Journal of Strength and Conditioning Research',
      description: 'Оптимальное время приема - за 20-30 минут до тренировки. Пик эффективности наблюдается через 30-45 минут после приема и сохраняется 1.5-2.5 часа.',
      link: 'https://doi.org/10.1519/JSC.0000000000003412',
      icon: '⏰'
    },
    {
      title: 'Безопасность применения',
      authors: 'Campbell BI, et al.',
      year: '2023',
      journal: 'Nutrients',
      description: 'При соблюдении рекомендуемых дозировок и цикличности приема не выявлено негативных эффектов на здоровье. Рекомендуется периодическая оценка индивидуальной переносимости.',
      link: 'https://doi.org/10.3390/nu15010144',
      icon: '🛡️'
    }
  ]

  return (
    <CategoryLayout title="Предтренировочный комплекс">
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
                hover:border-purple-500/30 transition-all duration-300"
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