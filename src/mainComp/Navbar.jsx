import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-4 sm:px-6 py-3 flex flex-wrap justify-between items-center">
      
      {/* Logo */}
      <div className="flex items-center space-x-2 cursor-pointer">
        <img
          src="https://res.cloudinary.com/dycjjaxsk/image/upload/v1754978509/ChatGPT_Image_Aug_12_2025_11_26_51_AM_1_ngtzip.png"
          alt="Smart Dustbin Logo"
          className="h-12 sm:h-16 w-auto"
        />
      </div>

      {/* Buttons */}
      <div className="flex items-center space-x-2 sm:space-x-4 mt-2 sm:mt-0">
        <button className="px-3 py-2 sm:px-4 sm:py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition text-sm sm:text-base">
          Login
        </button>
        <button className="px-3 py-2 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm sm:text-base">
          Sign Up
        </button>
      </div>
    </nav>
  )
}

export default Navbar
