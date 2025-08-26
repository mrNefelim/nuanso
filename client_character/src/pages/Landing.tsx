import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-purple-900 mb-6">
            PersonaPlay
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Создайте уникальный портрет вашего клиента в игровой форме
          </p>
          <button
            onClick={() => navigate('/play')}
            className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Начать игру
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing; 