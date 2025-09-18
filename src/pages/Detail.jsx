import React from 'react'
import { motion } from "framer-motion";

const Detail = () => {
  return (
    <motion.div
      className="w-full py-12 sm:py-16 px-4 sm:px-8 relative"
      style={{
        backgroundImage:
          "url('https://sc0.blr1.cdn.digitaloceanspaces.com/article/198429-ecpcwhoubo-1707836414.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center text-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          Training Details
        </h2>
        <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
          This training program helps you understand proper{" "}
          <span className="font-semibold text-yellow-400">waste segregation</span> techniques,
          including separating <span className="font-semibold text-yellow-400">wet, dry, and hazardous waste</span>. 
          By applying these methods at home and in your community, you can reduce pollution, improve recycling efficiency, and contribute to a cleaner environment.
        </p>
        <p className="text-xs sm:text-sm md:text-base text-gray-200">
          Your participation ensures that you can earn credits towards your profile, unlock your certificate, and become a certified contributor to a sustainable and waste-conscious locality.
        </p>
      </div>
    </motion.div>
  )
}

export default Detail;
