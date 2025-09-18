import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
export default function App() {
  return (
    
    <div className="bg-slate-950 text-slate-100 font-sans">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
