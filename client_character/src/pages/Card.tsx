import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PersonaCard, Characteristic } from '../types/index';
import { getPersona, updatePersona } from '../api';
import { deletePersona } from '../services/personaService';
import { avatars, Avatar } from '../data/avatars';

const getStyleClasses = (style: string) => {
  switch (style) {
    case 'minimalism':
      return {
        container: 'bg-white border-gray-200',
        header: 'bg-gray-50 border-gray-200',
        text: 'text-gray-900',
        accent: 'text-gray-600',
        button: 'bg-gray-600 hover:bg-gray-700',
        input: 'border-gray-200 focus:ring-gray-500',
        characteristic: 'bg-gray-50 border-gray-200 text-gray-900'
      };
    case 'fantasy':
      return {
        container: 'bg-amber-50 border-amber-200',
        header: 'bg-amber-100 border-amber-200',
        text: 'text-amber-900',
        accent: 'text-amber-600',
        button: 'bg-amber-600 hover:bg-amber-700',
        input: 'border-amber-200 focus:ring-amber-500',
        characteristic: 'bg-amber-50 border-amber-200 text-amber-900'
      };
    case 'business':
      return {
        container: 'bg-blue-50 border-blue-200',
        header: 'bg-blue-100 border-blue-200',
        text: 'text-blue-900',
        accent: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700',
        input: 'border-blue-200 focus:ring-blue-500',
        characteristic: 'bg-blue-50 border-blue-200 text-blue-900'
      };
    case 'sci-fi':
      return {
        container: 'bg-purple-50 border-purple-200',
        header: 'bg-purple-100 border-purple-200',
        text: 'text-purple-900',
        accent: 'text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700',
        input: 'border-purple-200 focus:ring-purple-500',
        characteristic: 'bg-purple-50 border-purple-200 text-purple-900'
      };
    default:
      return {
        container: 'bg-white border-gray-200',
        header: 'bg-gray-50 border-gray-200',
        text: 'text-gray-900',
        accent: 'text-gray-600',
        button: 'bg-gray-600 hover:bg-gray-700',
        input: 'border-gray-200 focus:ring-gray-500',
        characteristic: 'bg-gray-50 border-gray-200 text-gray-900'
      };
  }
};

