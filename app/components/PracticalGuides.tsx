'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PracticalGuides() {
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const guides = {
    combinations: [
      {
        title: 'Для силовых тренировок',
        items: [
          'Креатин (5г) после тренировки с углеводами',
          'Кофеин (200мг) или предтрен за 30-40 минут до тренировки',
          'Протеин (25-30г) + Креатин (5г) после тренировки',
          'BCAA (5-10г) во время тренировки',
          'Цитруллин малат (6-8г) + Бета-аланин (3-4г) перед тренировкой'
        ],
        icon: '💪'
      },
      {
        title: 'Для жиросжигания',
        items: [
          'L-карнитин (2г) + Кофеин (200мг) за 30-40 минут до кардио',
          'BCAA (5-10г) во время тренировки натощак',
          'Протеин (20-25г) после тренировки',
          'Омега-3 (2г) + Витамин D (2000-4000 МЕ) с завтраком',
          'Электролиты + BCAA при интенсивном кардио'
        ],
        icon: '🔥'
      },
      {
        title: 'Для восстановления',
        items: [
          'Протеин (30г) + Электролиты сразу после тренировки',
          'BCAA (5г) + Глютамин (5г) + ZMA перед сном',
          'Омега-3 (2-3г) + Куркумин для снижения воспаления',
          'Витамин D (2000-4000 МЕ) + K2 (100мкг) утром',
          'Магний (300-400мг) + Цинк (15мг) перед сном'
        ],
        icon: '🔄'
      }
    ],
    timing: [
      {
        title: 'Утро',
        items: [
          'Витамин D с жирной пищей',
          'Омега-3 с завтраком',
          'Креатин (можно в любое время)',
          'L-карнитин за 30-40 минут до утренней тренировки'
        ],
        icon: '🌅'
      },
      {
        title: 'До тренировки',
        items: [
          'Предтренировочный комплекс за 20-30 минут',
          'ИЛИ кофеин за 30-40 минут (не совмещать!)',
          'Цитруллин малат за 30-40 минут',
          'L-карнитин за 60 минут (с углеводами)'
        ],
        icon: '⏰'
      },
      {
        title: 'Во время тренировки',
        items: [
          'BCAA при длительных тренировках',
          'Электролиты каждые 30 минут интенсивной работы',
          'Быстрые углеводы при тренировках >1.5 часа',
          'Вода 200-300 мл каждые 15-20 минут'
        ],
        icon: '🏋️'
      },
      {
        title: 'После тренировки',
        items: [
          'Протеин в течение 30 минут',
          'Электролиты для восполнения потерь',
          'Креатин с углеводами (через 2 часа после кофеина)',
          'Комплекс аминокислот для восстановления'
        ],
        icon: '🔄'
      }
    ],
    incompatible: [
      {
        combination: 'Кофеин + Предтренировочный комплекс',
        reason: 'Риск перестимуляции и тахикардии',
        icon: '⚠️'
      },
      {
        combination: 'Креатин + Кофеин (одновременно)',
        reason: 'Кофеин может снижать усвоение креатина',
        icon: '⚠️'
      },
      {
        combination: 'Высокие дозы цинка + железо',
        reason: 'Конкуренция за всасывание, принимать с интервалом 2-3 часа',
        icon: '⚠️'
      },
      {
        combination: 'Кальций + Железо',
        reason: 'Кальций снижает усвоение железа, интервал 2 часа',
        icon: '⚠️'
      },
      {
        combination: 'Магний + Кальций (высокие дозы)',
        reason: 'Конкуренция за всасывание, принимать в разное время',
        icon: '⚠️'
      }
    ],
    myths: [
      {
        myth: 'BCAA эффективнее протеина',
        fact: 'Протеин содержит все необходимые аминокислоты, включая BCAA',
        icon: '🤔'
      },
      {
        myth: 'Протеин приводит к набору жира',
        fact: 'Избыток калорий вызывает набор веса, а не сам протеин',
        icon: '🤔'
      },
      {
        myth: 'Электролиты нужны только летом',
        fact: 'Они теряются с потом при любой интенсивной тренировке',
        icon: '🤔'
      },
      {
        myth: 'Креатин нужно циклить',
        fact: 'Безопасен при постоянном приеме, цикличность необязательна',
        icon: '🤔'
      },
      {
        myth: 'L-карнитин сжигает жир без тренировок',
        fact: 'Эффективен только в сочетании с регулярными тренировками',
        icon: '🤔'
      },
      {
        myth: 'Предтрен нужен на каждой тренировке',
        fact: 'Рекомендуется делать перерывы для избежания привыкания',
        icon: '🤔'
      },
      {
        myth: 'Больше добавок - лучше результат',
        fact: 'Важно правильное сочетание и дозировка, а не количество',
        icon: '🤔'
      }
    ],
    tips: [
      {
        title: 'Хранение',
        items: [
          'Омега-3 хранить в холодильнике',
          'Протеин в сухом прохладном месте',
          'Креатин в герметичной упаковке',
          'Витамины в тёмном месте'
        ],
        icon: '📦'
      },
      {
        title: 'Признаки качества',
        items: [
          'Сертификаты качества',
          'Прозрачный состав',
          'Отсутствие постороннего запаха',
          'Срок годности'
        ],
        icon: '✅'
      },
      {
        title: 'Экономия',
        items: [
          'Покупка больших упаковок',
          'Акции и скидки',
          'Программы лояльности',
          'Сравнение цен за порцию'
        ],
        icon: '💰'
      },
      {
        title: 'Оптимизация приема',
        items: [
          'Ведение дневника добавок',
          'Использование таймеров',
          'Подготовка порций заранее',
          'Чередование активных/пассивных фаз'
        ],
        icon: '📝'
      }
    ],
    individual: [
      {
        title: 'Начинающим',
        items: [
          'Начинать с базовых добавок (протеин, креатин)',
          'Тестировать по одной добавке за раз',
          'Начинать с минимальных дозировок',
          'Вести дневник реакций организма'
        ],
        icon: '🌱'
      },
      {
        title: 'Опытным',
        items: [
          'Комплексный подход к добавкам',
          'Циклирование предтренировочных',
          'Периодизация приема добавок',
          'Отслеживание долгосрочных эффектов'
        ],
        icon: '��'
      },
      {
        title: 'Женщинам',
        items: [
          'Повышенное внимание к железу и кальцию',
          'Корректировка дозировок с учетом массы тела',
          'Особенности приема во время КД',
          'Безопасные жиросжигатели'
        ],
        icon: '👩'
      },
      {
        title: '40+ лет',
        items: [
          'Акцент на суставные добавки',
          'Увеличенные дозы витамина D',
          'Коэнзим Q10 для энергии',
          'Контроль артериального давления'
        ],
        icon: '⏳'
      }
    ],
    sideEffects: [
      {
        effect: 'Проблемы с желудком',
        solution: 'Принимать с едой, разделить дозировку, использовать ферменты',
        icon: '🤢'
      },
      {
        effect: 'Нарушения сна',
        solution: 'Не принимать стимуляторы после 16:00, использовать магний вечером',
        icon: '��'
      },
      {
        effect: 'Обезвоживание',
        solution: 'Увеличить потребление воды, добавить электролиты',
        icon: '💧'
      },
      {
        effect: 'Повышенное давление',
        solution: 'Снизить дозировки стимуляторов, проконсультироваться с врачом',
        icon: '❤️'
      }
    ],
    goals: [
      {
        title: 'Набор массы',
        items: [
          'Протеин 1.6-2.2г/кг массы тела',
          'Креатин 5г ежедневно',
          'Гейнер для дополнительных калорий',
          'BCAA 5-10г во время тренировки'
        ],
        icon: '💪'
      },
      {
        title: 'Похудение',
        items: [
          'L-карнитин до кардио',
          'Протеин для сохранения мышц',
          'CLA с основными приемами пищи',
          'Зеленый чай для метаболизма'
        ],
        icon: '🔥'
      },
      {
        title: 'Выносливость',
        items: [
          'Бета-аланин 3-5г/день',
          'Электролиты во время нагрузок',
          'Цитруллин малат до тренировки',
          'BCAA для длительных тренировок'
        ],
        icon: '🏃'
      },
      {
        title: 'После травм',
        items: [
          'Коллаген + Витамин C',
          'Омега-3 в повышенной дозе',
          'Глюкозамин + Хондроитин',
          'Куркумин для снижения воспаления'
        ],
        icon: '🏥'
      }
    ]
  }

  const sectionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { duration: 0.5, ease: 'easeInOut' }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  }

  return (
    <div className="space-y-8">
      {/* Как сочетать добавки */}
      <motion.div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg 
        border border-transparent hover:border-blue-500/30 transition-all duration-300">
        <button
          onClick={() => toggleSection('combinations')}
          className="w-full text-left mb-4 flex items-center justify-between"
        >
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
            from-blue-400 to-purple-400">
            Как сочетать добавки
          </h3>
          <span className="text-gray-200">
            {expandedSections.includes('combinations') ? '▼' : '▶'}
          </span>
        </button>
        <AnimatePresence>
          {expandedSections.includes('combinations') && (
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {guides.combinations.map((combo, index) => (
                  <motion.div
                    key={combo.title}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 
                      rounded-lg p-4 border border-blue-500/20"
                  >
                    <div className="text-3xl mb-2">{combo.icon}</div>
                    <h4 className="font-semibold mb-2 text-gray-100">{combo.title}</h4>
                    <ul className="space-y-2">
                      {combo.items.map((item, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Время приема */}
      <motion.div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg 
        border border-transparent hover:border-green-500/30 transition-all duration-300">
        <button
          onClick={() => toggleSection('timing')}
          className="w-full text-left mb-4 flex items-center justify-between"
        >
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
            from-green-400 to-teal-400">
            Время приема
          </h3>
          <span className="text-gray-200">
            {expandedSections.includes('timing') ? '▼' : '▶'}
          </span>
        </button>
        <AnimatePresence>
          {expandedSections.includes('timing') && (
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {guides.timing.map((time, index) => (
                  <motion.div
                    key={time.title}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-green-900/30 to-teal-900/30 
                      rounded-lg p-4 border border-green-500/20"
                  >
                    <div className="text-3xl mb-2">{time.icon}</div>
                    <h4 className="font-semibold mb-2 text-gray-100">{time.title}</h4>
                    <ul className="space-y-2">
                      {time.items.map((item, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Несовместимые комбинации */}
      <motion.div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg 
        border border-transparent hover:border-red-500/30 transition-all duration-300">
        <button
          onClick={() => toggleSection('incompatible')}
          className="w-full text-left mb-4 flex items-center justify-between"
        >
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
            from-red-400 to-orange-400">
            Несовместимые комбинации
          </h3>
          <span className="text-gray-200">
            {expandedSections.includes('incompatible') ? '▼' : '▶'}
          </span>
        </button>
        <AnimatePresence>
          {expandedSections.includes('incompatible') && (
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="grid gap-6 md:grid-cols-2">
                {guides.incompatible.map((item, index) => (
                  <motion.div
                    key={item.combination}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-red-900/30 to-orange-900/30 
                      rounded-lg p-4 border border-red-500/20"
                  >
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">{item.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-100">{item.combination}</h4>
                        <p className="text-gray-300 mt-1">{item.reason}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Мифы и факты */}
      <motion.div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg 
        border border-transparent hover:border-purple-500/30 transition-all duration-300">
        <button
          onClick={() => toggleSection('myths')}
          className="w-full text-left mb-4 flex items-center justify-between"
        >
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
            from-purple-400 to-pink-400">
            Мифы и факты
          </h3>
          <span className="text-gray-200">
            {expandedSections.includes('myths') ? '▼' : '▶'}
          </span>
        </button>
        <AnimatePresence>
          {expandedSections.includes('myths') && (
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {guides.myths.map((item, index) => (
                  <motion.div
                    key={item.myth}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 
                      rounded-lg p-4 border border-purple-500/20"
                  >
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">{item.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-100">Миф: {item.myth}</h4>
                        <p className="text-gray-300 mt-1">Факт: {item.fact}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Полезные советы */}
      <motion.div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg 
        border border-transparent hover:border-yellow-500/30 transition-all duration-300">
        <button
          onClick={() => toggleSection('tips')}
          className="w-full text-left mb-4 flex items-center justify-between"
        >
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
            from-yellow-400 to-amber-400">
            Полезные советы
          </h3>
          <span className="text-gray-200">
            {expandedSections.includes('tips') ? '▼' : '▶'}
          </span>
        </button>
        <AnimatePresence>
          {expandedSections.includes('tips') && (
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {guides.tips.map((tip, index) => (
                  <motion.div
                    key={tip.title}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-yellow-900/30 to-amber-900/30 
                      rounded-lg p-4 border border-yellow-500/20"
                  >
                    <div className="text-3xl mb-2">{tip.icon}</div>
                    <h4 className="font-semibold mb-2 text-gray-100">{tip.title}</h4>
                    <ul className="space-y-2">
                      {tip.items.map((item, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Индивидуальные особенности */}
      <motion.div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg 
        border border-transparent hover:border-indigo-500/30 transition-all duration-300">
        <button
          onClick={() => toggleSection('individual')}
          className="w-full text-left mb-4 flex items-center justify-between"
        >
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
            from-indigo-400 to-blue-400">
            Индивидуальные особенности
          </h3>
          <span className="text-gray-200">
            {expandedSections.includes('individual') ? '▼' : '▶'}
          </span>
        </button>
        <AnimatePresence>
          {expandedSections.includes('individual') && (
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {guides.individual.map((item, index) => (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-indigo-900/30 to-blue-900/30 
                      rounded-lg p-4 border border-indigo-500/20"
                  >
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <h4 className="font-semibold mb-2 text-gray-100">{item.title}</h4>
                    <ul className="space-y-2">
                      {item.items.map((tip, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="mr-2">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Побочные эффекты */}
      <motion.div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg 
        border border-transparent hover:border-rose-500/30 transition-all duration-300">
        <button
          onClick={() => toggleSection('sideEffects')}
          className="w-full text-left mb-4 flex items-center justify-between"
        >
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
            from-rose-400 to-pink-400">
            Побочные эффекты
          </h3>
          <span className="text-gray-200">
            {expandedSections.includes('sideEffects') ? '▼' : '▶'}
          </span>
        </button>
        <AnimatePresence>
          {expandedSections.includes('sideEffects') && (
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="grid gap-6 md:grid-cols-2">
                {guides.sideEffects.map((item, index) => (
                  <motion.div
                    key={item.effect}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-rose-900/30 to-pink-900/30 
                      rounded-lg p-4 border border-rose-500/20"
                  >
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">{item.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-100">{item.effect}</h4>
                        <p className="text-gray-300 mt-1">{item.solution}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Цели приема */}
      <motion.div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg 
        border border-transparent hover:border-emerald-500/30 transition-all duration-300">
        <button
          onClick={() => toggleSection('goals')}
          className="w-full text-left mb-4 flex items-center justify-between"
        >
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
            from-emerald-400 to-teal-400">
            Цели приема
          </h3>
          <span className="text-gray-200">
            {expandedSections.includes('goals') ? '▼' : '▶'}
          </span>
        </button>
        <AnimatePresence>
          {expandedSections.includes('goals') && (
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {guides.goals.map((item, index) => (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 
                      rounded-lg p-4 border border-emerald-500/20"
                  >
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <h4 className="font-semibold mb-2 text-gray-100">{item.title}</h4>
                    <ul className="space-y-2">
                      {item.items.map((goal, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="mr-2">•</span>
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
} 