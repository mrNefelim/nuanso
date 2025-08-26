import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PersonaCard } from '../types/index';
import { getPersonasByUser } from '../services/personaService';
import { avatars } from '../data/avatars';
import { motion } from 'framer-motion';

const getStyleClasses = (style: string) => {
  switch (style) {
    case 'minimalism':
      return {
        container: 'border-gray-200',
        background: 'bg-gray-50',
        border: 'border-gray-300',
        text: 'text-gray-900',
        accent: 'text-gray-600'
      };
    case 'fantasy':
      return {
        container: 'border-amber-200',
        background: 'bg-amber-50',
        border: 'border-amber-300',
        text: 'text-amber-900',
        accent: 'text-amber-600'
      };
    case 'business':
      return {
        container: 'border-blue-200',
        background: 'bg-blue-50',
        border: 'border-blue-300',
        text: 'text-blue-900',
        accent: 'text-blue-600'
      };
    case 'sci-fi':
      return {
        container: 'border-purple-200',
        background: 'bg-purple-50',
        border: 'border-purple-300',
        text: 'text-purple-900',
        accent: 'text-purple-600'
      };
    default:
      return {
        container: 'border-gray-200',
        background: 'bg-gray-50',
        border: 'border-gray-300',
        text: 'text-gray-900',
        accent: 'text-gray-600'
      };
  }
};

const Profile: React.FC = () => {
  const [personas, setPersonas] = useState<PersonaCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPersonas = async () => {
      try {
        const data = await getPersonasByUser();
        setPersonas(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching personas:', error);
        setIsLoading(false);
      }
    };

    fetchPersonas();
  }, []);

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Загрузка...</div>;
  }

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Мои персонажи</h1>
          <motion.button
            onClick={() => navigate('/play')}
            className="px-6 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Создать нового персонажа
          </motion.button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personas.map((persona) => {
            const selectedAvatar = avatars.find((a) => a.id === persona.avatarUrl);
            const styleClasses = getStyleClasses(persona.style);

            return (
              <div
                key={persona.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer border-2 ${styleClasses.container}`}
                onClick={() => navigate(`/card/${persona.id}`)}
              >
                <div className={`${styleClasses.background} p-6`}>
                  <div className="flex justify-center">
                    <img
                      src={selectedAvatar?.url}
                      alt={selectedAvatar?.description}
                      className={`w-24 h-24 object-cover rounded-full border-4 ${styleClasses.border}`}
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h2 className={`text-xl font-bold ${styleClasses.text} mb-2`}>
                    {persona.name}
                  </h2>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm font-medium ${styleClasses.accent}`}>Профессия:</span>
                    <p className={`text-sm ${styleClasses.text}`}>{persona.job}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile; 