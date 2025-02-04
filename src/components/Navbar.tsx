import React, { useState } from 'react';
import { Menu, X, LogIn, UserPlus, Home, Package, BookOpen, Mail } from 'lucide-react';
import { supabase } from '../lib/supabase';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [session] = useState(supabase.auth.getSession());

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3">
              <Package className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">YourBrand</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="/" className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              <Home className="h-4 w-4 mr-2" />
              Home
            </a>
            <a href="#products" className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              <Package className="h-4 w-4 mr-2" />
              Products
            </a>
            <a href="#blog" className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              <BookOpen className="h-4 w-4 mr-2" />
              Blog
            </a>
            <a href="#contact" className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              <Mail className="h-4 w-4 mr-2" />
              Contact
            </a>
            <div className="flex items-center space-x-4 ml-4">
              <a href="/signin" className="flex items-center text-blue-600 hover:text-blue-700 px-4 py-2 text-sm font-medium">
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </a>
              <a href="/signup" className="flex items-center bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">
                <UserPlus className="h-4 w-4 mr-2" />
                Sign Up
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium">
              <Home className="h-5 w-5 mr-2" />
              Home
            </a>
            <a href="#products" className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium">
              <Package className="h-5 w-5 mr-2" />
              Products
            </a>
            <a href="#blog" className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium">
              <BookOpen className="h-5 w-5 mr-2" />
              Blog
            </a>
            <a href="#contact" className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium">
              <Mail className="h-5 w-5 mr-2" />
              Contact
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2 space-y-1">
              <a href="/signin" className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium">
                <LogIn className="h-5 w-5 mr-2" />
                Sign In
              </a>
              <a href="/signup" className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium">
                <UserPlus className="h-5 w-5 mr-2" />
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}