'use client'
import React from 'react'
import CategoryLayout from '../../components/CategoryLayout'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CreatineATPChart, CreatineStrengthChart } from '@/app/components/Infographics'

export default function CreatinePage() {
  const sections = [
    {
      title: 'Что такое креатин?',
      content: 'Креатин — это натуральное соединение, которое синтезируется в организме и содержится в мясе. Он играет ключевую роль в энергетическом обмене мышц, увеличивая запасы креатинфосфата для быстрого восстановления АТФ.',
      icon: '🧬'
    },
    {
      title: 'Научные данные',
      content: 'Более 500 исследований подтверждают эффективность и безопасность креатина. Мета-анализы показывают увеличение силы на 5-15% и мышечной массы на 1-2 кг за 4-12 недель приема. Это одна из самых изученных спортивных добавок.',
      icon: '📊'
    },
    {
      title: 'Дозировка',
      content: 'Стандартный прием: 5г в день. Опционально: загрузочная фаза 20г/день на 5-7 дней для быстрого насыщения. Рекомендуется принимать с углеводами для лучшего усвоения.',
      icon: '⚖️'
    },
    {
      title: 'Механизм действия',
      content: 'Креатин увеличивает запасы фосфокреатина, ускоряет восстановление АТФ, усиливает гидратацию клеток и активирует пути синтеза белка. Это приводит к увеличению силы, мышечной массы и выносливости.',
      icon: '⚡'
    }
  ]

  const benefits = [
    {
      title: 'Сила',
      description: 'Увеличивает максимальную силу на 5-15%',
      icon: '💪'
    },
    {
      title: 'Масса',
      description: 'Способствует набору 1-2 кг мышечной массы',
      icon: '🏋️'
    },
    {
      title: 'Восстановление',
      description: 'Ускоряет восстановление между подходами',
      icon: '🔄'
    },
    {
      title: 'Выносливость',
      description: 'Улучшает результаты в повторных подходах',
      icon: '⏱️'
    }
  ]

  const recommendations = [
    {
      title: 'Форма',
      content: 'Моногидрат креатина - самая изученная и эффективная форма',
      icon: '💊'
    },
    {
      title: 'Время приема',
      content: 'До или после тренировки, важна регулярность приема',
      icon: '⏰'
    },
    {
      title: 'Сочетание',
      content: 'Лучше усваивается с углеводами и протеином',
      icon: '🤝'
    },
    {
      title: 'Гидратация',
      content: 'Увеличить потребление воды на 500-1000 мл в день',
      icon: '💧'
    }
  ]

  const warnings = [
    {
      title: 'Побочные эффекты',
      content: 'Может вызывать задержку воды в первые дни приема',
      icon: '⚠️'
    },
    {
      title: 'Противопоказания',
      content: 'Проконсультироваться при проблемах с почками',
      icon: '🏥'
    },
    {
      title: 'Качество',
      content: 'Выбирать проверенных производителей с сертификатами',
      icon: '✅'
    },
    {
      title: 'Ожидания',
      content: 'Эффект развивается постепенно, за 2-4 недели',
      icon: '📈'
    }
  ]

  const studies = [
    {
      title: 'Мета-анализ эффективности',
      authors: 'Kreider RB, et al.',
      year: '2017',
      journal: 'Journal of the International Society of Sports Nutrition',
      description: 'Анализ более 500 исследований подтвердил безопасность и эффективность креатина для увеличения силы и мышечной массы. Среднее увеличение силы составляет 5-15%.',
      link: 'https://doi.org/10.1186/s12970-017-0173-z',
      icon: '📊'
    },
    {
      title: 'Влияние на силовые показатели',
      authors: 'Antonio J, et al.',
      year: '2021',
      journal: 'Journal of the International Society of Sports Nutrition',
      description: 'Исследование показало увеличение максимальной силы на 5-15% и мышечной выносливости на 10-25% при регулярном приеме креатина в сочетании с силовыми тренировками.',
      link: 'https://doi.org/10.1186/s12970-021-00412-w',
      icon: '💪'
    },
    {
      title: 'Безопасность длительного приема',
      authors: 'Candow DG, et al.',
      year: '2019',
      journal: 'Nutrients',
      description: 'Долгосрочное исследование подтвердило безопасность приема до 30г креатина в день на протяжении 5 лет. Не выявлено негативного влияния на функции почек и печени.',
      link: 'https://doi.org/10.3390/nu11040937',
      icon: '🛡️'
    },
    {
      title: 'Механизмы действия',
      authors: 'Hall M, et al.',
      year: '2021',
      journal: 'Sports Medicine',
      description: 'Исследование раскрыло молекулярные механизмы действия креатина: увеличение запасов фосфокреатина, усиление синтеза белка, улучшение гидратации клеток и активация сателлитных клеток.',
      link: 'https://doi.org/10.1007/s40279-021-01439-4',
      icon: '🧬'
    }
  ]

  return (
    <CategoryLayout title="Креатин">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <CreatineATPChart />
        <CreatineStrengthChart />
      </div>
    </CategoryLayout>
  )
} 