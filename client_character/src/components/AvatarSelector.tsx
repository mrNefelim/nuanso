import React from 'react';
import { motion } from 'framer-motion';
import { avatars } from '../data/avatars';

interface AvatarSelectorProps {
  onSelect: (avatarUrl: string) => void;
  style?: 'minimalism' | 'fantasy' | 'business' | 'sci-fi';
}

const getStyleClasses = (style: string) => {
  switch (style) {
    case 'minimalism':
      return {
        container: 'bg-white border-gray-200',
        text: 'text-gray-900',
        accent: 'text-gray-600',
        button: 'bg-gray-50 hover:bg-gray-100 border-gray-200'
      };
    case 'fantasy':
      return {
        container: 'bg-amber-50 border-amber-200',
        text: 'text-amber-900',
        accent: 'text-amber-600',
        button: 'bg-amber-50 hover:bg-amber-100 border-amber-200'
      };
    case 'business':
      return {
        container: 'bg-blue-50 border-blue-200',
        text: 'text-blue-900',
        accent: 'text-blue-600',
        button: 'bg-blue-50 hover:bg-blue-100 border-blue-200'
      };
    case 'sci-fi':
      return {
        container: 'bg-purple-50 border-purple-200',
        text: 'text-purple-900',
        accent: 'text-purple-600',
        button: 'bg-purple-50 hover:bg-purple-100 border-purple-200'
      };
    default:
      return {
        container: 'bg-white border-gray-200',
        text: 'text-gray-900',
        accent: 'text-gray-600',
        button: 'bg-gray-50 hover:bg-gray-100 border-gray-200'
      };
  }
};

const AvatarSelector: React.FC<AvatarSelectorProps> = ({ onSelect, style = 'minimalism' }) => {
  const styleClasses = getStyleClasses(style);

  return (
    <div className="space-y-6">
      <h2 className={`text-2xl font-bold text-center ${styleClasses.text}`}>
        Выберите аватар для вашего клиента
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {avatars.map((avatar) => (
          <motion.button
            key={avatar.id}
            onClick={() => onSelect(avatar.id)}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={`aspect-square rounded-xl overflow-hidden p-4 shadow-lg group-hover:shadow-xl transition-shadow border ${styleClasses.button}`}>
              <img 
                src={avatar.url}
                alt={avatar.description || `Аватар ${avatar.id}`}
                className="w-full h-full object-cover"
              />
            </div>
            <p className={`mt-2 text-sm text-center ${styleClasses.accent}`}>
              {avatar.description}
            </p>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default AvatarSelector; 