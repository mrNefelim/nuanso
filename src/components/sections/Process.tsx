import React from 'react';
import Image from 'next/image';

export const Process = () => {
  const steps = [
    {
      title: 'Анализ состояния',
      description: 'Изучаем процессы, документацию и инфраструктуру'
    },
    {
      title: 'Выявление проблем',
      description: 'Находим узкие места и неэффективные процессы'
    },
    {
      title: 'Разработка решений',
      description: 'Предлагаем конкретные шаги по улучшению'
    },
    {
      title: 'Внедрение изменений',
      description: 'Помогаем реализовать предложенные решения'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-white">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-500 to-cyan-500 opacity-90" />
      
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
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Как мы работаем
          </h2>
          <p className="text-xl text-gray-600">
            Пошаговый подход к решению ваших операционных задач
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-3xl font-bold text-blue-600 mb-4">{index + 1}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 