const CustomSolutions = ({ title, description, examples, image }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/2">
          <img 
            src={image} 
            alt="Custom Solutions" 
            className="rounded-lg shadow-xl w-full"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">{title}</h2>
          <p className="text-lg text-gray-700 mb-8">{description}</p>
          
          <h4 className="font-semibold text-amber-800 mb-4">Contoh Produk Kustom:</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {examples.map((example, index) => (
              <li key={index} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                <span className="bg-amber-100 text-amber-800 rounded-full p-1 mr-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                {example}
              </li>
            ))}
          </ul>
          
          <button className="mt-8 bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Konsultasi Kebutuhan Kustom
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomSolutions;