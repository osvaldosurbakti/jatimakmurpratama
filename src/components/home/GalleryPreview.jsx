import React from "react";
import { Link } from "react-router-dom";

const galleryImages = [
  "/gallery-1.jpg",
  "/gallery-2.jpg",
  "/gallery-3.jpg",
  "/gallery-4.jpg"
];

const GalleryPreview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-3">
            Our Work Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See examples of our premium teak wood products and craftsmanship
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {galleryImages.map((img, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img 
                src={img} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/gallery" 
            className="inline-flex items-center text-amber-700 font-semibold hover:text-amber-900 group"
          >
            View Full Gallery
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;