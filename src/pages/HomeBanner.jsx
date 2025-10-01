import React from 'react';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
  return (
    <section
      aria-label="Waste management platform overview"
      className="relative bg-cover bg-center bg-no-repeat min-h-[480px] sm:min-h-[520px] flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=70')",
      }}
    >
      {/* Readability overlays */}
      <div className="absolute inset-0 bg-black/30 sm:bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 via-purple-900/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 text-white">
        {/* Header */}
        <div className="text-center sm:text-left max-w-3xl mx-auto sm:mx-0">
          <h1 className="text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            End-to-End Waste Management Solution
          </h1>
          <p className="mt-3 text-base sm:text-lg md:text-xl font-light opacity-95">
            Transforming waste management with real-time monitoring from source to disposal
          </p>
        </div>

        {/* Feature pills (compact for mobile) */}
        <ul className="mt-6 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          <li className="flex items-start gap-3 rounded-xl bg-white/15 backdrop-blur-md p-4 border border-white/20">
            <span className="text-yellow-300 shrink-0 mt-0.5" aria-hidden>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
            </span>
            <p className="text-sm sm:text-base leading-snug">Complete lifecycle from source to disposal</p>
          </li>

          <li className="flex items-start gap-3 rounded-xl bg-white/15 backdrop-blur-md p-4 border border-white/20">
            <span className="text-yellow-300 shrink-0 mt-0.5" aria-hidden>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </span>
            <p className="text-sm sm:text-base leading-snug">Real-time monitoring across collection and transport</p>
          </li>

          <li className="flex items-start gap-3 rounded-xl bg-white/15 backdrop-blur-md p-4 border border-white/20">
            <span className="text-yellow-300 shrink-0 mt-0.5" aria-hidden>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </span>
            <p className="text-sm sm:text-base leading-snug">Transparent process and analytics visibility</p>
          </li>
        </ul>

        {/* CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-3">
          <Link
            to="/info"
            className="w-full sm:w-auto inline-flex justify-center rounded-full bg-white text-indigo-700 px-6 py-3 text-sm font-semibold uppercase tracking-wide shadow-lg transition active:scale-[0.99] hover:bg-gray-100"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
