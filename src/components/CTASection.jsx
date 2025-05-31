import React from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 bg-amber-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Wood Project?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Whether you need flooring, decking, or custom wood products, we're here to help with your requirements.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/contact" 
            className="bg-white text-amber-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-100 transition-colors text-center"
          >
            Request a Quote
          </Link>
          <a 
            href="https://wa.me/6281259583942" 
            className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-900 transition-colors text-center"
          >
            WhatsApp Us
          </a>
        </div>
        <div className="mt-8 text-amber-200">
          <p>Email: jatimakmurpratama@gmail.com</p>
          <p className="mt-1">Phone: +62 812-5958-3942</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;