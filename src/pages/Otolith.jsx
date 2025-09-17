import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Otolith = () => {
  const [file, setFile] = useState(null);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-2xl font-bold text-white/90">Otolith Analysis</h1>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-xl">
          <div className="text-white/90">Upload Otolith Image</div>
          <label className="mt-3 block cursor-pointer rounded-xl border border-dashed border-cyan-300/40 bg-white/5 p-6 text-center text-cyan-100/80 hover:bg-white/10">
            <input type="file" className="hidden" onChange={(e) => setFile(e.target.files?.[0] || null)} />
            Drag & Drop or Click to Upload
          </label>
          {file && <div className="mt-2 text-xs text-cyan-100/70">Selected: {file.name}</div>}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-xl lg:col-span-2">
          <div className="text-white/90">Visualization (placeholder)</div>
          <div className="mt-3 h-64 rounded-xl bg-gradient-to-r from-cyan-900/40 to-teal-900/40" />
        </motion.div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-xl">
          <div className="text-white/90">Morphometric Data</div>
          <div className="mt-3 overflow-x-auto text-sm text-cyan-100/80">
            <table className="w-full">
              <thead className="text-cyan-200">
                <tr><th className="p-2 text-left">Metric</th><th className="p-2 text-left">Value</th></tr>
              </thead>
              <tbody>
                {[
                  ['Length', '12.4 mm'],
                  ['Width', '5.8 mm'],
                  ['Aspect Ratio', '2.14'],
                ].map(([k, v]) => (
                  <tr key={k}><td className="p-2">{k}</td><td className="p-2">{v}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-xl">
          <div className="text-white/90">Comparison Slider (placeholder)</div>
          <div className="mt-3 h-40 rounded-xl bg-gradient-to-r from-cyan-900/40 to-teal-900/40" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Otolith;


