"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://portfolio0-zeta.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (err) {
      setStatus("❌ Error connecting to server.");
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: "Address",
      info: "Wah Cantt, Rawalpindi, Pakistan",
    },
    {
      icon: <FaEnvelope size={24} />,
      title: "Email",
      info: "gq5735741@gmail.com",
    },
    {
      icon: <FaPhoneAlt size={24} />,
      title: "Phone",
      info: "+92 314 5022716",
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/ghulam-qadirr/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/Qadirrrr",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <h3 className="text-3xl font-bold mb-12 bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent text-center">
        Contact <span className="text-white">Me</span>
      </h3>

      <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto items-stretch">
        {/* Contact Form (LEFT SIDE) */}
        <motion.div
          className="flex-1 basis-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <form
            onSubmit={handleSubmit}
            className="grid gap-5 bg-slate-900/70 p-8 rounded-2xl shadow-xl border border-slate-800 h-full"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="p-4 rounded-xl bg-slate-800 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition w-full"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="p-4 rounded-xl bg-slate-800 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition w-full"
            />
            <textarea
              rows="6"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="p-4 rounded-xl bg-slate-800 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition w-full"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-400 text-slate-950 py-3 rounded-xl font-semibold hover:opacity-90 transition w-full shadow-lg"
            >
              Send Message
            </button>
            {status && (
              <p className="text-center mt-2 text-sm text-slate-300">{status}</p>
            )}
          </form>
        </motion.div>

        {/* Contact Info + Social Links (RIGHT SIDE) */}
        <motion.div
          className="flex-1 basis-1/2 flex flex-col justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Cards */}
          <div className="flex flex-col gap-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-slate-900/70 p-5 rounded-2xl shadow-lg border border-slate-800 hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-400 p-4 rounded-full text-white flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <h4 className="text-lg font-bold mb-1 bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {item.title}
                  </h4>
                  <p className="text-slate-300">{item.info}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-10 text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4 bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Connect With Me
            </h4>
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.target}
                  rel={social.rel}
                  className="bg-slate-900 p-3 rounded-full text-cyan-400 hover:bg-slate-800 hover:scale-110 transition shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
