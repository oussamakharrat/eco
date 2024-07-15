// pages/workshops.js
'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../components/Navbar';

const workshopsData = [
  {
    title: 'Eco-Friendly Living Workshop',
    date: '2024-08-01',
    time: '10:00 AM - 12:00 PM',
    description: 'Learn sustainable living practices to reduce your carbon footprint.',
    image: 'https://th.bing.com/th/id/R.b3a038d3ee93cbaf26df0e67d39e1b84?rik=pP%2fpL%2fk3DWn%2bqQ&pid=ImgRaw&r=0',
  },
  {
    title: 'Zero Waste Strategies',
    date: '2024-08-15',
    time: '1:00 PM - 3:00 PM',
    description: 'Discover effective strategies to minimize waste in your daily life.',
    image: 'https://th.bing.com/th/id/OIP.j2HnFjahj-FqwlsXiEqgjQHaEY?rs=1&pid=ImgDetMain',
  },
  {
    title: 'DIY Natural Products',
    date: '2024-08-22',
    time: '2:00 PM - 4:00 PM',
    description: 'Create your own eco-friendly products using natural ingredients.',
    image: 'https://th.bing.com/th/id/R.500fee0ec0c9bd58f2d0cddcbcfc13d0?rik=XRvAtbpM%2bYnCgg&pid=ImgRaw&r=0',
  },
];

export default function Workshops() {
  const [search, setSearch] = useState('');
  const [registeredWorkshops, setRegisteredWorkshops] = useState([]);

  const handleRegister = (workshop) => {
    if (!registeredWorkshops.includes(workshop.title)) {
      setRegisteredWorkshops([...registeredWorkshops, workshop.title]);
      alert(`Registered for ${workshop.title}!`);
    } else {
      alert(`You are already registered for ${workshop.title}.`);
    }
  };

  return (
    <div className="bg-gray-50">
      <Navbar />
      <Head>
        <title>Workshops - Green Essentials Co.</title>
        <meta name="description" content="Join our workshops to learn eco-friendly practices." />
      </Head>

      <header className="bg-green-700 text-white text-center py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold">Upcoming Workshops</h1>
        <p className="mt-4 text-lg md:text-xl">Join us to learn and grow in sustainability!</p>
      </header>

      <section className="py-16 px-4 max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="Search Workshops..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {workshopsData
          .filter((workshop) => workshop.title.toLowerCase().includes(search.toLowerCase()))
          .map((workshop) => (
            <div key={workshop.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={workshop.image} alt={workshop.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{workshop.title}</h3>
                <p className="mt-2 text-gray-700">{workshop.description}</p>
                <p className="mt-2 text-green-600 font-semibold">{workshop.date} | {workshop.time}</p>
                <button
                  onClick={() => handleRegister(workshop)}
                  className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition duration-300"
                >
                  Register Now
                </button>
              </div>
            </div>
          ))}
      </section>

      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-green-600 text-center">Testimonials</h2>
        <div className="mt-8 space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="italic">“The Eco-Friendly Living Workshop changed my life! I now live more sustainably.”</p>
            <p className="mt-2 font-bold">- Jane Doe</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="italic">“I loved the DIY Natural Products workshop. It was fun and informative!”</p>
            <p className="mt-2 font-bold">- John Smith</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-green-600 text-center">FAQs</h2>
        <div className="mt-8 space-y-4">
          <div>
            <h3 className="font-bold">What should I bring to the workshops?</h3>
            <p>Just bring your enthusiasm! We provide all materials needed.</p>
          </div>
          <div>
            <h3 className="font-bold">Are the workshops free?</h3>
            <p>Most workshops are free or offered at a minimal fee to cover materials.</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6">
        <p className="mt-4">© 2024 Green Essentials Co. All rights reserved.</p>
      </footer>
    </div>
  );
}
