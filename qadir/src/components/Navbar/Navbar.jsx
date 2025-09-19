"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home", icon: <FaHome className="inline-block mr-2" /> },
    { href: "#about", label: "About", icon: <FaUser className="inline-block mr-2" /> },
    { href: "#projects", label: "Projects", icon: <FaProjectDiagram className="inline-block mr-2" /> },
    { href: "#contact", label: "Contact", icon: <FaEnvelope className="inline-block mr-2" /> },
  ];

  // Smooth scroll handler
  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // Close mobile menu
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-lg border-b border-slate-800 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/Logo.png"
            alt="Ghulam Qadir"
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-200 text-2xl focus:outline-none"
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 font-medium">
          {links.map((link) => (
            <motion.li
              key={link.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative group flex items-center"
            >
              <a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-slate-200 hover:text-cyan-400 transition duration-300 flex items-center"
              >
                {link.icon} {link.label}
              </a>
              {/* Hover underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-emerald-400 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-slate-900/95 border-t border-slate-800 shadow-lg"
          >
            <ul className="flex flex-col items-center gap-6 py-6 font-medium">
              {links.map((link) => (
                <motion.li
                  key={link.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-slate-200 hover:text-emerald-400 transition duration-300 flex items-center"
                  >
                    {link.icon} {link.label}
                  </a>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-emerald-400 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
