import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HeroBanner = ({
  backgroundImage,
  title,
  subtitle,
  buttonText = "Get Started",
  onButtonClick,
  diagramImage,
  diagramAlt = "Process diagram",
  isReversed = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [diagramLoaded, setDiagramLoaded] = useState(false);

  useEffect(() => {
    const bgImg = new Image();
    bgImg.onload = () => setImageLoaded(true);
    bgImg.src = backgroundImage;

    if (diagramImage) {
      const diagImg = new Image();
      diagImg.onload = () => setDiagramLoaded(true);
      diagImg.src = diagramImage;
    }

    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, [backgroundImage, diagramImage]);

  const handleButtonClick = () => {
    if (onButtonClick) onButtonClick();
    else console.log("Starting tutorial...");
  };

  const imageColClass = isReversed ? "lg:order-1" : "lg:order-2";
  const contentColClass = isReversed ? "lg:order-2" : "lg:order-1";

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center snap-start"
      style={{
        backgroundImage: imageLoaded ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 z-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>
      )}

      <div className="relative z-30 w-full h-full grid grid-cols-1 lg:grid-cols-2 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`flex items-center justify-center p-8 ${imageColClass} transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        }`}>
          <div className="relative max-w-lg w-full">
            {diagramImage && (
              <>
                {!diagramLoaded && (
                  <div className="flex items-center justify-center h-64 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="animate-pulse text-white">Loading diagram...</div>
                  </div>
                )}
                {diagramLoaded && (
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-white/20">
                    <img 
                      src={diagramImage} 
                      alt={diagramAlt}
                      className="w-full h-auto rounded-lg shadow-lg"
                      loading="lazy"
                    />
                  </div>
                )}
              </>
            )}
            {!diagramImage && (
              <div className="flex items-center justify-center h-64 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                <span className="text-white/70 text-lg">Diagram placeholder</span>
              </div>
            )}
          </div>
        </div>

        <div className={`flex items-center justify-center p-8 ${contentColClass} transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        }`}>
          <div className="max-w-xl w-full text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              {title}
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              {subtitle}
            </p>
            
            <div className="space-y-4 mb-8">
              <button
                onClick={handleButtonClick}
                className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-lg hover:from-indigo-700 hover:to-purple-700 focus:ring-4 focus:ring-indigo-300/50 transform hover:scale-105 active:scale-95 transition-all duration-200"
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Introduction = () => {
  const navigate = useNavigate();

  const backgroundImages = [
    "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://res.cloudinary.com/dycjjaxsk/image/upload/v1754982343/6289_n0s0xj.jpg", 
    "https://res.cloudinary.com/dycjjaxsk/image/upload/v1754992646/volunteers-working-together-full-shot_uxrqaw.jpg",
    "https://images.unsplash.com/photo-1618477462146-c2a764ea75ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  ];

  const diagramImages = [
    "https://res.cloudinary.com/dycjjaxsk/image/upload/v1759318390/WhatsApp_Image_2025-10-01_at_4.59.12_PM_epgcs7.jpg",
    "https://res.cloudinary.com/dycjjaxsk/image/upload/v1759318390/WhatsApp_Image_2025-10-01_at_4.59.12_PM_2_x8n0eq.jpg", 
    "https://res.cloudinary.com/dycjjaxsk/image/upload/v1759336555/generated-image_zo1mpk.png",
    "https://res.cloudinary.com/dycjjaxsk/image/upload/v1759318389/WhatsApp_Image_2025-10-01_at_4.59.12_PM_1_wtl2p4.jpg"
  ];

  return (
    <div 
      className="h-screen overflow-y-scroll snap-y snap-proximity"
      style={{
        scrollBehavior: 'smooth',
        WebkitOverflowScrolling: 'touch',
        overscrollBehavior: 'none'
      }}
    >
      <HeroBanner
        backgroundImage={backgroundImages[0]}
        diagramImage={diagramImages[0]}
        title="Citizen waste management training"
        subtitle="Citizen must earn at least 200 Credits to unlock your Login ID & Password, which will allow you to register on the Waste Management Portal."
        buttonText="Start Tutorial"
        onButtonClick={() => navigate("/training")}
        isReversed={false}
      />
      
      <HeroBanner
        backgroundImage={backgroundImages[1]}  
        diagramImage={diagramImages[1]}
        title="RFID Based Door to Door waste Collection"
        subtitle="citizens must first complete training on waste segregation through tutorials, gamification, or workshops. After successful completion, they receive a Citizen Segregation ID, which is linked to an RFID-based system. During door-to-door waste collection, municipal workers scan this ID to ensure only trained citizens hand over waste, creating accountability and encouraging proper segregation at the source."
        buttonText="Citizen Dashboard"
        onButtonClick={() => navigate("/dashboard")}
        isReversed={true}
      />
      
      <HeroBanner
        backgroundImage={backgroundImages[2]}
        diagramImage={diagramImages[2]}
        title="Small ULB Lacks Infrastructure to manage Waste"
        subtitle="Small urban local bodies often lack proper infrastructure for waste management. Our platform bridges this gap by connecting ULBs with innovative startups that can convert waste into valuable products, such as turning plastic into fiber. This creates a sustainable ecosystem where waste becomes a resource instead of a problem."
        buttonText="Find Workshops"  
        onButtonClick={() => navigate("/workshop")}
        isReversed={false}
      />
    </div>
  );
};

export default HeroBanner;
export { Introduction };
