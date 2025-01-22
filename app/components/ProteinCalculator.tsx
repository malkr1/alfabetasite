'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function ProteinCalculator() {
  const [weight, setWeight] = useState('')
  const [activity, setActivity] = useState('moderate')
  const [goal, setGoal] = useState('muscle')

  const calculateProtein = () => {
    const weightNum = parseFloat(weight)
    if (!weightNum) return null

    let multiplier = 1.6 // базовый множитель
    
    // Корректировка на основе активности
    switch (activity) {
      case 'light':
        multiplier -= 0.2
        break
      case 'intense':
        multiplier += 0.2
        break
    }

    // Корректировка на основе цели
    switch (goal) {
      case 'cut':
        multiplier += 0.2 // больше белка при сушке
        break
      case 'maintain':
        multiplier -= 0.1
        break
    }

    const dailyProtein = Math.round(weightNum * multiplier)
    const mealsProtein = Math.round(dailyProtein / 4) // разделить на 4 приема пищи
    
    return {
      daily: dailyProtein,
      perMeal: mealsProtein
    }
  }

  const result = calculateProtein()

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Калькулятор протеина</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Ваш вес (кг)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
              bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100
              focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
              placeholder-gray-400 dark:placeholder-gray-500"
            placeholder="Например: 70"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Уровень активности</label>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
              bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100
              focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          >
            <option value="light">Легкие тренировки (2-3 раза в неделю)</option>
            <option value="moderate">Умеренные тренировки (3-4 раза в неделю)</option>
            <option value="intense">Интенсивные тренировки (5+ раз в неделю)</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Ваша цель</label>
          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
              bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100
              focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          >
            <option value="muscle">Набор мышечной массы</option>
            <option value="cut">Сушка</option>
            <option value="maintain">Поддержание формы</option>
          </select>
        </div>

        {result && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 p-6 bg-blue-50/50 dark:bg-blue-900/30 rounded-xl"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Ваша норма протеина:</h3>
            <div className="space-y-2">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-medium">В день:</span> {result.daily} грамм
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-medium">На один прием пищи:</span> {result.perMeal} грамм
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                * Рекомендуется разделить дневную норму на 4-5 приемов пищи
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
} 