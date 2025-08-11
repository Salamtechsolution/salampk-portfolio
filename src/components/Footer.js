import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faHeart, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-display font-bold text-white mb-4">
              ABDU SALAM P.K.
            </h2>
            <p className="text-gray-400 mb-4">
              Front-End Developer crafting beautiful digital experiences with modern web technologies.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-white transition-all"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a 
                href="https://linkedin.com/in/abdu-salam-p-k-4b9776164" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-white transition-all"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a 
                href="mailto:salampk22@gmail.com" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-white transition-all"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a 
                href="tel:+971564741052" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-white transition-all"
              >
                <FontAwesomeIcon icon={faPhone} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="hover:text-secondary transition-colors">About</button></li>
              <li><button onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })} className="hover:text-secondary transition-colors">Experience</button></li>
              <li><button onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })} className="hover:text-secondary transition-colors">Skills</button></li>
              <li><button onClick={() => document.getElementById('education').scrollIntoView({ behavior: 'smooth' })} className="hover:text-secondary transition-colors">Education</button></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Responsive Design</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="text-secondary" />
                +971 564741052
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-secondary" />
                salampk22@gmail.com
              </li>
              <li>Dubai, U.A.E</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Abdu Salam P.K. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            Made with <FontAwesomeIcon icon={faHeart} className="text-red-500" /> in Dubai
          </p>
        </div>
      </div>
      
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-secondary text-white rounded-full shadow-lg hover:bg-accent transition-all duration-300 flex items-center justify-center group"
        aria-label="Back to top"
      >
        <FontAwesomeIcon icon={faArrowUp} className="group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;
