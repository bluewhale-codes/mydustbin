import React from "react";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";

const Taskbox = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-6">
      {/* Left Box - Images */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full md:w-1/2 min-h-[250px] bg-white rounded-xl shadow-lg p-4 sm:p-6"
      >
        {/* Highlighted Top-Left Text */}
        <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow">
          TASK 1
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-3 gap-3 mt-12">
          <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center shadow">
            <img
              src="https://img.etimg.com/thumb/msid-86843552,width-300,height-225,imgsize-176126,resizemode-75/1.jpg"
              alt="img1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center shadow">
            <img
              src="https://organiser.org/wp-content/uploads/2022/09/indore-waste-800x438-1.jpg"
              alt="img2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center shadow">
            <img
              src="https://swachhindia.ndtv.com/wp-content/uploads/sites/3/2016/08/660_3.jpg"
              alt="img3"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </motion.div>

      {/* Right Box - Video + Credits + Info */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full md:w-1/2 min-h-[250px] bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col"
      >
        {/* Credits Icon */}
        <div className="absolute top-4 left-4 flex items-center bg-yellow-400 text-black text-sm font-semibold px-3 py-1 rounded-full shadow">
          <Gift className="w-4 h-4 mr-1" /> 50 Credits
        </div>

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 mt-6">
          Video Tutorial
        </h2>

        {/* Description */}
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6 text-sm sm:text-base">
          <li>This tutorial gives you knowledge about segregation of waste</li>
          <li>Learn how to manage waste effectively at home & community level</li>
          <li>Understand composting methods for sustainable living</li>
        </ul>

        {/* CTA Button */}
        <div className="mt-auto">
          <button className="bg-black text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-gray-800 transition w-full sm:w-auto">
            Watch & Get Credits
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Taskbox;
