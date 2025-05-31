const VisiMisi = ({ vision, missions }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div className="bg-amber-900 text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 border-b border-amber-400 pb-2">Vission</h2>
          <p className="text-lg italic">"{vision}"</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-amber-900 mb-6 border-b border-amber-400 pb-2">Mission</h2>
          <ul className="space-y-3">
            {missions.map((mission, index) => (
              <li key={index} className="flex items-start">
                <span className="bg-amber-600 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  {index + 1}
                </span>
                <span>{mission}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;