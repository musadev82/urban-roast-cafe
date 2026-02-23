import React from 'react';
import { ShoppingBag, Coffee, Menu as MenuIcon, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onCartClick: () => void;
}

export default function Navbar({ onCartClick }: NavbarProps) {
  const { totalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f5f0]/80 backdrop-blur-md border-b border-[#5A5A40]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#5A5A40] rounded-full flex items-center justify-center">
              <Coffee className="text-white w-6 h-6" />
            </div>
            <span className="font-serif text-2xl font-bold text-[#1a1a1a] tracking-tight">
              Urban Roast
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#menu" className="text-sm uppercase tracking-widest font-medium text-[#5A5A40] hover:text-[#1a1a1a] transition-colors">Menu</a>
            <a href="#about" className="text-sm uppercase tracking-widest font-medium text-[#5A5A40] hover:text-[#1a1a1a] transition-colors">About</a>
            <a href="#locations" className="text-sm uppercase tracking-widest font-medium text-[#5A5A40] hover:text-[#1a1a1a] transition-colors">Locations</a>
            
            <button 
              onClick={onCartClick}
              className="relative p-2 hover:bg-[#5A5A40]/5 rounded-full transition-colors"
            >
              <ShoppingBag className="w-6 h-6 text-[#1a1a1a]" />
              {totalItems > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-[#5A5A40] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={onCartClick}
              className="relative p-2"
            >
              <ShoppingBag className="w-6 h-6 text-[#1a1a1a]" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#5A5A40] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#f5f5f0] border-t border-[#5A5A40]/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-serif italic text-[#1a1a1a]">Our Menu</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-serif italic text-[#1a1a1a]">The Story</a>
              <a href="#locations" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-serif italic text-[#1a1a1a]">Visit Us</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
