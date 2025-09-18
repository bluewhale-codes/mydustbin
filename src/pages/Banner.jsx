import React from "react";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div className="w-full bg-white flex flex-col md:flex-row items-center md:justify-between px-6 sm:px-12 py-8 md:py-16 gap-10">
      
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-full md:max-w-xl text-center md:text-left"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-4 sm:mb-6">
          Citizen Waste Management Training
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8">
          You must earn at least <span className="font-bold text-red-500">200 Credits</span> to unlock your
          <span className="text-red-500"> Login ID & Password</span>, which will allow you to register on the Waste Management Portal.
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-md text-base font-medium hover:bg-gray-800 transition">
            Get Your Training first
          </button>
          <button className="border border-gray-400 px-6 py-3 rounded-md text-base font-medium hover:bg-gray-100 transition">
            Contact sales
          </button>
        </div>
      </motion.div>

      {/* Right Section - Animated Graphic */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <div className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-md h-48 sm:h-56 md:h-64 flex items-center justify-center">
          <div
            className="relative w-full h-full rounded-3xl overflow-hidden p-4 sm:p-6 md:p-10 flex items-center justify-center"
            style={{
              backgroundImage: "url('https://i.pinimg.com/736x/e8/2b/3f/e82b3fc1eb1e7b117e76d315330123e7.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* You can add overlay content here if needed */}
          </div>
        </div>
      </motion.div>

    </div>
  );
}
