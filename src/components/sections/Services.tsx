import React from 'react';
import Image from 'next/image';

export const Services = () => {
  const services = [
    {
      icon: '/images/services/sysadmin.jpg',
      title: 'Системное администрирование',
      description: 'Настройка и оптимизация серверной инфраструктуры'
    },
    {
      icon: '/images/services/docs.jpg',
      title: 'Оформление технической и бизнес-документации',
      description: 'Структурирование и стандартизация документации'
    },
    {
      icon: '/images/services/automation.jpg',
      title: 'Автоматизация рутинных процессов',
      description: 'Внедрение автоматизации для повышения эффективности'
    },
    {
      icon: '/images/services/analytics.jpg',
      title: 'Организация и настройка аналитики',
      description: 'Настройка систем сбора и анализа данных'
    },
    {
      icon: '/images/services/tools.jpg',
      title: 'Внедрение инструментов',
      description: 'Notion, Jira, Confluence, GitLab CI/CD, Power BI и др.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Операционный аудит, который ставит фундамент под ваш рост
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            >
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 