import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

const Languages = () => {
  const languages = [
    {
      name: 'English',
      level: 80,
      proficiency: 'Professional Working Proficiency'
    },
    {
      name: 'Arabic',
      level: 70,
      proficiency: 'Limited Working Proficiency'
    },
    {
      name: 'Hindi',
      level: 90,
      proficiency: 'Full Professional Proficiency'
    },
    {
      name: 'Malayalam',
      level: 100,
      proficiency: 'Native or Bilingual Proficiency'
    }
  ];

  return (
    <section id="languages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center text-primary">LANGUAGES</h2>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-light rounded-lg shadow-md p-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mr-4">
                <FontAwesomeIcon icon={faLanguage} className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold text-primary">Language Proficiencies</h3>
            </div>
            
            <div className="space-y-6">
              {languages.map((language, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <div>
                      <span className="font-semibold text-lg">{language.name}</span>
                      <span className="text-gray-600 text-sm ml-2">({language.proficiency})</span>
                    </div>
                    <span>{language.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-secondary h-3 rounded-full" 
                      style={{ width: `${language.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;