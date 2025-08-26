import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Нуансо</h3>
            <p className="text-gray-400 mt-2">© 2025 Все права защищены</p>
          </div>
        </div>
      </div>
    </footer>
  );
}; 