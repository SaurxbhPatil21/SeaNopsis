import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';

const FloatingInput = ({ label, type = 'text', value, onChange, id }) => (
  <div className="relative">
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder=" "
      className="peer w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-transparent focus:outline-none"
    />
    <label
      htmlFor={id}
      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-transparent px-1 text-cyan-100/70 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-200 peer-placeholder-shown:-translate-y-1/2 peer-focus:translate-y-0"
    >
      {label}
    </label>
  </div>
);

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = (e) => {
    e?.preventDefault?.();
    navigate('/dashboard');
  };

  return (
    <div className="relative grid min-h-[calc(100vh-4rem)] place-items-center px-6">
      {/* Background video */}
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        src="/videos/ocean-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/ocean-hero.jpg"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#041e3a]/70 via-[#052a4f]/55 to-[#041e3a]/80" />

      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md rounded-2xl border border-white/15 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-xl"
      >
        <div className="mb-4 flex items-center justify-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#00B4D8] to-cyan-400 text-white shadow-lg shadow-cyan-500/30">~</div>
          <div className="bg-gradient-to-r from-[#00B4D8] to-cyan-200 bg-clip-text text-lg font-extrabold tracking-wide text-transparent">Marine Data AI</div>
        </div>
        <form onSubmit={onLogin} className="space-y-4">
          <FloatingInput id="email" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <FloatingInput id="password" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <motion.button
            whileHover={{ scale: 1.01, boxShadow: '0 0 20px rgba(34,211,238,0.35)' }}
            whileTap={{ scale: 0.99 }}
            type="button"
            onClick={onLogin}
            className="mt-2 w-full rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-3 font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:from-teal-400 hover:to-cyan-400"
          >
            Login
          </motion.button>
        </form>
        <div className="mt-4 flex items-center justify-between text-xs text-cyan-100/80">
          <Link to="/signup" className="hover:underline">Sign Up</Link>
          <Link to="/reset" className="hover:underline">Forgot Password?</Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;


