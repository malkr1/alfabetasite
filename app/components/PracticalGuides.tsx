'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PracticalGuides() {
  const [expandedMythIndex, setExpandedMythIndex] = useState<number | null>(null)
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
        title: 'Сила и мощность',
        items: [
          {
            combo: 'Креатин (5 г) + Кофеин (200 мг)',
            timing: 'За 30-40 минут до тренировки',
            note: 'Принимайте с интервалом в 1-2 часа для максимальной эффективности. Кофеин улучшает концентрацию, креатин повышает силовые показатели'
          },
          {
            combo: 'Протеин (30 г) + Креатин (5 г)',
            timing: 'После тренировки',
            note: 'Ускоряет восстановление и способствует лучшему усвоению креатина благодаря инсулиновому отклику'
          },
          {
            combo: 'BCAA (10 г) + Электролиты',
            timing: 'Во время тренировки',
            note: 'Помогает поддерживать гидратацию и предотвращает катаболизм мышц во время длительных тренировок'
          }
        ]
      },
      {
        title: 'Жиросжигание',
        items: [
          {
            combo: 'L-карнитин (2 г) + Кофеин (200 мг)',
            timing: 'За 30 минут до кардио',
            note: 'Кофеин усиливает мобилизацию жирных кислот, L-карнитин помогает их транспортировать в митохондрии'
          },
          {
            combo: 'Протеин (30 г) + Омега-3 (2-3 г)',
            timing: 'С приемами пищи',
            note: 'Помогает сохранить мышечную массу в период дефицита калорий и поддерживает здоровое воспаление'
          },
          {
            combo: 'BCAA (10 г) + Электролиты',
            timing: 'При тренировках натощак',
            note: 'Предотвращает разрушение мышц и поддерживает водный баланс во время интенсивных тренировок на голодный желудок'
          }
        ]
      },
      {
        title: 'Восстановление',
        items: [
          {
            combo: 'Протеин (30-40 г) + Электролиты',
            timing: 'Сразу после тренировки',
            note: 'Восполняет потерянные минералы и обеспечивает мышцы строительным материалом'
          },
          {
            combo: 'Казеин (30 г) + Омега-3 (2-3 г)',
            timing: 'Перед сном',
            note: 'Обеспечивает длительное поступление аминокислот, омега-3 поддерживает восстановительные процессы'
          },
          {
            combo: 'BCAA (5-10 г) + Витамин D (2000-4000 МЕ)',
            timing: 'В течение дня',
            note: 'Поддерживает иммунитет и способствует лучшему усвоению аминокислот'
          }
        ]
      }
    ],
    incompatible: [
      {
        combination: 'Кофеин + Предтренировочные комплексы с кофеином',
        risk: 'Может вызвать тахикардию, повышенное давление и тревожность из-за избытка стимуляторов. Суммарная доза кофеина не должна превышать 400 мг в день',
        solution: 'Выбирайте предтренировочные комплексы без кофеина или откажитесь от дополнительного приема кофеина'
      },
      {
        combination: 'Креатин + Кофеин (одновременный прием)',
        risk: 'Кофеин может временно снижать усвоение креатина из-за противоположного влияния на АТФ',
        solution: 'Разделите прием этих добавок минимум на 1-2 часа'
      },
      {
        combination: 'Высокие дозы кальция + Железо',
        risk: 'Кальций значительно снижает усвоение железа в кишечнике',
        solution: 'Принимайте эти минералы с разницей минимум в 2 часа'
      },
      {
        combination: 'Избыток BCAA + Дефицит витамина B6',
        risk: 'Нарушается усвоение аминокислот, возможно накопление токсичных промежуточных продуктов',
        solution: 'Обеспечьте достаточное потребление витамина B6 (2-5 мг в день) при приеме BCAA'
      }
    ],
    myths: [
      {
        myth: 'BCAA эффективнее протеина',
        fact: 'При достаточном потреблении белка дополнительный прием BCAA не даёт существенных преимуществ',
        icon: '🧬',
        source: 'Journal of the International Society of Sports Nutrition, 2017',
        details: 'Исследования показывают, что при потреблении 1.6-2.2г белка на кг веса, дополнительный прием BCAA не улучшает результаты'
      },
      {
        myth: 'Креатин вреден для почек',
        fact: 'У здоровых людей креатин безопасен даже при длительном применении',
        icon: '🔋',
        source: 'International Journal of Sport Nutrition and Exercise Metabolism, 2018',
        details: 'Более 500 исследований подтверждают безопасность креатина при правильной дозировке (5г/день)'
      },
      {
        myth: 'Протеин заменяет обычную еду',
        fact: 'Протеин — это добавка к питанию, а не замена полноценных приемов пищи',
        icon: '🥩',
        source: 'Sports Medicine, 2019',
        details: 'Цельные продукты содержат дополнительные питательные вещества, которых нет в протеине'
      },
      {
        myth: 'L-карнитин сжигает жир без тренировок',
        fact: 'L-карнитин эффективен только в сочетании с регулярными кардиотренировками',
        icon: '🔥',
        source: 'Obesity Reviews, 2016',
        details: 'L-карнитин улучшает транспорт жирных кислот, но для жиросжигания необходим дефицит калорий и физическая активность'
      },
      {
        myth: 'Протеин приводит к набору жира',
        fact: 'Избыток калорий вызывает набор веса, а не сам протеин',
        icon: '⚖️',
        source: 'Nutrients Journal, 2020',
        details: 'Протеин даже помогает сохранять мышечную массу при снижении веса и ускоряет метаболизм'
      },
      {
        myth: 'Электролиты нужны только летом',
        fact: 'Они теряются с потом при любой интенсивной тренировке',
        icon: '💧',
        source: 'Medicine & Science in Sports & Exercise, 2019',
        details: 'Потеря электролитов происходит круглый год, особенно при тренировках в помещении'
      }
    ]
  }

  const safetyCategories = {
    safe: {
      title: 'Безопасные добавки',
      description: 'Подтверждённая безопасность при длительном применении',
      color: 'bg-green-100 border-green-200',
      textColor: 'text-green-800',
      icon: '✓',
      supplements: ['Креатин моногидрат', 'Сывороточный протеин', 'Витамин D', 'Омега-3']
    },
    moderate: {
      title: 'Требуют внимания к дозировке',
      description: 'Безопасны при соблюдении рекомендаций',
      color: 'bg-yellow-100 border-yellow-200',
      textColor: 'text-yellow-800',
      icon: '⚠️',
      supplements: ['Кофеин', 'Предтренировочные комплексы', 'BCAA', 'L-карнитин']
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="space-y-12"
    >
      <section>
        <button
          onClick={() => toggleSection('combinations')}
          className="w-full text-left mb-6"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 flex items-center">
            Как сочетать добавки
            <span className="ml-3 text-blue-600">
              {expandedSections.includes('combinations') ? '▼' : '▶'}
            </span>
          </h2>
        </button>
        <AnimatePresence>
          {expandedSections.includes('combinations') && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ overflow: 'hidden' }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {guides.combinations.map((combo) => (
                  <motion.div
                    key={combo.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                  >
                    <h3 className="text-xl font-bold mb-4 text-gray-800">{combo.title}</h3>
                    <div className="space-y-4">
                      {combo.items.map((item, index) => (
                        <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                          <p className="font-semibold text-blue-600 mb-1">{item.combo}</p>
                          <p className="text-sm text-purple-600 mb-2">⏰ {item.timing}</p>
                          <p className="text-gray-600 text-sm">{item.note}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section>
        <button
          onClick={() => toggleSection('incompatible')}
          className="w-full text-left mb-6"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 flex items-center">
            Несовместимые комбинации
            <span className="ml-3 text-blue-600">
              {expandedSections.includes('incompatible') ? '▼' : '▶'}
            </span>
          </h2>
        </button>
        <AnimatePresence>
          {expandedSections.includes('incompatible') && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ overflow: 'hidden' }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="space-y-6">
                  {guides.incompatible.map((item, index) => (
                    <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
                      <div className="flex items-start mb-2">
                        <span className="text-red-500 mr-2">⚠️</span>
                        <h3 className="font-bold text-gray-800">{item.combination}</h3>
                      </div>
                      <p className="text-red-600 mb-2 pl-6 text-sm">{item.risk}</p>
                      <p className="text-green-600 pl-6 text-sm">✓ Решение: {item.solution}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section>
        <button
          onClick={() => toggleSection('myths')}
          className="w-full text-left mb-6"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 flex items-center">
            Мифы и факты
            <span className="ml-3 text-blue-600">
              {expandedSections.includes('myths') ? '▼' : '▶'}
            </span>
          </h2>
        </button>
        <AnimatePresence>
          {expandedSections.includes('myths') && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ overflow: 'hidden' }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {guides.myths.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-red-500">Миф: {item.myth}</h3>
                        <p className="text-gray-600 mb-3">
                          <span className="font-bold text-green-500">Факт:</span> {item.fact}
                        </p>
                        <div 
                          className={`overflow-hidden transition-all duration-300 ${
                            expandedMythIndex === index ? 'max-h-48' : 'max-h-0'
                          }`}
                        >
                          <p className="text-sm text-gray-600 mb-2">{item.details}</p>
                          <p className="text-xs text-blue-600">Источник: {item.source}</p>
                        </div>
                        <button
                          onClick={() => setExpandedMythIndex(expandedMythIndex === index ? null : index)}
                          className="text-sm text-purple-600 hover:text-purple-800 transition-colors mt-2"
                        >
                          {expandedMythIndex === index ? 'Скрыть' : 'Подробнее'}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section>
        <button
          onClick={() => toggleSection('safety')}
          className="w-full text-left mb-6"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 flex items-center">
            Категории безопасности
            <span className="ml-3 text-blue-600">
              {expandedSections.includes('safety') ? '▼' : '▶'}
            </span>
          </h2>
        </button>
        <AnimatePresence>
          {expandedSections.includes('safety') && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ overflow: 'hidden' }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.values(safetyCategories).map((category) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`rounded-2xl p-6 shadow-lg ${category.color} border`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{category.icon}</span>
                      <h3 className={`text-xl font-bold ${category.textColor}`}>{category.title}</h3>
                    </div>
                    <p className={`text-sm mb-4 ${category.textColor}`}>{category.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {category.supplements.map((supplement) => (
                        <div 
                          key={supplement}
                          className={`p-2 rounded-lg bg-white/50 ${category.textColor} text-sm`}
                        >
                          {supplement}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </motion.div>
  )
} 