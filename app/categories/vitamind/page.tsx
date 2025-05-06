'use client'
import React from 'react'
import CategoryLayout from '../../components/CategoryLayout'
import { motion } from 'framer-motion'

export default function VitaminDPage() {
  const sections = [
    {
      title: 'Что такое Витамин D?',
      content: 'Витамин D — это жирорастворимый витамин, который синтезируется в коже под действием солнечного света. Он критически важен для усвоения кальция, работы иммунной системы и гормонального баланса. Форма D3 (холекальциферол) наиболее эффективна.',
      icon: '☀️'
    },
    {
      title: 'Научные данные',
      content: '40-60% населения имеет недостаточный уровень витамина D. Оптимальный уровень в крови: 30-50 нг/мл (75-125 нмоль/л). Дефицит снижает силу и выносливость на 10-15%, замедляет восстановление и ослабляет иммунитет.',
      icon: '📊'
    },
    {
      title: 'Дозировка',
      content: 'При дефиците: 2000-4000 МЕ в день, при необходимости до 10000 МЕ под контролем врача. Рекомендуется проверять уровень в крови каждые 3-6 месяцев. Принимать с жирной пищей для лучшего усвоения.',
      icon: '⚖️'
    },
    {
      title: 'Механизм действия',
      content: 'Витамин D регулирует экспрессию более 1000 генов, влияет на синтез белка, силу мышечных сокращений и минерализацию костей. Оптимальный уровень важен для синтеза тестостерона и работы иммунной системы.',
      icon: '🧬'
    }
  ]

  const benefits = [
    {
      title: 'Сила и масса',
      description: 'Улучшает силовые показатели и рост мышц',
      icon: '💪'
    },
    {
      title: 'Иммунитет',
      description: 'Укрепляет защитные силы организма',
      icon: '🛡️'
    },
    {
      title: 'Кости',
      description: 'Усиливает минерализацию костной ткани',
      icon: '🦴'
    },
    {
      title: 'Гормоны',
      description: 'Поддерживает гормональный баланс',
      icon: '⚡'
    }
  ]

  const recommendations = [
    {
      title: 'Форма приема',
      content: 'D3 (холекальциферол) в масляной форме для лучшего усвоения',
      icon: '💊'
    },
    {
      title: 'Сочетание',
      content: 'Принимать с витамином K2 (100-200 мкг) и магнием (300-400 мг)',
      icon: '🤝'
    },
    {
      title: 'Мониторинг',
      content: 'Регулярно проверять уровень 25(OH)D в крови',
      icon: '📊'
    },
    {
      title: 'Противопоказания',
      content: 'Консультация врача при болезнях почек и гиперкальциемии',
      icon: '⚕️'
    }
  ]

  const studies = [
    {
      title: 'Влияние на силовые показатели',
      authors: 'Dzik KP, et al.',
      year: '2019',
      journal: 'Journal of Strength and Conditioning Research',
      description: 'Исследование показало, что дефицит витамина D снижает силу и мощность на 10-15%, а оптимальный уровень улучшает спортивные результаты.',
      link: 'https://doi.org/10.1519/JSC.0000000000003217',
      icon: '💪'
    },
    {
      title: 'Оптимальные дозировки',
      authors: 'Holick MF, et al.',
      year: '2019',
      journal: 'Reviews in Endocrine and Metabolic Disorders',
      description: 'Для достижения оптимального уровня требуется 2000-4000 МЕ/день, при дефиците до 10000 МЕ/день под наблюдением врача.',
      link: 'https://doi.org/10.1007/s11154-019-09517-9',
      icon: '⚖️'
    },
    {
      title: 'Восстановление и травмы',
      authors: 'Owens DJ, et al.',
      year: '2018',
      journal: 'Sports Medicine',
      description: 'Нормальный уровень витамина D снижает риск травм на 40% и ускоряет восстановление мышц после физических нагрузок.',
      link: 'https://doi.org/10.1007/s40279-018-0952-y',
      icon: '🔄'
    },
    {
      title: 'Иммунитет спортсменов',
      authors: 'He CS, et al.',
      year: '2018',
      journal: 'International Journal of Sport Nutrition and Exercise Metabolism',
      description: 'У спортсменов с нормальным уровнем витамина D на 40% реже возникают респираторные инфекции по сравнению с теми, у кого дефицит.',
      link: 'https://doi.org/10.1123/ijsnem.2017-0013',
      icon: '🛡️'
    }
  ]

  return (
    <CategoryLayout title="Витамин D">
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
                hover:border-orange-500/30 transition-all duration-300"
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