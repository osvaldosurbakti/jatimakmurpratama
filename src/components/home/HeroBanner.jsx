import React from "react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] bg-[url('src/assets/gambar1.png')] bg-cover bg-center flex items-center">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Premium <span className="text-amber-300">Teak Wood</span> Solutions
        </h1>
        <p className="text-xl text-amber-100 max-w-2xl mb-8">
          Specialized in high-quality flooring, decking, and custom wood products for global markets
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link 
            to="/products" 
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors text-center"
          >
            Explore Products
          </Link>
          <Link 
            to="/contact" 
            className="border-2 border-white text-white hover:bg-white hover:text-amber-900 px-8 py-3 rounded-lg font-medium transition-colors text-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;