import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Question {
  id: number
  text: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const questions: Question[] = [
  {
    id: 1,
    text: "Какой оптимальный уровень витамина D в крови?",
    options: [
      "10-20 нг/мл",
      "20-30 нг/мл",
      "30-50 нг/мл",
      "50-70 нг/мл"
    ],
    correctAnswer: 2,
    explanation: "Согласно научным данным, оптимальный уровень витамина D в крови составляет 30-50 нг/мл (75-125 нмоль/л)."
  },
  {
    id: 2,
    text: "Какая оптимальная дозировка протеина для набора массы (в граммах на кг массы тела)?",
    options: [
      "0.8-1.2 г/кг",
      "1.6-2.2 г/кг",
      "2.5-3.0 г/кг",
      "3.5-4.0 г/кг"
    ],
    correctAnswer: 1,
    explanation: "Для набора мышечной массы рекомендуется потреблять 1.6-2.2г протеина на килограмм массы тела."
  },
  {
    id: 3,
    text: "Когда следует принимать электролиты во время тренировки?",
    options: [
      "Только перед тренировкой",
      "Только после тренировки",
      "Каждые 30 минут интенсивной работы",
      "Только при чувстве жажды"
    ],
    correctAnswer: 2,
    explanation: "Электролиты рекомендуется принимать каждые 30 минут интенсивной работы для поддержания водно-солевого баланса."
  },
  {
    id: 4,
    text: "Какая комбинация добавок НЕ рекомендуется для одновременного приема?",
    options: [
      "Протеин + Креатин",
      "BCAA + Электролиты",
      "Кофеин + Предтренировочный комплекс",
      "Витамин D + Омега-3"
    ],
    correctAnswer: 2,
    explanation: "Кофеин и предтренировочный комплекс не следует принимать вместе из-за риска перестимуляции и тахикардии."
  },
  {
    id: 5,
    text: "Через какое время после приема кофеина можно принимать креатин?",
    options: [
      "Сразу же",
      "Через 1 час",
      "Через 2 часа",
      "Через 4 часа"
    ],
    correctAnswer: 2,
    explanation: "Креатин рекомендуется принимать через 2 часа после кофеина, так как кофеин может снижать его усвоение."
  },
  {
    id: 6,
    text: "Какой приём пищи лучше всего подходит для приема Омега-3?",
    options: [
      "На голодный желудок",
      "С завтраком",
      "Перед сном",
      "Между приемами пищи"
    ],
    correctAnswer: 1,
    explanation: "Омега-3 рекомендуется принимать с завтраком для оптимального усвоения."
  },
  {
    id: 7,
    text: "Какие добавки рекомендуются для восстановления после травм?",
    options: [
      "Только протеин",
      "BCAA и креатин",
      "Коллаген + Витамин C",
      "Предтренировочный комплекс"
    ],
    correctAnswer: 2,
    explanation: "Для восстановления после травм рекомендуется комбинация коллагена и витамина C, а также повышенная доза Омега-3."
  },
  {
    id: 8,
    text: "Какие добавки рекомендуются для улучшения выносливости?",
    options: [
      "Креатин и протеин",
      "Бета-аланин и электролиты",
      "Витамины группы B",
      "Коллаген и глютамин"
    ],
    correctAnswer: 1,
    explanation: "Бета-аланин (3-5г/день) и электролиты во время нагрузок наиболее эффективны для улучшения выносливости."
  },
  {
    id: 9,
    text: "Как правильно хранить протеин?",
    options: [
      "В холодильнике",
      "В сухом прохладном месте",
      "При комнатной температуре на свету",
      "В морозильной камере"
    ],
    correctAnswer: 1,
    explanation: "Протеин следует хранить в сухом прохладном месте для сохранения его свойств."
  },
  {
    id: 10,
    text: "Какие добавки рекомендуются людям старше 40 лет?",
    options: [
      "Только протеин",
      "Суставные добавки и коэнзим Q10",
      "Предтренировочные комплексы",
      "BCAA"
    ],
    correctAnswer: 1,
    explanation: "Людям старше 40 лет рекомендуются суставные добавки, увеличенные дозы витамина D и коэнзим Q10 для энергии."
  },
  {
    id: 11,
    text: "Какой интервал должен быть между приемом цинка и железа?",
    options: [
      "Можно принимать вместе",
      "1 час",
      "2-3 часа",
      "6 часов"
    ],
    correctAnswer: 2,
    explanation: "Между приемом цинка и железа должно быть 2-3 часа из-за конкуренции за всасывание."
  },
  {
    id: 12,
    text: "Какие добавки лучше всего подходят для похудения?",
    options: [
      "Протеин и креатин",
      "L-карнитин до кардио и зеленый чай",
      "BCAA и глютамин",
      "Гейнер и мальтодекстрин"
    ],
    correctAnswer: 1,
    explanation: "L-карнитин до кардио тренировок и зеленый чай эффективны для метаболизма и жиросжигания."
  },
  {
    id: 13,
    text: "Как часто нужно делать перерывы в приеме предтренировочных комплексов?",
    options: [
      "Каждые 6-8 недель",
      "Каждый месяц",
      "Каждые 3 месяца",
      "Перерывы не нужны"
    ],
    correctAnswer: 0,
    explanation: "Рекомендуется делать перерывы каждые 6-8 недель для избежания привыкания к компонентам."
  },
  {
    id: 14,
    text: "Какое количество воды рекомендуется пить во время интенсивных тренировок?",
    options: [
      "50-100 мл каждый час",
      "200-300 мл каждые 15-20 минут",
      "500 мл каждые 30 минут",
      "Пить только после тренировки"
    ],
    correctAnswer: 1,
    explanation: "Рекомендуется пить 200-300 мл воды каждые 15-20 минут интенсивной тренировки."
  },
  {
    id: 15,
    text: "Какие добавки лучше всего принимать для восстановления после длительных тренировок?",
    options: [
      "Только воду",
      "Протеин и электролиты",
      "Креатин и BCAA",
      "Витамины группы B"
    ],
    correctAnswer: 1,
    explanation: "Протеин для восстановления мышц и электролиты для восполнения потерь оптимальны после длительных тренировок."
  }
]

export default function SupplementQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showExplanation, setShowExplanation] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
    setShowExplanation(true)
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    setSelectedAnswer(null)
    setShowExplanation(false)
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setShowExplanation(false)
    setQuizCompleted(false)
  }

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100
    if (percentage === 100) return "Отлично! Вы эксперт в спортивном питании! 🏆"
    if (percentage >= 80) return "Очень хороший результат! Вы хорошо разбираетесь в добавках! 🌟"
    if (percentage >= 60) return "Неплохо! Но есть куда расти! 📚"
    return "Стоит больше изучить теорию о спортивных добавках! 💪"
  }

  return (
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-700/50">
      <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r 
        from-blue-400 to-purple-400">
        Тест на знание спортивных добавок
      </h2>

      {!quizCompleted ? (
        <>
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <p className="text-gray-300 mb-2">
              Вопрос {currentQuestion + 1} из {questions.length}
            </p>
            <h3 className="text-xl text-gray-100 mb-4">
              {questions[currentQuestion].text}
            </h3>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full p-4 rounded-lg text-left transition-all duration-300 
                    ${selectedAnswer === null 
                      ? 'bg-gray-700/50 hover:bg-gray-600/50 text-gray-100' 
                      : selectedAnswer === index
                        ? index === questions[currentQuestion].correctAnswer
                          ? 'bg-green-500/20 text-green-300'
                          : 'bg-red-500/20 text-red-300'
                        : index === questions[currentQuestion].correctAnswer
                          ? 'bg-green-500/20 text-green-300'
                          : 'bg-gray-700/50 text-gray-400'
                    }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mb-6 p-4 rounded-lg bg-blue-900/30 text-gray-300"
              >
                {questions[currentQuestion].explanation}
              </motion.div>
            )}
          </AnimatePresence>

          {selectedAnswer !== null && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={nextQuestion}
              className="w-full p-4 rounded-lg bg-blue-600 hover:bg-blue-500 
                text-white font-medium transition-colors"
            >
              {currentQuestion < questions.length - 1 ? 'Следующий вопрос' : 'Завершить тест'}
            </motion.button>
          )}
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-100 mb-4">
            Ваш результат: {score} из {questions.length}
          </h3>
          <p className="text-xl text-gray-300 mb-6">
            {getScoreMessage()}
          </p>
          <button
            onClick={resetQuiz}
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 
              text-white font-medium transition-colors"
          >
            Пройти тест заново
          </button>
        </motion.div>
      )}
    </div>
  )
} 