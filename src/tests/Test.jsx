import React, { useState } from "react";

export default function Test() {
  const [hoveredGame, setHoveredGame] = useState(null);

  const games = [
    {
      id: 1,
      title: "Waste Segregation Master",
      concept:
        "Learn to properly separate biodegradable, recyclable, and non-recyclable waste into correct bins with time-based challenges.",
      icon: "♻️",
      difficulty: "Easy",
      credits: 60,
      wasteTypes: ["Organic", "Plastic", "Paper", "Glass", "Metal"],
      rules: [
        {
          title: "Color-coded bin sorting system",
          description:
            "Green for organic waste, blue for recyclables, red for non-recyclables - learn the universal waste segregation colors",
        },
        {
          title: "Material identification challenge",
          description:
            "Identify different waste materials and understand their proper disposal methods for effective segregation",
        },
        {
          title: "Speed sorting with accuracy bonuses",
          description:
            "Sort items quickly while maintaining high accuracy to earn maximum points and build segregation habits",
        },
      ],
    },
    {
      id: 2,
      title: "Home Composting Champion",
      concept:
        "Master the art of composting by learning what organic waste can be composted, proper composting ratios, and maintenance techniques.",
      icon: "🌱",
      difficulty: "Medium",
      credits: 80,
      wasteTypes: ["Food Scraps", "Garden Waste", "Paper Waste", "Browns", "Greens"],
      rules: [
        {
          title: "Green vs Brown composting materials",
          description:
            "Learn the difference between nitrogen-rich greens and carbon-rich browns for perfect compost balance",
        },
        {
          title: "Composting process simulation",
          description:
            "Follow the decomposition process and learn proper turning, moisture, and temperature management",
        },
        {
          title: "Troubleshooting compost problems",
          description:
            "Fix common composting issues like bad odors, slow decomposition, and pest problems",
        },
      ],
    },
    {
      id: 3,
      title: "Hazardous Waste Handler",
      concept:
        "Safely identify and dispose of hazardous household waste including batteries, chemicals, electronics, and medical waste.",
      icon: "⚠️",
      difficulty: "Hard",
      credits: 120,
      wasteTypes: ["Batteries", "Chemicals", "E-waste", "Medical", "Paints"],
      rules: [
        {
          title: "Hazardous waste identification",
          description:
            "Learn to recognize dangerous household items that require special disposal methods",
        },
        {
          title: "Safety protocols and handling",
          description:
            "Understand proper safety measures when handling and transporting hazardous materials",
        },
        {
          title: "Special disposal facility locations",
          description:
            "Find authorized collection centers and learn proper drop-off procedures for hazardous waste",
        },
      ],
    },
  ];

  const handleStartGame = (gameId) => {
    const game = games.find((g) => g.id === gameId);
    alert(
      `🎮 Starting ${game.title}! You can earn ${game.credits} credits while learning proper waste management!`
    );
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-500 text-white";
      case "Medium":
        return "bg-yellow-500 text-black";
      case "Hard":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="space-y-8 p-4 sm:p-6">
      {/* Header */}
      <div className="bg-gray-900 rounded-xl p-4 sm:p-6 text-center">
        <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-4">
          🏆 Complete Waste Management Certification Program!
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
          <div className="bg-gray-800 rounded-lg p-3 sm:p-4">
            <div className="text-lg sm:text-2xl font-bold text-green-400">3</div>
            <div className="text-gray-400 text-xs sm:text-sm">Core Skills</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-3 sm:p-4">
            <div className="text-lg sm:text-2xl font-bold text-yellow-400">260</div>
            <div className="text-gray-400 text-xs sm:text-sm">Total Credits</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-3 sm:p-4">
            <div className="text-lg sm:text-2xl font-bold text-pink-400">15</div>
            <div className="text-gray-400 text-xs sm:text-sm">Waste Categories</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-3 sm:p-4">
            <div className="text-lg sm:text-2xl font-bold text-blue-400">100%</div>
            <div className="text-gray-400 text-xs sm:text-sm">Practical Knowledge</div>
          </div>
        </div>

        <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-4">
          Master waste segregation at source, learn sustainable composting techniques, and safely handle hazardous materials.
          Become a certified environmental champion in your community!
        </p>

        <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
          <span className="bg-green-600 text-white px-2 py-1 rounded-full">
            Segregation Expert
          </span>
          <span className="bg-yellow-600 text-black px-2 py-1 rounded-full">
            Composting Pro
          </span>
          <span className="bg-red-600 text-white px-2 py-1 rounded-full">
            Safety Certified
          </span>
        </div>
      </div>

      {games.map((game) => (
        <div
          key={game.id}
          className={`bg-gray-900 p-4 sm:p-6 rounded-xl flex flex-col sm:flex-row items-center gap-4 sm:gap-6 shadow-lg transition-all duration-300 ${
            hoveredGame === game.id ? "transform scale-105 shadow-2xl" : ""
          }`}
          onMouseEnter={() => setHoveredGame(game.id)}
          onMouseLeave={() => setHoveredGame(null)}
        >
          {/* Left side: Circular badge */}
          <div className="flex-shrink-0 relative">
            <div className="w-36 h-36 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-b from-green-800 to-gray-900 border-4 border-pink-500 flex items-center justify-center shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 left-4 text-lg animate-pulse">🗑️</div>
                <div className="absolute top-8 right-4 text-sm animate-bounce">♻️</div>
                <div className="absolute bottom-8 left-4 text-lg animate-ping">🌱</div>
                <div className="absolute bottom-4 right-4 text-sm animate-pulse delay-300">
                  ⚠️
                </div>
              </div>
              <div className="text-4xl sm:text-6xl md:text-7xl z-10 animate-bounce">
                {game.icon}
              </div>
              <div
                className={`absolute top-2 right-2 px-2 py-1 rounded-full text-[10px] sm:text-xs font-bold ${getDifficultyColor(
                  game.difficulty
                )}`}
              >
                {game.difficulty}
              </div>
              <div className="absolute bottom-2 left-2 bg-yellow-400 text-black px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold flex items-center">
                ⭐ {game.credits} Credits
              </div>
            </div>
          </div>

          {/* Right side: Content */}
          <div className="text-white flex-1 text-center sm:text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-400 mb-2">
              {game.title}
            </h2>

            <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-3 leading-relaxed">
              {game.concept}
            </p>

            {/* Waste Types */}
            <div className="mb-3">
              <p className="text-xs sm:text-sm text-gray-400 mb-2">Waste Types:</p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                {game.wasteTypes.map((type, index) => (
                  <span
                    key={index}
                    className="bg-green-700 text-green-100 px-2 py-1 rounded-full text-[10px] sm:text-xs font-medium"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            {/* Rules */}
            <div className="mb-4">
              <p className="text-xs sm:text-sm text-gray-400 mb-2">Learning Goals:</p>
              <div className="space-y-2">
                {game.rules.map((rule, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-lg p-2 sm:p-3 border-l-4 border-pink-500"
                  >
                    <p className="text-pink-400 font-mono text-[11px] sm:text-sm mb-1">
                      Goal {index + 1}: {rule.title}
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-400 ml-2">
                      {rule.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={() => handleStartGame(game.id)}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-pink-500 text-black font-bold rounded-md shadow hover:bg-pink-400 transition-all duration-300 flex items-center justify-center"
              >
                ▶ Play
              </button>
              <button className="px-3 py-2 sm:px-4 sm:py-3 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-600 transition-colors flex items-center justify-center">
                📘 Study Guide
              </button>
              <button className="px-3 py-2 sm:px-4 sm:py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-500 transition-colors flex items-center justify-center">
                ✅ Practice Mode
              </button>
            </div>

            {/* Environmental Impact Progress */}
            {hoveredGame === game.id && (
              <div className="mt-4 bg-gray-800 rounded-lg p-3">
                <div className="flex justify-between items-center mb-2 text-xs sm:text-sm">
                  <span className="text-gray-400">Environmental Impact</span>
                  <span className="text-green-400">✓ High Learning Value</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-green-500 to-yellow-500 h-2 rounded-full animate-pulse"
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <p className="text-[10px] sm:text-xs text-gray-400 mt-1">
                  This game teaches essential waste management skills for daily life
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
