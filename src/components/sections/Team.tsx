import React from 'react';

export const Team = () => {
  const teamMembers = [
    {
      name: 'Иван Иванов',
      role: 'CTO',
      stack: 'DevOps, System Architecture, Cloud Infrastructure',
      quote: 'Процессы — не бюрократия, а масштабируемость'
    },
    {
      name: 'Петр Петров',
      role: 'DevOps Engineer',
      stack: 'CI/CD, Automation, Monitoring',
      quote: 'Автоматизация — это свобода для творчества'
    },
    {
      name: 'Анна Сидорова',
      role: 'Technical Writer',
      stack: 'Documentation, Knowledge Management',
      quote: 'Хорошая документация — это инвестиция в будущее'
    }
  ];

  return (
    <section className="py-20 bg-white d-none">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Кто мы
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-2xl font-bold mb-2 text-gray-900">{member.name}</h3>
              <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
              <p className="text-gray-700 mb-4">{member.stack}</p>
              <p className="text-gray-600 italic">"{member.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 