import React, { useState, useEffect } from 'react';

const HeroBanner = ({ 
  backgroundImage = "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  title = "Master Modern Development",
  subtitle = "Learn cutting-edge technologies with hands-on tutorials and real-world projects. Start your journey to becoming a skilled developer today.",
  buttonText = "Start Tutorial",
  onButtonClick,
  variant = "default" // default, gradient, minimal
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload background image
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
      setTimeout(() => setIsVisible(true), 100);
    };
    img.src = backgroundImage;
  }, [backgroundImage]);

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      console.log('Starting tutorial...');
      // Add your navigation logic here
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gray-900 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ 
        backgroundImage: imageLoaded ? `url(${backgroundImage})` : 'none',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Loading State */}
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-20"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-30">
        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-bounce"></div>
        <div className="absolute top-60 right-16 w-16 h-16 bg-white bg-opacity-5 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-32 right-32 w-8 h-8 bg-white bg-opacity-15 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-white bg-opacity-5 rounded-full animate-pulse delay-1000"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Main Content */}
      <div className={`relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Title Animation */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
          {title.split(' ').map((word, index) => (
            <span 
              key={index}
              className={`inline-block mr-3 transform transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{
                backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))'
              }}
            >
              {word}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p className={`text-lg sm:text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {subtitle}
        </p>

        {/* Call to Action Button */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button
            onClick={handleButtonClick}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95 shadow-2xl hover:shadow-indigo-500/25"
          >
            {/* Button Background Effect */}
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-black rounded-full group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></span>
            
            {/* Button Content */}
            <span className="relative flex items-center">
              {buttonText}
              <svg 
                className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" 
                />
              </svg>
            </span>
          </button>
        </div>

        {/* Statistics or Additional Info */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">50K+</div>
            <div className="text-gray-300 text-sm uppercase tracking-wide">Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">200+</div>
            <div className="text-gray-300 text-sm uppercase tracking-wide">Tutorials</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">4.9★</div>
            <div className="text-gray-300 text-sm uppercase tracking-wide">Rating</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex flex-col items-center">
            <span className="text-gray-300 text-sm mb-4 uppercase tracking-widest">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full animate-bounce mt-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        {/* Top Left Decoration */}
        <div className="absolute top-10 left-10 w-32 h-1 bg-gradient-to-r from-indigo-500 to-transparent"></div>
        <div className="absolute top-12 left-10 w-1 h-32 bg-gradient-to-b from-indigo-500 to-transparent"></div>
        
        {/* Bottom Right Decoration */}
        <div className="absolute bottom-10 right-10 w-32 h-1 bg-gradient-to-l from-purple-500 to-transparent"></div>
        <div className="absolute bottom-12 right-10 w-1 h-32 bg-gradient-to-t from-purple-500 to-transparent"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 z-10">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2px, transparent 0),
              radial-gradient(circle at 75px 75px, rgba(255,255,255,0.1) 2px, transparent 0)
            `,
            backgroundSize: '100px 100px'
          }}
        ></div>
      </div>
    </section>
  );
};

// Usage Examples Component
const Banner = () => {
  return (
    <div className="space-y-8">
      {/* Default Banner */}
      <HeroBanner
        title="Welcome to Our Platform"
        subtitle="Experience the future of web development with our cutting-edge tools and comprehensive tutorials."
        buttonText="Get Started"
        onButtonClick={() => alert('Getting started!')}
      />

      
    
      
    </div>
  );
};

export default HeroBanner;
export { Banner };