const Card: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [persona, setPersona] = useState<PersonaCard | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedPersona, setEditedPersona] = useState<PersonaCard | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
    const fetchPersona = async () => {
      if (id) {
        try {
          const data = await getPersona(id);
          console.log('Fetched persona:', data);
          setPersona(data);
          setEditedPersona(data);
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching persona:', error);
          setIsLoading(false);
        }
      }
    };

    fetchPersona();
  }, [id]);

  const handleSave = async () => {
    if (editedPersona) {
      try {
        await updatePersona(editedPersona.id, editedPersona);
        setPersona(editedPersona);
        setIsEditing(false);
      } catch (error) {
        console.error('Error updating persona:', error);
      }
    }
  };

  const handleDelete = async () => {
    if (!id) return;
    
    try {
      await deletePersona(id);
      navigate('/profile');
    } catch (error) {
      console.error('Error deleting persona:', error);
    }
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Загрузка...</div>;
  }

  if (!persona) {
    return <div className="flex justify-center items-center h-screen">Персона не найдена</div>;
  }

  const selectedAvatar = avatars.find((a: Avatar) => a.id === persona.avatarUrl);
  const styleClasses = getStyleClasses(persona.style);

  return (
    <div className="min-h-screen p-6 flex items-center justify-center bg-gradient-to-b from-gray-100 to-white">
      <div className="absolute top-4 left-4">
        <motion.button
          onClick={() => navigate('/profile')}
          className={`px-4 py-2 rounded-lg text-white transition-colors ${styleClasses.button}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          В профиль
        </motion.button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
        className={`relative max-w-2xl w-full rounded-lg shadow-lg border-2 overflow-hidden ${styleClasses.container}`}
      >
        <div className={`p-6 border-b ${styleClasses.header}`}>
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div 
                className="w-20 h-20 rounded-full overflow-hidden bg-white p-1 relative group border-2"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-transparent opacity-20"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                {selectedAvatar ? (
                  <motion.img
                    src={selectedAvatar.url}
                    alt={selectedAvatar.description || `Аватар ${persona.name}`}
                    className="w-full h-full object-cover relative z-10 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-3xl">?</span>
                  </div>
                )}
              </motion.div>
              <div>
                <motion.h1 
                  className={`text-2xl font-bold ${styleClasses.text}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {persona.name}
                </motion.h1>
                <motion.p 
                  className={`text-sm ${styleClasses.accent}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {persona.job}
                </motion.p>
              </div>
            </motion.div>
            <div className="flex space-x-2">
              <motion.button
                onClick={() => setIsEditing(!isEditing)}
                className={`px-4 py-2 rounded-lg text-white transition-colors ${styleClasses.button}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isEditing ? 'Сохранить' : 'Редактировать'}
              </motion.button>
              <motion.button
                onClick={() => setShowDeleteConfirm(true)}
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Удалить
              </motion.button>
            </div>
          </div>
        </div>

        <div className="p-6">
          <AnimatePresence mode="wait">
            {isEditing ? (
              <motion.div
                key="edit"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className={`block text-sm font-medium ${styleClasses.accent} mb-1`}>
                    Имя
                  </label>
                  <motion.input
                    type="text"
                    value={editedPersona?.name || ''}
                    onChange={(e) => setEditedPersona({ ...editedPersona!, name: e.target.value })}
                    className={`w-full p-2 rounded-lg border focus:ring-2 focus:border-transparent ${styleClasses.input}`}
                    whileFocus={{ scale: 1.01 }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className={`block text-sm font-medium ${styleClasses.accent} mb-1`}>
                    Профессия
                  </label>
                  <motion.input
                    type="text"
                    value={editedPersona?.job || ''}
                    onChange={(e) => setEditedPersona({ ...editedPersona!, job: e.target.value })}
                    className={`w-full p-2 rounded-lg border focus:ring-2 focus:border-transparent ${styleClasses.input}`}
                    whileFocus={{ scale: 1.01 }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className={`block text-sm font-medium ${styleClasses.accent} mb-1`}>
                    Описание
                  </label>
                  <motion.textarea
                    value={editedPersona?.description || ''}
                    onChange={(e) => setEditedPersona({ ...editedPersona!, description: e.target.value })}
                    className={`w-full p-2 rounded-lg border focus:ring-2 focus:border-transparent ${styleClasses.input}`}
                    rows={4}
                    whileFocus={{ scale: 1.01 }}
                  />
                </motion.div>
                <motion.button
                  onClick={handleSave}
                  className={`w-full px-4 py-2 rounded-lg text-white transition-colors ${styleClasses.button}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Сохранить изменения
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h2 className={`text-lg font-semibold ${styleClasses.text} mb-2`}>
                    О персонаже
                  </h2>
                  <motion.p 
                    className={`text-justify ${styleClasses.text}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {persona.description}
                  </motion.p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className={`text-lg font-semibold ${styleClasses.text} mb-2`}>
                    Характеристики
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {persona.characteristics?.map((char: Characteristic, index: number) => (
                      <motion.div
                        key={index}
                        className={`flex items-center space-x-2 p-2 rounded-lg border ${styleClasses.characteristic}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <span className="font-medium">{char.name}:</span>
                        <span>{char.value}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {showDeleteConfirm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className={`bg-white rounded-lg p-6 max-w-md w-full ${styleClasses.container}`}
              >
                <h3 className={`text-xl font-bold mb-4 ${styleClasses.text}`}>
                  Подтверждение удаления
                </h3>
                <p className={`mb-6 ${styleClasses.text}`}>
                  Вы уверены, что хотите удалить этого персонажа? Это действие нельзя отменить.
                </p>
                <div className="flex justify-end space-x-4">
                  <motion.button
                    onClick={() => setShowDeleteConfirm(false)}
                    className={`px-4 py-2 rounded-lg text-white transition-colors ${styleClasses.button}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Отмена
                  </motion.button>
                  <motion.button
                    onClick={handleDelete}
                    className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Удалить
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Card; 