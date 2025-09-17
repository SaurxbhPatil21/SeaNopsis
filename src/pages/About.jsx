import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto max-w-7xl px-6 py-8">
      <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-xl backdrop-blur-xl">
        <div className="h-56 w-full bg-[url('/images/ocean-hero.jpg')] bg-cover bg-center" />
        <div className="p-6">
          <h1 className="text-2xl font-bold text-white/90">About</h1>
          <p className="mt-2 text-cyan-100/80">An AI-Driven Unified Data Platform integrating Oceanography, Fisheries, and Biodiversity.</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-xl">
          <div className="text-white/90">Timeline (placeholder)</div>
          <ul className="mt-3 space-y-3 text-sm text-cyan-100/80">
            <li className="rounded-lg border border-white/10 bg-white/5 p-3">2024 — Project Inception</li>
            <li className="rounded-lg border border-white/10 bg-white/5 p-3">2025 — Beta Release</li>
            <li className="rounded-lg border border-white/10 bg-white/5 p-3">2026 — Nationwide Rollout</li>
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-xl">
          <div className="text-white/90">Team</div>
          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} className="rounded-xl border border-white/15 bg-white/10 p-4 text-white/90 shadow-md backdrop-blur-xl">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500" />
                <div className="mt-2 font-semibold">Researcher {i}</div>
                <div className="text-xs text-cyan-100/80">Marine Data Scientist</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;


