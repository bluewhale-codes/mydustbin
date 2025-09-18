import React from "react";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div className="w-full bg-white flex items-center justify-between px-12 py-16">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl"
      >
        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
          Citizen Waste Management Training
        </h1>
        <p className="text-lg text-gray-600 mb-8">
             You must earn at least <span className="font-bold text-red-500">200 Credits</span> to unlock your
          <span className="text-red-500"> Login ID & Password</span>, which will allow you to register on the Waste Management Portal.
        </p>
        <div className="flex space-x-4">
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
        className="w-1/2 flex justify-center"
      >
        <div className="w-96 h-64  flex items-center justify-center ">
          <div
            className="relative w-full min-h-[200px] rounded-3xl  overflow-hidden p-10 flex flex-col items-center justify-center text-white"
            style={{
                backgroundImage: "url('https://i.pinimg.com/736x/e8/2b/3f/e82b3fc1eb1e7b117e76d315330123e7.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            >
            {/* content here */}
            </div>
        </div>
      </motion.div>
    </div>
  );
}