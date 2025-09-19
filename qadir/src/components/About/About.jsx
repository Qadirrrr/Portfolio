"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGraduationCap,
  FaLaptopCode,
  FaBootstrap,
  FaPython,
  FaWordpress,
  FaSmile,
  FaProjectDiagram,
  FaRegClock,
  FaTools,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiJavascript } from "react-icons/si";

// ✅ Skills Data
const skills = [
  { id: 1, name: "React", icon: <FaReact className="text-[#61DBFB]" /> },
  { id: 2, name: "Node.js", icon: <FaNodeJs className="text-[#68A063]" /> },
  { id: 3, name: "TailwindCSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
  { id: 4, name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { id: 5, name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { id: 6, name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" /> },
  { id: 7, name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
  { id: 8, name: "WordPress", icon: <FaWordpress className="text-[#21759B]" /> },
];

// Education Data
const education = [
  { id: 1, degree: "Bachelor of Computer Science", school: "University Of Wah", year: "2021 - 2025" },
  { id: 2, degree: "Higher Secondary (Science)", school: "FG Degree College For Men, Wah Cantt", year: "2019 - 2021" },
  { id: 3, degree: "Secondary School", school: "Askari Public Secondary School, Ahmedal", year: "2017 - 2019" },
];

// Experience Data
const experience = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Wah Industries Limited (WIL)",
    year: "July 2024 - Oct 2024",
    desc: "Worked on HTML/CSS, Bootstrap, and building responsive UIs.",
  },
];

// ✅ Stats Data
const stats = [
  { id: 1, label: "Happy Clients", value: "5+", icon: <FaSmile className="text-yellow-400" /> },
  { id: 2, label: "Projects Completed", value: "10+", icon: <FaProjectDiagram className="text-cyan-400" /> },
  { id: 3, label: "Years Experience", value: "2+", icon: <FaRegClock className="text-indigo-400" /> },
  { id: 4, label: "Technologies Mastered", value: "15+", icon: <FaTools className="text-emerald-400" /> },
];

export default function About() {
  const [active, setActive] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="relative py-20 px-6 bg-slate-950 text-slate-200">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-400/10 via-cyan-400/10 to-blue-400/10" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-400 rounded-full blur-3xl opacity-20 animate-pulse" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
        >
          About <span className="text-white">Me</span>
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center max-w-3xl mx-auto text-lg leading-relaxed mb-16 text-slate-300"
        >
          I'm a passionate{" "}
          <span className="font-semibold text-cyan-400">Full Stack Developer</span>{" "}
          who loves building modern, responsive, and interactive web applications.
          With experience in{" "}
          <span className="font-semibold text-indigo-400">MERN stack</span> and
          frontend frameworks, I enjoy solving problems and learning new technologies.
        </motion.p>

        {/* ✅ Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center p-6 bg-slate-900/70 backdrop-blur-md rounded-2xl shadow-lg border border-slate-800 hover:shadow-cyan-400/20 transition cursor-pointer"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <h3 className="text-2xl font-semibold text-center mb-6 text-cyan-400">
          <span className="text-white">My</span> Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6 justify-center mb-20">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center p-6 bg-slate-900/70 backdrop-blur-md rounded-2xl shadow-lg border border-slate-800 hover:shadow-cyan-400/20 transition cursor-pointer"
            >
              <div className="text-5xl mb-2">{skill.icon}</div>
              <p className="text-sm font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline Section */}
        <h3 className="text-2xl font-semibold text-center mb-6 text-cyan-400">
          <span className="text-white">My</span> Journey
        </h3>
        <div className="relative border-l-4 border-slate-800 ml-6">
          {/* Education */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10 ml-6"
          >
            <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-slate-900 border-4 border-cyan-400 rounded-full shadow-lg">
              <FaGraduationCap className="text-purple-400" />
            </span>
            <motion.div
              className="p-6 bg-slate-900/80 backdrop-blur-md rounded-2xl shadow-lg border border-slate-800 hover:shadow-cyan-400/20 cursor-pointer transition"
              onClick={() => setActive(active === "education" ? null : "education")}
            >
              <h4 className="text-lg font-semibold text-white">Education</h4>
              <AnimatePresence>
                {active === "education" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 space-y-4"
                  >
                    {education.map((edu) => (
                      <div key={edu.id} className="pl-4 border-l-2 border-cyan-400">
                        <p className="text-slate-200 font-medium">{edu.degree}</p>
                        <p className="text-slate-400 text-sm">{edu.school}</p>
                        <p className="text-slate-500 text-xs">{edu.year}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Experience */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10 ml-6"
          >
            <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-slate-900 border-4 border-cyan-400 rounded-full shadow-lg">
              <FaLaptopCode className="text-indigo-400" />
            </span>
            <motion.div
              className="p-6 bg-slate-900/80 backdrop-blur-md rounded-2xl shadow-lg border border-slate-800 hover:shadow-cyan-400/20 cursor-pointer transition"
              onClick={() => setActive(active === "experience" ? null : "experience")}
            >
              <h4 className="text-lg font-semibold text-white">Experience</h4>
              <AnimatePresence>
                {active === "experience" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 space-y-4"
                  >
                    {experience.map((exp) => (
                      <div key={exp.id} className="pl-4 border-l-2 border-cyan-400">
                        <p className="text-slate-200 font-medium">
                          {exp.role} - {exp.company}
                        </p>
                        <p className="text-slate-400 text-sm">{exp.year}</p>
                        <p className="text-slate-500 text-xs">{exp.desc}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
