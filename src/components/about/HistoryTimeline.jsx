const HistoryTimeline = ({ title, milestones }) => {
  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">{title}</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 md:left-1/2 h-full w-0.5 bg-amber-300 transform -translate-x-1/2"></div>
          
          {milestones.map((milestone, index) => (
            <div key={index} className={`relative pl-10 md:pl-0 mb-12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
              <div className={`bg-white p-6 rounded-lg shadow-md relative ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <div className="absolute -left-2 md:left-1/2 top-6 w-4 h-4 rounded-full bg-amber-600 transform -translate-x-1/2"></div>
                <span className="inline-block bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm font-semibold mb-2">
                  {milestone.year}
                </span>
                <h3 className="text-xl font-bold text-amber-900 mb-2">{milestone.title}</h3>
                <p className="text-gray-700">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;