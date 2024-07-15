// pages/index.js

import Head from 'next/head';
import Link from 'next/link';
import Navbar from './components/Navbar';

export default function Home() {
  const currentPage = '/'; // Set the current page to home

  return (
    <div className="bg-gray-50">
      <Navbar currentPage={currentPage} />
      <Head>
        <title>Green Essentials Co.</title>
        <meta name="description" content="Eco-friendly products for a sustainable lifestyle." />
      </Head>
      
      <header className="bg-green-700 text-white text-center py-24">
        <h1 className="text-4xl md:text-5xl font-extrabold">Welcome to Green Essentials Co.</h1>
        <p className="mt-4 text-lg md:text-xl">Your one-stop shop for sustainable living.</p>
        <Link href="/contact">
          <button className="mt-6 px-8 py-3 bg-white text-green-700 rounded-lg shadow hover:bg-gray-200 transition duration-300">
            Contact Us
          </button>
        </Link>
      </header>

      <section className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-green-600">Introduction to Our Business</h2>
        <p className="mt-4 max-w-xl mx-auto text-base md:text-lg text-gray-700">
          At Green Essentials Co., we believe in making eco-friendly choices accessible to everyone. 
          Our mission is to provide sustainable alternatives that help you reduce your carbon footprint 
          and promote a healthier planet for future generations.
        </p>
        <Link href="/gallery">
          <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-500 transition duration-300">
            View Our Products
          </button>
        </Link>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-green-600">Our Key Services</h2>
        <div className="flex flex-wrap justify-center mt-10 space-x-0 space-y-6 md:space-y-0 md:space-x-6">
          <div className="bg-white p-6 rounded-lg shadow-lg w-72">
            <h3 className="text-xl md:text-2xl font-bold">Eco-Friendly Products</h3>
            <p className="mt-4 text-gray-700">Explore a wide range of sustainable products designed for a better tomorrow.</p>
            <Link href="/gallery">
              <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition duration-300">
                Learn More
              </button>
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-72">
            <h3 className="text-xl md:text-2xl font-bold">Consultation</h3>
            <p className="mt-4 text-gray-700">Get personalized advice to enhance your sustainable living journey.</p>
            <Link href="/consultation">
              <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition duration-300">
                Get Started
              </button>
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-72">
            <h3 className="text-xl md:text-2xl font-bold">Workshops</h3>
            <p className="mt-4 text-gray-700">Join our workshops to learn practical eco-friendly practices.</p>
            <Link href="/workshops">
              <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition duration-300">
                Join Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6">
        <p>© 2024 Green Essentials Co. All rights reserved.</p>
      </footer>
    </div>
  );
}
