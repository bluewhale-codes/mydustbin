import React from "react";

export default function CreditProgress({ credits = 75, maxCredits = 150 }) {
  const progress = Math.min((credits / maxCredits) * 100, 100);

  return (
    <button className="relative bg-gray-700 rounded-full px-4 py-2 text-white font-bold w-44 overflow-hidden shadow-lg">
      {/* Progress fill */}
      <div
        className="absolute top-0 left-0 h-full bg-yellow-400 rounded-full transition-all duration-500"
        style={{ width: `${progress}%` }}
      ></div>

      {/* Button text */}
      <span className="relative z-10 flex justify-center">
        Credits: {credits}/{maxCredits}
      </span>
    </button>
  );
}
