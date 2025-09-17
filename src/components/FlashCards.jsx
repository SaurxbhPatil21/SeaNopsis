import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    icon: '🐟',
    title: 'Species Insights',
    desc: 'Discover distribution and seasonal patterns across regions.',
  },
  {
    icon: '🧬',
    title: 'eDNA Analysis',
    desc: 'Track biodiversity shifts using genetic signals.',
  },
  {
    icon: '🧠',
    title: 'AI Classifier',
    desc: 'Identify species and trends from images and audio.',
  },
  {
    icon: '🌊',
    title: 'Oceanographic Trends',
    desc: 'Monitor salinity, temperature and currents over time.',
  },
  {
    icon: '🗺️',
    title: 'Spatial Explorer',
    desc: 'Map hotspots and protected areas intuitively.',
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FlashCards = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-10">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5"
      >
        {cards.map((c, idx) => (
          <motion.div
            key={idx}
            variants={item}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-xl transition-all hover:border-cyan-200/40 hover:bg-white/15 hover:shadow-cyan-500/20"
          >
            <div className="text-3xl drop-shadow-sm">{c.icon}</div>
            <h3 className="mt-3 text-lg font-semibold text-white/90">{c.title}</h3>
            <p className="mt-1 text-sm text-cyan-100/80">{c.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FlashCards;


