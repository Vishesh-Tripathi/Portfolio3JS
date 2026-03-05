import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";

const TechCard = ({ technology, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.07, 0.6)}
    className="group relative flex flex-col items-center justify-center gap-3 
               w-[110px] h-[110px] rounded-2xl cursor-pointer
               bg-[#1d1836] border border-[#915EFF]/20
               hover:border-[#915EFF]/60 hover:bg-[#915EFF]/10
               shadow-lg hover:shadow-[#915EFF]/20
               transition-all duration-300"
    style={{
      animation: `float ${3 + (index % 4) * 0.5}s ease-in-out infinite alternate`,
      animationDelay: `${index * 0.15}s`,
    }}
    whileHover={{ scale: 1.12, y: -6 }}
    whileTap={{ scale: 0.96 }}
  >
    {/* Glow backdrop */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#915EFF]/10 to-[#00cea8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    {/* Icon */}
    <img
      src={technology.icon}
      alt={technology.name}
      className={`w-12 h-12 object-contain drop-shadow-lg group-hover:drop-shadow-[0_0_8px_#915EFF99] transition-all duration-300 relative z-10${technology.name === 'Express.js' ? ' invert brightness-75 group-hover:brightness-100' : ''}`}
    />

    {/* Name */}
    <p className="text-[11px] font-semibold text-[#aaa6c3] group-hover:text-white text-center leading-tight px-1 relative z-10 transition-colors duration-300">
      {technology.name}
    </p>

    {/* Bottom accent line */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full bg-gradient-to-r from-[#915EFF] to-[#00cea8] group-hover:w-3/4 transition-all duration-300" />
  </motion.div>
);

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center mb-12">
        <p className={`${styles.sectionSubText}`}>My arsenal</p>
        <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-white to-[#915EFF] bg-clip-text text-transparent`}>
          Technologies.
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#915EFF] to-[#00cea8] mx-auto mt-4 rounded-full" />
      </motion.div>

      <style>{`
        @keyframes float {
          from { transform: translateY(0px); }
          to   { transform: translateY(-10px); }
        }
      `}</style>

      <div className="flex flex-row flex-wrap justify-center gap-5 mt-4">
        {technologies.map((technology, index) => (
          <TechCard key={technology.name} technology={technology} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
