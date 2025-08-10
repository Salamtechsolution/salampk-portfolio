import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCalendarAlt, faUniversity } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center text-primary">EDUCATION</h2>
        
        <div className="mt-12">
          <div className="relative border-l-4 border-secondary pl-8 pb-8">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
              <FontAwesomeIcon icon={faGraduationCap} className="text-white text-sm" />
            </div>
            
            <div className="bg-light rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-primary mb-2">BACHELOR OF SCIENCE IN COMPUTER SCIENCE</h3>
              
              <div className="flex flex-wrap mb-4">
                <div className="flex items-center mr-6 mb-2">
                  <FontAwesomeIcon icon={faUniversity} className="text-secondary mr-2" />
                  <span>CALICUT UNIVERSITY</span>
                </div>
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faCalendarAlt} className="text-secondary mr-2" />
                  <span>2009</span>
                </div>
              </div>
              
              <p className="text-gray-700">
                Completed Bachelor of Science in Computer Science with a focus on programming, algorithms, data structures, and software development methodologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;