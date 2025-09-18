import React from "react";
import { motion } from "framer-motion";
import { Gift } from "lucide-react"; // credits icon

const FreeCompostKit = () => {
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
        <div className="absolute top-4 left-4 bg-green-700 text-white text-sm font-bold px-4 py-1 rounded-full shadow">
          FREE COMPOST KIT
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-3 gap-4 mt-12">
          <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center shadow">
            <img
              src="https://nurserylive.com/cdn/shop/files/nurserylive-g-home-compost-kit-for-family-of-2_2_600x600.jpg?v=1742533991"
              alt="compost1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center shadow">
            <img
              src="https://www.dailydump.org/cdn/shop/files/Starter-Kits-2-3-Small_nogloves_693x.jpg?v=1689425684%201x,//www.dailydump.org/cdn/shop/files/Starter-Kits-2-3-Small_nogloves_693x@2x.jpg?v=1689425684%202x"
              alt="compost2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center shadow">
            <img
              src="https://m.media-amazon.com/images/I/61LHC7S2B-L._SL1500_.jpg"
              alt="compost3"
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
          <Gift className="w-4 h-4 mr-1" /> 500 Credits Required
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-6">
          Claim Your Free Compost Kit
        </h2>

        {/* Description */}
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li>Get an eco-friendly composting kit for your home</li>
          <li>Convert kitchen waste into organic manure</li>
          <li>Support a sustainable and zero-waste lifestyle</li>
        </ul>

        {/* CTA Button */}
        <div className="mt-auto">
          <button className="bg-green-700 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-green-800 transition">
            Claim Compost Kit
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default FreeCompostKit;
