import React from 'react';

export function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose prose-blue max-w-none">
        <p className="text-lg mb-6">Last updated: March 1, 2024</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>By accessing and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p>We grant you a limited, non-exclusive, non-transferable license to use our services subject to these terms.</p>
          <ul className="list-disc pl-6 mb-4">
            <li>You may not modify or copy our software</li>
            <li>You may not use the service for illegal purposes</li>
            <li>You may not transfer your account to another party</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Service Availability</h2>
          <p>We strive to provide uninterrupted service but may need to perform maintenance or updates. We are not liable for any service interruptions.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Account Terms</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>You must provide accurate information</li>
            <li>You are responsible for maintaining account security</li>
            <li>You must notify us of unauthorized access</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
          <p>Subscription fees are billed in advance. All payments are non-refundable unless required by law.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
          <p>We may terminate or suspend your account for violations of these terms. You may cancel your account at any time.</p>
        </section>
      </div>
    </div>
  );
}