import React from 'react';
import { motion } from 'framer-motion';

const EDNA = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-2xl font-bold text-white/90">eDNA</h1>

      <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-xl">
          <div className="text-white/90">Search eDNA Records</div>
          <div className="mt-3 space-y-2">
            <input placeholder="Species" className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-white placeholder:text-cyan-100/60 focus:outline-none" />
            <input placeholder="Location" className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-white placeholder:text-cyan-100/60 focus:outline-none" />
            <input type="date" className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-white focus:outline-none" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-xl lg:col-span-2">
          <div className="text-white/90">Results</div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-white/15 bg-white/10 p-4 shadow-md backdrop-blur-xl">
                <div className="text-white/90">Seq-{1000 + i}</div>
                <div className="mt-1 text-xs text-cyan-100/80">Species: Sardinella</div>
                <div className="text-xs text-cyan-100/80">Confidence: 0.{8 + i}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-xl">
        <div className="text-white/90">Comparison Viewer (placeholder)</div>
        <div className="mt-3 h-40 rounded-xl bg-gradient-to-r from-cyan-900/40 to-teal-900/40" />
      </motion.div>
    </motion.div>
  );
};

export default EDNA;


