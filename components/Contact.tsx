import React from 'react';
import { Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-paper border-t-8 border-double border-earth/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className="bg-earth p-10 md:p-12 text-paper md:w-2/5 flex flex-col justify-between relative overflow-hidden">
             {/* Decorative circles */}
             <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-clay/20"></div>
             <div className="absolute bottom-10 -left-10 w-20 h-20 rounded-full bg-gold/10"></div>

            <div>
              <h3 className="font-serif text-3xl mb-2">Контактирај нас</h3>
              <p className="text-paper/60 mb-10 font-light text-sm">
                Штаваљски сир Јелић - Традиција која траје.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-paper/10 flex items-center justify-center text-gold">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest opacity-50">Телефон</p>
                    <p className="font-serif text-lg">+381-62-202-988</p>
                    <p className="text-xs opacity-70">Миљојко Јелић</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-paper/10 flex items-center justify-center text-gold">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest opacity-50">Емаил</p>
                    <p className="font-serif break-all">miljojkoraski@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-xs uppercase tracking-widest opacity-50 mb-4">Друштвене Мреже</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-gold transition-colors"><Instagram /></a>
                <a href="#" className="hover:text-gold transition-colors"><Facebook /></a>
                <a href="#" className="hover:text-gold transition-colors"><Twitter /></a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-10 md:p-12 md:w-3/5 bg-paper">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-earth text-xs uppercase tracking-widest mb-2 font-bold">Име и презиме</label>
                <input type="text" className="w-full border-b border-earth/30 bg-transparent py-2 focus:outline-none focus:border-clay transition-colors" placeholder="Ваше име" />
              </div>
              <div>
                <label className="block text-earth text-xs uppercase tracking-widest mb-2 font-bold">Емаил Адреса</label>
                <input type="email" className="w-full border-b border-earth/30 bg-transparent py-2 focus:outline-none focus:border-clay transition-colors" placeholder="primer@email.com" />
              </div>
               <div>
                <label className="block text-earth text-xs uppercase tracking-widest mb-2 font-bold">Количина (кг)</label>
                <select className="w-full border-b border-earth/30 bg-transparent py-2 focus:outline-none focus:border-clay transition-colors">
                  <option>1 кг</option>
                  <option>3 кг</option>
                  <option>5 кг (кантица)</option>
                  <option>10 кг</option>
                </select>
              </div>
              <div>
                <label className="block text-earth text-xs uppercase tracking-widest mb-2 font-bold">Порука</label>
                <textarea className="w-full border-b border-earth/30 bg-transparent py-2 focus:outline-none focus:border-clay transition-colors h-24 resize-none" placeholder="Додатна питања..."></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-earth text-paper py-4 uppercase tracking-widest font-bold hover:bg-clay transition-colors shadow-lg"
              >
                Пошаљи Поруку
              </motion.button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
