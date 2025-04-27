import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  sb,
  tripguide,
  threejs,
  gssco,
  tech,
  anant
} from "../assets";

export const navLinks = [
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#work",
    title: "Work",
  },
  {
    id: "#contact",
    title: "Contact",
  },
  {
    id:"https://drive.google.com/file/d/1cGlC3ShklyHnFxBLCPt3fZKk3btY1uzQ/view?usp=sharing",
    title:"Resume",
  }
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
 
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "AnantWave",
    icon: anant, // Replace with appropriate icon variable or import
    iconBg: "#383E56",
    date: "Feb 2025 - Present",
    points: [
      "Developing and optimizing user-centric web applications using React.js, Node.js, and Tailwind CSS.",
      "Implementing scalable and maintainable front-end architectures, ensuring seamless UI/UX across devices.",
      "Collaborating with cross-functional teams to integrate backend services, implement authentication flows, and manage databases using MongoDB and Firebase.",
      "Writing efficient, reusable, and modular code while following best practices for version control (Git).",
    ],
  }
  ,
  {
    title: "Contributer GSSOC 24",
    company_name: "Girl Summer Script of Code ",
    icon: gssco,
    iconBg: "#383E56",
    date: "July 2024 - NOV 2024",
    points: [
      "Contributing in open Source project web applications using React.js and other related technologies.",
      "Working on advanced open source projects to get hands on experience in the real open source world.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Executive Member ",
    company_name: "IEEE SB MMMUT",
    icon: sb,
    iconBg: "#383E56",
    date: "Sep  2022 - Present",
    points: [
      " I am the part of webDeveloper team in Society Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Github",
    link:"https://github.com/Vishesh-Tripathi",
    // designation: "CFO",
    // company: "Acme Co",
    image: "https://www.svgrepo.com/show/475654/github-color.svg",
  },
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name:  "Linkedin",
    link:"https://www.linkedin.com/in/vishesh-tripathi-5a79a6244/",
    // designation: "CFO",
    // company: "Acme Co",
    image: "https://www.svgrepo.com/show/452047/linkedin-1.svg",
  },
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name:  "Codolio",
    link:"https://codolio.com/profile/SjMBYMjG",
    // designation: "CFO",
    // company: "Acme Co",
    image: "https://codolio.com/codolio_assets/codolio.svg",
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Kart-IT",
    description:
      "🚀 E-Commerce Website Development Project 🚀As part of my journey in web development, I had the opportunity to design and develop a dynamic e-commerce website using React and Appwrite. This project was a comprehensive exercise in creating a user-friendly, responsive, and secure online shopping platform..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Appwrite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Vishesh-Tripathi/E-Com",
  },
  {
    name: "Task-Manager",
    description:
      "A task manager with Role-Based Access Control (RBAC) allows users to manage tasks efficiently while ensuring secure access control based on roles and permissions. It streamlines workflows, enhances collaboration, and ensures that only authorized individuals can access or modify specific tasks or data. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      }
    ],
    image: jobit,
    source_code_link: "https://github.com/Vishesh-Tripathi/Task-Manager-RBAC",
  },
  {
    name: "TechSrijan Website",
    description:
      "The official website for TechShrijan, our college's annual technical fest, was developed to create an engaging and seamless experience for participants and visitors. Designed with a modern and dynamic user interface, the website serves as the central hub for all event-related information, registrations, schedules, and announcements.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tech,
    source_code_link: "https://techsrijan.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
