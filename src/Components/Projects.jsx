import React from "react";
import { FaShoppingCart, FaBriefcase, FaKeyboard, FaQuestionCircle, FaWrench, FaTshirt } from "react-icons/fa";

const projects = [
  {
    title: "MSGM Clothing Brand",
    description: "Full-stack clothing platform with PHP/MySQL backend and secure checkout.",
    icon: <FaTshirt className="text-purple-400" />,
    link: "https://msgmclothing.infinityfreeapp.com/?i=2",
    tag: "Full-Stack"
  },
  {
    title: "Sneakers Showcase",
    description: "Modern React.js interface with Tailwind CSS for high-end sneakers.",
    icon: <FaShoppingCart className="text-blue-400" />,
    link: "https://aliabbas0014.github.io/sneakers-website/",
    tag: "Front-End"
  },
  {
    title: "Job Listing App",
    description: "Dynamic job board with real-time filtering and responsive state management.",
    icon: <FaBriefcase className="text-emerald-400" />,
    link: "https://aliabbas0014.github.io/job-listing-app/",
    tag: "React/Logic"
  },
  {
    title: "Typing Software",
    description: "Speed typing tool with real-time feedback and clean UI.",
    icon: <FaKeyboard className="text-amber-400" />,
    link: "https://aliabbas0014.github.io/typing-software/",
    tag: "JavaScript"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#0f172a] overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group bg-[#1e293b] p-8 rounded-3xl border border-slate-700 hover:border-blue-500 transition-all duration-700 shadow-xl transform
                ${index % 2 === 0 ? 'hover:translate-x-2' : 'hover:-translate-x-2'} hover:-translate-y-2`}
            >
              <div className="text-5xl mb-6">{project.icon}</div>
              <span className="text-[10px] font-bold uppercase tracking-widest bg-slate-800 text-blue-400 px-3 py-1 rounded-full border border-blue-900/50">
                {project.tag}
              </span>
              <h3 className="text-2xl font-bold text-white mt-4 tracking-tight">{project.title}</h3>
              <p className="text-slate-400 mt-3 text-sm leading-relaxed">
                {project.description}
              </p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-8 inline-flex items-center text-blue-400 font-bold hover:text-blue-300 group-hover:gap-3 transition-all"
              >
                View Project <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;