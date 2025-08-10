import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCalendarAlt, faMapMarkerAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center text-primary">WORK EXPERIENCE</h2>
        
        <div className="mt-12">
          <div className="relative border-l-4 border-secondary pl-8 pb-8">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
              <FontAwesomeIcon icon={faBriefcase} className="text-white text-sm" />
            </div>
            
            <div className="bg-light rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-primary mb-2">DESKTOP SUPPORT ENGINEER</h3>
              
              <div className="flex flex-wrap mb-4">
                <div className="flex items-center mr-6 mb-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-secondary mr-2" />
                  <span>DAH | ABU DHABI</span>
                </div>
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faCalendarAlt} className="text-secondary mr-2" />
                  <span>AUG 2012 - DEC 2020</span>
                </div>
              </div>
              
              <ul className="space-y-4">
                <li className="flex">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-secondary mt-1 mr-3 flex-shrink-0" />
                  <p>Provided technical support for Windows and MacOS operating systems to ensure seamless user experience.</p>
                </li>
                <li className="flex">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-secondary mt-1 mr-3 flex-shrink-0" />
                  <p>Troubleshoot hardware issues, including desktops, laptops, printers, and peripherals to minimize downtime.</p>
                </li>
                <li className="flex">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-secondary mt-1 mr-3 flex-shrink-0" />
                  <p>Documented technical procedures and user guides to assist with knowledge transfer and training.</p>
                </li>
                <li className="flex">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-secondary mt-1 mr-3 flex-shrink-0" />
                  <p>Docs, projects, poster, presentations and designing with MS office Suite.</p>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Additional experience can be added here with the same structure */}
          
        </div>
      </div>
    </section>
  );
};

export default Experience;