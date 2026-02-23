import React from 'react';
import { Coffee, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#5A5A40] rounded-full flex items-center justify-center">
                <Coffee className="text-white w-6 h-6" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight">
                Urban Roast
              </span>
            </div>
            <p className="text-white/60 max-w-sm leading-relaxed mb-8">
              Dedicated to the craft of coffee and the community it builds. Visit us for a unique sensory experience in every cup.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#menu" className="hover:text-white transition-colors">Our Menu</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">The Story</a></li>
              <li><a href="#locations" className="hover:text-white transition-colors">Find Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Visit Us</h4>
            <ul className="space-y-4 text-white/60">
              <li>
                <p className="font-medium text-white">Islamabad HQ</p>
                <p className="text-sm">Super Market, F-6, Islamabad</p>
              </li>
              <li>
                <p className="font-medium text-white">Hours</p>
                <p className="text-sm">Mon–Fri: 7am – 8pm</p>
                <p className="text-sm">Sat–Sun: 8am – 9pm</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest text-white/40">
          <p>© 2024 Urban Roast Café. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
