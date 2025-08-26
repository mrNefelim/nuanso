import React from 'react';

export const CaseStudies = () => {
  const cases = [
    {
      title: 'Стартап 1',
      description: 'теряли задачи в чатах → интегрировали чаты с Битрикс24 → скорость доставки выросла на 40%'
    },
    {
      title: 'Стартап 2',
      description: 'вручную обновляли отчёты → внедрили автоматизацию → -80% времени на отчётность'
    },
    {
      title: 'Стартап 3',
      description: 'документация хранилась в хаосе → структурировали + оформили SOP → рост эффективности на 35%'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Примеры кейсов
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{caseStudy.title}</h3>
              <p className="text-gray-700">{caseStudy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 