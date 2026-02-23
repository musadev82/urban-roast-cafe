import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { motion } from 'motion/react';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#f5f5f0] selection:bg-[#5A5A40] selection:text-white">
        <Navbar onCartClick={() => setIsCartOpen(true)} />
        
        <main>
          <Hero />
          
          {/* About Section */}
          <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="aspect-[4/5] rounded-[2rem] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1000" 
                      alt="Barista at work"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#5A5A40] rounded-[2rem] p-8 text-white hidden md:flex flex-col justify-end">
                    <p className="text-4xl font-serif italic mb-2">10+</p>
                    <p className="text-sm uppercase tracking-widest opacity-80">Years of Roasting Excellence</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-[#5A5A40] text-sm uppercase tracking-[0.3em] font-semibold mb-6 block">Our Story</span>
                  <h2 className="text-5xl font-serif text-[#1a1a1a] leading-tight mb-8">
                    Born from a passion for <span className="italic">exceptional</span> coffee.
                  </h2>
                  <div className="space-y-6 text-lg text-[#5A5A40]/80 leading-relaxed">
                    <p>
                      Urban Roast started as a small cart in Islamabad's vibrant markets with one simple goal: to serve the best cup of coffee anyone had ever tasted.
                    </p>
                    <p>
                      Today, we've grown into a destination for coffee lovers, but our commitment remains the same. We source our beans ethically from sustainable farms and roast them in small batches to ensure peak flavor.
                    </p>
                  </div>
                  <button className="mt-10 px-8 py-4 border border-[#5A5A40]/20 rounded-full text-[#1a1a1a] font-medium hover:bg-[#5A5A40] hover:text-white transition-all">
                    Learn More About Our Process
                  </button>
                </motion.div>
              </div>
            </div>
          </section>

          <Menu />
          
          {/* Newsletter Section */}
          <section className="py-24 bg-[#5A5A40]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Join the Ritual</h2>
                <p className="text-white/70 max-w-xl mx-auto mb-10">
                  Subscribe to our newsletter for exclusive offers, brewing tips, and first access to seasonal releases.
                </p>
                <form className="max-w-md mx-auto flex gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                  <button className="px-8 py-4 bg-white text-[#5A5A40] rounded-full font-bold hover:bg-[#f5f5f0] transition-colors">
                    Join
                  </button>
                </form>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
        
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
}
