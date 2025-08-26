import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ProgressBar from '../components/ProgressBar';
import AvatarSelector from '../components/AvatarSelector';
import { Question, PersonaCard } from '../types/index';
import { createPersona } from '../services/personaService';

const questions: Question[] = [
  {
    id: 1,
    text: "Какая основная цель вашего клиента?",
    options: [
      "Продвижение по карьере",
      "Финансовая стабильность",
      "Личностный рост",
      "Семейное благополучие",
      "Здоровье и спорт",
      "Творческая самореализация"
    ],
    category: "goals"
  },
  {
    id: 2,
    text: "Что больше всего беспокоит вашего клиента?",
    options: [
      "Нехватка времени",
      "Финансовые проблемы",
      "Неопределенность будущего",
      "Отсутствие баланса",
      "Проблемы со здоровьем",
      "Сложности в отношениях"
    ],
    category: "pains"
  },
  {
    id: 3,
    text: "Какой стиль жизни предпочитает ваш клиент?",
    options: [
      "Активный и динамичный",
      "Спокойный и размеренный",
      "Творческий и нестандартный",
      "Практичный и рациональный",
      "Социально-ориентированный",
      "Индивидуалистичный"
    ],
    category: "lifestyle"
  },
  {
    id: 4,
    text: "Какие ценности наиболее важны для вашего клиента?",
    options: [
      "Семья и близкие",
      "Карьера и успех",
      "Свобода и независимость",
      "Стабильность и безопасность",
      "Развитие и обучение",
      "Творчество и самовыражение"
    ],
    category: "values"
  },
  {
    id: 5,
    text: "Как ваш клиент принимает решения?",
    options: [
      "Аналитически и рационально",
      "Интуитивно и эмоционально",
      "Советуется с близкими",
      "Изучает все варианты",
      "Действует быстро и решительно",
      "Взвешивает все за и против"
    ],
    category: "decision_making"
  },
  {
    id: 6,
    text: "Какой стиль общения предпочитает ваш клиент?",
    options: [
      "Прямой и открытый",
      "Тактичный и дипломатичный",
      "Дружелюбный и неформальный",
      "Профессиональный и деловой",
      "Эмоциональный и экспрессивный",
      "Сдержанный и формальный"
    ],
    category: "communication"
  },
  {
    id: 7,
    text: "Какие технологии использует ваш клиент?",
    options: [
      "Использует все новинки",
      "Только необходимое",
      "Минимум технологий",
      "Профессиональные инструменты",
      "Социальные сети",
      "Специализированные приложения"
    ],
    category: "tech_usage"
  },
  {
    id: 8,
    text: "Какой стиль визуального оформления предпочитает ваш клиент?",
    options: [
      "Минимализм",
      "Фэнтези",
      "Бизнес",
      "Научная фантастика"
    ],
    category: "style"
  }
];

const Play: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [personaName, setPersonaName] = useState('');
  const navigate = useNavigate();

  const handleAnswer = (answer: string) => {
    const currentQuestion = questions[currentStep - 1];
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id.toString()]: answer
    }));

    if (currentStep < questions.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      setCurrentStep(questions.length + 1);
    }
  };

  const handleAvatarSelect = (avatarUrl: string) => {
    console.log('Selected avatar:', avatarUrl);
    setSelectedAvatar(avatarUrl);
  };

  const handleComplete = async () => {
    if (!selectedAvatar || !personaName) return;

    console.log('Creating persona with avatar:', selectedAvatar);
    const persona: Omit<PersonaCard, 'id'> = {
      name: personaName,
      age: 30,
      job: 'Профессия',
      goals: [answers['1']],
      pains: [answers['2']],
      quote: 'Цитата персонажа',
      avatarUrl: selectedAvatar,
      createdAt: new Date().toISOString(),
      questionsMeta: answers,
      characteristics: [
        { name: 'Цель', value: answers['1'] },
        { name: 'Проблема', value: answers['2'] },
        { name: 'Стиль жизни', value: answers['3'] },
        { name: 'Ценности', value: answers['4'] },
        { name: 'Принятие решений', value: answers['5'] },
        { name: 'Стиль общения', value: answers['6'] },
        { name: 'Использование технологий', value: answers['7'] }
      ],
      style: answers['8'] as 'minimalism' | 'fantasy' | 'business' | 'sci-fi',
      description: additionalInfo
    };

    const personaId = await createPersona(persona);
    navigate(`/card/${personaId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <ProgressBar currentStep={currentStep} totalSteps={questions.length + 1} />

          <AnimatePresence mode="wait">
            {currentStep <= questions.length && (
              <motion.div
                key="question"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-purple-900 mb-6">
                  {questions[currentStep - 1].text}
                </h2>
                <div className="space-y-4">
                  {questions[currentStep - 1].options.map((option: string) => (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      className="w-full p-4 text-left border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {currentStep > questions.length && (
              <motion.div
                key="avatar"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-purple-900 mb-6">
                    Введите имя персонажа
                  </h2>
                  <input
                    type="text"
                    value={personaName}
                    onChange={(e) => setPersonaName(e.target.value)}
                    placeholder="Например: Алексей Петров"
                    className="w-full p-4 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-purple-900 mb-6">
                    Что мы не учли в опросе?
                  </h2>
                  <textarea
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                    placeholder="Расскажите что-то важное о вашем клиенте, что не было учтено в вопросах..."
                    className="w-full p-4 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    rows={4}
                  />
                </div>

                <AvatarSelector onSelect={handleAvatarSelect} style={answers['8'] as 'minimalism' | 'fantasy' | 'business' | 'sci-fi'} />
                <button
                  onClick={handleComplete}
                  className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
                  disabled={!selectedAvatar || !personaName}
                >
                  Завершить создание
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Play; 