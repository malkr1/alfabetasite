'use client'
import React from 'react'
import CategoryLayout from '../../components/CategoryLayout'
import { motion } from 'framer-motion'

export default function ElectrolytesPage() {
  const sections = [
    {
      title: 'Что такое электролиты?',
      content: 'Электролиты — это заряженные минералы, необходимые для работы нервов, сокращения мышц и водного баланса. Ключевые электролиты включают натрий, калий, магний и кальций. При интенсивных тренировках они теряются с потом и требуют восполнения.',
      icon: '⚡'
    },
    {
      title: 'Научные данные',
      content: 'Потеря 2% массы тела из-за обезвоживания снижает производительность на 10-20%. Потери натрия могут составлять 0.5-2г в час при интенсивных тренировках. Дефицит электролитов увеличивает риск судорог и тепловых травм.',
      icon: '📊'
    },
    {
      title: 'Потребность',
      content: 'При тренировке: натрий 500-1000 мг/час, калий 150-250 мг/час, магний 100-200 мг/день, кальций 500-1000 мг/день. Потребность возрастает при жаркой погоде и длительных нагрузках.',
      icon: '⚖️'
    },
    {
      title: 'Признаки дефицита',
      content: 'Мышечные судороги, головокружение, усталость, нарушение координации. При интенсивных тренировках симптомы могут развиваться быстро, особенно в жарких условиях.',
      icon: '🔍'
    }
  ]

  const benefits = [
    {
      title: 'Гидратация',
      description: 'Поддерживают оптимальный водный баланс',
      icon: '💧'
    },
    {
      title: 'Мышечная функция',
      description: 'Обеспечивают нормальную работу мышц',
      icon: '💪'
    },
    {
      title: 'Нервная система',
      description: 'Необходимы для передачи нервных импульсов',
      icon: '⚡'
    },
    {
      title: 'Выносливость',
      description: 'Помогают поддерживать работоспособность',
      icon: '🏃'
    }
  ]

  const recommendations = [
    {
      title: 'До тренировки',
      content: '500-750 мл воды с электролитами за 2-3 часа до нагрузки',
      icon: '⏰'
    },
    {
      title: 'Во время',
      content: '200-300 мл каждые 15-20 минут интенсивной работы',
      icon: '🔄'
    },
    {
      title: 'После',
      content: '1.5 л на каждый кг потерянного веса с электролитами',
      icon: '📈'
    },
    {
      title: 'Предупреждения',
      content: 'Избегать избыточного потребления воды без электролитов',
      icon: '⚠️'
    }
  ]

  const studies = [
    {
      title: 'Влияние на производительность',
      authors: 'Baker LB, et al.',
      year: '2019',
      journal: 'Sports Medicine',
      description: 'Мета-анализ показал, что потеря 2% массы тела из-за дегидратации снижает силу на 8%, выносливость на 10-20% и когнитивные функции на 5-10%.',
      link: 'https://doi.org/10.1007/s40279-019-01180-2',
      icon: '📊'
    },
    {
      title: 'Потери при тренировках',
      authors: 'Shirreffs SM, et al.',
      year: '2019',
      journal: 'Journal of the International Society of Sports Nutrition',
      description: 'Исследование выявило, что потери натрия с потом составляют 0.5-2г/час при интенсивных тренировках, особенно в жарких условиях.',
      link: 'https://doi.org/10.1186/s12970-019-0290-2',
      icon: '💦'
    },
    {
      title: 'Оптимальное восполнение',
      authors: 'Thomas DT, et al.',
      year: '2021',
      journal: 'Medicine & Science in Sports & Exercise',
      description: 'Показано, что восполнение электролитов во время тренировки снижает риск судорог на 68% и улучшает выносливость на 12-15%.',
      link: 'https://doi.org/10.1249/MSS.0000000000002600',
      icon: '🔄'
    },
    {
      title: 'Магний и судороги',
      authors: 'Zhang Y, et al.',
      year: '2022',
      journal: 'Nutrients',
      description: 'Добавление 200-300 мг магния в спортивные напитки снижает частоту мышечных судорог на 48% при длительных тренировках.',
      link: 'https://doi.org/10.3390/nu14040812',
      icon: '💪'
    }
  ]

  return (
    <CategoryLayout title="Электролиты">
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