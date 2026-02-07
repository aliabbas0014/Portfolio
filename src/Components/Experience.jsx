import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center md:text-left">Experience</h2>
        
        <div className="relative border-l-2 border-slate-700 ml-4 md:ml-0 md:pl-8 space-y-12">
          {/* Main Experience */}
          <div className="relative pl-8">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
            <h3 className="text-2xl font-bold text-white">Freelance Front-End Developer</h3>
            <p className="text-blue-400 font-medium mb-4">April 2025 – August 2025</p>
            <div className="bg-[#1e293b] p-6 rounded-3xl border border-slate-700">
              <ul className="space-y-3 text-slate-400">
                <li className="flex gap-2"><span>•</span> Built high-performance e-commerce interfaces with a focus on UI/UX.</li>
                <li className="flex gap-2"><span>•</span> Optimized web performance and ensured mobile-first responsiveness.</li>
                <li className="flex gap-2"><span>•</span> Collaborated on translating complex designs into clean React.js code.</li>
              </ul>
            </div>
          </div>

          {/* Additional Experience */}
          <div className="relative pl-8">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
            <h3 className="text-2xl font-bold text-white">Open Source & Personal Projects</h3>
            <div className="bg-[#1e293b] p-6 rounded-3xl border border-slate-700 mt-4">
             <p className="text-slate-400 italic">Delivered multiple academic and personal projects with a focus on scalability and usability.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;