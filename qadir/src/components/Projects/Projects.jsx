import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"; // ✅ Correct import
import MovieImg from "../../assets/Movie.png"; 
import FYPImg from "../../assets/FYP.png";
import RestaurantImg from "../../assets/Restaurant.png";

const projects = [
  {
    id: 1,
    title: "AI-Based Movie Recommendation System",
    desc: "Python, VS Code",
    img: MovieImg,
    github: "https://github.com/Qadirrrr/MoviePoster-recommendation-system.git", 
  },
  {
    id: 2,
    title: "Vision X (Complete Protection Survelliance System)",
    desc: "Python, Yolo, PyQt, Flutter, Firebase",
    img: FYPImg,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7364534996021202944/",
    github: "#",
  },
  {
    id: 3,
    title: "Restaurant Website",
    desc: "React, Tailwindcss, Node.js, Express, MongoDB",
    img: RestaurantImg,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7373260053149044736/",
    github: "#",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <section id="projects" className="bg-slate-950 text-slate-200 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-cyan-400 mb-12 relative inline-block"
        >
          <span className="text-white">My</span> Projects
        </motion.h2>

        {/* Project Cards Grid */}
        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className="relative bg-slate-900 rounded-2xl shadow-lg border border-slate-800 overflow-hidden group flex flex-col"
            >
              {/* Project Image */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Project Info */}
              <div className="p-6 text-left flex flex-col flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-emerald-400 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 font-semibold italic mb-4">
                    {project.desc}
                  </p>
                </div>

                {/* Action Icons */}
                <div className="flex gap-5 mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 transition"
                  >
                    <FaExternalLinkAlt size={24} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition"
                  >
                    <FaGithub size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
