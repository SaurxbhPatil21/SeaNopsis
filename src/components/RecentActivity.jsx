import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { id: 1, title: 'Dataset: West Coast Salinity 2020-2024', tag: 'Oceanography', time: '2h ago' },
  { id: 2, title: 'Classification: Otolith - Sardinella', tag: 'AI Model', time: '1d ago' },
  { id: 3, title: 'eDNA Batch: Gulf of Mannar', tag: 'Biodiversity', time: '3d ago' },
];

const RecentActivity = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-2xl font-bold text-white/90">Recent Activity</h2>
      </div>
      <div className="space-y-3">
        {items.map((it, idx) => (
          <motion.div
            key={it.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: idx * 0.05 }}
            className="flex items-center justify-between rounded-xl border border-white/15 bg-white/10 p-4 shadow-md backdrop-blur-xl"
          >
            <div>
              <div className="text-sm font-semibold text-white/90">{it.title}</div>
              <div className="text-xs text-cyan-100/80">{it.tag}</div>
            </div>
            <div className="text-xs text-cyan-100/70">{it.time}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RecentActivity;


