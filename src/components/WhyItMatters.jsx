import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
  {
    icon: '📊',
    title: 'Evidence-Based Policy',
    desc: 'Unify datasets to support sustainable fisheries and conservation.',
  },
  {
    icon: '⚓',
    title: 'Operational Decisions',
    desc: 'Guide fleets with forecasts of species and ocean conditions.',
  },
  {
    icon: '🧪',
    title: 'Accelerate Research',
    desc: 'AI tools boost discovery from eDNA to otolith morphology.',
  },
];

const WhyItMatters = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center text-2xl font-bold text-white/90"
      >
        Why It Matters
      </motion.h2>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {reasons.map((r, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: idx * 0.05 }}
            className="rounded-2xl border border-white/15 bg-white/10 p-6 text-center shadow-xl backdrop-blur-xl"
          >
            <div className="text-4xl">{r.icon}</div>
            <h3 className="mt-3 text-lg font-semibold text-white/90">{r.title}</h3>
            <p className="mt-1 text-sm text-cyan-100/80">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyItMatters;


