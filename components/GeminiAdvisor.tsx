import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, ChefHat } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from 'framer-motion';
import { Message } from '../types';

const GeminiAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Здраво! Ја сам ваш гастрономски саветник. Како могу да вам помогнем да комбинујете наш сјенички сир?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    if (!process.env.API_KEY) {
        setMessages(prev => [...prev, { role: 'user', text: input }, { role: 'model', text: 'Нажалост, API кључ није конфигурисан.' }]);
        setInput('');
        return;
    }

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const systemInstruction = `
        Ви сте стручни кувар и сомелијер специјализован за српску традиционалну кухињу, а посебно за сјенички сир (бели сир у кришкама, пуномасан).
        Ваш циљ је да промовишете Штаваљски сир породице Јелић.
        Одговарајте на српском језику, љубазно, у духу традиције, али кратко и јасно.
        Предлажите рецепте (гибанице, уштипци, мезе), упаривање са винима или ракијом.
        Ако вас питају нешто што није везано за храну или сир, љубазно их вратите на тему.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: userMessage,
        config: {
            systemInstruction: systemInstruction,
        }
      });

      const text = response.text;
      if (text) {
        setMessages(prev => [...prev, { role: 'model', text }]);
      }
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'Извините, тренутно не могу да одговорим. Покушајте касније.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-40 bg-clay text-white p-4 rounded-full shadow-2xl hover:bg-earth transition-colors border-2 border-white flex items-center justify-center group"
        onClick={() => setIsOpen(true)}
      >
        <ChefHat size={24} className="mr-2" />
        <span className="font-bold text-sm hidden group-hover:inline-block whitespace-nowrap transition-all">Питај Кувара</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-4 md:right-6 w-[90vw] md:w-[400px] h-[500px] bg-paper border-2 border-earth rounded-lg shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-earth text-paper p-4 flex justify-between items-center">
              <div>
                <h3 className="font-serif font-bold text-lg">Гастро Саветник</h3>
                <p className="text-xs opacity-80">Уз помоћ Google Gemini AI</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-paper hover:text-clay transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[url('https://www.transparenttextures.com/patterns/paper.png')]">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[80%] p-3 text-sm leading-relaxed rounded-lg ${
                      msg.role === 'user' 
                        ? 'bg-earth text-white rounded-br-none' 
                        : 'bg-white border border-earth/20 text-earth rounded-bl-none shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-earth/20 p-3 rounded-lg rounded-bl-none flex items-center">
                    <Loader2 className="animate-spin text-clay h-4 w-4" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-earth/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Питајте за рецепт..."
                  className="flex-1 px-4 py-2 border border-earth/30 rounded-md focus:outline-none focus:border-clay bg-paper/50 text-earth placeholder:text-earth/40 font-sans"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="p-2 bg-clay text-white rounded-md hover:bg-earth transition-colors disabled:opacity-50"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GeminiAdvisor;
