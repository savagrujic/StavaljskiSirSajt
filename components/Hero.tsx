import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=2074&q=80" 
          alt="Cows grazing in misty field on Pester" 
          className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-paper"></div>
        <div className="absolute inset-0 bg-grain opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="block text-paper/90 uppercase tracking-[0.5em] text-sm md:text-base mb-4 drop-shadow-md">
            Пештерска Висораван
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-paper font-bold leading-tight mb-6 drop-shadow-2xl">
            Укус који чува <br /> <span className="italic text-gold">традицију</span>
          </h1>
          <p className="text-paper/90 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-10 drop-shadow-lg">
            Свака кап млека, сваки залогај нашег сира носи у себи вековну причу Пештера.
          </p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <a 
              href="#about"
              className="px-8 py-3 border border-paper text-paper hover:bg-paper hover:text-earth transition-all duration-300 uppercase text-sm tracking-widest backdrop-blur-sm"
            >
              Наша Прича
            </a>
            <a 
              href="#contact"
              className="px-8 py-3 bg-clay text-white border border-clay hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 uppercase text-sm tracking-widest shadow-lg"
            >
              Поручи Одмах
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-paper to-transparent mx-auto"></div>
      </motion.div>
    </section>
  );
};

export default Hero;