import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Goal {
  id: string
  title: string
  description: string
  icon: string
}

interface Supplement {
  name: string
  dosage: string
  timing: string
  description: string
  priority: 'essential' | 'recommended' | 'optional'
}

interface StackRecommendation {
  supplements: Supplement[]
  additionalNotes: string[]
}

const goals: Goal[] = [
  {
    id: 'muscle_gain',
    title: 'Набор мышечной массы',
    description: 'Увеличение мышечной массы и силовых показателей',
    icon: '💪'
  },
  {
    id: 'fat_loss',
    title: 'Жиросжигание',
    description: 'Снижение процента подкожного жира с сохранением мышц',
    icon: '🔥'
  },
  {
    id: 'endurance',
    title: 'Выносливость',
    description: 'Улучшение выносливости и работоспособности',
    icon: '🏃'
  },
  {
    id: 'recovery',
    title: 'Восстановление',
    description: 'Ускорение восстановления и реабилитация',
    icon: '🔄'
  },
  {
    id: 'health',
    title: 'Общее здоровье',
    description: 'Поддержание здоровья и иммунитета',
    icon: '❤️'
  }
]

const supplementStacks: Record<string, StackRecommendation> = {
  muscle_gain: {
    supplements: [
      {
        name: 'Протеин',
        dosage: '1.6-2.2г/кг массы тела',
        timing: 'После тренировки, между приемами пищи',
        description: 'Обеспечивает строительный материал для мышц',
        priority: 'essential'
      },
      {
        name: 'Креатин',
        dosage: '5г ежедневно',
        timing: 'В любое время дня',
        description: 'Увеличивает силу и мышечную выносливость',
        priority: 'essential'
      },
      {
        name: 'BCAA',
        dosage: '5-10г',
        timing: 'До/во время тренировки',
        description: 'Защищает мышцы от катаболизма',
        priority: 'recommended'
      },
      {
        name: 'Бета-аланин',
        dosage: '3-5г',
        timing: 'До тренировки',
        description: 'Улучшает мышечную выносливость',
        priority: 'optional'
      }
    ],
    additionalNotes: [
      'Убедитесь, что ваш общий калораж в профиците',
      'Принимайте протеин равномерно в течение дня',
      'Креатин можно принимать в любое время'
    ]
  },
  fat_loss: {
    supplements: [
      {
        name: 'L-карнитин',
        dosage: '2-3г',
        timing: 'За 30-40 минут до кардио',
        description: 'Способствует использованию жира как источника энергии',
        priority: 'essential'
      },
      {
        name: 'Протеин',
        dosage: '1.8-2.2г/кг массы тела',
        timing: 'После тренировки, между приемами пищи',
        description: 'Сохраняет мышечную массу при дефиците',
        priority: 'essential'
      },
      {
        name: 'CLA',
        dosage: '3-6г',
        timing: 'С основными приемами пищи',
        description: 'Может способствовать снижению жировой массы',
        priority: 'optional'
      },
      {
        name: 'Зеленый чай',
        dosage: '300-400мг EGCG',
        timing: 'До тренировки',
        description: 'Ускоряет метаболизм',
        priority: 'recommended'
      }
    ],
    additionalNotes: [
      'Поддерживайте умеренный дефицит калорий',
      'Увеличьте потребление белка для сохранения мышц',
      'Комбинируйте с кардио натощак для лучших результатов'
    ]
  },
  endurance: {
    supplements: [
      {
        name: 'Бета-аланин',
        dosage: '3-5г',
        timing: 'Ежедневно',
        description: 'Улучшает буферную емкость мышц',
        priority: 'essential'
      },
      {
        name: 'Электролиты',
        dosage: 'По потребности',
        timing: 'Во время длительных тренировок',
        description: 'Поддерживает водно-солевой баланс',
        priority: 'essential'
      },
      {
        name: 'Цитруллин малат',
        dosage: '6-8г',
        timing: 'За 30-40 минут до тренировки',
        description: 'Улучшает кровоток и выносливость',
        priority: 'recommended'
      },
      {
        name: 'BCAA',
        dosage: '5-10г',
        timing: 'Во время длительных тренировок',
        description: 'Предотвращает катаболизм при длительных нагрузках',
        priority: 'recommended'
      }
    ],
    additionalNotes: [
      'Регулярно контролируйте гидратацию',
      'Увеличивайте дозировку электролитов в жаркую погоду',
      'Бета-аланин может вызывать покалывание (парестезию)'
    ]
  },
  recovery: {
    supplements: [
      {
        name: 'Протеин',
        dosage: '25-30г',
        timing: 'Сразу после тренировки',
        description: 'Запускает процессы восстановления',
        priority: 'essential'
      },
      {
        name: 'Глютамин',
        dosage: '5-10г',
        timing: 'После тренировки и перед сном',
        description: 'Поддерживает иммунитет и восстановление',
        priority: 'recommended'
      },
      {
        name: 'ZMA',
        dosage: 'По инструкции',
        timing: 'Перед сном',
        description: 'Улучшает качество сна и восстановление',
        priority: 'optional'
      },
      {
        name: 'Омега-3',
        dosage: '2-3г',
        timing: 'С едой',
        description: 'Снижает воспаление',
        priority: 'recommended'
      }
    ],
    additionalNotes: [
      'Обеспечьте достаточное количество сна',
      'Следите за общим уровнем стресса',
      'Не пренебрегайте днями отдыха'
    ]
  },
  health: {
    supplements: [
      {
        name: 'Витамин D3',
        dosage: '2000-4000 МЕ',
        timing: 'С жирной пищей',
        description: 'Поддерживает иммунитет и здоровье костей',
        priority: 'essential'
      },
      {
        name: 'Омега-3',
        dosage: '2-3г',
        timing: 'С едой',
        description: 'Поддерживает здоровье сердца и мозга',
        priority: 'essential'
      },
      {
        name: 'Магний',
        dosage: '300-400мг',
        timing: 'Вечером',
        description: 'Важен для нервной системы и сна',
        priority: 'recommended'
      },
      {
        name: 'Пробиотики',
        dosage: 'По инструкции',
        timing: 'На голодный желудок',
        description: 'Поддерживают здоровье кишечника',
        priority: 'optional'
      }
    ],
    additionalNotes: [
      'Регулярно проверяйте уровень витамина D',
      'Поддерживайте регулярный режим сна',
      'Следите за качеством питания'
    ]
  }
}

