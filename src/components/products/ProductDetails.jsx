const ProductDetails = ({ title, details }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">{title}</h2>
        
        {details.map((detail, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-16 gap-8 items-center`}>
            <div className="md:w-1/2">
              <img 
                src={detail.image} 
                alt={detail.title} 
                className="rounded-lg shadow-xl w-full h-auto max-h-96 object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">{detail.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {detail.items.map((item, i) => (
                  <div key={i} className="bg-amber-50 p-4 rounded-lg">
                    <p className="font-semibold text-amber-900">{item.name}</p>
                    <p className="text-gray-800">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductDetails;