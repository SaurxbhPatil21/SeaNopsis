import React from 'react';
import { motion } from 'framer-motion';

const DEFAULT_BG =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920&auto=format&fit=crop";

const HeroSection = ({ onExplore, backgroundUrl, videoUrl, minHeightClass = 'min-h-[72vh]', contentPaddingTopClass = '' }) => {
  return (
    <section className={`relative ${minHeightClass} w-full overflow-hidden bg-gradient-to-b from-[#041e3a] to-[#052a4f]`}>
      {videoUrl ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
          poster={backgroundUrl || DEFAULT_BG}
        />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${backgroundUrl || DEFAULT_BG}')`,
          }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-[#041e3a]/75 via-[#062b4f]/55 to-[#041e3a]/85" />

      <div className={`relative mx-auto flex ${minHeightClass} max-w-7xl flex-col items-center justify-center px-6 text-center ${contentPaddingTopClass}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl rounded-2xl border border-white/10 bg-[#031a33]/40 p-6 backdrop-blur-md shadow-2xl sm:p-8"
        >
          <h1 className="bg-gradient-to-r from-teal-200 via-cyan-200 to-white bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:text-6xl">
            AI-Driven Unified Data Platform for Marine Data
          </h1>
          <p className="mt-4 text-base text-cyan-100/90 sm:text-lg">
            Integrating Oceanography, Fisheries, and Biodiversity into one intelligent platform.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8"
        >
          <button
            onClick={onExplore}
            className="group rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-teal-500/30 transition-all hover:from-teal-400 hover:to-cyan-400 hover:shadow-cyan-500/40"
          >
            Explore Data
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
          </button>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-teal-400/10 blur-2xl" />
    </section>
  );
};

export default HeroSection;


