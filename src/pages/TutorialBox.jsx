import React, { useState } from 'react';
import Banner from './Banner';

// Separate Component for Tutorial Box
const TutorialBox = ({ title, description, credits, onComplete }) => {
  return (
    <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 max-w-6xl mx-auto mb-12">
      {/* Left Box - Title */}
      <div className="flex flex-col justify-center items-center bg-white/20 backdrop-blur-lg rounded-3xl p-12 w-full md:w-1/2 shadow-2xl min-h-[250px]">
        <h2 className="text-4xl font-extrabold text-center">{title}</h2>
      </div>

      {/* Right Box - Description + Button */}
      <div className="flex flex-col justify-center bg-white/20 backdrop-blur-lg rounded-3xl p-12 w-full md:w-1/2 shadow-2xl min-h-[250px]">
        <p className="text-lg mb-8 leading-relaxed">
          {description} Completing this tutorial will reward you with <span className="font-bold text-yellow-300">{credits} Credits</span>.
        </p>
        <button
          onClick={onComplete}
          className="px-8 py-4 bg-yellow-400 text-black rounded-2xl font-bold text-lg shadow-lg hover:bg-yellow-500 transition-all w-fit"
        >
          ▶️ Start Tutorial & Earn Credits
        </button>
      </div>
    </div>
  );
};


export default TutorialBox;
