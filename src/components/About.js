import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCode, faServer, faNetworkWired, faTerminal, faBriefcase, faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const expertise = [
    {
      icon: faCode,
      title: 'Front-End Development',
      description: 'Building responsive web applications with React, TypeScript, TailwindCSS, and modern JavaScript frameworks.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: faServer,
      title: 'Full-Stack Skills',
      description: 'Experience with Node.js, Express.js, MongoDB, and RESTful API development for complete web solutions.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: faNetworkWired,
      title: 'IT Infrastructure',
      description: 'Strong background in networking, system administration, and enterprise IT support.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: faTerminal,
      title: 'Automation & Scripting',
      description: 'Proficient in Bash, PowerShell, and Python for task automation and system optimization.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const contactInfo = [
    { icon: faUser, label: 'Name', value: 'Abdu Salam P.K.' },
    { icon: faMapMarkerAlt, label: 'Location', value: 'Dubai, U.A.E' },
    { icon: faEnvelope, label: 'Email', value: 'salampk22@gmail.com' },
    { icon: faPhone, label: 'Phone', value: '+971 564741052' }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A passionate developer with 8+ years of experience, bridging the gap between IT infrastructure and modern web development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Profile Card */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-full blur-lg opacity-50" />
                  <img 
                    src={require('../assets/profile.jpg')} 
                    alt="Abdu Salam P.K."
                    className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Abdu Salam P.K.</h3>
                <p className="text-secondary font-medium mb-6">Front-End Developer</p>
                
                <div className="space-y-3 text-left">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <FontAwesomeIcon icon={info.icon} className="text-gray-400 w-5" />
                      <span className="text-sm text-gray-600">{info.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Bio Card */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FontAwesomeIcon icon={faBriefcase} className="text-secondary" />
                Professional Summary
              </h3>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  I'm a seasoned IT professional turned Front-End Developer with over 8 years of experience 
                  in the technology sector. My unique background combines deep technical infrastructure knowledge 
                  with modern web development skills.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Currently focused on building beautiful, performant web applications using React, TypeScript, 
                  and cutting-edge frontend technologies. I bring a comprehensive understanding of full-stack 
                  development, system architecture, and user experience design.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  My goal is to leverage my diverse skill set to create innovative solutions that bridge the 
                  gap between complex technical systems and intuitive user interfaces.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-3">
                {['React', 'TypeScript', 'JavaScript', 'TailwindCSS', 'Node.js', 'Git', 'MongoDB'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                <FontAwesomeIcon icon={item.icon} size="lg" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
