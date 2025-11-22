import React from 'react';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-earth text-paper relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-gold uppercase tracking-[0.2em] text-sm">Тајна Укуса</span>
                <h2 className="font-serif text-4xl md:text-6xl mt-4 mb-8">Сирење некуваног млека</h2>
                <p className="text-paper/80 text-lg font-light leading-relaxed">
                    Посебност Штаваљског сира Јелић лежи у традиционалном начину припреме. Млеко се не кува – користи се сирово, баш као некада.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch border border-paper/20">
                <motion.div 
                    className="relative h-96 md:h-auto overflow-hidden group"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <img 
                        src="https://images.unsplash.com/photo-1440428099904-c6d459a7e7b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Cows in green field" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90 contrast-110"
                    />
                    <div className="absolute inset-0 bg-clay/10 mix-blend-overlay"></div>
                </motion.div>
                
                <div className="p-10 md:p-16 flex flex-col justify-center border-l-0 md:border-l border-paper/20 bg-earth">
                    <h3 className="font-serif text-3xl mb-6 text-gold">Жива култура</h3>
                    <p className="text-paper/70 mb-6 leading-relaxed">
                        Чувамо све природне бактерије које сиру дају карактеристичан укус, арому и структуру. Ово није индустријски производ, ово је жива храна.
                    </p>
                    <p className="text-paper/70 leading-relaxed">
                        Породица Јелић данас годишње произведе око осам тона сира, који своје место налази у бројним домаћинствима и врхунским ресторанима.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Process;