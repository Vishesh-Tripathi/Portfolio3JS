import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  const [open, setOpen] = useState(index === 0);
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative flex w-full items-start gap-0 ${isLeft ? "flex-row" : "flex-row-reverse"} md:w-[calc(50%-20px)] ${isLeft ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"}`}>

      {/* Connector dot to center line */}
      <div className={`hidden md:block absolute top-8 w-10 h-[2px] bg-gradient-to-r from-[#915EFF] to-[#00cea8] ${isLeft ? "right-0" : "left-0"}`} />

      <motion.div
        variants={fadeIn(isLeft ? "right" : "left", "spring", index * 0.2, 0.7)}
        className="w-full"
      >
        <div
          className="group relative bg-gradient-to-br from-[#1d1836] to-[#13102a] rounded-2xl border border-[#915EFF]/20 hover:border-[#915EFF]/50 transition-all duration-300 shadow-lg hover:shadow-[#915EFF]/10 overflow-hidden cursor-pointer"
          onClick={() => setOpen((o) => !o)}
        >
          {/* Top accent */}
          <div className="h-[2px] w-full bg-gradient-to-r from-[#915EFF] to-[#00cea8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Header */}
          <div className="flex items-center gap-4 p-5">
            {/* Company icon */}
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#915EFF]/20 bg-[#0d0b1e]"
            >
              <img
                src={experience.icon}
                alt={experience.company_name}
                className="w-9 h-9 object-contain"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-white font-bold text-[17px] leading-snug group-hover:text-[#b490ff] transition-colors duration-300 truncate">
                {experience.title}
              </h3>
              <p className="text-[#00cea8] text-[13px] font-semibold truncate">
                {experience.company_name}
              </p>
            </div>

            <div className="flex flex-col items-end gap-2 flex-shrink-0">
              {/* Date badge */}
              <span className="text-[11px] font-medium text-[#aaa6c3] bg-[#915EFF]/10 border border-[#915EFF]/20 px-3 py-1 rounded-full whitespace-nowrap">
                {experience.date}
              </span>
              {/* Expand chevron */}
              <svg
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                className={`w-4 h-4 text-[#915EFF] transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>

          {/* Expandable points */}
          <motion.div
            initial={false}
            animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-5 pb-5">
              <div className="h-px bg-gradient-to-r from-[#915EFF]/30 via-[#00cea8]/20 to-transparent mb-4" />
              <ul className="flex flex-col gap-2.5">
                {experience.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[#aaa6c3] text-[13px] leading-[22px]">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#915EFF] to-[#00cea8] flex-shrink-0 mt-[7px]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText}`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-white to-[#915EFF] bg-clip-text text-transparent`}>
          Work Experience.
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#915EFF] to-[#00cea8] mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Timeline */}
      <div className="mt-16 relative">
        {/* Center vertical line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#915EFF] via-[#00cea8] to-transparent opacity-30 rounded-full" />

        <div className="flex flex-col gap-8 md:gap-10 relative">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");

