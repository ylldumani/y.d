import React from 'react';
import { Book, Code, Terminal, FileText, Video, MessageCircle } from 'lucide-react';

export function Documentation() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Documentation</h2>
          <p className="mt-4 text-lg text-gray-500">
            Everything you need to get started and make the most of our platform
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/docs/getting-started" className="block group">
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <Book className="h-6 w-6 text-blue-600" />
                  <h3 className="ml-3 text-lg font-medium text-gray-900">Getting Started</h3>
                </div>
                <p className="mt-4 text-gray-500">Quick start guides and basic concepts to get you up and running</p>
              </div>
            </a>

            <a href="/docs/api" className="block group">
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <Code className="h-6 w-6 text-blue-600" />
                  <h3 className="ml-3 text-lg font-medium text-gray-900">API Reference</h3>
                </div>
                <p className="mt-4 text-gray-500">Complete API documentation with examples and use cases</p>
              </div>
            </a>

            <a href="/docs/cli" className="block group">
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <Terminal className="h-6 w-6 text-blue-600" />
                  <h3 className="ml-3 text-lg font-medium text-gray-900">CLI Tools</h3>
                </div>
                <p className="mt-4 text-gray-500">Command line tools documentation and usage guides</p>
              </div>
            </a>

            <a href="/docs/guides" className="block group">
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <h3 className="ml-3 text-lg font-medium text-gray-900">Guides & Tutorials</h3>
                </div>
                <p className="mt-4 text-gray-500">Step-by-step tutorials and best practices</p>
              </div>
            </a>

            <a href="/docs/videos" className="block group">
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <Video className="h-6 w-6 text-blue-600" />
                  <h3 className="ml-3 text-lg font-medium text-gray-900">Video Tutorials</h3>
                </div>
                <p className="mt-4 text-gray-500">Video guides and screencasts for visual learning</p>
              </div>
            </a>

            <a href="/docs/community" className="block group">
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                  <h3 className="ml-3 text-lg font-medium text-gray-900">Community</h3>
                </div>
                <p className="mt-4 text-gray-500">Join our community forums and get help from other developers</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}