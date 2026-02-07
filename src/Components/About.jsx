import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0f172a] text-slate-300">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-white mb-6 inline-block border-b-4 border-blue-500 pb-2">About Me</h2>
          <p className="text-lg leading-relaxed text-slate-400">
            I am a <span className="text-white font-semibold">Software Engineering student (7th Semester)</span> with a deep passion for building polished user interfaces. While my primary focus is <span className="text-blue-400">Front-End Development</span>, I have a solid understanding of full-stack workflows.
          </p>
          <p className="mt-4 text-slate-400">
            I specialize in transforming complex requirements into smooth, responsive digital products.
          </p>
          
          <div className="mt-8">
            <h3 className="text-xl font-bold text-white mb-4">Beyond Coding</h3>
            <p className="italic text-slate-500 border-l-2 border-slate-700 pl-4">
              Exploring personal branding, tech trends, and religious studies.
            </p>
          </div>
        </div>

        <div className="bg-[#1e293b] p-8 rounded-3xl border border-slate-700 shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Tech Expertise</h3>
          <div className="space-y-6">
            <div>
              <span className="block text-sm font-bold text-blue-400 uppercase tracking-widest">Primary Focus</span>
              <p className="text-white text-lg">React.js, JavaScript (ES6+), Tailwind CSS, Bootstrap, HTML5/CSS3</p>
            </div>
            <div>
              <span className="block text-sm font-bold text-emerald-400 uppercase tracking-widest">Familiar With</span>
              <p className="text-slate-300">Node.js, Express, MongoDB, PHP, MySQL</p>
            </div>
            <div>
              <span className="block text-sm font-bold text-purple-400 uppercase tracking-widest">Tools</span>
              <p className="text-slate-300">Git, GitHub, VS Code, REST APIs, XAMPP</p>
            </div>
            <div>
  <span className="block text-sm font-bold text-pink-400 uppercase tracking-widest">Creative Suite</span>
  <p className="text-slate-300">Graphic Designing, UI/UX Design, Digital Literacy</p>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;