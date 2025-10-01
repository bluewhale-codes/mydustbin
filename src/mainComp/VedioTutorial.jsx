import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HeroBanner = ({
  backgroundImage = "https://launchpadeducation.in/wp-content/uploads/2024/02/blog-pictures-89.jpg",
  title = "Master Modern Development",
  subtitle = "Learn cutting-edge technologies with hands-on tutorials and real-world projects. Start your journey to becoming a skilled developer today.",
  buttonText = "Start Tutorial",
  onButtonClick,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
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
      console.log("Starting tutorial...");
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-gray-900 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: imageLoaded ? `url(${backgroundImage})` : "none",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Loading Spinner */}
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 z-10">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white"></div>
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-20"></div>

      {/* Main Content */}
      <div
        className={`relative z-40 max-w-4xl mx-auto px-4 text-center transition-all duration-1000 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        <p
          className={`text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {subtitle}
        </p>

        {/* Button */}
        <div
          className={`mb-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={handleButtonClick}
            className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-lg hover:from-indigo-700 hover:to-purple-700 focus:ring-2 focus:ring-indigo-300 transform hover:scale-105 active:scale-95 transition-all"
          >
            {buttonText}
          </button>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-3 gap-4 sm:gap-8 mb-10 sm:mb-16 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="text-center">
            <div className="text-xl sm:text-3xl font-bold text-white">50K+</div>
            <div className="text-gray-300 text-xs sm:text-sm uppercase">Citizens</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-3xl font-bold text-white">5+</div>
            <div className="text-gray-300 text-xs sm:text-sm uppercase">Tutorials</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-3xl font-bold text-white">4.9★</div>
            <div className="text-gray-300 text-xs sm:text-sm uppercase">Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Usage Example
const VedioTutorial = () => {
  const navigate = useNavigate();

  return (
    <div>
      <HeroBanner
        title="Waste Segregation Tutorial"
        subtitle="Learn proper waste segregation and earn points for every video you complete. By watching this video, you’ll learn how to segregate waste correctly into the right categories — making waste management easier and more effective."
        buttonText="Get Started"
        onButtonClick={() => navigate("/test")}
      />
      
    </div>
  );
};

export default HeroBanner;
export { VedioTutorial };
