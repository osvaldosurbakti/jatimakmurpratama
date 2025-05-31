import React from "react";

const ProcessFlow = () => {
  const processSteps = [
    {
      id: 1,
      title: "Material Selection",
      desc: "Careful selection of premium teak wood",
      icon: "🌳"
    },
    {
      id: 2,
      title: "12-Day Drying",
      desc: "Specialized drying process for optimal moisture content",
      icon: "🔥"
    },
    {
      id: 3,
      title: "Molding Process",
      desc: "Precision cutting and shaping (8 days for 20m³)",
      icon: "✂️"
    },
    {
      id: 4,
      title: "Quality Check",
      desc: "Rigorous inspection before packaging",
      icon: "🔍"
    },
    {
      id: 5,
      title: "Export Ready",
      desc: "EMKL handles documentation and shipping",
      icon: "🚢"
    }
  ];

  return (
    <section className="py-16 bg-amber-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-3">
            Our 60-Day Quality Process
          </h2>
          <p className="text-lg text-amber-800 max-w-3xl mx-auto">
            From raw material to finished product, we maintain strict quality control at every stage
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-0 right-0 top-8 h-1 bg-amber-300 mx-auto w-4/5"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-0">
            {processSteps.map((step) => (
              <div key={step.id} className="relative text-center px-4">
                <div className="mx-auto mb-4 h-16 w-16 bg-amber-700 rounded-full flex items-center justify-center text-white text-2xl relative z-10">
                  {step.icon}
                </div>
                <h3 className="font-bold text-lg text-amber-900 mb-2">{step.title}</h3>
                <p className="text-gray-700 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;