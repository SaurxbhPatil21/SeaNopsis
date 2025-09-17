import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { name: 'Dashboard', to: '/dashboard' },
  { name: 'Data Explorer', to: '/explorer' },
  { name: 'Map', to: '/map' },
  { name: 'Taxonomy', to: '/taxonomy' },
  { name: 'Otolith', to: '/otolith' },
  { name: 'eDNA', to: '/edna' },
  { name: 'Upload', to: '/upload' },
  { name: 'About', to: '/about' },
];

const Navbar = ({ active }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const containerVariants = useMemo(
    () => ({
      hidden: { y: -40, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    }),
    []
  );

  const linksVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 8 },
      visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.08 * i, duration: 0.3 } }),
    }),
    []
  );

  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? 'bg-[#002B5B]/90 backdrop-blur-md shadow-lg shadow-black/10' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Branding */}
        <NavLink to="/" className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#00B4D8] to-cyan-400 text-white shadow-lg shadow-cyan-500/30">
            <span className="text-lg">~</span>
          </div>
          <div className="bg-gradient-to-r from-[#00B4D8] to-cyan-200 bg-clip-text text-lg font-extrabold tracking-wide text-transparent sm:text-xl">
            SeaNopsis
          </div>
        </NavLink>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link, i) => {
            const isActive = active === link.name;
            return (
              <motion.div
                key={link.name}
                custom={i}
                variants={linksVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.03 }}
                className="group relative px-3 py-2 text-sm font-medium transition-colors"
              >
                <NavLink
                  to={link.to}
                  className={({ isActive: routeActive }) =>
                    `${routeActive ? 'text-white' : 'text-cyan-100/90 hover:text-white'}`
                  }
                >
                  {link.name}
                </NavLink>
                {/* underline */}
                <span
                  className={`absolute left-1/2 top-[calc(100%-2px)] h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#00B4D8] to-cyan-300 transition-all duration-300 group-hover:w-4/5 ${
                    isActive ? 'w-4/5 shadow-[0_0_12px_1px_rgba(0,180,216,0.5)]' : ''
                  }`}
                />
                {isActive && (
                  <span className="absolute inset-0 -z-10 rounded-lg bg-cyan-400/10 blur-[6px]" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <NavLink
            to="/login"
            className="hidden rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-md backdrop-blur-md transition hover:border-cyan-300/40 hover:shadow-cyan-500/30 lg:block"
          >
            Login
          </NavLink>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/10 text-white shadow-md backdrop-blur-md transition hover:border-cyan-300/40 lg:hidden"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-white"></span>
              <span className="block h-0.5 w-5 bg-white/90"></span>
              <span className="block h-0.5 w-5 bg-white"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 22, stiffness: 220 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85%] border-l border-white/10 bg-[#002B5B] p-5 text-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#00B4D8] to-cyan-400 text-white shadow-lg shadow-cyan-500/30">
                    <span className="text-lg">~</span>
                  </div>
                  <div className="bg-gradient-to-r from-[#00B4D8] to-cyan-200 bg-clip-text text-lg font-extrabold tracking-wide text-transparent">
                    SeaNopsis
                  </div>
                </div>
                <motion.button
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/10 text-white shadow-md"
                >
                  ✕
                </motion.button>
              </div>

              <nav className="mt-2 space-y-1">
                {NAV_LINKS.map((link, i) => {
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i }}
                      className="block rounded-lg px-3 py-3 text-base font-medium transition"
                    >
                      <NavLink
                        to={link.to}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `${isActive ? 'bg-white/10 text-white shadow-inner' : 'text-cyan-100/90 hover:bg-white/5 hover:text-white'} block rounded-lg px-2 py-2`
                        }
                      >
                        {link.name}
                      </NavLink>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mt-6">
                <NavLink
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-center text-sm font-semibold text-white shadow-md backdrop-blur-md transition hover:border-cyan-300/40 hover:shadow-cyan-500/30"
                >
                  Login
                </NavLink>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;


