import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Import your image
import myImage from "./profile.jpg"; // change path according to your image location

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col hover:bg-black-200/50 transition-colors duration-300'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* Header Section with enhanced styling */}
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText} relative`}>
          <span className="relative z-10">Introduction</span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#915EFF] to-[#00cea8] opacity-20 blur-sm"></span>
        </p>
        <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-white to-[#915EFF] bg-clip-text text-transparent`}>
          Overview.
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#915EFF] to-[#00cea8] mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Main Content Container with enhanced layout */}
      <div className="mt-16 relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#915EFF]/10 to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#00cea8]/10 to-transparent rounded-full blur-xl"></div>
        
        <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
          
          {/* Left Side - Enhanced Profile Image (Sticky) */}
          <motion.div
            variants={fadeIn("right", "spring", 0.3, 1)}
            className="flex-1 flex justify-center items-start order-2 lg:order-1"
          >
            <div className="sticky top-20 z-20">
              <div className="relative group">
                {/* Glowing background effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#915EFF] via-[#00cea8] to-[#bf61ff] rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                {/* Image container */}
                <div className="relative bg-gradient-to-br from-[#915EFF] to-[#00cea8] p-1 rounded-3xl">
                  <div className="bg-tertiary rounded-3xl p-2">
                    <img
                      src={myImage}
                      alt="Vishesh Tripathi"
                      className="w-[280px] h-[360px] lg:w-[320px] lg:h-[420px] object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#915EFF] rounded-full animate-pulse"></div>
                <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-[#00cea8] rounded-full animate-pulse delay-75"></div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Enhanced Content */}
          <motion.div
            variants={fadeIn("left", "spring", 0.5, 1)}
            className="flex-1 order-1 lg:order-2 space-y-8"
          >
            {/* Main introduction */}
            <div className="bg-black-200/50 backdrop-blur-sm rounded-2xl p-8 border border-[#915EFF]/20 hover:border-[#915EFF]/40 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-[#915EFF] to-[#00cea8] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">👋</span>
                </div>
                <h3 className="text-white text-xl font-bold">Hello, I'm Vishesh Tripathi</h3>
              </div>
              
              <p className="text-secondary text-[17px] leading-relaxed">
                An aspiring <span className="text-[#915EFF] font-semibold">Software Engineer</span> with a passion for technology and innovation. 
                Currently pursuing my Bachelor's degree, building a strong foundation in both 
                <span className="text-[#00cea8] font-semibold"> hardware and software systems</span>.
              </p>
            </div>

            {/* Technologies Section */}
            <div className="bg-black-200/50 backdrop-blur-sm rounded-2xl p-8 border border-[#915EFF]/20 hover:border-[#915EFF]/40 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-[#915EFF] to-[#00cea8] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">⚡</span>
                </div>
                <h3 className="text-white text-xl font-bold">Technologies I Work With</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  {['C++', 'JavaScript', 'React.js'].map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-tertiary rounded-xl hover:bg-[#915EFF]/10 transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-[#915EFF] rounded-full"></div>
                      <span className="text-secondary font-medium">{tech}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="space-y-4">
                  {['React Native', 'Next.js', 'MongoDB'].map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="flex items-center gap-3 p-3 bg-tertiary rounded-xl hover:bg-[#00cea8]/10 transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-[#00cea8] rounded-full"></div>
                      <span className="text-secondary font-medium">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interests Section */}
            <div className="bg-black-200/50 backdrop-blur-sm rounded-2xl p-8 border border-[#915EFF]/20 hover:border-[#915EFF]/40 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-[#915EFF] to-[#00cea8] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🎯</span>
                </div>
                <h3 className="text-white text-xl font-bold">Beyond Coding</h3>
              </div>
              
              <p className="text-secondary text-[17px] leading-relaxed">
                When I'm not coding, I enjoy <span className="text-[#915EFF] font-semibold">traveling</span> and 
                exploring new cultures, following the latest <span className="text-[#00cea8] font-semibold">scientific advancements</span>, 
                and unwinding with video games.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Services Section */}
      <motion.div
        variants={fadeIn("up", "spring", 0.8, 1)}
        className="mt-32"
      >
        <div className="text-center mb-16">
          <h3 className="text-white text-3xl font-bold mb-4">What I Do</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-[#915EFF] to-[#00cea8] mx-auto rounded-full"></div>
        </div>
        
        <div className='flex flex-wrap gap-10 justify-center'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");