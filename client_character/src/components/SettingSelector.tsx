import React from 'react';
import { motion } from 'framer-motion';

interface SettingSelectorProps {
  onSelect: (setting: 'minimal' | 'fantasy' | 'business' | 'scifi') => void;
}

const settings = [
  {
    id: 'minimal',
    title: 'Минимализм',
    description: 'Чистый и современный дизайн',
    icon: '🎨',
    preview: {
      bg: 'bg-minimal-50',
      border: 'border-minimal-200',
      text: 'text-minimal-900',
      accent: 'bg-minimal-300',
      gradient: 'from-minimal-50 to-minimal-100',
      pattern: 'bg-[linear-gradient(45deg,#f5f5f5_25%,transparent_25%),linear-gradient(-45deg,#f5f5f5_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#f5f5f5_75%),linear-gradient(-45deg,transparent_75%,#f5f5f5_75%)] bg-[size:20px_20px]',
      shape: 'rounded-none',
      decoration: 'before:absolute before:inset-0 before:border-2 before:border-minimal-200 before:translate-x-1 before:translate-y-1',
      animation: 'hover:translate-x-1 hover:translate-y-1'
    }
  },
  {
    id: 'fantasy',
    title: 'Фэнтези',
    description: 'Волшебный и сказочный стиль',
    icon: '🧙‍♂️',
    preview: {
      bg: 'bg-fantasy-50',
      border: 'border-fantasy-200',
      text: 'text-fantasy-900',
      accent: 'bg-fantasy-300',
      gradient: 'from-fantasy-50 to-fantasy-100',
      pattern: 'bg-[radial-gradient(circle_at_center,#86efac_0%,transparent_70%)]',
      shape: 'rounded-2xl',
      decoration: 'after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_0%,#86efac_0%,transparent_50%)] after:opacity-20',
      animation: 'hover:rotate-1 hover:scale-105'
    }
  },
  {
    id: 'business',
    title: 'Бизнес',
    description: 'Профессиональный и деловой',
    icon: '💼',
    preview: {
      bg: 'bg-business-50',
      border: 'border-business-200',
      text: 'text-business-900',
      accent: 'bg-business-300',
      gradient: 'from-business-50 to-business-100',
      pattern: 'bg-[linear-gradient(90deg,#93c5fd_1px,transparent_1px),linear-gradient(0deg,#93c5fd_1px,transparent_1px)] bg-[size:20px_20px]',
      shape: 'rounded-md',
      decoration: 'before:absolute before:inset-0 before:border-r-4 before:border-b-4 before:border-business-300 before:opacity-50',
      animation: 'hover:translate-y-[-2px] hover:shadow-lg'
    }
  },
  {
    id: 'scifi',
    title: 'Sci-Fi',
    description: 'Футуристический и технологичный',
    icon: '🚀',
    preview: {
      bg: 'bg-scifi-50',
      border: 'border-scifi-200',
      text: 'text-scifi-900',
      accent: 'bg-scifi-300',
      gradient: 'from-scifi-50 to-scifi-100',
      pattern: 'bg-[linear-gradient(45deg,#d8b4fe_25%,transparent_25%),linear-gradient(-45deg,#d8b4fe_25%,transparent_25%)] bg-[size:20px_20px]',
      shape: 'rounded-[30px]',
      decoration: 'after:absolute after:inset-0 after:bg-[linear-gradient(45deg,transparent_48%,#d8b4fe_49%,#d8b4fe_51%,transparent_52%)] after:opacity-20',
      animation: 'hover:scale-105 hover:rotate-[-1deg]'
    }
  }
];

const SettingSelector: React.FC<SettingSelectorProps> = ({ onSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {settings.map((setting) => (
        <motion.button
          key={setting.id}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(setting.id as any)}
          className={`relative overflow-hidden p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${setting.preview.border} ${setting.preview.shape} ${setting.preview.decoration} ${setting.preview.animation}`}
        >
          <div className={`absolute inset-0 ${setting.preview.pattern} opacity-10`} />
          <div className={`absolute inset-0 bg-gradient-to-br ${setting.preview.gradient} opacity-20`} />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">{setting.icon}</div>
              <div className="flex space-x-2">
                <div className={`w-8 h-8 ${setting.preview.shape} ${setting.preview.accent} transition-transform duration-300 hover:scale-110`} />
                <div className={`w-8 h-8 ${setting.preview.shape} ${setting.preview.bg} border-2 ${setting.preview.border} transition-transform duration-300 hover:scale-110`} />
              </div>
            </div>
            <h3 className={`text-xl font-semibold ${setting.preview.text} mb-2`}>
              {setting.title}
            </h3>
            <p className="text-gray-600">{setting.description}</p>
            <div className="mt-4 flex space-x-2">
              <div className={`w-12 h-2 ${setting.preview.shape} ${setting.preview.accent} transition-all duration-300 hover:w-16`} />
              <div className={`w-8 h-2 ${setting.preview.shape} ${setting.preview.accent} transition-all duration-300 hover:w-12`} />
              <div className={`w-4 h-2 ${setting.preview.shape} ${setting.preview.accent} transition-all duration-300 hover:w-8`} />
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
};

export default SettingSelector; 