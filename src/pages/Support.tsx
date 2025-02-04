import React from 'react';
import { LifeBuoy, Mail, MessageSquare, Phone } from 'lucide-react';

export function Support() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Support</h2>
          <p className="mt-4 text-lg text-gray-500">
            We're here to help. Get in touch with our support team.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Phone Support</h3>
                  <p className="mt-2 text-gray-500">
                    Available Monday to Friday, 9am to 5pm EST
                    <br />
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email Support</h3>
                  <p className="mt-2 text-gray-500">
                    We'll respond within 24 hours
                    <br />
                    support@example.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Live Chat</h3>
                  <p className="mt-2 text-gray-500">
                    Chat with our support team in real-time
                    <br />
                    Available 24/7
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <LifeBuoy className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Help Center</h3>
                  <p className="mt-2 text-gray-500">
                    Browse our knowledge base
                    <br />
                    Find answers to common questions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}