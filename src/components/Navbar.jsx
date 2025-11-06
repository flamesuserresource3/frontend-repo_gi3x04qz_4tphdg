import React from 'react';
import { Car, ShoppingCart, LogIn, User, Menu } from 'lucide-react';

const Navbar = ({ onLogin, onRegister, onToggleCart, cartCount = 0 }) => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-gray-900">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gray-900 text-white">
            <Car size={18} />
          </span>
          <span className="text-lg tracking-tight">VeloShowroom</span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#home" className="text-gray-700 hover:text-gray-900 transition">Home</a>
          <a href="#about" className="text-gray-700 hover:text-gray-900 transition">About</a>
          <a href="#collections" className="text-gray-700 hover:text-gray-900 transition">Collections</a>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onLogin}
            className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            <LogIn size={16} />
            <span className="hidden sm:inline">Login</span>
          </button>
          <button
            onClick={onRegister}
            className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-black"
          >
            <User size={16} />
            <span className="hidden sm:inline">Register</span>
          </button>
          <button
            onClick={onToggleCart}
            className="relative ml-1 inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            aria-label="Open cart"
          >
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-500 px-1.5 text-xs font-semibold text-white">
                {cartCount}
              </span>
            )}
          </button>
          <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-gray-100">
            <Menu size={18} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
