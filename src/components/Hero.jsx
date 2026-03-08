import { Typewriter } from 'react-simple-typewriter';
import self from '../../public/self.png'

// Replace this URL with your own profile photo path, e.g. import profileImg from '../assets/profile.jpg'
const PROFILE_IMG = null;

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const socialLinks = [
  { icon: <GitHubIcon />, href: 'https://github.com/Vishesh-Tripathi', label: 'GitHub' },
  { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/vishesh-tripathi-5a79a6244/', label: 'LinkedIn' },
  { icon: <InstagramIcon />, href: 'https://instagram.com/_visheshtripathi_', label: 'Instagram' },
];

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-primary">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 lg:gap-40 pt-28 pb-20 md:py-20">

        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-6 max-w-xl">
          <h1 className="font-black text-white text-[36px] sm:text-[52px] lg:text-[72px] leading-tight">
            Vishesh Tripathi
          </h1>

          <h2 className="text-white text-[22px] sm:text-[28px] font-semibold">
            I&apos;m a{' '}
            <span className="text-[#915EFF] border-b-2 border-[#915EFF]">
              <Typewriter
               words={[
                'Frontend Developer',
                'Backend Developer',
                'App Developer',
                'Web Developer',
                'AI Engineer',
                'Full Stack Developer',
                'Generative AI Developer',
              ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </h2>

          <p className="text-[#aaa6c3] text-[16px] sm:text-[18px] leading-[30px]">
            An aspiring{' '}
            <span className="text-[#915EFF] font-semibold">Software Engineer</span>{' '}
            with a passion for technology and innovation. Currently pursuing my
            Bachelor&apos;s degree, building a strong foundation in both{' '}
            <span className="text-[#00cea8] font-semibold">hardware and software systems</span>.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {['C++', 'JavaScript', 'React.js', 'React Native', 'Next.js', 'MongoDB'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-[13px] font-medium border border-[#915EFF]/40 text-[#aaa6c3] bg-[#915EFF]/10 hover:bg-[#915EFF]/20 hover:border-[#915EFF]/70 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA + Social */}
          <div className="flex items-center gap-6 flex-wrap mt-2">
            <a
              href="/cv.pdf"
              download
              className="bg-gradient-to-r from-[#915EFF] to-[#00cea8] hover:from-[#7c4ddb] hover:to-[#00b894] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 text-[16px] shadow-lg shadow-[#915EFF]/30"
            >
              Download CV
            </a>

            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border-2 border-[#915EFF] text-[#915EFF] flex items-center justify-center hover:bg-[#915EFF] hover:text-white transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Profile Photo */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px]">
            {/* Static faint border */}
            <div className="absolute inset-0 rounded-full border border-[#915EFF33]" />

            {/* Arc 1 — leading */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                border: '3px solid transparent',
                borderTopColor: '#915EFF',
                borderRightColor: '#915EFF',
                boxShadow: '0 0 10px 2px #915EFF88, 0 0 24px 6px #915EFF33',
                animation: 'spin-cw 3s linear infinite',
              }}
            />
            {/* Arc 2 — following, offset 180deg behind */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                border: '3px solid transparent',
                borderTopColor: '#00cea8',
                borderRightColor: '#00cea8',
                boxShadow: '0 0 10px 2px #00cea888, 0 0 24px 6px #00cea833',
                animation: 'spin-cw 3s linear infinite',
                animationDelay: '-1.5s',
              }}
            />

            {/* Photo circle */}
            <div className="absolute inset-[12px] rounded-full overflow-hidden ">
              {self ? (
                <img
                  src={self}
                  alt="Vishesh Tripathi"
                  className="w-full h-full object-cover"
                />
              ) : (
                // Placeholder — replace PROFILE_IMG with your image import
                <div className="w-full h-full  flex items-center justify-center">
                  <span className="text-[#915EFF] text-6xl font-black select-none">V</span>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
