'use client'
import React from 'react'
import CategoryLayout from '../../components/CategoryLayout'
import { motion } from 'framer-motion'

export default function LCarnitinePage() {
  const sections = [
    {
      title: 'Что такое L-карнитин?',
      content: 'L-карнитин — это аминокислотоподобное соединение, которое транспортирует жирные кислоты в митохондрии для производства энергии. Организм синтезирует его из лизина и метионина, но при интенсивных тренировках может потребоваться дополнительный прием.',
      icon: '🧬'
    },
    {
      title: 'Научные данные',
      content: 'Мета-анализы показывают умеренный эффект L-карнитина на жиросжигание: в среднем на 1.3 кг больше по сравнению с плацебо при регулярных тренировках. Эффективность повышается при приеме с углеводами и длительном курсе (3-4 недели).',
      icon: '📊'
    },
    {
      title: 'Дозировка',
      content: 'Оптимальная доза: 2-4г в день, разделенная на 2-3 приема. Для максимального эффекта принимать за 60-90 минут до тренировки. Курс приема: минимум 3-4 недели. Усвоение улучшается при приеме с углеводами.',
      icon: '⚖️'
    },
    {
      title: 'Формы выпуска',
      content: 'L-карнитин тартрат лучше усваивается, ацетил-L-карнитин (ALCAR) лучше проникает в мозг, пропионил-L-карнитин (PLCAR) полезен для сердечно-сосудистой системы. Жидкая форма имеет более быстрое действие.',
      icon: '💊'
    }
  ]

  const benefits = [
    {
      title: 'Метаболизм жиров',
      description: 'Улучшает транспорт жирных кислот в митохондрии',
      icon: '🔥'
    },
    {
      title: 'Выносливость',
      description: 'Повышает работоспособность на тренировках',
      icon: '🏃'
    },
    {
      title: 'Восстановление',
      description: 'Уменьшает мышечные повреждения после нагрузок',
      icon: '🔄'
    },
    {
      title: 'Когнитивные функции',
      description: 'ALCAR может улучшать память и концентрацию',
      icon: '🧠'
    }
  ]

  const recommendations = [
    {
      title: 'Время приема',
      content: 'За 60-90 минут до тренировки, желательно с углеводами',
      icon: '⏰'
    },
    {
      title: 'Длительность',
      content: 'Курс минимум 3-4 недели для заметного эффекта',
      icon: '📅'
    },
    {
      title: 'Сочетание',
      content: 'Хорошо комбинируется с кофеином и зеленым чаем',
      icon: '🤝'
    },
    {
      title: 'Предостережения',
      content: 'Проконсультироваться при проблемах с щитовидной железой',
      icon: '⚕️'
    }
  ]

  const studies = [
    {
      title: 'Влияние на жировой обмен',
      authors: 'Pooyandjoo M, et al.',
      year: '2016',
      journal: 'Obesity Reviews',
      description: 'Мета-анализ показал, что прием L-карнитина приводит к дополнительной потере веса на 1.3 кг по сравнению с плацебо при регулярных тренировках.',
      link: 'https://doi.org/10.1111/obr.12436',
      icon: '⚖️'
    },
    {
      title: 'Восстановление мышц',
      authors: 'Fielding R, et al.',
      year: '2018',
      journal: 'Nutrients',
      description: 'Исследование выявило снижение маркеров мышечных повреждений на 45% и ускорение восстановления после интенсивных тренировок при приеме L-карнитина.',
      link: 'https://doi.org/10.3390/nu10030349',
      icon: '💪'
    },
    {
      title: 'Когнитивные эффекты',
      authors: 'Malaguarnera M, et al.',
      year: '2020',
      journal: 'Neurochemical Research',
      description: 'Ацетил-L-карнитин (ALCAR) улучшает память и концентрацию, особенно при умственном утомлении. Эффект заметен при дозе 1.5-3г в день.',
      link: 'https://doi.org/10.1007/s11064-020-02993-5',
      icon: '🧠'
    },
    {
      title: 'Оптимальное дозирование',
      authors: 'Wall BT, et al.',
      year: '2019',
      journal: 'Journal of Physiology',
      description: 'Биодоступность L-карнитина повышается на 80% при приеме с углеводами (80-100г). Максимальная концентрация в крови достигается через 60-90 минут.',
      link: 'https://doi.org/10.1113/JP277851',
      icon: '📊'
    }
  ]

  return (
    <CategoryLayout title="L-карнитин">
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