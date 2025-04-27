import { Typewriter } from 'react-simple-typewriter';
import { styles } from '../styles';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className={`${styles.heroHeadText} text-white`}>
          <span className="text-[#915EFF]">
            <Typewriter
              words={['Hi, I am Vishesh']}
              loop={1}
              cursor
             
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className={`${styles.heroSubText} mt-4 text-white-100`}>
          I develop websites, user interfaces, and web applications.
        </p>
        <p className="mt-4 text-secondary text-[18px] max-w-2xl mx-auto leading-[30px]">
          I am passionate about building responsive, accessible, and dynamic digital experiences. 
          Always eager to learn new technologies and continuously improve my skills.
        </p>
      </div>
    </section>
  );
};

export default Hero;
