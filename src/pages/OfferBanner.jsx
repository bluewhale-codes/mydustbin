import React from "react";
import { motion } from "framer-motion";
import { PackageCheck, Leaf, ShoppingBag } from "lucide-react";

export default function OfferBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-2xl shadow-2xl overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-8 py-12 md:py-16 flex flex-col md:flex-row items-center gap-8">
        {/* Left: Text */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold flex items-center gap-3 mb-4">
            <PackageCheck className="w-6 h-6 text-yellow-200" />
            Free on login
          </h3>

          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            Login to receive your free set of 3 waste-segregation bags and a complimentary compost kit to start eco-friendly living
          </h1>

          <p className="text-base md:text-lg text-white/90 mb-6 max-w-xl">
            Sign in to your account to receive the segregation bags for dry, wet & hazardous household waste. Claim the
            tested compost kit to start converting kitchen waste into nutrient-rich compost for your garden.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-green-700 font-semibold px-5 py-3 rounded-lg shadow hover:scale-[1.02] transition transform">
              Claim my compost kit
            </button>
            <button className="bg-white/20 border border-white/40 text-white font-semibold px-5 py-3 rounded-lg shadow hover:bg-white/25 transition">
              Learn how to segregate
            </button>
          </div>
        </div>

        {/* Right: Visual summary */}
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 w-full max-w-sm shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-8 h-8 text-yellow-300" />
                <div>
                  <div className="text-sm font-semibold">3 Segregation Bags</div>
                  <div className="text-xs text-white/80">Dry • Wet • Hazardous</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Leaf className="w-8 h-8 text-green-300" />
                <div>
                  <div className="text-sm font-semibold">Compost Kit</div>
                  <div className="text-xs text-white/80">Easy home composting</div>
                </div>
              </div>
            </div>

            <div className="mt-4 text-sm text-white/80">
              <strong>How to claim:</strong>
              <ol className="list-decimal pl-5 mt-2 space-y-1">
                <li>Login or register on the portal</li>
                <li>Select “Get Free Kit & Bags” under rewards</li>
                <li>Confirm delivery address — we’ll deliver to your home</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
