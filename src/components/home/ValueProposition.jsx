import React from "react";

const ValueProposition = () => {
  const values = [
    {
      icon: "🌱",
      title: "Sustainable Sourcing",
      desc: "Ethically harvested teak wood from managed plantations"
    },
    {
      icon: "🏆",
      title: "Export Quality",
      desc: "Products meet international standards for durability and finish"
    },
    {
      icon: "⏱️",
      title: "Timely Delivery",
      desc: "Consistent 60-day production cycle for reliable planning"
    },
    {
      icon: "🔒",
      title: "Secure Payment",
      desc: "DAP (Documents Against Payment) system for export transactions"
    },
    {
      icon: "🔄",
      title: "Custom Solutions",
      desc: "Tailored products to meet specific project requirements"
    },
    {
      icon: "📈",
      title: "Market Insight",
      desc: "Expertise in both local and international wood markets"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-3">
            Why Choose Jati Makmur Pratama
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to quality and service sets us apart in the wood industry
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="p-6 border border-amber-200 rounded-lg hover:bg-amber-50 transition-all hover:shadow-md"
            >
              <span className="text-4xl mb-4 inline-block">{value.icon}</span>
              <h3 className="text-xl font-bold mb-2 text-amber-800">{value.title}</h3>
              <p className="text-gray-700">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;