export default function SupplementStack() {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([])
  const [showRecommendations, setShowRecommendations] = useState(false)

  const toggleGoal = (goalId: string) => {
    setSelectedGoals(prev => 
      prev.includes(goalId)
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    )
    setShowRecommendations(false)
  }

  const getRecommendations = () => {
    if (selectedGoals.length === 0) return null

    const allSupplements: Record<string, Supplement & { goals: string[] }> = {}
    
    selectedGoals.forEach(goalId => {
      const stack = supplementStacks[goalId]
      stack.supplements.forEach(supp => {
        if (allSupplements[supp.name]) {
          allSupplements[supp.name].goals.push(goalId)
        } else {
          allSupplements[supp.name] = {
            ...supp,
            goals: [goalId]
          }
        }
      })
    })

    // Сортируем добавки по приоритету и количеству целей
    const sortedSupplements = Object.values(allSupplements).sort((a, b) => {
      const priorityOrder = { essential: 0, recommended: 1, optional: 2 }
      if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
        return priorityOrder[a.priority] - priorityOrder[b.priority]
      }
      return b.goals.length - a.goals.length
    })

    return {
      supplements: sortedSupplements,
      notes: Array.from(new Set(
        selectedGoals.flatMap(goalId => supplementStacks[goalId].additionalNotes)
      ))
    }
  }

  const recommendations = showRecommendations ? getRecommendations() : null

  return (
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-700/50">
      <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r 
        from-blue-400 to-purple-400">
        Калькулятор стека добавок
      </h2>

      <div className="mb-8">
        <h3 className="text-xl text-gray-100 mb-4">Выберите ваши цели:</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {goals.map(goal => (
            <motion.button
              key={goal.id}
              onClick={() => toggleGoal(goal.id)}
              className={`p-4 rounded-lg text-left transition-all duration-300 ${
                selectedGoals.includes(goal.id)
                  ? 'bg-blue-600/30 border-blue-500/50'
                  : 'bg-gray-700/50 hover:bg-gray-600/50 border-transparent'
              } border`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-2xl mb-2">{goal.icon}</div>
              <h4 className="text-gray-100 font-medium">{goal.title}</h4>
              <p className="text-gray-400 text-sm mt-1">{goal.description}</p>
            </motion.button>
          ))}
        </div>
      </div>

      {selectedGoals.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <button
            onClick={() => setShowRecommendations(true)}
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 
              text-white font-medium transition-colors"
          >
            Получить рекомендации
          </button>
        </motion.div>
      )}

      <AnimatePresence>
        {showRecommendations && recommendations && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-8"
          >
            <h3 className="text-xl text-gray-100 mb-6">Рекомендуемый стек добавок:</h3>
            
            <div className="space-y-4">
              {recommendations.supplements.map((supp, index) => (
                <motion.div
                  key={supp.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-lg border ${
                    supp.priority === 'essential'
                      ? 'bg-blue-900/30 border-blue-500/30'
                      : supp.priority === 'recommended'
                        ? 'bg-purple-900/30 border-purple-500/30'
                        : 'bg-gray-700/30 border-gray-600/30'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-gray-100 font-medium">{supp.name}</h4>
                      <p className="text-gray-400 text-sm mt-1">{supp.description}</p>
                      <div className="mt-2 space-y-1">
                        <p className="text-sm">
                          <span className="text-blue-400">Дозировка:</span>
                          <span className="text-gray-300 ml-2">{supp.dosage}</span>
                        </p>
                        <p className="text-sm">
                          <span className="text-blue-400">Время приема:</span>
                          <span className="text-gray-300 ml-2">{supp.timing}</span>
                        </p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-medium
                      ${supp.priority === 'essential'
                        ? 'bg-blue-500/20 text-blue-300'
                        : supp.priority === 'recommended'
                          ? 'bg-purple-500/20 text-purple-300'
                          : 'bg-gray-600/20 text-gray-400'
                      }"
                    >
                      {supp.priority === 'essential' ? 'Важно' :
                       supp.priority === 'recommended' ? 'Рекомендуется' : 'Опционально'}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {recommendations.notes.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8 p-4 rounded-lg bg-gray-700/30 border border-gray-600/30"
              >
                <h4 className="text-gray-100 font-medium mb-3">Дополнительные рекомендации:</h4>
                <ul className="space-y-2">
                  {recommendations.notes.map((note, index) => (
                    <li key={index} className="text-gray-300 text-sm flex items-center">
                      <span className="text-blue-400 mr-2">•</span>
                      {note}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 