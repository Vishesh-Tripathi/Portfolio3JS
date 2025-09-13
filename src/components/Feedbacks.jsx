import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  link,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-tertiary p-5 rounded-2xl xs:w-[320px] w-full hover:bg-black-200 transition-all duration-300 group cursor-pointer'
    onClick={() => window.open(link, "_blank")}
  >
    <div className='relative w-full h-[200px] mb-5'>
      <div className='absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300'></div>
      <div className='relative bg-tertiary m-1 rounded-xl h-full flex items-center justify-center'>
        <img
          src={image}
          alt={`${name} profile`}
          className='w-16 h-16 object-contain filter group-hover:scale-110 transition-transform duration-300'
        />
      </div>
    </div>

    <div className='mt-5'>
      <h3 className='text-white font-bold text-[20px] group-hover:text-[#915EFF] transition-colors duration-300'>
        {name}
      </h3>
      {designation && (
        <p className='mt-2 text-secondary text-[14px]'>
          {designation} {company && `at ${company}`}
        </p>
      )}
      
      <div className='mt-4 flex items-center justify-between'>
        <span className='text-[#915EFF] text-[14px] font-medium group-hover:text-white transition-colors duration-300'>
          Visit Profile →
        </span>
        <div className='w-8 h-8 rounded-full bg-black-200 flex items-center justify-center group-hover:bg-[#915EFF] transition-colors duration-300'>
          <svg
            className='w-4 h-4 text-white'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
            />
          </svg>
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Connect with me</p>
          <h2 className={styles.sectionHeadText}>Social Profiles.</h2>
        </motion.div>
        
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 mb-16 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Follow my journey and connect with me on various platforms. From coding repositories 
          to professional networking, you can find my work and stay updated with my latest projects 
          and achievements across these platforms.
        </motion.p>
      </div>
      
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
