import React, { useState } from 'react';

const Section = () => {
  const [credits, setCredits] = useState(0);

  return (
    <div className="relative w-full min-h-[400px] bg-gradient-to-r from-purple-800 via-pink-700 to-blue-900 text-white rounded-3xl shadow-2xl overflow-hidden p-10 flex flex-col items-center justify-center">
      {/* Top Left - Credits Earned */}
      <div className="absolute top-6 left-6">
        <button className="bg-yellow-400 text-black px-5 py-2 rounded-full font-bold shadow-md">
          ⭐ Credits: {credits}
        </button>
      </div>

      {/* Top Right - Task Label */}
      <div className="absolute top-6 right-6">
        <span className="bg-pink-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
          TASK 1
        </span>
      </div>

      {/* Middle - Complete Task Button */}
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-4xl font-extrabold mb-8 drop-shadow-lg">Complete this Task</h2>
        <button
          onClick={() => setCredits(credits + 50)}
          className="px-8 py-4 bg-white text-purple-800 font-bold rounded-2xl shadow-xl text-lg hover:scale-105 transition-transform"
        >
          ✅ Complete Task & Earn 50 Credits
        </button>
      </div>
    </div>
  );
};

export default Section;
