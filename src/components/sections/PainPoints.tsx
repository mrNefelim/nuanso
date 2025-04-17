import React from 'react';
import Image from 'next/image';
import { ClockIcon, ChartBarIcon, ChatBubbleLeftRightIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

export const PainPoints = () => {
  const painPoints = [
    {
      title: 'Не хватает времени',
      description: 'Стартап растёт, а на настройку процессов не хватает времени',
      icon: ClockIcon
    },
    {
      title: 'Нет системности',
      description: 'Каждый решает задачи по-своему, нет единого подхода',
      icon: ChartBarIcon
    },
    {
      title: 'Потеря информации',
      description: 'Важные данные теряются в чатах и личных переписках',
      icon: ChatBubbleLeftRightIcon
    },
    {
      title: 'Нет автоматизации',
      description: 'Рутинные задачи отнимают слишком много времени',
      icon: Cog6ToothIcon
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-90" />
      
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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Проблема не в идее. Проблема в операционке.
          </h2>
          <p className="text-xl text-gray-200">
            Мы помогаем стартапам навести порядок в операционных процессах
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{point.title}</h3>
                </div>
                <p className="text-gray-200 pl-16">{point.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}; 