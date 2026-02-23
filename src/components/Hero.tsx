import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000"
          alt="Coffee shop interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs uppercase tracking-[0.2em] font-semibold mb-6">
              Est. 2024 • Islamabad
            </span>
            <h1 className="text-6xl md:text-8xl font-serif text-white leading-[1.1] mb-8">
              Crafting <span className="italic">Perfect</span> Moments
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-10 max-w-lg">
              Experience the art of slow-roasted beans and artisanal brewing in the heart of the city. Your daily ritual, elevated.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#menu"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1a1a1a] rounded-full font-medium hover:bg-[#f5f5f0] transition-all group"
              >
                Explore Menu
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#locations"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all"
              >
                Find a Café
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
}
