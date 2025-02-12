import React, { useState } from 'react';
import { Menu, X, Search, TrendingUp } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <TrendingUp className="h-8 w-8 text-custom-pink" />
            <span className="ml-2 text-2xl font-bodoni text-custom-pink">Styles</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#trends" className="text-gray-700 hover:text-custom-pink font-bodoni">Trends</a>
            <a href="#blog" className="text-gray-700 hover:text-custom-pink font-bodoni">Blog</a>
            <a href="#community" className="text-gray-700 hover:text-custom-pink font-bodoni">Community</a>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search styles..."
                className="pl-10 pr-4 py-2 border border-custom-blue rounded-full focus:outline-none focus:ring-2 focus:ring-custom-pink focus:border-transparent"
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-custom-pink focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#trends" className="block px-3 py-2 text-gray-700 hover:text-custom-pink font-bodoni">Trends</a>
            <a href="#blog" className="block px-3 py-2 text-gray-700 hover:text-custom-pink font-bodoni">Blog</a>
            <a href="#community" className="block px-3 py-2 text-gray-700 hover:text-custom-pink font-bodoni">Community</a>
            <div className="px-3 py-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search styles..."
                  className="w-full pl-10 pr-4 py-2 border border-custom-blue rounded-full focus:outline-none focus:ring-2 focus:ring-custom-pink focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}