import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 640) setToggle(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isExternal = (href) => href.startsWith("http");

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/80 backdrop-blur-md border-b border-[#915EFF]/20 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group"
          onClick={() => { setActive(""); window.scrollTo(0, 0); }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#915EFF] rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            <img src={logo} alt="logo" className="relative w-9 h-9 object-contain" />
          </div>
          <span className="text-white text-[18px] font-bold tracking-wide">
            Vishesh{" "}
            <span className="bg-gradient-to-r from-[#915EFF] to-[#00cea8] bg-clip-text text-transparent">
              Tripathi
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="list-none hidden sm:flex flex-row items-center gap-1">
          {navLinks.map((link) => {
            const isResume = link.title === "Resume";
            return (
              <li key={link.id}>
                {isResume ? (
                  <a
                    href={link.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-[#915EFF] to-[#00cea8] text-white text-[14px] font-semibold hover:shadow-lg hover:shadow-[#915EFF]/30 transition-all duration-300 hover:scale-105 inline-block"
                  >
                    {link.title} ↗
                  </a>
                ) : (
                  <a
                    href={link.id}
                    onClick={() => setActive(link.title)}
                    className={`relative px-4 py-2 text-[15px] font-medium transition-colors duration-200 rounded-lg group ${
                      active === link.title ? "text-white" : "text-[#aaa6c3] hover:text-white"
                    }`}
                  >
                    {link.title}
                    {/* Active / hover underline */}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-gradient-to-r from-[#915EFF] to-[#00cea8] transition-all duration-300 ${
                        active === link.title ? "w-4/5" : "w-0 group-hover:w-4/5"
                      }`}
                    />
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setToggle((t) => !t)}
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl border border-[#915EFF]/30 bg-[#1d1836]/60 backdrop-blur-sm hover:border-[#915EFF]/60 transition-all duration-200"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={toggle ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-white rounded-full origin-center transition-all"
            />
            <motion.span
              animate={toggle ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block w-5 h-0.5 bg-white rounded-full"
            />
            <motion.span
              animate={toggle ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-white rounded-full origin-center transition-all"
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="sm:hidden absolute top-full left-4 right-4 mt-2 rounded-2xl border border-[#915EFF]/25 bg-[#050816]/90 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden"
          >
            {/* Top gradient bar */}
            <div className="h-[2px] w-full bg-gradient-to-r from-[#915EFF] to-[#00cea8]" />

            <ul className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => {
                const isResume = link.title === "Resume";
                return (
                  <li key={link.id}>
                    {isResume ? (
                      <a
                        href={link.id}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setToggle(false)}
                        className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-gradient-to-r from-[#915EFF]/20 to-[#00cea8]/10 border border-[#915EFF]/30 text-white text-[15px] font-semibold hover:from-[#915EFF]/30 transition-all duration-200"
                      >
                        {link.title}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-[#00cea8]">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                          <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    ) : (
                      <a
                        href={link.id}
                        onClick={() => { setToggle(false); setActive(link.title); }}
                        className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-[15px] font-medium transition-all duration-200 ${
                          active === link.title
                            ? "bg-[#915EFF]/15 text-white border border-[#915EFF]/30"
                            : "text-[#aaa6c3] hover:bg-[#915EFF]/10 hover:text-white"
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${active === link.title ? "bg-[#915EFF]" : "bg-[#aaa6c3]/40"}`} />
                        {link.title}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

