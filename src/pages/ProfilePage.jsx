import React from "react";
import { motion } from "framer-motion";
import { Trophy, CheckCircle } from "lucide-react";
import ClaimBags from "./ClaimBags";
import FreeCompostKit from "./FreeCompostKit";

export default function ProfilePage() {
  return (
    <>
      <div
        className="w-full h-[500px] flex flex-col md:flex-row relative overflow-hidden"
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
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl relative"
          >
            {/* Profile Image */}
            <div className="relative w-64 h-64 rounded-full overflow-hidden flex items-center justify-center mb-6">
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
              <CheckCircle className="absolute -top-2 -right-2 w-12 h-12 text-green-500 shadow-lg bg-white rounded-full" />
            </div>

            {/* Name & Email */}
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-2">Vishal shakya</h2>
              <p className="text-xl text-yellow-400">vishalshakya2255@gmail.com</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
              <button className="bg-green-700 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-green-800 transition">
                View more
              </button>
              <button className="border border-white px-6 py-3 rounded-md text-base font-medium hover:bg-white hover:text-green-700 transition">
                Valid ID: 4234234234
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Credits Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full flex justify-center"
          >
            <div className="w-full max-w-sm rounded-xl p-6 flex flex-col items-center gap-6 text-white bg-black bg-opacity-30">
              {/* Credit Score Header */}
              <div className="flex items-center gap-3 text-2xl font-bold">
                <Trophy className="w-8 h-8 text-yellow-300" />
                <span>Your Credits</span>
              </div>

              {/* Credit Score Display */}
              <div className="text-4xl font-extrabold">0 / 200</div>

              {/* Progress Bar */}
              <div className="w-full bg-white bg-opacity-30 rounded-full h-4 overflow-hidden">
                <div className="bg-yellow-400 h-4 rounded-full w-0 transition-all duration-500"></div>
              </div>

              {/* Action Button */}
              <button className="bg-white text-green-700 font-bold px-8 py-3 text-lg rounded-lg shadow hover:bg-gray-100 transition">
                Complete Tasks to Earn More Credits
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Other Sections */}
      <div>
        <div className="p-5 mx-10">
          <ClaimBags />
        </div>
        <div className="p-5 mx-10">
          <FreeCompostKit />
        </div>
      </div>
    </>
  );
}
