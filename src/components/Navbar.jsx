import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const indicatorRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10 || menuOpen);
      setPrevScrollPos(currentScrollPos);
      setIsScrolled(currentScrollPos > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, menuOpen]);

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['hero','features', 'testimonials'];
      let found = false;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 100) {
            setActiveSection(section);
            found = true;
            break;
          }
        }
      }

      if (!found && window.scrollY < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);
  useEffect(() => {
    if (activeSection && indicatorRef.current && navRef.current) {
      const activeLink = navRef.current.querySelector(`[data-section="${activeSection}"]`);
      if (activeLink) {
        const linkRect = activeLink.getBoundingClientRect();
        const navRect = navRef.current.getBoundingClientRect();
        indicatorRef.current.style.width = `${linkRect.width}px`;
        indicatorRef.current.style.transform = `translateX(${linkRect.left - navRect.left}px)`;
        indicatorRef.current.style.opacity = '1';
      }
    } else if (indicatorRef.current) {
      indicatorRef.current.style.opacity = '0';
    }
  }, [activeSection]);
  const navItems = [
    { name: 'Inicio', path: '/', scrollId: 'hero' },
    { name: 'Features', path: '/features', scrollId: 'features' },
    { name: 'Testimonios', path: '/testimonios', scrollId: 'testimonials' },
    
  ];
  const handleLinkClick = (item, e) => {
    if (location.pathname === item.path && item.scrollId) {
      const element = document.getElementById(item.scrollId);
      if (element) {
        e.preventDefault();
        const navbarHeight = document.querySelector('nav').offsetHeight;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navbarHeight - 20;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setActiveSection(item.scrollId || item.name);
    setMenuOpen(false);
  };
  const linkClasses = (item) => {
    const baseClasses = "transition-all duration-300 font-medium text-md px-4 py-2";
    return activeSection === item.scrollId
      ? `${baseClasses} text-[#1e252d]`
      : `${baseClasses} text-gray-500 hover:text-[#1e252d]`;
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest('nav')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full transition-all duration-300 z-50 py-4 bg-white overflow-hidden ${isScrolled ? 'shadow-md' : ''}`}
      style={{ transform: visible ? 'translateY(0)' : 'translateY(-100%)' }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="flex items-center">
  <div className="text-[#1e252d] font-bold text-xl flex items-center gap-2">
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#1e252d" strokeWidth="2" />
      <path d="M12 18L18 12L12 6L6 12L12 18Z" stroke="#1e252d" strokeWidth="2" />
    </svg>
    VORTEX
   </div>
   </div>
        <div className="md:hidden">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(!menuOpen);
            }}
            className="text-[#1e252d] focus:outline-none flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-100 transition-colors"
          >
            {menuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>

        <div ref={navRef} className="hidden md:flex items-center relative">
          {navItems.map(item => (
            <Link
              key={item.name}
              to={item.path}
              data-section={item.scrollId || item.name}
              onClick={(e) => handleLinkClick(item, e)}
              className={linkClasses(item)}
            >
              {item.name}
            </Link>
          ))}
          <div ref={indicatorRef} className="absolute bottom-0 h-0.5 bg-[#1e252d] transition-all duration-300 ease-in-out" style={{ opacity: 0 }}></div>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden container mx-auto px-4 ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navItems.map(item => (
              <Link
                key={item.name}
                to={item.path}
                onClick={(e) => handleLinkClick(item, e)}
                className="relative flex items-center pl-4 py-2 text-gray-500 hover:text-[#1e252d] transition-all duration-300"
              >
                <span className={`absolute left-0 w-1 bg-[#1e252d] transition-all duration-300 ${activeSection === item.scrollId ? 'h-full' : 'h-0'}`}></span>
                <span className="pl-4">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
