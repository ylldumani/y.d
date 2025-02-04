import React from 'react';
import { ArrowRight, Shield, Zap, Users } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-white pt-24 pb-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight sm:text-6xl">
            Secure Solutions for Your Business
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            Transform your business with our enterprise-grade platform. Built for security,
            scalability, and performance.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="#products"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get started
              <ArrowRight className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="/documentation"
              className="inline-flex items-center px-8 py-3 border border-blue-600 text-base font-medium rounded-full text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Documentation
            </a>
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-50 mx-auto">
                <Shield className="h-6 w-6 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Enterprise Security</h3>
              <p className="mt-2 text-gray-500">Bank-grade security with end-to-end encryption</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-50 mx-auto">
                <Zap className="h-6 w-6 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Lightning Fast</h3>
              <p className="mt-2 text-gray-500">Optimized performance with global CDN support</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-50 mx-auto">
                <Users className="h-6 w-6 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Team Collaboration</h3>
              <p className="mt-2 text-gray-500">Built for teams with advanced collaboration tools</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}