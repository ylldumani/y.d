import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Send, Bell, Shield, Mail } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

      if (error) throw error;
      setSuccess(true);
      setEmail('');
    } catch (error) {
      alert('Error subscribing to newsletter');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Stay in the Loop</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join our newsletter and get exclusive insights, industry updates, and special offers delivered straight to your inbox.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6">
            <Bell className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Latest Updates</h3>
            <p className="text-gray-600">Be the first to know about new features and improvements</p>
          </div>
          <div className="text-center p-6">
            <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Security Alerts</h3>
            <p className="text-gray-600">Receive important security notifications and best practices</p>
          </div>
          <div className="text-center p-6">
            <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Exclusive Content</h3>
            <p className="text-gray-600">Get access to subscriber-only content and resources</p>
          </div>
        </div>

        {success ? (
          <div className="bg-green-50 text-green-800 p-6 rounded-lg max-w-md mx-auto text-center">
            <h3 className="font-semibold text-lg mb-2">Thank You for Subscribing!</h3>
            <p>You'll receive our next newsletter soon. Stay tuned for exciting updates!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-primary flex items-center gap-2 py-3"
              >
                <Send className="h-4 w-4" />
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-3 text-center">
              By subscribing, you agree to our{' '}
              <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}