import React, { useState, useEffect } from 'react';

const Test5 = ({
  score = 100,
  totalCredits = 1000,
  earnedCredits = 850,
  isClaimable = true,
  onClaimCredits = () => console.log('Credits claimed!'),
  animationDuration = 2000
}) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // Animate score on component mount
  useEffect(() => {
    setIsAnimating(true);
    const animationStart = Date.now();
    const animationEnd = animationStart + animationDuration;

    const updateScore = () => {
      const now = Date.now();
      const progress = Math.min((now - animationStart) / animationDuration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOutCubic(progress);
      
      setAnimatedScore(Math.floor(easedProgress * score));

      if (progress < 1) {
        requestAnimationFrame(updateScore);
      } else {
        setIsAnimating(false);
      }
    };

    const timeoutId = setTimeout(() => {
      requestAnimationFrame(updateScore);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [score, animationDuration]);

  const handleClaimCredits = () => {
    if (!isClaimable) return;
    
    setShowConfetti(true);
    onClaimCredits();
    
    // Hide confetti after animation
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const progressPercentage = Math.min((animatedScore / 100) * 100, 100);

  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center p-6">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              <div className="w-4 h-4 bg-yellow-400 rounded-full opacity-80"></div>
            </div>
          ))}
        </div>
      )}

      <div className="max-w-md w-full space-y-8">
        {/* Progress Bar Container */}
        <div className="relative">
          {/* Background Progress Bar */}
          <div className="w-full h-6 bg-gray-600 rounded-full overflow-hidden shadow-inner">
            {/* Animated Progress Fill */}
            <div
              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
              style={{ width: `${progressPercentage}%` }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              
              {/* Animated Shine Effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-shimmer"
                style={{
                  animation: 'shimmer 2s ease-in-out infinite',
                  animationDelay: '1s'
                }}
              ></div>
            </div>
          </div>

          {/* Progress Indicator Dot */}
          {progressPercentage > 0 && (
            <div
              className="absolute top-1/2 transform -translate-y-1/2 w-8 h-8 bg-yellow-400 rounded-full shadow-lg border-4 border-white transition-all duration-1000 ease-out"
              style={{ 
                left: `calc(${progressPercentage}% - 16px)`,
                boxShadow: '0 0 20px rgba(251, 191, 36, 0.6)'
              }}
            >
              <div className="w-full h-full bg-yellow-300 rounded-full animate-pulse"></div>
            </div>
          )}
        </div>

        {/* Credit Score Display */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Credit Score:{' '}
            <span 
              className={`text-yellow-400 transition-all duration-500 ${
                isAnimating ? 'scale-110' : 'scale-100'
              }`}
            >
              {animatedScore}%
            </span>
          </h1>
          
          {/* Credits Info */}
          <div className="text-gray-300 text-lg">
            <span className="font-semibold text-yellow-400">{earnedCredits}</span>
            <span className="mx-2">/</span>
            <span>{totalCredits}</span>
            <span className="ml-2 text-sm">credits earned</span>
          </div>
        </div>

        {/* Claim Credits Button */}
        <div className="flex justify-center">
          <button
            onClick={handleClaimCredits}
            disabled={!isClaimable || isAnimating}
            className={`
              group relative px-12 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold text-xl rounded-2xl
              transform transition-all duration-300 shadow-2xl
              ${isClaimable && !isAnimating 
                ? 'hover:scale-105 hover:shadow-pink-500/25 hover:from-pink-400 hover:to-red-400 cursor-pointer' 
                : 'opacity-50 cursor-not-allowed'
              }
              ${isAnimating ? 'animate-pulse' : ''}
            `}
          >
            {/* Button Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
            
            {/* Button Content */}
            <span className="relative z-10 flex items-center justify-center">
              {isAnimating ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </>
              ) : (
                <>
                  Claim Credits
                  <svg 
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </span>

            {/* Ripple Effect */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity rounded-2xl"></div>
            </div>
          </button>
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-2 gap-4 pt-8">
          <div className="bg-gray-700 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-400">+{Math.floor(score * 8.5)}</div>
            <div className="text-gray-400 text-sm">Credits Available</div>
          </div>
          <div className="bg-gray-700 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-400">{score === 100 ? 'Perfect!' : 'Good'}</div>
            <div className="text-gray-400 text-sm">Performance</div>
          </div>
        </div>

        {/* Achievement Badge */}
        {score === 100 && (
          <div className="flex justify-center pt-4">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-bold text-sm flex items-center space-x-2 animate-bounce">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span>Perfect Score!</span>
            </div>
          </div>
        )}
      </div>

      {/* Custom Keyframes */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
      `}</style>
    </div>
  );
};

// Example Usage Component
const CreditScoreExample = () => {
  const [score, setScore] = useState(100);
  const [isClaimable, setIsClaimable] = useState(true);

  const handleClaimCredits = () => {
    alert('🎉 Credits successfully claimed!');
    setIsClaimable(false);
    
    // Re-enable after 3 seconds for demo
    setTimeout(() => setIsClaimable(true), 3000);
  };

  const resetDemo = () => {
    setScore(Math.floor(Math.random() * 100) + 1);
    setIsClaimable(true);
  };

  return (
    <div>
      <CreditScoreDisplay
        score={score}
        totalCredits={1000}
        earnedCredits={Math.floor(score * 8.5)}
        isClaimable={isClaimable}
        onClaimCredits={handleClaimCredits}
        animationDuration={2000}
      />
      
      {/* Demo Controls */}
      <div className="fixed bottom-4 right-4 space-x-2">
        <button
          onClick={resetDemo}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
        >
          Reset Demo
        </button>
      </div>
    </div>
  );
};

export default Test5;
export { CreditScoreExample };
