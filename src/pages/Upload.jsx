import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Upload = () => {
  const [progress, setProgress] = useState(0);
  const [files, setFiles] = useState([]);

  const simulate = (fileList) => {
    setFiles(Array.from(fileList).map((f) => ({ name: f.name, status: 'Uploading...' })));
    setProgress(0);
    let p = 0;
    const id = setInterval(() => {
      p += 7;
      setProgress(Math.min(p, 100));
      if (p >= 100) {
        clearInterval(id);
        setFiles((fs) => fs.map((f) => ({ ...f, status: 'Completed' })));
      }
    }, 120);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-2xl font-bold text-white/90">Upload Datasets</h1>

      <motion.label whileHover={{ scale: 1.01 }} className="mt-5 block cursor-pointer rounded-2xl border border-dashed border-cyan-300/40 bg-white/5 p-8 text-center text-cyan-100/80 shadow-xl backdrop-blur-xl hover:bg-white/10">
        <input type="file" multiple className="hidden" onChange={(e) => simulate(e.target.files)} />
        Drag & Drop or Click to Upload
      </motion.label>

      <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-xl">
        <div className="text-white/90">Progress</div>
        <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ ease: 'easeInOut' }} className="h-full bg-gradient-to-r from-teal-500 to-cyan-500" />
        </div>
        <div className="mt-2 text-xs text-cyan-100/80">{progress}%</div>
      </div>

      <div className="mt-6 space-y-2">
        {files.map((f) => (
          <div key={f.name} className="rounded-xl border border-white/15 bg-white/10 p-4 text-sm text-cyan-100/90 shadow-md backdrop-blur-xl">
            {f.name} — {f.status}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Upload;


