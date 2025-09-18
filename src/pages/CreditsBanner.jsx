import React from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const CreditsBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-gradient-to-r from-green-400 to-blue-400 text-white py-10 px-8 rounded-xl shadow-lg flex flex-col md:flex-row justify-between items-center"
    >
      {/* Left Side: Profile */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
        <img
          src="https://via.placeholder.com/120"
          alt="Profile"
          className="w-28 h-28 rounded-full border-4 border-white shadow-lg"
        />
        <h2 className="text-2xl font-bold">John Doe</h2>
        <p className="text-lg">johndoe@email.com</p>
        <p className="text-lg">+91 98765 43210</p>
        <p className="text-lg font-semibold">Valid ID: ABC123456</p>
      </div>

      {/* Right Side: Credits */}
      <div className="mt-8 md:mt-0 flex flex-col items-center md:items-end">
        <div className="flex items-center gap-3 text-2xl font-bold">
          <Trophy className="text-yellow-300 w-8 h-8" />
          Your Credits: <span className="font-extrabold">0/200</span>
        </div>
        <button className="mt-6 bg-white text-green-700 font-bold px-8 py-3 text-lg rounded-lg shadow hover:bg-gray-100 transition">
          Complete Tasks to Earn Credits
        </button>
      </div>
    </motion.div>
  );
};

export default CreditsBanner;
