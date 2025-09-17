import React, { useState } from 'react';
import { motion } from 'framer-motion';

const datasets = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  title: `Dataset #${i + 1}`,
  type: i % 2 === 0 ? 'Oceanography' : 'Biodiversity',
  size: `${(Math.random() * 5 + 0.5).toFixed(1)} GB`,
  tags: ['salinity', 'temperature', 'species'].slice(0, (i % 3) + 1),
}));

const DataExplorer = () => {
  const [query, setQuery] = useState('');

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-2xl font-bold text-white/90">Data Explorer</h1>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search datasets..."
          className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-white placeholder:text-cyan-100/60 focus:outline-none"
        />
        <select className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-white focus:outline-none">
          <option>All Types</option>
          <option>Oceanography</option>
          <option>Biodiversity</option>
        </select>
        <input type="date" className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-white focus:outline-none" />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {datasets
          .filter((d) => d.title.toLowerCase().includes(query.toLowerCase()))
          .map((d, i) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="group rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold text-white/90">{d.title}</div>
                <span className="rounded-full bg-cyan-400/20 px-2 py-1 text-xs text-cyan-200">{d.type}</span>
              </div>
              <div className="mt-2 text-sm text-cyan-100/80">Size: {d.size}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {d.tags.map((t) => (
                  <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-cyan-100/80">#{t}</span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                <button className="rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-sm text-white hover:border-cyan-300/40">Preview</button>
                <button className="rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 px-3 py-1.5 text-sm text-white shadow-md">Download</button>
              </div>
            </motion.div>
          ))}
      </div>

      <div className="mt-6 flex justify-center">
        <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-100/80">Page 1 of 5</div>
      </div>
    </motion.div>
  );
};

export default DataExplorer;


