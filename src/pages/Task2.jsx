import React from "react";
import { motion } from "framer-motion";
import { Gift } from "lucide-react"; // for credits icon

const Task2 = () => {
  return (
    <div className="w-full flex gap-6">
      {/* Left Box - Description + Button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-1/2 min-h-[300px] bg-white rounded-xl shadow-lg p-6 flex flex-col"
      >
        {/* Credits Icon */}
        <div className="absolute top-4 left-4 flex items-center bg-yellow-400 text-black text-sm font-semibold px-3 py-1 rounded-full shadow">
          <Gift className="w-4 h-4 mr-1" /> 100 Credits
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-6">
          Interactive Games
        </h2>

        {/* Description */}
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li>Play fun and engaging games designed for waste segregation</li>
          <li>Improve knowledge of composting and recycling through gameplay</li>
          <li>There are 3 games available to test your learning skills</li>
        </ul>

        {/* CTA Button */}
        <div className="mt-auto">
          <button className="bg-black text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-gray-800 transition">
            Play Games & Earn 100 Credits
          </button>
        </div>
      </motion.div>

      {/* Right Box - Images */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-1/2 min-h-[300px] bg-white rounded-xl shadow-lg p-6"
      >
        {/* Highlighted Top-Left Text */}
        <div className="absolute top-4 left-4 bg-blue-500 text-white text-sm font-bold px-4 py-1 rounded-full shadow">
          TASK 2
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-3 gap-4 mt-12">
          <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center shadow">
            <img
              src="https://img.freepik.com/free-vector/garbage-sorting-game-interface_23-2148526351.jpg"
              alt="game1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center shadow">
            <img
              src="https://img.freepik.com/premium-vector/waste-sorting-educational-game-kids-recycling-quiz_277909-610.jpg"
              alt="game2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center shadow">
            <img
              src="https://img.freepik.com/premium-vector/recycling-game-kids-waste-sorting-educational-activity_277909-609.jpg"
              alt="game3"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Task2;
