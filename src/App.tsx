import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Auth } from './components/Auth';
import { Blog } from './components/Blog';
import { Newsletter } from './components/Newsletter';
import { Products } from './components/Products';
import { Documentation } from './pages/Documentation';
import { Support } from './pages/Support';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { CookiePolicy } from './pages/CookiePolicy';
import { BackToTop } from './components/BackToTop';
import { ArrowLeft } from 'lucide-react';

export default function App() {
  // Simple routing based on pathname
  const path = window.location.pathname;

  // Render different components based on the path
  const renderContent = () => {
    switch (path) {
      case '/privacy-policy':
        return <PrivacyPolicy />;
      case '/terms-of-service':
        return <TermsOfService />;
      case '/cookie-policy':
        return <CookiePolicy />;
      case '/documentation':
        return <Documentation />;
      case '/support':
        return <Support />;
      case '/signin':
      case '/signup':
        return (
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <a 
                href="/" 
                className="absolute top-4 left-4 inline-flex items-center text-gray-500 hover:text-gray-700"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </a>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {path === '/signin' ? 'Welcome back!' : 'Create your account'}
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                {path === '/signin' ? (
                  <>
                    Don't have an account?{' '}
                    <a href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
                      Sign up
                    </a>
                  </>
                ) : (
                  <>
                    Already have an account?{' '}
                    <a href="/signin" className="font-medium text-blue-600 hover:text-blue-500">
                      Sign in
                    </a>
                  </>
                )}
              </p>
            </div>
            <Auth />
          </div>
        );
      default:
        return (
          <>
            <Hero />
            <Products />
            <Blog />
            <Newsletter />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {!['/signin', '/signup'].includes(path) && <Navbar />}
      <main className={!['/signin', '/signup'].includes(path) ? 'pt-16' : ''}>
        {renderContent()}
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">Providing innovative solutions for your business needs.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#enterprise" className="text-gray-400 hover:text-white transition-colors">Enterprise Suite</a></li>
              <li><a href="#professional" className="text-gray-400 hover:text-white transition-colors">Professional Plan</a></li>
              <li><a href="#starter" className="text-gray-400 hover:text-white transition-colors">Starter Package</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/documentation" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="/support" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">&copy; {new Date().getFullYear()} YourBrand. All rights reserved.</p>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
}