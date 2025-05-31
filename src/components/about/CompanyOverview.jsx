const CompanyOverview = ({ title, description, stats, image }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/2">
          <img 
            src={image} 
            alt="Company Overview" 
            className="rounded-lg shadow-xl w-full"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">{title}</h2>
          {description.map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-700">{paragraph}</p>
          ))}
          <div className="grid grid-cols-2 gap-4 mt-8">
            {stats.map((stat, index) => (
              <div key={index} className="border-l-4 border-amber-600 pl-4 py-2">
                <p className="font-semibold text-amber-900">{stat.label}</p>
                <p className="text-gray-800">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
