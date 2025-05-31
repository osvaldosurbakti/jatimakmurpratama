const FeaturedProducts = ({ title, products }) => {
  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">{title}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <h3 className="text-2xl font-bold text-amber-900 mb-4">{product.name}</h3>
                  <p className="text-gray-700 mb-6">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="flex items-center">
                        <span className="bg-amber-100 text-amber-800 rounded-full p-1 mr-3">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                    Detail Produk
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;