'use client'
import React from 'react'
import CategoryLayout from '../../components/CategoryLayout'
import { motion } from 'framer-motion'

export default function BcaaPage() {
  const sections = [
    {
      title: 'Что такое BCAA?',
      content: 'BCAA (аминокислоты с разветвленной цепью) — это три незаменимые аминокислоты: лейцин, изолейцин и валин. Они составляют около 35% мышечного белка и играют важную роль в синтезе белка, восстановлении и энергообеспечении.',
      icon: '🧬'
    },
    {
      title: 'Эффективность',
      content: 'Важно отметить: если вы получаете достаточно белка из пищи (1.6-2.2г/кг веса), дополнительный прием BCAA может быть избыточным. BCAA наиболее эффективны при тренировках натощак или при недостаточном потреблении белка.',
      icon: '⚖️'
    },
    {
      title: 'Дозировка',
      content: 'Оптимальная дозировка: 5-10г BCAA в соотношении лейцин:изолейцин:валин = 2:1:1. Принимать до, во время или после тренировки. При низкобелковой диете можно принимать между приемами пищи.',
      icon: '📊'
    },
    {
      title: 'Научные данные',
      content: 'Исследования показывают, что BCAA наиболее эффективны при недостаточном потреблении белка. Они снижают мышечную боль после тренировок на 30-35% и ускоряют восстановление. При достаточном потреблении белка эффект менее выражен.',
      icon: '🔬'
    }
  ]

  const benefits = [
    {
      title: 'Восстановление',
      description: 'Снижают мышечную боль и ускоряют регенерацию',
      icon: '🔄'
    },
    {
      title: 'Защита мышц',
      description: 'Предотвращают катаболизм при интенсивных тренировках',
      icon: '🛡️'
    },
    {
      title: 'Энергия',
      description: 'Могут использоваться как источник энергии при тренировках',
      icon: '⚡'
    },
    {
      title: 'Выносливость',
      description: 'Помогают увеличить продолжительность тренировок',
      icon: '🏃'
    }
  ]

  const recommendations = [
    {
      title: 'Оценка необходимости',
      content: 'Проанализируйте свой рацион - при достаточном потреблении белка BCAA могут быть не нужны',
      icon: '📋'
    },
    {
      title: 'Время приема',
      content: 'До, во время или после тренировки, в зависимости от цели',
      icon: '⏰'
    },
    {
      title: 'Сочетание',
      content: 'Можно комбинировать с электролитами во время тренировки',
      icon: '🤝'
    },
    {
      title: 'Форма выпуска',
      content: 'Порошок или капсулы, порошок быстрее усваивается',
      icon: '💊'
    },
    {
      title: 'Консультация',
      content: 'При заболеваниях печени и почек проконсультироваться с врачом',
      icon: '👨‍⚕️'
    }
  ]

  const studies = [
    {
      title: 'Эффективность BCAA',
      authors: 'Rahimi MH, et al.',
      year: '2017',
      journal: 'Journal of Sports Medicine and Physical Fitness',
      description: 'Мета-анализ показал, что BCAA снижают мышечную боль на 30-35% и ускоряют восстановление после интенсивных тренировок.',
      link: 'https://doi.org/10.23736/S0022-4707.17.06968-9',
      icon: '📊'
    },
    {
      title: 'Влияние на синтез белка',
      authors: 'Jackman SR, et al.',
      year: '2017',
      journal: 'Frontiers in Physiology',
      description: 'Исследование подтвердило, что BCAA стимулируют синтез мышечного белка на 22% при недостаточном потреблении белка с пищей.',
      link: 'https://doi.org/10.3389/fphys.2017.00390',
      icon: '🧬'
    },
    {
      title: 'Оптимальное соотношение',
      authors: 'Stokes T, et al.',
      year: '2018',
      journal: 'Nutrients',
      description: 'Анализ показал, что оптимальное соотношение лейцин:изолейцин:валин = 2:1:1 для максимальной стимуляции синтеза белка.',
      link: 'https://doi.org/10.3390/nu10121865',
      icon: '⚖️'
    },
    {
      title: 'Сравнение с протеином',
      authors: 'Churchward-Venne TA, et al.',
      year: '2014',
      journal: 'The Journal of Physiology',
      description: 'Исследование показало, что BCAA менее эффективны для роста мышц, чем полноценный белок, но могут быть полезны при низком потреблении белка.',
      link: 'https://doi.org/10.1113/jphysiol.2013.267708',
      icon: '🔍'
    }
  ]

  return (
    <CategoryLayout title="BCAA">
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