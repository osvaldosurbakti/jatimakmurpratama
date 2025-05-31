const HeroSection = ({ title, subtitle, bgImage }) => {
  return (
    <div className="relative h-96 bg-gray-900 flex items-center">
      <img 
        src={bgImage} 
        alt="Product Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        <p className="text-xl text-amber-300">{subtitle}</p>
      </div>
    </div>
  );
};

export default HeroSection;