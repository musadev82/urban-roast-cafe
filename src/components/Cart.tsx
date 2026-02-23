import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#f5f5f0] z-[70] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#5A5A40]/10 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-[#5A5A40]" />
                <h2 className="text-2xl font-serif text-[#1a1a1a]">Your Order</h2>
                <span className="bg-[#5A5A40] text-white text-[10px] px-2 py-0.5 rounded-full">
                  {totalItems}
                </span>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-[#5A5A40]/5 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-[#1a1a1a]" />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-[#5A5A40]/5 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag className="w-10 h-10 text-[#5A5A40]/30" />
                  </div>
                  <h3 className="text-xl font-serif text-[#1a1a1a] mb-2">Your cart is empty</h3>
                  <p className="text-[#5A5A40]/60 text-sm">Looks like you haven't added any treats yet.</p>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div 
                    layout
                    key={item.id}
                    className="flex gap-4"
                  >
                    <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif text-lg text-[#1a1a1a]">{item.name}</h4>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-[#5A5A40]/40 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-sm text-[#5A5A40]/60">${item.price.toFixed(2)}</p>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3 bg-white border border-[#5A5A40]/10 rounded-full px-3 py-1">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="text-[#5A5A40] hover:text-[#1a1a1a]"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="text-[#5A5A40] hover:text-[#1a1a1a]"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="font-medium text-[#1a1a1a]">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 bg-white border-t border-[#5A5A40]/10 space-y-4">
                <div className="flex justify-between items-center text-[#1a1a1a]">
                  <span className="text-sm uppercase tracking-widest font-medium">Subtotal</span>
                  <span className="text-2xl font-serif">${totalPrice.toFixed(2)}</span>
                </div>
                <p className="text-xs text-[#5A5A40]/60 text-center">
                  Taxes and shipping calculated at checkout.
                </p>
                <button className="w-full py-4 bg-[#5A5A40] text-white rounded-full font-medium hover:bg-[#1a1a1a] transition-all shadow-lg shadow-[#5A5A40]/20">
                  Checkout Now
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
