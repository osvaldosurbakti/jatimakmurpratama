const MaterialQuality = ({ title, features, images }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {images.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg h-64">
              <img 
                src={image} 
                alt={`Quality ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-white text-amber-800 px-4 py-2 rounded-full font-medium">
                  Lihat Detail
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start p-4 border border-amber-200 rounded-lg hover:bg-amber-50 transition">
                <div className="bg-amber-100 text-amber-800 p-2 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="font-medium text-gray-800">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialQuality;