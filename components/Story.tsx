import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Wind, Sun } from 'lucide-react';

const Story: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-paper relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative z-10 border-8 border-white shadow-2xl transform -rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1618080206739-14e8ac105472?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Крава" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-earth/20 z-0 transform rotate-3"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 mb-6 text-clay">
               <MapPin className="w-5 h-5" />
               <span className="uppercase tracking-widest text-sm font-bold">Штаваљ, Сјеница</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-earth mb-8 leading-tight">
              На Пештерској висоравни, где се ветрови сударају...
            </h2>
            <p className="text-lg text-earth/80 leading-relaxed mb-6 font-light">
              Смештено је једно од најлепших села овог краја, Штаваљ. Међу његовим зеленим брежуљцима и широким пашњацима живе породице које већ генерацијама негују сточарство и производњу чувеног сјеничког сира.
            </p>
            <p className="text-lg text-earth/80 leading-relaxed mb-8 font-light">
              То је симбол чистоте, рада и поноса овог поднебља.
            </p>
            <div className="p-6 border-l-4 border-gold bg-stone-100 italic text-earth/90 font-serif text-xl">
              „Ово је више од посла – то је начин живота.“ <br/>
              <span className="text-sm not-italic font-sans uppercase tracking-wider mt-2 block text-earth/60">– Миљојко Јелић</span>
            </div>
          </motion.div>
        </div>

        {/* Tradition Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 border-t border-earth/10 pt-16">
          {[
            { icon: <Sun className="w-8 h-8" />, title: "Природно Окружење", text: "5 хектара плодне земље где пасу музне краве." },
            { icon: <Wind className="w-8 h-8" />, title: "Сурова Клима", text: "Зиме су дуге, али људи и карактер су снажни." },
            { icon: <MapPin className="w-8 h-8" />, title: "Широм Региона", text: "Наш сир стиже до Београда, Ниша и Црне Горе." }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="text-center p-6 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-sm group"
            >
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-earth/5 text-earth group-hover:bg-clay group-hover:text-white transition-colors mb-4">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl mb-3 text-earth">{item.title}</h3>
              <p className="text-earth/70 font-light">{item.text}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Story;