import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto max-w-7xl px-6 py-12">
      <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-2xl backdrop-blur-xl">
        <div className="h-72 w-full bg-[url('/images/ocean-hero.jpg')] bg-cover bg-center" />
        <div className="p-8">
          <h1 className="text-3xl font-extrabold text-white/90">About SeaNopsis</h1>
          <p className="mt-3 max-w-3xl text-cyan-100/85">
            SeaNopsis is an AI-Driven Unified Data Platform integrating Oceanography, Fisheries, and Biodiversity.
            Our mission is to empower research, policy, and operations with transparent, interoperable marine data and intelligence.
          </p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur-xl"
        >
          <div className="text-white/90">Timeline (placeholder)</div>
          <ul className="mt-3 space-y-3 text-sm text-cyan-100/80">
            <li className="rounded-lg border border-white/10 bg-white/5 p-3">2024 — Project Inception</li>
            <li className="rounded-lg border border-white/10 bg-white/5 p-3">2025 — Beta Release</li>
            <li className="rounded-lg border border-white/10 bg-white/5 p-3">2026 — Nationwide Rollout</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur-xl"
        >
          <div className="text-white/90">Team</div>
          <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Dr. A. Nair', role: 'Oceanographer' },
              { name: 'Dr. R. Menon', role: 'Fisheries Scientist' },
              { name: 'Dr. S. Kapoor', role: 'Molecular Biologist' },
              { name: 'Dr. M. Rao', role: 'Data Scientist' },
              { name: 'Dr. P. Gupta', role: 'Geospatial Analyst' },
              { name: 'Dr. L. Fernandes', role: 'Biodiversity Expert' },
            ].map((m) => (
              <motion.div
                key={m.name}
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl border border-white/15 bg-white/10 p-5 text-white/90 shadow-md backdrop-blur-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500" />
                  <div>
                    <div className="font-semibold">{m.name}</div>
                    <div className="text-xs text-cyan-100/80">{m.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;


