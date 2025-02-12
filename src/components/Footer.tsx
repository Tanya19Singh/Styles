import React from 'react';
import { TrendingUp, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-custom-pink" />
              <span className="ml-2 text-2xl font-bodoni text-white">Styles</span>
            </div>
            <p className="mt-4 text-sm">Your ultimate destination for Indian fashion trends and style inspiration.</p>
          </div>
          
          <div>
            <h3 className="text-white font-bodoni mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#trends" className="hover:text-custom-pink transition">Trends</a></li>
              <li><a href="#blog" className="hover:text-custom-pink transition">Blog</a></li>
              <li><a href="#community" className="hover:text-custom-pink transition">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bodoni mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-custom-pink transition">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-custom-pink transition">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-custom-pink transition">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bodoni mb-4">Newsletter</h3>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-pink"
              />
              <button className="bg-custom-pink text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition font-bodoni">
                Subscribe
              </button>
            </div>
            <p className="mt-3 text-xs text-gray-400">Stay updated with the latest fashion trends and style tips.</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2024 Styles. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-custom-pink transition">Privacy Policy</a>
              <a href="#" className="hover:text-custom-pink transition">Terms of Service</a>
              <a href="#" className="hover:text-custom-pink transition">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}