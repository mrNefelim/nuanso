import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="absolute inset-0">
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Хаос в операционке? Мы его систематизируем.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Мы делаем операционный аудит стартапов: от системной архитектуры до автоматизации, от документооборота до аналитики.
          </p>
          <Button size="lg" className="bg-gray-700 hover:bg-gray-600 text-lg px-8 py-6">
            Заказать экспресс-аудит
          </Button>
        </div>
      </div>
    </section>
  );
}; 