import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl animate-pulse" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left animate-fade-in">
            <div className="mb-6">
              <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">Welcome to my portfolio</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">
              Hi, I'm <span className="gradient-text">Abdu Salam</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-6">
              Front-End Developer & UI/UX Enthusiast
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed">
              Crafting beautiful, performant web experiences with modern technologies. 
              Specialized in React, TypeScript, and AI-enhanced development solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-10">
              <button 
                className="button-primary"
                onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </button>
              <button 
                className="px-6 py-3 border border-gray-600 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-200"
                onClick={() => window.open('mailto:salampk22@gmail.com')}
              >
                Get In Touch
              </button>
            </div>
            
            <div className="flex items-center gap-6 justify-center md:justify-start">
              <span className="text-sm text-gray-500">Connect with me</span>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Salamtechsolution" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a 
                  href="https://linkedin.com/in/abdu-salam-p-k-4b9776164" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a 
                  href="mailto:salampk22@gmail.com" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a 
                  href="tel:+971544741052" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <FontAwesomeIcon icon={faPhone} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-full blur-xl opacity-50" />
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-white/20">
                <img 
                  src={require('../assets/profile.jpg')} 
                  alt="Abdu Salam P.K." 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            className="text-white/60 hover:text-white transition-colors"
          >
            <FontAwesomeIcon icon={faArrowDown} size="lg" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
