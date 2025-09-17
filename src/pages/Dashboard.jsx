import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ label, value, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.4 }}
    className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-xl"
  >
    <div className="text-sm text-cyan-100/80">{label}</div>
    <div className="mt-1 text-2xl font-bold text-white">{value}</div>
  </motion.div>
);

const Dashboard = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-2xl font-bold text-white/90">Dashboard</h1>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Species Count" value="1,284" delay={0.05} />
        <StatCard label="eDNA Matches" value="8,932" delay={0.1} />
        <StatCard label="Ocean Temp Avg" value="27.4°C" delay={0.15} />
        <StatCard label="Uploaded Datasets" value="412" delay={0.2} />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-xl lg:col-span-2"
        >
          <div className="mb-3 text-white/90">Trends (placeholder)</div>
          <div className="h-56 w-full rounded-lg bg-gradient-to-r from-cyan-900/40 to-teal-900/40" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-xl"
        >
          <div className="mb-3 text-white/90">Quick Nav</div>
          <div className="space-y-2">
            {['Data Explorer', 'Map', 'Taxonomy', 'Upload'].map((t) => (
              <a key={t} href="#" className="block rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-cyan-100/90 hover:bg-white/10">{t}</a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-xl"
      >
        <div className="mb-3 text-white/90">Recent Activity</div>
        <div className="space-y-2 text-sm text-cyan-100/80">
          <div className="rounded-lg border border-white/10 bg-white/5 p-3">Uploaded: West Coast Salinity 2024</div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-3">eDNA Batch processed: Gulf of Mannar</div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-3">AI Run: Otolith classification — Sardinella</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;


