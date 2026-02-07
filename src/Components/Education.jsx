import React from "react";

const Education = () => {
  const eduData = [
    { title: "BS Software Engineering", inst: "Virtual University of Pakistan", date: "2022 – Present", desc: "7th Semester | CGPA: 3.34" },
    { title: "Intermediate (DAE)", inst: "Board of Technical Education", date: "2018 – 2021", desc: "Achieved 85%" },
    { title: "Matriculation (Science)", inst: "BISE Sahiwal", date: "2016 – 2018", desc: "Achieved 73%" }
  ];

  return (
    <section id="education" className="py-24 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Education</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {eduData.map((edu, i) => (
            <div key={i} className="bg-[#1e293b] p-8 rounded-[2rem] border border-slate-700 hover:border-blue-500 transition-all shadow-xl">
             <h3 className="text-xl font-bold text-white mb-2">{edu.title}</h3>
              <p className="text-blue-400 text-sm mb-4">{edu.inst} | {edu.date}</p>
              <p className="text-slate-400 font-medium">{edu.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;