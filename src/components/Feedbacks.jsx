import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const platformAccent = {
  Github:   { from: "#6e40c9", to: "#915EFF", shadow: "#915EFF" },
  Linkedin: { from: "#0077b5", to: "#00a0dc", shadow: "#0077b5" },
  Codolio:  { from: "#00cea8", to: "#00f5c8", shadow: "#00cea8" },
};

const FeedbackCard = ({ index, link, name, designation, company, image }) => {
  const accent = platformAccent[name] ?? { from: "#915EFF", to: "#00cea8", shadow: "#915EFF" };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.6)}
      whileHover={{ y: -8, scale: 1.03 }}
      onClick={() => window.open(link, "_blank")}
      className="group relative cursor-pointer rounded-2xl overflow-hidden w-[260px]"
      style={{
        background: "linear-gradient(145deg, #1d1836, #13102a)",
        border: "1px solid rgba(145,94,255,0.2)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
        transition: "box-shadow 0.3s, border-color 0.3s",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${accent.shadow}66`;
        e.currentTarget.style.boxShadow = `0 8px 32px ${accent.shadow}33`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "rgba(145,94,255,0.2)";
        e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.3)";
      }}
    >
      {/* Top accent bar */}
      <div
        className="h-[3px] w-full"
        style={{ background: `linear-gradient(to right, ${accent.from}, ${accent.to})` }}
      />

      {/* Card body */}
      <div className="flex flex-col items-center gap-4 p-7">
        {/* Icon glow ring */}
        <div className="relative">
          <div
            className="absolute inset-0 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-300"
            style={{ background: `radial-gradient(circle, ${accent.from}, transparent)` }}
          />
          <div
            className="relative w-20 h-20 rounded-full flex items-center justify-center border-2"
            style={{
              borderColor: `${accent.shadow}44`,
              background: `linear-gradient(135deg, ${accent.from}22, ${accent.to}11)`,
            }}
          >
            <img
              src={image}
              alt={name}
              className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Name */}
        <h3 className="text-white font-bold text-[18px] tracking-wide group-hover:text-[#b490ff] transition-colors duration-300">
          {name}
        </h3>

        {/* Designation / company */}
        {designation && (
          <p className="text-[#aaa6c3] text-[13px] text-center">
            {designation}{company && ` · ${company}`}
          </p>
        )}

        {/* Divider */}
        <div
          className="w-full h-px opacity-30"
          style={{ background: `linear-gradient(to right, transparent, ${accent.shadow}, transparent)` }}
        />

        {/* CTA */}
        <div className="flex items-center gap-2 text-[13px] font-semibold transition-colors duration-300"
          style={{ color: accent.to }}
        >
          Visit Profile
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText}`}>Let&apos;s connect</p>
        <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-white to-[#915EFF] bg-clip-text text-transparent`}>
          Social Profiles.
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#915EFF] to-[#00cea8] mx-auto mt-4 rounded-full" />
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 text-[#aaa6c3] text-[16px] max-w-2xl mx-auto leading-[28px] text-center"
      >
        Follow my journey and connect across platforms — from code repositories
        to professional networking and DSA .
      </motion.p>

      {/* Background glows */}
      <div className="relative mt-16">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#915EFF]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#00cea8]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap justify-center gap-8 relative z-10">
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "");

