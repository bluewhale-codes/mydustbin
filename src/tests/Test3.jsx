import React, { useState, useEffect } from 'react';
import Test4 from './Test4';
import Test5 from './Test5';

const Test3 = ({ 
  title = "Waste Segregation Tutorial",
  series = "SERIES",
  description = "This video is designed to help citizens understand the basics of waste segregation. By watching, you'll learn how to identify different types of waste — like biodegradable, recyclable, and hazardous materials — and place them in the right bins. Proper segregation not only keeps our surroundings clean but also supports recycling and reduces pollution. Complete the video to earn credits and become a waste management champion in your community!",
  backgroundImage = "https://images.indianexpress.com/2021/03/CNL-garbage-3col.jpg?w=640",
  seasonInfo = "Learn How can you do Segregation of waste",
  onRemindMe = () => console.log('Remind me clicked'),
  onMoreInfo = () => console.log('More info clicked'),
  progressPercentage = 75,
  earnedCredits = 450,
  totalCredits = 600,
  isClaimable = true
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [showCreditAnimation, setShowCreditAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progressPercentage);
    }, 500);
    return () => clearTimeout(timer);
  }, [progressPercentage]);

  const handleClaimCredits = () => {
    if (!isClaimable) return;
    setShowCreditAnimation(true);
    setTimeout(() => setShowCreditAnimation(false), 2000);
    alert(`🎉 Claimed ${earnedCredits} credits!`);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="p-4 sm:p-6 md:p-8">
        <div 
          className="relative w-full max-w-6xl mx-auto h-[280px] sm:h-96 md:h-[500px] rounded-lg overflow-hidden bg-gray-900 shadow-2xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={backgroundImage}
              alt={title}
              className={`w-full h-full object-cover transition-all duration-700 ${
                isHovered ? 'scale-105' : 'scale-100'
              } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 animate-pulse" />
            )}
          </div>

          {/* Overlay gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-between p-4 sm:p-6 md:p-12">
            
            {/* Top Row */}
            <div className="flex justify-between items-start flex-wrap gap-2">
              <span className="text-red-500 text-xs sm:text-sm font-bold uppercase tracking-wider">
                {series}
              </span>

              {/* Desktop Progress */}
              <div className="hidden md:flex flex-col items-end space-y-3 min-w-[220px] lg:min-w-[280px]">
                <div className="text-white text-sm lg:text-base font-semibold drop-shadow-lg">
                  Course Progress: {progressPercentage}%
                </div>
                <div className="w-full h-4 lg:h-6 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 transition-all duration-1000 ease-out"
                    style={{ width: `${animatedProgress}%` }}
                  />
                </div>
                <div className="text-yellow-300 text-sm lg:text-base font-semibold flex items-center">
                  <span>{earnedCredits}/{totalCredits} Credits Earned</span>
                </div>
              </div>

              {/* Season Badge (desktop only) */}
              <div className="hidden lg:flex items-center bg-green-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
                ✅ {seasonInfo}
              </div>
            </div>

            {/* Title & Description */}
            <div className="space-y-2 sm:space-y-4 max-w-2xl">
              <h1 className="text-2xl sm:text-4xl md:text-6xl font-black text-white leading-snug drop-shadow-lg">
                {title}
              </h1>
              <p className="text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed line-clamp-3">
                {description}
              </p>

              {/* Mobile Progress */}
              <div className="md:hidden space-y-2 bg-black/30 p-3 rounded-lg">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-white font-semibold">Progress: {progressPercentage}%</span>
                  <span className="text-yellow-300 font-semibold">{earnedCredits}/{totalCredits}</span>
                </div>
                <div className="w-full h-3 sm:h-4 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 transition-all duration-1000 ease-out"
                    style={{ width: `${animatedProgress}%` }}
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <button
                  onClick={onRemindMe}
                  className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all border border-white/30"
                >
                  📂 Your Playlist
                </button>
                <button
                  onClick={onMoreInfo}
                  className="bg-transparent hover:bg-white/10 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-semibold border border-white/50"
                >
                  ▶ Start
                </button>
                <button
                  onClick={handleClaimCredits}
                  disabled={!isClaimable}
                  className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all ${
                    isClaimable
                      ? 'bg-gradient-to-r from-pink-500 via-pink-600 to-red-500 text-white hover:scale-105'
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {isClaimable ? `Claim ${earnedCredits} Credits` : 'Credits Claimed'}
                </button>
              </div>
            </div>

            {/* Mobile Season Info */}
            <div className="md:hidden bg-green-600 text-white px-3 py-2 rounded-full text-xs sm:text-sm font-semibold w-fit">
              ✅ {seasonInfo}
            </div>
          </div>
        </div>
      </div>

      {/* Next section */}
      <div className="p-4 sm:p-6">
        <Test4 />
      </div>
    </div>
  );
};

export default Test3;
