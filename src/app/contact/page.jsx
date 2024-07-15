// pages/contact.js
'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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
    setMessage('');
  };

  const currentPage = '/contact'; // Set the current page to contact

  return (
    <div className="bg-gray-50">
      <Navbar currentPage={currentPage} />
      <Head>
        <title>Contact Us - Green Essentials Co.</title>
        <meta name="description" content="Contact Green Essentials Co. for inquiries." />
      </Head>

      <header className="bg-green-700 text-white text-center py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold">Contact Us</h1>
        <p className="mt-4 text-lg md:text-xl">We'd love to hear from you!</p>
      </header>

      <section className="py-16 px-4 max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
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
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {success && <p className="mt-4 text-green-600">Message sent successfully!</p>}
        </form>
      </section>

      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-green-600 text-center">Contact Details</h2>
        <div className="mt-8 text-center">
          <p className="text-lg">Phone: <span className="font-bold">+1 234 567 890</span></p>
          <p className="text-lg">Email: <span className="font-bold">contact@greenessentials.com</span></p>
          <p className="text-lg">Business Hours: <span className="font-bold">Mon-Fri, 9am - 5pm</span></p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-green-600 text-center">Our Location</h2>
        <div className="mt-8">
          <iframe
            className="w-full h-60 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509123!2d144.9537363153164!3d-37.81627997975121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0e21ef%3A0x5045675218cd6e0!2sGreen%20Essentials%20Co.%20Headquarters!5e0!3m2!1sen!2sus!4v1615750972618!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-green-600 text-center">Follow Us</h2>
        <div className="mt-8 flex justify-center space-x-4">
          <Link href="https://facebook.com" target="_blank">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300">Facebook</button>
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <button className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-300 transition duration-300">Twitter</button>
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <button className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-400 transition duration-300">Instagram</button>
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-green-600 text-center">Why Choose Us?</h2>
        <p className="mt-4 text-lg text-gray-700 text-center">
          At Green Essentials Co., we are committed to sustainability and providing you with eco-friendly options. 
          Your satisfaction is our priority, and we are here to support your journey toward a greener future.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-4 border border-gray-300 rounded-lg text-center shadow-lg hover:scale-105 transition duration-250">
            <h3 className="text-xl font-bold text-green-600">Quality Products</h3>
            <p className="mt-2 text-gray-700">Carefully sourced to meet high environmental standards.</p>
          </div>
          <div className="p-4 border border-gray-300 rounded-lg text-center shadow-lg hover:scale-105 transition duration-250">
            <h3 className="text-xl font-bold text-green-600">Customer Support</h3>
            <p className="mt-2 text-gray-700">Dedicated team ready to assist you with any inquiries.</p>
          </div>
          <div className="p-4 border border-gray-300 rounded-lg text-center shadow-lg hover:scale-105 transition duration-250">
            <h3 className="text-xl font-bold text-green-600">Community Engagement</h3>
            <p className="mt-2 text-gray-700">Join us in various workshops and events to promote sustainability.</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6">
        <p className="mt-4">© 2024 Green Essentials Co. All rights reserved.</p>
      </footer>
    </div>
  );
}
