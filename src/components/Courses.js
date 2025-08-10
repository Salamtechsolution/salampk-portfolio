import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faCode, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

const Courses = () => {
  const courses = [
    {
      title: 'THE COMPLETE FULL-STACK WEB DEVELOPMENT BOOTCAMP',
      provider: 'UDEMY ONLINE',
      icon: faCode,
      description: 'Comprehensive training in modern web development technologies including HTML, CSS, JavaScript, React, Node.js, and database management.'
    },
    {
      title: 'REACT JS THE COMPLETE GUIDE',
      provider: 'UDEMY ONLINE',
      icon: faCode,
      description: 'In-depth course covering React.js fundamentals, hooks, state management, routing, and best practices for building modern web applications.'
    },
    {
      title: 'MCTS CERTIFIED',
      provider: 'MICROSOFT',
      icon: faCertificate,
      description: 'Microsoft Certified Technology Specialist certification demonstrating expertise in Microsoft technologies.'
    },
    {
      title: 'MCITP COURSE COMPLETED',
      provider: 'LOGIC CALICUT',
      icon: faCertificate,
      description: 'Microsoft Certified IT Professional course covering advanced Windows server administration and infrastructure management.'
    },
    {
      title: 'CCNA COURSE COMPLETED',
      provider: 'LOGIC CALICUT',
      icon: faNetworkWired,
      description: 'Cisco Certified Network Associate course covering network fundamentals, routing, switching, and network security.'
    }
  ];

  return (
    <section id="courses" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center text-primary">COURSES</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <FontAwesomeIcon icon={course.icon} className="text-white text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-1">{course.title}</h3>
                <p className="text-secondary font-medium mb-3">{course.provider}</p>
                <p className="text-gray-700">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;