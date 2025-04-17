import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';

export const CTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-rose-500 opacity-90" />
      
      {/* Текстура фона */}
      <div className="absolute inset-0">
        <Image
          src="/images/pattern.svg"
          alt="Текстура фона"
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">
            Хаос в операционке? Мы его систематизируем.
          </h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Имя"
                className="w-full px-4 py-3 rounded-md text-gray-900"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md text-gray-900"
              />
            </div>
            <div>
              <textarea
                placeholder="Что болит?"
                className="w-full px-4 py-3 rounded-md text-gray-900"
                rows={4}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-white text-gray-900 hover:bg-gray-100"
            >
              Хочу аудит
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}; 