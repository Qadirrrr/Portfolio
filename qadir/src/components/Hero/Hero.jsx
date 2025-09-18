import { motion } from "framer-motion";
import heroImg from "../../assets/hero.jpg"; // replace with your image
import myCV from "../../assets/QadirResume.pdf"; // add your CV file in assets

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-16">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Ghulam Qadir
          </span>
        </h1>
        <p className="mt-6 text-lg text-slate-300 max-w-xl mx-auto md:mx-0">
          A passionate{" "}
          <span className="text-indigo-400 font-semibold">
            Software Developer
          </span>{" "}
          crafting modern web experiences with React, Tailwind, and cutting-edge technologies.
        </p>
        <div className="mt-8 flex gap-4 justify-center md:justify-start">
          {/* Download CV Button */}
         
        <motion.a
          whileHover={{ scale: 1.1 }}
          href={myCV}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 text-white font-semibold shadow-lg"
        >
          Download CV
        </motion.a>
          

          {/* Contact Me Button */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#contact"
            className="px-6 py-3 rounded-full border border-slate-600 hover:bg-slate-800 font-semibold"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>

      {/* Right Content - Blob Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center relative"
      >
        {/* Animated gradient border */}
        <div className="p-[4px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-blobBorder bg-gradient-to-r from-indigo-500 via-pink-500 to-cyan-500">
          <img
            src={heroImg}
            alt="Hero"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-[60%_40%_30%_70%/60%_30%_70%_40%]"
          />
        </div>
      </motion.div>
    </section>
  );
}
