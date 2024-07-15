// pages/gallery.js

'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../components/Navbar';

const images = [
  {
    src: "https://th.bing.com/th/id/R.05055912173b0bb997de7ec31b6ad70b?rik=1COy7nkh5Da8NQ&riu=http%3a%2f%2fplanetgoodwill.com%2fwp-content%2fuploads%2f2018%2f12%2f911ZrDKR7CL._SL1500_.jpg&ehk=6W38b8igaXzO0paarbkW4crB%2bpf1SAzUejv%2f6wOqC9s%3d&risl=&pid=ImgRaw&r=0",
    name: "Eco-Friendly Bottle",
    price: "$15.99",
    description: "A reusable bottle made from sustainable materials."
  },
  {
    src: "https://th.bing.com/th/id/OIP.QW7Q-U2E6G2rhLBNmr_i7QHaE6?rs=1&pid=ImgDetMain",
    name: "Biodegradable Plates",
    price: "$12.49",
    description: "Compostable plates perfect for eco-friendly events."
  },
  {
    src: "https://th.bing.com/th/id/R.241eaa188022a8bd457bdd17e5b395e4?rik=3GOhdECK49K%2btQ&pid=ImgRaw&r=0",
    name: "Organic Cotton Tote",
    price: "$10.00",
    description: "Durable tote bag made from 100% organic cotton."
  },
  {
    src: "https://th.bing.com/th/id/R.6bad73fcd2c4730a412a95c4c8196fbd?rik=%2fI9GxcWKnBD7lw&pid=ImgRaw&r=0",
    name: "Reusable Straw Set",
    price: "$8.99",
    description: "A set of reusable straws to reduce plastic waste."
  },
  {
    src: "https://th.bing.com/th/id/OIP.ZjvkqTxOrVptFbPMe9l5IAHaEK?rs=1&pid=ImgDetMain",
    name: "Sustainable Notebooks",
    price: "$5.50",
    description: "Notebooks made from recycled paper for eco-friendly notes."
  },
  {
    src: "https://th.bing.com/th/id/OIF.3UhhzFp1bvQgQqOZYOtFUw?rs=1&pid=ImgDetMain",
    name: "Solar-Powered Charger",
    price: "$24.99",
    description: "Charge your devices sustainably with solar power."
  },
];

export default function Gallery() {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredImages = images.filter((image) =>
    image.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentPage = '/gallery'; // Set the current page to gallery

  return (
    <div className="bg-gray-50">
      <Navbar currentPage={currentPage} />
      <Head>
        <title>Gallery - Green Essentials Co.</title>
        <meta name="description" content="Explore our product and service gallery." />
      </Head>

      <header className="bg-green-700 text-white text-center py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold">Our Gallery</h1>
        <p className="mt-4 text-lg md:text-xl">Showcasing our eco-friendly products and services.</p>
        <input
          type="text"
          placeholder="Search images..."
          className="mt-4 p-3 rounded-lg border border-gray-300 text-gray-700 shadow transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </header>

      <section className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {filteredImages.length > 0 ? (
          filteredImages.map((image, index) => (
            <div key={index} className="relative bg-white rounded-lg shadow-lg p-4">
              <img
                src={image.src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg transition-transform transform hover:scale-105"
              />
              <h3 className="mt-2 text-lg font-semibold">{image.name}</h3>
              <p className="text-gray-700">{image.description}</p>
              <p className="mt-1 font-bold text-green-600">{image.price}</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-700">No images found.</p>
        )}
      </section>

      <footer className="bg-gray-800 text-white text-center py-6">
        <p className="mt-4">© 2024 Green Essentials Co. All rights reserved.</p>
      </footer>
    </div>
  );
}
