import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Gift, Camera, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Task3 = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-6">
      {/* Left Box - Images of Workshop */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full md:w-1/2 min-h-[250px] bg-white rounded-xl shadow-lg p-4 sm:p-6"
      >
        {/* Highlighted Top-Left Text */}
        <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow">
          TASK 3
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-3 gap-3 mt-12">
          <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center shadow">
            <img
              src="https://delhi.darshanacademy.org/wp-content/uploads/sites/2/2020/11/E-waste-workshop-500x333.jpg"
              alt="Workshop 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center shadow">
            <img
              src="https://earth5r.org/wp-content/uploads/2024/03/Mumbai-India-Environmental-NGO-Earth5R-Circular-Economy-waste-management-1230x767-1.jpg"
              alt="Workshop 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center shadow">
            <img
              src="https://images.tribuneindia.com/cms/gall_content/2015/5/2015_5$largeimg25_May_2015_230857470.jpg"
              alt="Workshop 3"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </motion.div>

      {/* Right Box - Info + Button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full md:w-1/2 min-h-[250px] bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col"
      >
        {/* Credits Icon */}
        <div className="absolute top-4 left-4 flex items-center bg-yellow-400 text-black text-sm font-semibold px-3 py-1 rounded-full shadow">
          <Gift className="w-4 h-4 mr-1" /> 150 Credits
        </div>

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 mt-6">
          Attend Nearest Workshop
        </h2>

        {/* Description */}
        <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-6 text-sm sm:text-base">
          <li>Join a physical workshop with your family & friends</li>
          <li>Get hands-on training on waste segregation & composting</li>

          {/* Highlighted Selfie + Icons */}
          <li className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-blue-600 font-semibold">
              <Camera className="w-5 h-5 text-pink-500" />
              Post a selfie on social media after attending
            </div>
            <div className="flex gap-3 ml-6">
              <Instagram className="w-5 h-5 text-pink-500" />
              <Facebook className="w-5 h-5 text-blue-600" />
              <Twitter className="w-5 h-5 text-sky-500" />
              <Linkedin className="w-5 h-5 text-blue-700" />
            </div>
          </li>

          <li>Earn credits for participation</li>
        </ul>

        {/* CTA Button */}
        <div className="mt-auto">
          <Link to="/workshop" className="bg-black text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-gray-800 transition w-full sm:w-auto">
            Attend Workshop
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Task3;
