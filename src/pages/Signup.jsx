import React from 'react';
import { motion } from 'framer-motion';

const Signup = () => {
  return (
    <div className="animated-ocean-bg grid min-h-[calc(100vh-4rem)] place-items-center px-6">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md rounded-2xl border border-white/15 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-xl">
        <h1 className="text-xl font-bold">Sign Up (Placeholder)</h1>
        <p className="mt-2 text-sm text-cyan-100/80">Registration flow coming soon.</p>
      </motion.div>
    </div>
  );
};

export default Signup;


