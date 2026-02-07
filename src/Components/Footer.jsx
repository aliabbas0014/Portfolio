import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#0f172a]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Let's Build Something Great</h2>
        <p className="text-slate-400 mb-12 max-w-lg mx-auto">Available for freelance opportunities and full-time roles. Let's connect and discuss your next project.</p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700 flex items-center justify-center gap-4">
            <FaEnvelope className="text-blue-500 text-2xl" />
            <a href="mailto:aliabbas001472@gmail.com" className="text-slate-300 hover:text-white transition-colors">aliabbas001472@gmail.com</a>
          </div>
          <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700 flex items-center justify-center gap-4">
            <FaMapMarkerAlt className="text-emerald-500 text-2xl" />
            <span className="text-slate-300">Sahiwal, Punjab, Pakistan</span>
          </div>
        </div>

        <div className="flex justify-center gap-6 mb-12">
          <a href="https://github.com/aliabbas0014" target="_blank" className="text-3xl text-slate-400 hover:text-white transition-transform hover:-translate-y-1"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/ali-abbas-701984344" target="_blank" className="text-3xl text-slate-400 hover:text-blue-500 transition-transform hover:-translate-y-1"><FaLinkedin /></a>
        </div>
      </div>
      
      {/* Footer Included Inside Contact for seamless look */}
      <footer className="border-t border-slate-800 pt-12 text-center text-slate-500 text-sm">
        <p>© 2026 Ali Abbas. Built with React & Tailwind CSS.</p>
      </footer>
    </section>
  );
};

export default Contact;