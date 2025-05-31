import React from "react";
import { Link } from "react-router-dom";

const AboutShort = () => {
  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
          <img 
            src="/assets/gambar3.png" 
            alt="Wood Workshop" 
            className="rounded-lg shadow-xl w-full h-auto max-h-[400px] object-cover" 
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">
            <span className="border-b-2 border-amber-600 pb-1">PT. Jati Makmur Pratama</span>
          </h2>
          <p className="text-lg mb-4 text-gray-700">
            Established in November 2023, we are a Surabaya-based wood processing company specializing in export-quality 
            teak wood products with registration at KEMENHUKUM HAM NO. AHU-076640.AH.01.30.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Export-quality teak flooring & decking",
              "Sustainable wood sourcing",
              "12-day specialized drying process",
              "DAP payment system for exports",
              "Monthly capacity: 20m³"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-amber-600 mr-2 mt-1">✓</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <Link 
            to="/about" 
            className="inline-flex items-center text-amber-700 font-semibold hover:text-amber-900 transition-colors group"
          >
            Read Our Full Story
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutShort;