// pages/about.js

import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Founder & CEO",
    image: "https://th.bing.com/th/id/R.7e226a0f3dc846b592b10889319c2e2a?rik=bpV6bfDD5mCXlA&pid=ImgRaw&r=0",
  },
  {
    name: "Bob Smith",
    role: "Sustainability Consultant",
    image: "https://th.bing.com/th/id/R.bfa051b1f0c67008d188386ff3ca90ce?rik=MuX%2f6NMLaI%2bCzg&riu=http%3a%2f%2fmediad.publicbroadcasting.net%2fp%2fwxxi%2ffiles%2fstyles%2fx_large%2fpublic%2f201703%2fbob_smith_photo2-new.jpg&ehk=MZoY82Q7XubOYRERL8ATKWg6%2fG0Yfs4YnFmTQ4v4zDw%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "Carla Wong",
    role: "Marketing Director",
    image: "https://th.bing.com/th/id/OIP.adDXtIjurxIHKZDwsWvevwHaKY?rs=1&pid=ImgDetMain",
  },
];

export default function About() {
  const currentPage = '/about'; // Set the current page to about

  return (
    <div className="bg-gray-50">
      <Navbar currentPage={currentPage} />
      <Head>
        <title>About Us - Green Essentials Co.</title>
        <meta name="description" content="Learn about our company history, mission, and team." />
      </Head>

      <header className="bg-green-700 text-white text-center py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold">About Green Essentials Co.</h1>
      </header>

      <section className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-green-600">Our History</h2>
        <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-gray-700">
          Green Essentials Co. was founded in 2020 with a vision to make sustainable living accessible
          to everyone. From our humble beginnings, we have grown into a trusted source for eco-friendly
          products and services, dedicated to promoting a healthier planet for future generations.
        </p>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-green-600">Our Mission</h2>
        <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-gray-700">
          Our mission is to empower individuals and businesses to make environmentally conscious choices 
          through high-quality, sustainable products and education. We strive to lead the way in eco-friendly innovation.
        </p>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-green-600">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center mt-10 space-x-0 space-y-6 md:space-y-0 md:space-x-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white p-6 rounded-lg shadow-lg w-72 hover:scale-105 transition duration-250">
              <img src={member.image} alt={member.name} className="rounded-full w-24 h-24 mx-auto mb-4" />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="mt-2 text-gray-700">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6">
        <p className="mt-4">© 2024 Green Essentials Co. All rights reserved.</p>
      </footer>
    </div>
  );
}
