import React from "react";
import CreditProgress from "../mainComp/CreditProgress";

export default function Test2() {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-gray-900 text-center text-white py-10 sm:py-12 relative overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0 bg-[radial-gradient(white,transparent_1.5px)] bg-[length:18px_18px] sm:bg-[length:20px_20px] opacity-15"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide sm:tracking-widest text-yellow-400 mb-3">
          Learning Waste Segregation!
        </h2>

        {/* Description */}
        <p className="max-w-lg sm:max-w-2xl text-xs sm:text-sm md:text-base text-gray-200 mb-4 leading-relaxed">
          Our interactive games are designed to teach citizens the principles of
          waste segregation in a fun and immersive way. Through these games,
          players can identify different types of waste — such as biodegradable,
          recyclable, and hazardous materials — and learn how to dispose of them
          correctly. The games feature real-life scenarios, challenges, and
          rewards that encourage proper waste management habits.
        </p>

        {/* Credit Progress */}
        <div className="w-full max-w-xs sm:max-w-md mb-6">
          <CreditProgress credits={90} maxCredits={150} />
        </div>

        {/* Start Button */}
        <button className="mt-6 bg-blue-950 text-yellow-400 px-5 py-2 sm:px-6 sm:py-3 rounded-md font-bold text-base sm:text-lg md:text-xl tracking-wide hover:bg-blue-900 transition">
          Start Playing →
        </button>
      </div>
    </div>
  );
}
