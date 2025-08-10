import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'courses', label: 'Courses' },
    { id: 'languages', label: 'Languages' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <Link to="/" className={`text-xl font-display font-semibold transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
            ABDU SALAM P.K.
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 hover:text-secondary ${scrolled ? 'text-gray-700' : 'text-white/90'}`}
              >
                {item.label}
              </button>
            ))}
            <button className="button-primary text-sm">
              Contact Me
            </button>
          </div>
          
          <button 
            className={`md:hidden focus:outline-none transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`} 
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </button>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}>
        <div 
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={closeMenu}
        />
        <div className={`fixed right-0 top-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6">
            <button 
              className="absolute top-6 right-6 text-gray-600 hover:text-gray-900"
              onClick={closeMenu}
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
            <div className="mt-16 space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-lg font-medium text-gray-700 hover:text-secondary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button className="button-primary w-full">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
