// pages/services.js

import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const services = [
  {
    title: "Eco-Friendly Products",
    description: "Explore a wide range of sustainable products designed for a better tomorrow. From biodegradable packaging to reusable items, we provide solutions that help reduce waste.",
    features: [
      "Biodegradable materials",
      "Reusable options",
      "Sustainable sourcing",
    ],
  },
  {
    title: "Consultation",
    description: "Get personalized advice to enhance your sustainable living journey. Our experts will help you identify areas for improvement and provide tailored strategies.",
    features: [
      "Home energy assessments",
      "Sustainable product recommendations",
      "Actionable strategies",
    ],
  },
  {
    title: "Workshops",
    description: "Join our workshops to learn practical eco-friendly practices. Our sessions cover various topics, from zero-waste living to sustainable gardening.",
    features: [
      "Hands-on experience",
      "Expert-led sessions",
      "Community engagement",
    ],
  },
  {
    title: "Sustainability Audits",
    description: "Comprehensive evaluations to help businesses adopt greener practices. We analyze current practices and provide actionable insights for improvement.",
    features: [
      "Detailed assessments",
      "Custom reports",
      "Ongoing support",
    ],
  },
  {
    title: "Custom Solutions",
    description: "Tailored sustainability solutions to meet your unique needs. Whether you’re a business or an individual, we create strategies just for you.",
    features: [
      "Personalized plans",
      "Flexible options",
      "Expert guidance",
    ],
  },
];

export default function Services() {
  const currentPage = '/services'; // Set the current page to services

  return (
    <div className="bg-gray-50">
      <Navbar currentPage={currentPage} />
      <Head>
        <title>Our Services - Green Essentials Co.</title>
        <meta name="description" content="Discover the eco-friendly services we offer." />
      </Head>

      <header className="bg-green-700 text-white text-center py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold">Our Services</h1>
        <p className="mt-4 text-lg md:text-xl">Committed to a sustainable future.</p>
      </header>

      <section className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-green-600">Services Offered</h2>
        <div className="flex flex-wrap justify-center mt-10 space-x-0 space-y-6 md:space-y-0 md:space-x-6">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-6 rounded-lg shadow-lg w-72 transition-transform transform hover:scale-105">
              <h3 className="text-xl md:text-2xl font-bold">{service.title}</h3>
              <p className="mt-4 text-gray-700">{service.description}</p>
              <h4 className="mt-4 font-semibold text-green-600">Features:</h4>
              <ul className="mt-2 list-disc list-inside text-gray-600">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
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
