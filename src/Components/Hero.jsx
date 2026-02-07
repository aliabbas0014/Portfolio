import React from "react";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex justify-center items-center bg-[#0f172a] text-white">
      <div className="bg-[#1e293b] w-full max-w-6xl p-8 rounded-[2rem] border border-slate-700 flex flex-col md:flex-row items-center gap-10 shadow-2xl lg:px-16 transition-all duration-700 hover:border-slate-500">
        
        {/* Left Side (Text) */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Ali Abbas</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mt-4 text-slate-300">
            Front-End Developer
          </h2>
          <p className="text-slate-400 mt-6 leading-relaxed max-w-md">
            Crafting immersive, high-performance web experiences with modern front-end architectures and a keen eye for UI/UX detail.
          </p>
          <div className="flex gap-4 mt-8 justify-center md:justify-start">
            <a href="https://drive.google.com/file/d/1icsINotZwgkdR391mr6gO5UPxZJqFeiV/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-900/20">
                View Resume
              </button>
            </a>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="relative flex-1 flex justify-center order-1 md:order-2">
          <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full p-1.5 bg-gradient-to-tr from-blue-500 via-purple-500 to-emerald-500 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
            <img
              src="images/my.jpg"
              alt="Ali Abbas"
              className="w-full h-full object-cover rounded-full border-4 border-[#1e293b]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;