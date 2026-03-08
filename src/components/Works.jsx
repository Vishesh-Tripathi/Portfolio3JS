import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const tagColorMap = {
  "blue-text-gradient": "bg-[#915EFF]/20 text-[#b490ff] border-[#915EFF]/30",
  "green-text-gradient": "bg-[#00cea8]/20 text-[#00cea8] border-[#00cea8]/30",
  "pink-text-gradient": "bg-[#ff6b9d]/15 text-[#ff6b9d] border-[#ff6b9d]/30",
  "orange-text-gradient": "bg-orange-500/15 text-orange-400 border-orange-400/30",
};

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.6)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-[#1d1836] rounded-2xl overflow-hidden border border-[#915EFF]/20 hover:border-[#915EFF]/50 transition-all duration-500 shadow-lg hover:shadow-[#915EFF]/20 hover:shadow-xl w-full sm:w-[360px]"
      whileHover={{ y: -6 }}
    >
      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#915EFF] to-[#00cea8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      {/* Image */}
      <div className="relative w-full h-[210px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d1836] via-[#1d1836]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* GitHub button */}
        <motion.div
          className="absolute top-3 right-3 z-10"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.7 }}
          transition={{ duration: 0.2 }}
        >
          <button
            onClick={() => window.open(source_code_link, "_blank")}
            className="flex items-center gap-2 bg-[#1d1836]/90 backdrop-blur-sm border border-[#915EFF]/40 hover:border-[#915EFF] text-white text-[12px] font-medium px-3 py-1.5 rounded-full transition-all duration-200 hover:bg-[#915EFF]/20"
          >
            <img src={github} alt="github" className="w-4 h-4 invert" />
            View Code
          </button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-white font-bold text-[20px] leading-tight group-hover:text-[#b490ff] transition-colors duration-300">
            {name}
          </h3>
          {/* Live link indicator */}
          <button
            onClick={() => window.open(source_code_link, "_blank")}
            className="flex-shrink-0 text-[#00cea8] hover:text-white transition-colors duration-200 mt-1"
            title="Open"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </button>
        </div>

        <p className="text-[#aaa6c3] text-[13px] leading-[22px] line-clamp-3">
          {description}
        </p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-[#915EFF]/30 via-[#00cea8]/20 to-transparent mt-1" />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${tagColorMap[tag.color] || "bg-white/10 text-white/60 border-white/10"}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText}`}>What I've built</p>
        <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-white to-[#915EFF] bg-clip-text text-transparent`}>
          Projects.
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#915EFF] to-[#00cea8] mx-auto mt-4 rounded-full" />
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 text-[#aaa6c3] text-[16px] max-w-2xl mx-auto leading-[28px] text-center"
      >
        Real-world projects that showcase my skills — from AI-powered platforms
        to full-stack web apps. Each comes with source code and a live demo.
      </motion.p>

      {/* Background decorations */}
      <div className="relative mt-16">
        <div className="absolute -top-10 left-0 w-40 h-40 bg-[#915EFF]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 right-0 w-40 h-40 bg-[#00cea8]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap justify-center gap-7 relative z-10 px-4 sm:px-0">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");

