import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaReact, FaNodeJs, FaDatabase, FaCode, FaHtml5, FaCss3Alt } from 'react-icons/fa'; // Example icons
import { SiExpress, SiMongodb, SiTailwindcss, SiJavascript, SiCplusplus, } from 'react-icons/si'; // More specific tech icons

export const personalInfo = {
  name: "Ayush Kumar Singh",
  title: "Mern Stack Developer",
  email: "aj945892@gmail.com",
  linkedin: "https://www.linkedin.com/in/ayush-kumar-singh-542168207/",
  github: "https://github.com/Ayushsingh1312",
  resumeLink: "/AYUSH_RESUME_UPDATED_.pdf", // Make sure your resume is in public/
  bio: "Innovative Mern Stack Developer passionate about creating seamless and impactful web solutions. Eager to leverage modern technologies to solve real-world problems and contribute to dynamic team environments.",
  shortBio: "I build things for the web." // For Hero section
};

export const education = [
  {
    institution: "College of Engineering Roorkee",
    degree: "Bachelor of Technology in Computer Science",
    duration: "Aug 2020 – July 2024",
    score: "70%",
  },
  {
    institution: "Campus School, Pantnagar",
    degree: "Class 12th CBSE",
    duration: "April 2019 - May 2020",
    score: "73.4%",
  },
  {
    institution: "Campus School, Pantnagar",
    degree: "Class 10th CBSE",
    duration: "April 2018 - March 2019",
    score: "77.4%",
  },
];

export const projects = [
  {
    title: "CodeBuddy",
    tech: ["React JS", "Node.js", "Express.js", "Google Gemini AI", "Prism.Js"],
    description: "CodeBuddy is a full-stack AI-driven web application that helps developers review code with the help of Google Gemini AI. It analyzes code snippets, identifies problems, and suggests improvements in real-time.Built using the MERN stack, Gemini 2.0 Flash API, and enhanced with PrismJS for elegant syntax highlighting.",
    date: "September 2023 – October 2023",
    githubLink: "https://github.com/Ayushsingh1312/CodeBuddy", // Replace with actual link
    liveLink: null, // Replace with actual link if available
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1"/>
  },
  {
    title: "Quick Chat",
    tech: ["React JS", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    description: "QuickChat is a full-stack real-time messaging application built with the MERN stack and Socket.io. It allows users to sign up, chat with others in real-time, update profiles, and share images seamlessly.",
    date: "May 2023 – June 2023",
    githubLink: "https://github.com/Ayushsingh1312/quickchat", // Replace with actual link
    liveLink: null,
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1"/>
  },
  {
    title: "Task Management System",
    tech: ["Node.js", "Express.js", "MongoDB"],
    description: "A Task Management System built using Node.js, Express.js, and MongoDB. It supports user authentication (JWT), project management, and task operations like create, update, delete, and priority-based filtering. Designed with a clean RESTful API structure to handle real-world task and project organization logic efficiently.",
    date: "Feb 2023 – March 2023",
    githubLink: "https://github.com/Ayushsingh1312/Task-Management-System",
    liveLink: null,
    category: "Backend Development",
    icon: <FaReact size={24} className="text-accent-1"/>
  },
];

export const skills = {
  languages: [
    { name: "C/C++", icon: <SiCplusplus /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    // { name: "TypeScript", icon: <SiTypescript /> }, // Add if you use it
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "SQL", icon: <FaDatabase /> },
  ],
  frameworksAndLibraries: [
    { name: "React JS", icon: <FaReact /> },
    { name: "Node JS", icon: <FaNodeJs /> },
    { name: "Express JS", icon: <SiExpress /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> }, // You are using it!
    
  ],
  toolsAndPlatforms: [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "VS Code", icon: <FaCode /> }, // Or a more specific icon
    { name: "Postman", icon: <FaCode /> }, // Placeholder icon
  ],
  coreFundamentals: [
    "Problem Solving",
    "Data Structures",
    "Algorithms",
    "OOPs",
    "Operating Systems",
    "Agile Methodologies",
  ]
};


export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: { url: `mailto:${personalInfo.email}`, icon: <FaEnvelope size={24} /> },
  // phone: { url: `tel:${personalInfo.phone}`, icon: <FaPhone size={24} /> }, // Optional
};