import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-white/10 bg-[#041e3a]">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div className="text-sm text-cyan-100/80">
            © {new Date().getFullYear()} MoES | CMLRE. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-cyan-100/80 hover:text-white">Contact</a>
            <a href="#" className="text-cyan-100/80 hover:text-white">Docs</a>
            <a href="#" className="text-cyan-100/80 hover:text-white">API</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


