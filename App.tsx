import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Story from './components/Story';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GeminiAdvisor from './components/GeminiAdvisor';

const App: React.FC = () => {
  return (
    <main className="relative w-full min-h-screen selection:bg-clay selection:text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <Story />
      <Process />
      
      {/* Parallax Break Banner */}
      <div className="py-32 bg-fixed bg-center bg-cover relative flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center p-8 border-4 border-paper/80 backdrop-blur-sm">
          <h2 className="font-serif text-4xl md:text-6xl text-paper mb-2">100% Природно</h2>
          <p className="text-paper/90 text-xl tracking-widest uppercase">Без адитива • Са Пештера</p>
        </div>
      </div>

      <Contact />
      <Footer />
      <GeminiAdvisor />
    </main>
  );
};

export default App;