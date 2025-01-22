'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SupplementInfo() {
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const info = {
    dosage: [
      {
        supplement: 'Протеин',
        amount: '20-30г',
        timing: 'После тренировки, между приемами пищи',
        icon: '💪'
      },
      {
        supplement: 'Креатин',
        amount: '5г',
        timing: 'Ежедневно, в любое время',
        icon: '🔋'
      },
      {
        supplement: 'BCAA',
        amount: '5-10г',
        timing: 'До/во время тренировки',
        icon: '🧬'
      },
      {
        supplement: 'Кофеин',
        amount: '200-400мг',
        timing: '30-60 минут до тренировки',
        icon: '☕'
      }
    ],
    timing: [
      {
        period: 'До тренировки (30-60 минут)',
        supplements: ['Кофеин', 'L-карнитин', 'Предтренировочный комплекс'],
        icon: '⏰'
      },
      {
        period: 'Во время тренировки',
        supplements: ['BCAA', 'Электролиты'],
        icon: '⚡'
      },
      {
        period: 'После тренировки (до 30 минут)',
        supplements: ['Протеин', 'Креатин'],
        icon: '🔄'
      }
    ],
    effects: [
      {
        effect: 'Рост мышечной массы',
        supplements: ['Протеин', 'Креатин', 'BCAA'],
        icon: '💪'
      },
      {
        effect: 'Жиросжигание',
        supplements: ['L-карнитин', 'Кофеин'],
        icon: '🔥'
      },
      {
        effect: 'Повышение энергии',
        supplements: ['Кофеин', 'Предтренировочный комплекс'],
        icon: '⚡'
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
      {/* Дозировки */}
      <motion.div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg 
        border border-transparent hover:border-blue-200 dark:hover:border-blue-500/30 transition-all duration-300">
        <button
          onClick={() => toggleSection('dosage')}
          className="w-full text-left mb-4 flex items-center justify-between"
        >
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
            from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Дозировки
          </h3>
          <span className="text-xl text-gray-800 dark:text-gray-200">{expandedSections.includes('dosage') ? '▼' : '▶'}</span>
        </button>
        <AnimatePresence>
          {expandedSections.includes('dosage') && (
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {info.dosage.map((item, index) => (
                  <motion.div
                    key={item.supplement}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-blue-50/50 to-purple-50/50 
                      dark:from-blue-900/30 dark:to-purple-900/30 
                      rounded-lg p-4 border border-blue-100/50 dark:border-blue-500/20"
                  >
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100">{item.supplement}</h4>
                    <p className="text-blue-600 dark:text-blue-400 mt-1">{item.amount}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{item.timing}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Время приема */}
      <motion.div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg 
        border border-transparent hover:border-green-200 dark:hover:border-green-500/30 transition-all duration-300">
        <button
          onClick={() => toggleSection('timing')}
          className="w-full text-left mb-4 flex items-center justify-between"
        >
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
            from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400">
            Время приема
          </h3>
          <span className="text-xl text-gray-800 dark:text-gray-200">{expandedSections.includes('timing') ? '▼' : '▶'}</span>
        </button>
        <AnimatePresence>
          {expandedSections.includes('timing') && (
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="space-y-4">
                {info.timing.map((item, index) => (
                  <motion.div
                    key={item.period}
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
                        <h4 className="font-semibold text-gray-800 dark:text-gray-100">{item.period}</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {item.supplements.map((supplement) => (
                            <span
                              key={supplement}
                              className="inline-block px-3 py-1 bg-white/50 dark:bg-gray-700/50 
                                rounded-full text-sm text-gray-600 dark:text-gray-300"
                            >
                              {supplement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Эффекты */}
      <motion.div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg 
        border border-transparent hover:border-purple-200 dark:hover:border-purple-500/30 transition-all duration-300">
        <button
          onClick={() => toggleSection('effects')}
          className="w-full text-left mb-4 flex items-center justify-between"
        >
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
            from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
            Эффекты
          </h3>
          <span className="text-xl text-gray-800 dark:text-gray-200">{expandedSections.includes('effects') ? '▼' : '▶'}</span>
        </button>
        <AnimatePresence>
          {expandedSections.includes('effects') && (
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="grid gap-6 md:grid-cols-3">
                {info.effects.map((item, index) => (
                  <motion.div
                    key={item.effect}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-purple-50/50 to-pink-50/50 
                      dark:from-purple-900/30 dark:to-pink-900/30 
                      rounded-lg p-4 border border-purple-100/50 dark:border-purple-500/20"
                  >
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100">{item.effect}</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.supplements.map((supplement) => (
                        <span
                          key={supplement}
                          className="inline-block px-3 py-1 bg-white/50 dark:bg-gray-700/50 
                            rounded-full text-sm text-gray-600 dark:text-gray-300"
                        >
                          {supplement}
                        </span>
                      ))}
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