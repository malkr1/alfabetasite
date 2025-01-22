'use client'
import React from 'react'
import CategoryLayout from '../../components/CategoryLayout'
import { motion } from 'framer-motion'

export default function CaffeinePage() {
  const sections = [
    {
      title: 'Что такое кофеин?',
      content: 'Кофеин — это природный стимулятор, который блокирует рецепторы аденозина и увеличивает выброс адреналина. Это приводит к повышению бодрости, концентрации и физической работоспособности. Пик концентрации в крови достигается через 45-60 минут.',
      icon: '☕'
    },
    {
      title: 'Научные данные',
      content: 'Мета-анализы показывают, что кофеин улучшает силовые показатели на 3-4%, выносливость на 2-12% в зависимости от дозы и вида нагрузки. Эффективность зависит от генетики (вариант гена CYP1A2) и регулярности употребления.',
      icon: '📊'
    },
    {
      title: 'Дозировка',
      content: 'Оптимальная доза: 3-6 мг на кг веса тела (200-400 мг для большинства людей). Начинать с малых доз для оценки индивидуальной переносимости. Принимать за 45-60 минут до тренировки для максимального эффекта.',
      icon: '⚖️'
    },
    {
      title: 'Механизм действия',
      content: 'Кофеин блокирует аденозиновые рецепторы, что уменьшает усталость. Увеличивает выброс адреналина, повышая мобилизацию жирных кислот. Усиливает сокращение мышц через увеличение высвобождения кальция.',
      icon: '🧬'
    }
  ]

  const benefits = [
    {
      title: 'Сила и мощность',
      description: 'Увеличивает максимальную силу и взрывную мощность',
      icon: '💪'
    },
    {
      title: 'Выносливость',
      description: 'Повышает аэробную и анаэробную выносливость',
      icon: '🏃'
    },
    {
      title: 'Концентрация',
      description: 'Улучшает реакцию и ментальную фокусировку',
      icon: '🎯'
    },
    {
      title: 'Метаболизм',
      description: 'Ускоряет расход калорий и окисление жиров',
      icon: '🔥'
    }
  ]

  const recommendations = [
    {
      title: 'Время приема',
      content: 'За 45-60 минут до тренировки для максимального эффекта',
      icon: '⏰'
    },
    {
      title: 'Толерантность',
      content: 'Делать перерывы каждые 4-6 недель для снижения привыкания',
      icon: '📅'
    },
    {
      title: 'Гидратация',
      content: 'Увеличить потребление воды из-за мочегонного эффекта',
      icon: '💧'
    },
    {
      title: 'Предостережения',
      content: 'Избегать приема после 16:00 для качественного сна',
      icon: '⚠️'
    }
  ]

  const studies = [
    {
      title: 'Влияние на силовые показатели',
      authors: 'Grgic J, et al.',
      year: '2020',
      journal: 'Journal of the International Society of Sports Nutrition',
      description: 'Мета-анализ 21 исследования показал, что кофеин увеличивает максимальную силу на 3-4% и мышечную выносливость на 6-8%. Оптимальная доза: 3-6 мг/кг веса тела.',
      link: 'https://doi.org/10.1186/s12970-020-00349-6',
      icon: '💪'
    },
    {
      title: 'Время приема и эффективность',
      authors: 'Guest N, et al.',
      year: '2021',
      journal: 'Sports Medicine',
      description: 'Пиковая концентрация кофеина в крови достигается через 45-60 минут после приема. Эффекты сохраняются 3-6 часов в зависимости от генетических особенностей.',
      link: 'https://doi.org/10.1007/s40279-020-01389-3',
      icon: '⏰'
    },
    {
      title: 'Генетические различия',
      authors: 'Southward K, et al.',
      year: '2018',
      journal: 'Medicine & Science in Sports & Exercise',
      description: 'Носители варианта AA гена CYP1A2 ("быстрые метаболизаторы") получают на 20-30% больший прирост производительности от приема кофеина.',
      link: 'https://doi.org/10.1249/MSS.0000000000001596',
      icon: '🧬'
    },
    {
      title: 'Влияние на метаболизм',
      authors: 'Ruiz-Moreno C, et al.',
      year: '2020',
      journal: 'Journal of Applied Physiology',
      description: 'Прием кофеина увеличивает расход энергии на 7-11% и окисление жиров на 10-29% при физической нагрузке. Эффект усиливается при тренировке натощак.',
      link: 'https://doi.org/10.1152/japplphysiol.00571.2020',
      icon: '🔥'
    }
  ]

  return (
    <CategoryLayout title="Кофеин">
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
                hover:border-red-500/30 transition-all duration-300"
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