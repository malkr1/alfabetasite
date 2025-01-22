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
          'Креатин (5г) + Кофеин (200мг) за 30-40 минут до тренировки',
          'Протеин (25-30г) + Креатин (5г) после тренировки',
          'BCAA (5-10г) во время тренировки'
        ],
        icon: '💪'
      },
      {
        title: 'Для жиросжигания',
        items: [
          'L-карнитин (2г) + Кофеин (200мг) за 30 минут до кардио',
          'BCAA (5-10г) во время тренировки натощак',
          'Протеин (20-25г) после тренировки'
        ],
        icon: '🔥'
      },
      {
        title: 'Для восстановления',
        items: [
          'Протеин (30г) + Электролиты сразу после тренировки',
          'BCAA (5г) + Глютамин (5г) перед сном',
          'Омега-3 (2-3г) с любым приемом пищи'
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
        reason: 'Кофеин может временно снижать усвоение креатина',
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
      <motion.div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg 
        border border-transparent hover:border-blue-200 dark:hover:border-blue-500/30 transition-all duration-300">
        <button
          onClick={() => toggleSection('combinations')}
          className="w-full text-left mb-4 flex items-center justify-between"
        >
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
            from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Как сочетать добавки
          </h3>
          <span className="text-xl text-gray-800 dark:text-gray-200">
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
                    className="bg-gradient-to-br from-blue-50/50 to-purple-50/50 
                      dark:from-blue-900/30 dark:to-purple-900/30 
                      rounded-lg p-4 border border-blue-100/50 dark:border-blue-500/20"
                  >
                    <div className="text-3xl mb-2">{combo.icon}</div>
                    <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">{combo.title}</h4>
                    <ul className="space-y-2">
                      {combo.items.map((item, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
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
      <motion.div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg 
        border border-transparent hover:border-red-200 dark:hover:border-red-500/30 transition-all duration-300">
        <button
          onClick={() => toggleSection('incompatible')}
          className="w-full text-left mb-4 flex items-center justify-between"
        >
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
            from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400">
            Несовместимые комбинации
          </h3>
          <span className="text-xl text-gray-800 dark:text-gray-200">
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
              <div className="space-y-4">
                {guides.incompatible.map((item, index) => (
                  <motion.div
                    key={item.combination}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-red-50/50 to-orange-50/50 
                      dark:from-red-900/30 dark:to-orange-900/30 
                      rounded-lg p-4 border border-red-100/50 dark:border-red-500/20"
                  >
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">{item.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-100">{item.combination}</h4>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">{item.reason}</p>
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
      <motion.div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg 
        border border-transparent hover:border-green-200 dark:hover:border-green-500/30 transition-all duration-300">
        <button
          onClick={() => toggleSection('myths')}
          className="w-full text-left mb-4 flex items-center justify-between"
        >
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
            from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400">
            Мифы и факты
          </h3>
          <span className="text-xl text-gray-800 dark:text-gray-200">
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
              <div className="space-y-4">
                {guides.myths.map((item, index) => (
                  <motion.div
                    key={item.myth}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-green-50/50 to-teal-50/50 
                      dark:from-green-900/30 dark:to-teal-900/30 
                      rounded-lg p-4 border border-green-100/50 dark:border-green-500/20"
                  >
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">{item.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-100">Миф: {item.myth}</h4>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">Факт: {item.fact}</p>
                      </div>
                    </div>
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