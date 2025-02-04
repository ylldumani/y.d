import React from 'react';

export function CookiePolicy() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      
      <div className="prose prose-blue max-w-none">
        <p className="text-lg mb-6">Last updated: March 1, 2024</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
          <p>Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Types of Cookies We Use</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Essential cookies for basic functionality</li>
            <li>Analytics cookies to understand usage</li>
            <li>Preference cookies to remember your settings</li>
            <li>Marketing cookies for targeted advertising</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Managing Cookies</h2>
          <p>You can control cookies through your browser settings. However, disabling certain cookies may limit your ability to use some features.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Third-Party Cookies</h2>
          <p>We may use third-party services that set their own cookies. These services include:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Analytics providers</li>
            <li>Advertising networks</li>
            <li>Social media platforms</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Updates to This Policy</h2>
          <p>We may update this Cookie Policy to reflect changes in our practices. Check back periodically for updates.</p>
        </section>
      </div>
    </div>
  );
}