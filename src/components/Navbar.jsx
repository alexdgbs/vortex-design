import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleLinkClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  const linkClasses = (section) => {
    const baseClasses = "transition font-semibold";
    if (activeSection === section) {
      return `${baseClasses} text-white hover:text-white`;
    }
    return `${baseClasses} text-gray-200 hover:text-white`;
  };

  return (
    <nav className="bg-[#1e252d] shadow-sm py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-gray-200 hover:text-white transition font-bold text-xl">VORTEX</a>
        </div>
      
        <div className="md:hidden">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-200 focus:outline-none"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" onClick={() => handleLinkClick('features')} className={linkClasses('features')}>Características</a>
          <a href="#testimonials" onClick={() => handleLinkClick('testimonials')} className={linkClasses('testimonials')}>Testimonios</a>
          <a href="#pricing" onClick={() => handleLinkClick('pricing')} className={linkClasses('pricing')}>Precios</a>
          <a href="#contact" onClick={() => handleLinkClick('contact')} className={linkClasses('contact')}>Contacto</a>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 p-4 bg-[#1e252d] border border-white rounded-lg shadow-lg">
          <div className="flex flex-col space-y-4">
            <a href="#features" onClick={() => handleLinkClick('features')} className={linkClasses('features')}>Características</a>
            <a href="#testimonials" onClick={() => handleLinkClick('testimonials')} className={linkClasses('testimonials')}>Testimonios</a>
            <a href="#pricing" onClick={() => handleLinkClick('pricing')} className={linkClasses('pricing')}>Precios</a>
            <a href="#contact" onClick={() => handleLinkClick('contact')} className={linkClasses('contact')}>Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
