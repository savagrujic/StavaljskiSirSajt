import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Почетна', href: '#home' },
  { name: 'О Нама', href: '#about' },
  { name: 'Процес', href: '#process' },
  { name: 'Контакт', href: '#contact' },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-paper/95 backdrop-blur-md py-2 shadow-md border-b border-earth/10' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="group"
        >
          <h1 className={`font-serif text-2xl md:text-3xl font-bold tracking-wide transition-colors ${scrolled ? 'text-earth' : 'text-earth md:text-paper'}`}>
            ЈЕЛИЋ
            <span className="block text-xs tracking-[0.3em] font-normal uppercase opacity-80 group-hover:text-clay transition-colors">
              Пољопривредно Газдинство
            </span>
          </h1>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm uppercase tracking-widest hover:text-clay transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-clay after:transition-all hover:after:w-full ${scrolled ? 'text-earth' : 'text-paper'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className={`px-6 py-2 border ${scrolled ? 'border-earth text-earth hover:bg-earth hover:text-white' : 'border-paper text-paper hover:bg-paper hover:text-earth'} transition-all duration-300 uppercase text-xs tracking-widest font-bold`}
          >
            Поручи Сир
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className={`md:hidden focus:outline-none ${scrolled ? 'text-earth' : 'text-earth md:text-paper'}`}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-0 left-0 w-full bg-paper text-earth flex flex-col items-center justify-center space-y-8 md:hidden overflow-hidden"
          >
             <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-4 text-earth"
            >
              <X size={32} />
            </button>
            
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-serif text-3xl hover:text-clay transition-colors italic"
              >
                {link.name}
              </a>
            ))}
             <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="mt-8 px-8 py-3 bg-earth text-paper text-sm uppercase tracking-widest hover:bg-clay transition-colors"
            >
              Поручи Сир
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;