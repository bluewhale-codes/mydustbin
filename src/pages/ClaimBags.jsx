import React from "react";
import { motion } from "framer-motion";
import { Gift } from "lucide-react"; // credits icon

const ClaimBags = () => {
  return (
    <div className="w-full flex gap-6">
      {/* Left Box - Images */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-1/2 min-h-[300px] bg-white rounded-xl shadow-lg p-6"
      >
        {/* Highlighted Top-Left Text */}
        <div className="absolute top-4 left-4 bg-green-500 text-white text-sm font-bold px-4 py-1 rounded-full shadow">
          CLAIM REWARD
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-3 gap-4 mt-12">
          <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center shadow">
            <img
              src="https://m.media-amazon.com/images/I/51HXVmuLVAL._SX342_SY445_QL70_FMwebp_.jpg"
              alt="bag1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center shadow">
            <img
              src="https://m.media-amazon.com/images/I/41fA52KSLvL.jpg"
              alt="bag2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center shadow">
            <img
              src="https://brownliving.in/cdn/shop/files/sustainable-biodegradable-and-compostable-garbage-bags-eco-friendly-trash-bags-by-ecobharat-at-brownliving-755175.jpg?v=1733831793&width=1000"
              alt="bag3"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </motion.div>

      {/* Right Box - Reward Info */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-1/2 min-h-[300px] bg-white rounded-xl shadow-lg p-6 flex flex-col"
      >
        {/* Credits Info */}
        <div className="absolute top-4 left-4 flex items-center bg-yellow-400 text-black text-sm font-semibold px-3 py-1 rounded-full shadow">
          <Gift className="w-4 h-4 mr-1" /> 100 Credits Required
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-6">
          Claim Your Free Segregation Bags
        </h2>

        {/* Description */}
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li>Get 3 eco-friendly bags for dry, wet, and hazardous waste</li>
          <li>Encourage proper waste segregation at home</li>
          <li>Start your journey towards a cleaner community</li>
        </ul>

        {/* CTA Button */}
        <div className="mt-auto">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-green-700 transition">
            Claim Reward
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ClaimBags;
