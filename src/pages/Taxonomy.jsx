import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Taxonomy = () => {
  const [open, setOpen] = useState(true);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-2xl font-bold text-white/90">Taxonomy</h1>

      <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-xl lg:col-span-1"
        >
          <div className="text-white/90">Search & Browse</div>
          <input placeholder="Search taxa..." className="mt-3 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-white placeholder:text-cyan-100/60 focus:outline-none" />
          <div className="mt-4">
            <button onClick={() => setOpen((v) => !v)} className="text-sm text-cyan-200">{open ? 'Collapse' : 'Expand'} Tree</button>
            <div className="mt-2 text-sm text-cyan-100/80">Taxonomy Tree</div>
            <AnimatePresence initial={false}>
              {open && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <li className="mt-2 rounded-lg border border-white/10 bg-white/5 p-2">Chordata
                    <ul className="ml-4 mt-2">
                      <li className="rounded-lg border border-white/10 bg-white/5 p-2">Actinopterygii
                        <ul className="ml-4 mt-2">
                          <li className="rounded-lg border border-white/10 bg-white/5 p-2">Sardinella</li>
                          <li className="mt-2 rounded-lg border border-white/10 bg-white/5 p-2">Rastrelliger</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-xl lg:col-span-2"
        >
          <div className="text-white/90">Species</div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {['Sardinella longiceps', 'Rastrelliger kanagurta', 'Thunnus albacares', 'Euthynnus affinis'].map((s, i) => (
              <motion.div key={s} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-xl border border-white/15 bg-white/10 p-4 shadow-md backdrop-blur-xl">
                <div className="text-white/90">{s}</div>
                <div className="mt-1 text-xs text-cyan-100/80">Genus: {s.split(' ')[0]}</div>
                <button className="mt-3 rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white hover:border-cyan-300/40">View Details</button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Taxonomy;


