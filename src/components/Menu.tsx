import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, ShoppingBag } from 'lucide-react';
import { MENU_ITEMS } from '../constants';
import { Category } from '../types';
import { useCart } from '../context/CartContext';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const CATEGORIES: Category[] = ['All', 'Coffee', 'Tea', 'Pastry', 'Seasonal'];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const { addToCart } = useCart();

  const filteredItems = MENU_ITEMS.filter(
    item => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <section id="menu" className="py-24 bg-[#f5f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-4">Our Curated Menu</h2>
          <p className="text-[#5A5A40] max-w-xl mx-auto">
            From single-origin beans to hand-crafted pastries, every item is selected for its exceptional quality and flavor.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === cat 
                  ? "bg-[#5A5A40] text-white shadow-lg shadow-[#5A5A40]/20" 
                  : "bg-white text-[#5A5A40] border border-[#5A5A40]/10 hover:border-[#5A5A40]/30"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-3xl overflow-hidden border border-[#5A5A40]/5 hover:shadow-2xl hover:shadow-[#5A5A40]/10 transition-all duration-500"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <button 
                    onClick={() => addToCart(item)}
                    className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#5A5A40] hover:text-white"
                  >
                    <Plus className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-xl text-[#1a1a1a]">{item.name}</h3>
                    <span className="text-[#5A5A40] font-medium">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-[#5A5A40]/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
