import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faNetworkWired, faTerminal, faCogs, faRobot, faDatabase } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Front-end Development',
      icon: faCode,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'HTML & CSS', level: 95 },
        { name: 'React.js', level: 85 },
        { name: 'Tailwind CSS', level: 80 },
      ]
    },
    {
      title: 'AI-Assisted Development',
      icon: faRobot,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'AI-Powered Debugging', level: 75 },
        { name: 'Rapid Prototyping with AI', level: 80 },
        { name: 'Code Generation', level: 85 },
      ]
    },
    {
      title: 'Backend & Database',
      icon: faDatabase,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js & Express.js', level: 75 },
        { name: 'MongoDB', level: 70 },
        { name: 'API Integration', level: 80 },
      ]
    },
    {
      title: 'Version Control',
      icon: faCogs,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git & GitHub', level: 85 },
      ]
    },
    {
      title: 'Networking',
      icon: faNetworkWired,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'TCP/IP, DNS, DHCP, VPN', level: 80 },
      ]
    },
    {
      title: 'Scripting',
      icon: faTerminal,
      color: 'from-gray-600 to-gray-800',
      skills: [
        { name: 'Bash & Python', level: 75 },
      ]
    },
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            A showcase of my technical proficiency across multiple domains.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group bg-gray-50 rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4 transform group-hover:rotate-12 group-hover:scale-110 transition-transform`}>
                  <FontAwesomeIcon icon={category.icon} className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;