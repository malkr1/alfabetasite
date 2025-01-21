'use client'
import React from 'react'
import { motion } from 'framer-motion'

export function CreatineATPChart() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-2xl p-6 shadow-lg"
    >
      <h3 className="text-xl font-bold mb-6 text-gray-800">Как креатин превращается в АТФ</h3>
      <div className="relative h-64">
        <svg className="w-full h-full" viewBox="0 0 400 200">
          {/* Креатин */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <circle cx="50" cy="100" r="30" fill="#4F46E5" opacity="0.2" />
            <circle cx="50" cy="100" r="25" fill="#4F46E5" />
            <text x="50" y="100" textAnchor="middle" fill="white" dy=".3em" fontSize="12">
              Креатин
            </text>
          </motion.g>

          {/* Стрелка 1 */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1 }}
            d="M 85 100 L 145 100"
            stroke="#4F46E5"
            strokeWidth="2"
            fill="none"
            strokeDasharray="1"
          />

          {/* Креатинфосфат */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <circle cx="180" cy="100" r="35" fill="#7C3AED" opacity="0.2" />
            <circle cx="180" cy="100" r="30" fill="#7C3AED" />
            <text x="180" y="95" textAnchor="middle" fill="white" fontSize="12">
              Креатин-
            </text>
            <text x="180" y="110" textAnchor="middle" fill="white" fontSize="12">
              фосфат
            </text>
          </motion.g>

          {/* Стрелка 2 */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 2 }}
            d="M 215 100 L 275 100"
            stroke="#7C3AED"
            strokeWidth="2"
            fill="none"
            strokeDasharray="1"
          />

          {/* АТФ */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <circle cx="310" cy="100" r="30" fill="#EC4899" opacity="0.2" />
            <circle cx="310" cy="100" r="25" fill="#EC4899" />
            <text x="310" y="100" textAnchor="middle" fill="white" dy=".3em" fontSize="12">
              АТФ
            </text>
          </motion.g>

          {/* Подписи процесса */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            <text x="115" y="80" textAnchor="middle" fill="#4F46E5" fontSize="10">
              Фосфорилирование
            </text>
            <text x="245" y="80" textAnchor="middle" fill="#7C3AED" fontSize="10">
              Ресинтез АТФ
            </text>
          </motion.g>
        </svg>
      </div>
    </motion.div>
  )
}

export function CreatineStrengthChart() {
  const weeks = [0, 1, 2, 3, 4]
  const strengthData = [100, 105, 110, 115, 125]
  const maxStrength = Math.max(...strengthData)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-2xl p-6 shadow-lg"
    >
      <h3 className="text-xl font-bold mb-6 text-gray-800">Рост силовых показателей</h3>
      <div className="relative h-64">
        <svg className="w-full h-full" viewBox="0 0 400 200">
          {/* Ось Y */}
          <line x1="50" y1="150" x2="50" y2="30" stroke="#94A3B8" strokeWidth="2" />
          {/* Ось X */}
          <line x1="50" y1="150" x2="350" y2="150" stroke="#94A3B8" strokeWidth="2" />

          {/* График */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
            d={`M ${weeks.map((w, i) => `${50 + w * 75} ${150 - (strengthData[i] - 100) * 2}`).join(' L ')}`}
            stroke="#4F46E5"
            strokeWidth="3"
            fill="none"
          />

          {/* Точки данных */}
          {weeks.map((w, i) => (
            <motion.g
              key={w}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.5 }}
            >
              <circle
                cx={50 + w * 75}
                cy={150 - (strengthData[i] - 100) * 2}
                r="4"
                fill="#4F46E5"
              />
              {/* Подписи недель */}
              <text
                x={50 + w * 75}
                y="170"
                textAnchor="middle"
                fill="#64748B"
                fontSize="12"
              >
                Неделя {w}
              </text>
              {/* Значения */}
              <text
                x={50 + w * 75}
                y={145 - (strengthData[i] - 100) * 2}
                textAnchor="middle"
                fill="#4F46E5"
                fontSize="12"
              >
                {strengthData[i]}%
              </text>
            </motion.g>
          ))}
        </svg>
      </div>
      <p className="text-sm text-gray-600 mt-4">
        * На графике показан средний рост силовых показателей при регулярном приеме креатина
      </p>
    </motion.div>
  )
} 