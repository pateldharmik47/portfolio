import { TypeAnimation } from "react-type-animation";
import { about } from "../constants/data";

export default function Hero() {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center text-center min-h-[80vh] md:min-h-[90vh] overflow-hidden">
      {/* Floating blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-indigo-400/30 blur-3xl animate-pulse"></div>
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-cyan-400/30 blur-3xl animate-pulse"></div>

      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
        {about.name}
      </h1>
      <div className="mt-3 text-xl md:text-2xl">
        <TypeAnimation
          sequence={[
            about.role, 2000,
            "Software Developer", 1500,
            "Open Source Contributor", 1500,
            "UI Performance Enthusiast", 1500,
          ]}
          speed={45}
          repeat={Infinity}
        />
      </div>
      <p className="mt-5 max-w-2xl text-gray-600 dark:text-gray-300 px-6">
        {about.description}
      </p>
      <div className="mt-8 flex gap-3">
        <a href="#projects" className="rounded-2xl px-5 py-3 bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow-soft hover:opacity-90 transition">
          View Projects
        </a>
        <a href="#contact" className="rounded-2xl px-5 py-3 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
          Contact Me
        </a>
      </div>
    </section>
  );
}
