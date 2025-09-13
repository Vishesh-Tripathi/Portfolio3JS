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
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
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
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Flex Container */}
      <div className="mt-10 flex flex-col md:flex-row gap-10 items-center">
        
        {/* Left Side - Text */}
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="flex-1 text-secondary text-[17px] max-w-6xl "
        >
          <p>
            Hello! I’m Vishesh Tripathi, an aspiring Software Engineer with a passion for technology and innovation. Currently, I’m pursuing my Bachelor’s degree , where I am building a strong foundation in both hardware and software systems.
            <br />
          </p>

          <br />
          <p className="font-semibold">Here are some technologies I’ve been working with:</p>
          <div className="mt-2 grid grid-cols-2 gap-4">
            <ul className="list-disc list-inside space-y-2">
              <li>C/C++</li>
              <li>JavaScript</li>
              <li>React.js</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Node.js</li>
              <li>Redux</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <br />
          {/* <p className="font-semibold">Developer Tools I use frequently:</p>
          <div className="mt-2 grid grid-cols-2 gap-4">
            <ul className="list-disc list-inside space-y-2">
              <li>Git & GitHub</li>
              <li>VS Code</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Appwrite</li>
              <li>Firebase</li>
            </ul>
          </div> */}

          {/* <br /> */}
          <p>
            Outside of my academic and technical pursuits, I have a passion for traveling, exploring new places, and experiencing different cultures. I’m also interested in following scientific advancements and playing video games during my free time.
          </p>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          variants={fadeIn("left", "spring", 0.5, 1)}
          className="flex-1 flex justify-center items-center"
        >
          <img
            src={myImage}
            alt="Vishesh Tripathi"
            className="w-[300px] h-[400px] object-cover rounded-2xl border-4 border-[#915EFF]"
          />
        </motion.div>
      </div>

      {/* Services */}
      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
