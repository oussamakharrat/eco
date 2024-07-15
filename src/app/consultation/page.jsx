// pages/consultation.js
'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Consultation() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSuccess(true);
    setLoading(false);
    setName('');
    setEmail('');
    setTopic('');
    setMessage('');
  };

  return (
    <div className="bg-gray-50">
      <Navbar />
      <Head>
        <title>Consultation - Green Essentials Co.</title>
        <meta name="description" content="Schedule a consultation with Green Essentials Co." />
      </Head>

      <header className="bg-green-700 text-white text-center py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold">Consultation Services</h1>
        <p className="mt-4 text-lg md:text-xl">Get personalized advice for your sustainable journey.</p>
      </header>

      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-green-600 text-center">Schedule a Consultation</h2>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg mt-8">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Consultation Topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transition duration-300"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Schedule Consultation'}
          </button>
          {success && <p className="mt-4 text-green-600">Request sent successfully!</p>}
        </form>
      </section>

      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-green-600 text-center">Why Choose Us?</h2>
        <ul className="mt-8 space-y-4 text-left">
          <li className="flex items-start">
            <span className="font-bold text-lg">🌿 Personalized Approach:</span>
            <p className="ml-2">Tailored solutions for your unique sustainable needs.</p>
          </li>
          <li className="flex items-start">
            <span className="font-bold text-lg">🌍 Expert Advice:</span>
            <p className="ml-2">Access to knowledgeable professionals in eco-friendly practices.</p>
          </li>
          <li className="flex items-start">
            <span className="font-bold text-lg">📅 Flexible Scheduling:</span>
            <p className="ml-2">Convenient consultation times to fit your schedule.</p>
          </li>
        </ul>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6">
        <p className="mt-4">© 2024 Green Essentials Co. All rights reserved.</p>
      </footer>
    </div>
  );
}
