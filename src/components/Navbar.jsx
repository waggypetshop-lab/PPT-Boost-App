import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoUpdated from '../assets/logoUpdated.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const cartItemCount = 0; // Will be dynamic later

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      {/* 3-Column Grid System: Tighter max-width for cohesive spacing */}
      <div className="grid grid-cols-[auto_1fr_auto] items-center h-20 max-w-6xl mx-auto px-6">
        
        {/* Column 1: Logo (Left) */}
        <div className="justify-self-start">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logoUpdated} 
              alt="PPT Boost Logo" 
              className="h-8 w-auto mt-1"
            />
            <span className="font-bold text-xl tracking-tight text-white leading-none flex items-center">
              PPT <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">BOOST</span>
            </span>
          </Link>
        </div>

        {/* Column 2: Navigation (Center) - Desktop Only */}
        <div className="justify-self-center hidden md:flex">
          <div className="bg-white/5 border border-white/10 rounded-full px-8 py-2 backdrop-blur-md flex items-center gap-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-orange-500 ${
                  isActive ? 'text-orange-500 font-bold' : 'text-gray-300'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/templates" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-orange-500 ${
                  isActive ? 'text-orange-500 font-bold' : 'text-gray-300'
                }`
              }
            >
              Templates
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-orange-500 ${
                  isActive ? 'text-orange-500 font-bold' : 'text-gray-300'
                }`
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/testimonials" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-orange-500 ${
                  isActive ? 'text-orange-500 font-bold' : 'text-gray-300'
                }`
              }
            >
              Testimonials
            </NavLink>
          </div>
        </div>

        {/* Column 3: Actions (Right) - Grouped Cart + Menu */}
        <div className="justify-self-end flex items-center gap-4">
          {/* Shopping Cart Button - Brand Orange Style */}
          <button className="relative w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-orange-500/20 hover:border-orange-500/50 hover:scale-110 active:scale-95">
            <ShoppingCart 
              size={20} 
              strokeWidth={2} 
              className="text-orange-500 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]"
            />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center animate-pulse">
                {cartItemCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all text-gray-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <motion.div 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              className="px-6 pt-4 pb-6 space-y-2"
            >
              <NavLink 
                to="/" 
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `block px-5 py-3 rounded-xl text-base font-medium transition-all hover:text-orange-500 hover:bg-white/5 ${
                    isActive ? 'text-orange-500 font-bold bg-white/5' : 'text-gray-300'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/templates" 
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `block px-5 py-3 rounded-xl text-base font-medium transition-all hover:text-orange-500 hover:bg-white/5 ${
                    isActive ? 'text-orange-500 font-bold bg-white/5' : 'text-gray-300'
                  }`
                }
              >
                Templates
              </NavLink>
              <NavLink 
                to="/services" 
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `block px-5 py-3 rounded-xl text-base font-medium transition-all hover:text-orange-500 hover:bg-white/5 ${
                    isActive ? 'text-orange-500 font-bold bg-white/5' : 'text-gray-300'
                  }`
                }
              >
                Services
              </NavLink>
              <NavLink 
                to="/testimonials" 
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `block px-5 py-3 rounded-xl text-base font-medium transition-all hover:text-orange-500 hover:bg-white/5 ${
                    isActive ? 'text-orange-500 font-bold bg-white/5' : 'text-gray-300'
                  }`
                }
              >
                Testimonials
              </NavLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
