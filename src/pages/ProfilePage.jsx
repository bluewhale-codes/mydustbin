import React from "react";
import { motion } from "framer-motion";
import { Trophy, CheckCircle } from "lucide-react";
import ClaimBags from "./ClaimBags";
import FreeCompostKit from "./FreeCompostKit";

export default function ProfilePage() {
  return (
    <>
      <div
        className="w-full flex flex-col md:flex-row relative overflow-hidden h-auto md:h-[500px]"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dycjjaxsk/image/upload/v1691908339/samples/smile.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Left Column - Profile */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-full md:max-w-xl relative flex flex-col items-center"
          >
            {/* Profile Image */}
            <div className="relative w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden flex items-center justify-center mb-4 md:mb-6">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage:
                    "url('https://res.cloudinary.com/dycjjaxsk/image/upload/v1691908339/samples/smile.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Check Icon */}
              <CheckCircle className="absolute -top-2 -right-2 w-10 h-10 md:w-12 md:h-12 text-green-500 shadow-lg bg-white rounded-full" />
            </div>

            {/* Name & Email */}
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">Vishal Shakya</h2>
              <p className="text-sm sm:text-base md:text-xl text-yellow-400">vishalshakya2255@gmail.com</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-6 justify-center">
              <button className="bg-green-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md text-sm sm:text-base font-medium hover:bg-green-800 transition">
                View more
              </button>
              <button className="border border-white px-4 py-2 sm:px-6 sm:py-3 rounded-md text-sm sm:text-base font-medium hover:bg-white hover:text-green-700 transition">
                Valid ID: 4234234234
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Credits Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-8 relative z-10 mt-6 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full flex justify-center"
          >
            <div className="w-full max-w-full sm:max-w-sm rounded-xl p-6 flex flex-col items-center gap-4 md:gap-6 text-white bg-black bg-opacity-30">
              {/* Credit Score Header */}
              <div className="flex items-center gap-2 md:gap-3 text-xl sm:text-2xl font-bold">
                <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" />
                <span>Your Credits</span>
              </div>

              {/* Credit Score Display */}
              <div className="text-2xl sm:text-4xl font-extrabold">0 / 200</div>

              {/* Progress Bar */}
              <div className="w-full bg-white bg-opacity-30 rounded-full h-3 sm:h-4 overflow-hidden">
                <div className="bg-yellow-400 h-3 sm:h-4 rounded-full w-0 transition-all duration-500"></div>
              </div>

              {/* Action Button */}
              <button className="bg-white text-green-700 font-bold px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-lg rounded-lg shadow hover:bg-gray-100 transition mt-2">
                Complete Tasks to Earn More Credits
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Other Sections */}
      <div className="px-4 md:px-10 py-6 md:py-10">
        <ClaimBags />
      </div>
      <div className="px-4 md:px-10 py-6 md:py-10">
        <FreeCompostKit />
      </div>
    </>
  );
}
