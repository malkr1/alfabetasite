'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function SupplementInfo() {
  const supplements = [
    {
      name: 'Креатин',
      icon: '🔋',
      dosage: {
        amount: '3-5 г',
        frequency: 'ежедневно',
        note: 'Фаза загрузки необязательна'
      },
      timing: {
        optimal: 'После тренировки с углеводами',
        alternative: 'В любое время дня',
        note: 'Важна регулярность приема'
      },
      contraindications: [
        'Тяжелые заболевания почек',
        'Индивидуальная непереносимость'
      ],
      benefits: [
        'Увеличение силы и мощности',
        'Рост мышечной массы',
        'Улучшение восстановления'
      ],
      sideEffects: [
        'Задержка воды в первые дни',
        'Возможны спазмы при недостатке воды'
      ],
      safetyLevel: 'high',
      waterIntake: 'Минимум 2-3 литра воды в день'
    },
    {
      name: 'Протеин',
      icon: '💪',
      dosage: {
        amount: '20-30 г',
        frequency: '1-3 раза в день',
        note: '1.6-2.2 г белка на кг веса тела в сутки'
      },
      timing: {
        optimal: 'В течение 30 минут после тренировки',
        alternative: 'Между приемами пищи',
        note: 'Можно использовать как перекус'
      },
      contraindications: [
        'Тяжелые заболевания почек',
        'Непереносимость молочного белка (для сывороточного)'
      ],
      benefits: [
        'Восстановление мышц',
        'Набор мышечной массы',
        'Сохранение мышц при похудении'
      ],
      sideEffects: [
        'Возможно вздутие при непереносимости лактозы',
        'Дискомфорт при превышении дозировки'
      ],
      safetyLevel: 'high',
      waterIntake: 'Дополнительно 200-300 мл на порцию'
    },
    {
      name: 'BCAA',
      icon: '🧬',
      dosage: {
        amount: '5-10 г',
        frequency: '1-3 раза в день',
        note: 'При достаточном потреблении белка можно не принимать'
      },
      timing: {
        optimal: 'До и во время тренировки',
        alternative: 'Между приемами пищи',
        note: 'Особенно важно при тренировках натощак'
      },
      contraindications: [
        'Индивидуальная непереносимость',
        'Заболевания печени'
      ],
      benefits: [
        'Снижение мышечного распада',
        'Уменьшение усталости',
        'Поддержка иммунитета'
      ],
      sideEffects: [
        'Возможна тошнота при приеме натощак',
        'Редко - головная боль'
      ],
      safetyLevel: 'medium',
      waterIntake: 'Минимум 200 мл на порцию'
    },
    {
      name: 'Кофеин',
      icon: '☕',
      dosage: {
        amount: '200-400 мг',
        frequency: '1-2 раза в день',
        note: 'Не более 400 мг в сутки'
      },
      timing: {
        optimal: '30-60 минут до тренировки',
        alternative: 'Утром',
        note: 'Избегать приема вечером'
      },
      contraindications: [
        'Гипертония',
        'Аритмия',
        'Тревожность',
        'Бессонница'
      ],
      benefits: [
        'Повышение энергии',
        'Улучшение концентрации',
        'Ускорение метаболизма'
      ],
      sideEffects: [
        'Тахикардия',
        'Бессонница',
        'Тревожность',
        'Привыкание'
      ],
      safetyLevel: 'medium',
      waterIntake: 'Дополнительно 250-300 мл воды'
    },
    {
      name: 'Омега-3',
      icon: '🐟',
      dosage: {
        amount: '2-3 г',
        frequency: 'ежедневно',
        note: 'EPA + DHA должны составлять минимум 500 мг'
      },
      timing: {
        optimal: 'С приемами пищи',
        alternative: 'В любое время дня',
        note: 'Лучше разделить на 2-3 приема'
      },
      contraindications: [
        'Нарушения свертываемости крови',
        'Прием антикоагулянтов',
        'Аллергия на рыбу'
      ],
      benefits: [
        'Противовоспалительный эффект',
        'Поддержка суставов',
        'Улучшение работы мозга'
      ],
      sideEffects: [
        'Рыбная отрыжка',
        'Расстройство желудка при большой дозе'
      ],
      safetyLevel: 'high',
      waterIntake: 'Стандартный питьевой режим'
    }
  ]

  const [activeTab, setActiveTab] = useState(supplements[0].name)

  return (
    <section className="bg-white rounded-2xl p-6 shadow-lg">
      <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
        Ключевая информация
      </h2>

      {/* Табы */}
      <div className="flex flex-wrap gap-2 mb-6">
        {supplements.map((supp) => (
          <button
            key={supp.name}
            onClick={() => setActiveTab(supp.name)}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
              activeTab === supp.name
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span>{supp.icon}</span>
            {supp.name}
          </button>
        ))}
      </div>

      {/* Контент */}
      {supplements.map((supp) => (
        <motion.div
          key={supp.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: activeTab === supp.name ? 1 : 0,
            y: activeTab === supp.name ? 0 : 20,
            display: activeTab === supp.name ? 'block' : 'none'
          }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Дозировка и время приема */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-blue-600">💊</span> Дозировка
                </h3>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-blue-800 font-medium">{supp.dosage.amount} {supp.dosage.frequency}</p>
                  <p className="text-sm text-blue-600 mt-1">{supp.dosage.note}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-purple-600">⏰</span> Время приема
                </h3>
                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="text-purple-800 font-medium">Оптимально: {supp.timing.optimal}</p>
                  <p className="text-purple-800">Альтернативно: {supp.timing.alternative}</p>
                  <p className="text-sm text-purple-600 mt-1">{supp.timing.note}</p>
                </div>
              </div>
            </div>

            {/* Противопоказания и эффекты */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-red-600">⚠️</span> Противопоказания
                </h3>
                <div className="bg-red-50 rounded-lg p-4">
                  <ul className="list-disc list-inside space-y-1">
                    {supp.contraindications.map((item, index) => (
                      <li key={index} className="text-red-800">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-green-600">✅</span> Преимущества
                </h3>
                <div className="bg-green-50 rounded-lg p-4">
                  <ul className="list-disc list-inside space-y-1">
                    {supp.benefits.map((item, index) => (
                      <li key={index} className="text-green-800">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Дополнительная информация */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-yellow-600">⚡</span> Побочные эффекты
              </h3>
              <div className="bg-yellow-50 rounded-lg p-4">
                <ul className="list-disc list-inside space-y-1">
                  {supp.sideEffects.map((item, index) => (
                    <li key={index} className="text-yellow-800">{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-blue-600">💧</span> Потребление воды
              </h3>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-blue-800">{supp.waterIntake}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  )
} 