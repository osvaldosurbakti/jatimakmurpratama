const ProductionFacility = ({ title, description, features, images }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">{title}</h2>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-8">{description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {images.map((image, index) => (
            <img 
              key={index}
              src={image} 
              alt={`Facility ${index + 1}`} 
              className="rounded-lg shadow-md h-64 w-full object-cover"
            />
          ))}
        </div>
        
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-center text-amber-800 mb-6">Fasilitas Unggulan:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start bg-amber-50 p-4 rounded-lg">
                <span className="text-amber-600 mr-3 mt-1">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductionFacility;