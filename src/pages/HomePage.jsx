// src/pages/HomePage.jsx
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FlashCards from '../components/FlashCards';
import Chatbot from '../components/Chatbot';
import OceanMap from '../components/OceanMap';
import WhyItMatters from '../components/WhyItMatters';
import RecentActivity from '../components/RecentActivity';
import Footer from '../components/Footer';


const HomePage = () => {
  const exploreRef = useRef(null);

  const handleExplore = () => {
    exploreRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#041e3a] text-white">
      <Navbar active="Dashboard" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <HeroSection
          onExplore={handleExplore}
          backgroundUrl={"/images/ocean-hero.jpg"}
          videoUrl={"/videos/ocean-hero.mp4"}
          minHeightClass={'min-h-[90vh]'}
          contentPaddingTopClass={'pt-8 sm:pt-10 md:pt-12'}
        />
      </motion.div>
      <div ref={exploreRef} />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative z-10 -mt-16 px-6 sm:-mt-20 md:-mt-24"
      >
        <div className="mx-auto max-w-7xl">
          <FlashCards />
        </div>
      </motion.div>
      <Chatbot />
      <OceanMap />
      <WhyItMatters />
      <RecentActivity />
      <Footer />
    </div>
  );
};

export default HomePage;


