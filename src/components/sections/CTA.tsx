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
          <script src="https://forms.yandex.ru/_static/embed.js"></script>
          <iframe src="https://forms.yandex.ru/u/68bc0374eb6146cd79523224?iframe=1" frameBorder="0"
                  name="ya-form-68bc0374eb6146cd79523224" width="650"></iframe>
        </div>
      </div>
    </section>
  );
}; 