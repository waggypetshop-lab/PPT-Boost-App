import { Link, NavLink } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoUpdated from '../assets/logoUpdated.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = false; // Temporary placeholder

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      {/* 3-Column Grid System: Tighter max-width for cohesive spacing */}
      <div className="grid grid-cols-[auto_1fr_auto] items-center h-20 w-full px-8">
        
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
        <div className="justify-self-center hidden lg:flex">
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
              to="/courses" 
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-orange-500 ${
                  isActive ? 'text-orange-500 font-bold' : 'text-gray-300'
                }`
              }
            >
              Courses
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

        {/* Column 3: Actions (Right) - Auth or Menu */}
        <div className="justify-self-end flex items-center gap-4">
          {!isLoggedIn ? (
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/login"
                className="rounded-full px-5 py-2 text-sm bg-white/5 border border-white/10 text-gray-300 hover:border-orange-500/50 hover:text-orange-500 transition-all"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="rounded-full px-5 py-2 text-sm bg-orange-500 text-black font-semibold hover:bg-orange-400 transition-all"
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-orange-500/50 transition-all">
              <User size={20} className="text-orange-500" />
            </button>
          )}
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all text-gray-300"
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
            className="lg:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
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
                to="/courses" 
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-5 py-3 rounded-xl text-base font-medium transition-all hover:text-orange-500 hover:bg-white/5 ${
                    isActive ? 'text-orange-500 font-bold bg-white/5' : 'text-gray-300'
                  }`
                }
              >
                Courses
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
              <div className="border-t border-white/10 my-2" />
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block px-5 py-3 rounded-xl text-base font-medium transition-all hover:text-orange-500 hover:bg-white/5 text-gray-300"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="block px-5 py-3 rounded-xl text-base font-semibold transition-all hover:text-orange-500 hover:bg-white/5 text-orange-500"
              >
                Sign Up
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
