import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    name: "Teak Flooring",
    desc: "18mm thickness, various widths (9/12/14cm)",
    img: "src/assets/gambarflooring.png",
    link: "/products/flooring"
  },
  {
    name: "Teak Decking",
    desc: "14cm width, perfect for outdoor applications",
    img: "src/assets/gambardecking.png",
    link: "/products/decking"
  },
  {
    name: "Custom Products",
    desc: "Hand rails, door frames, and special orders",
    img: "src/assets/gambarcustom.png",
    link: "/products/custom"
  }
];

const ProductShowcase = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-3">
            Our Signature Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            High-quality teak wood products crafted with precision for both export and local markets
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-4 aspect-h-3">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-bold mb-1">{product.name}</h3>
                  <p className="text-amber-200 mb-3">{product.desc}</p>
                  <Link 
                    to={product.link}
                    className="inline-block text-white border border-amber-300 hover:bg-amber-600 hover:border-amber-600 px-4 py-2 rounded text-sm font-medium transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/products" 
            className="inline-flex items-center bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            View All Products
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;