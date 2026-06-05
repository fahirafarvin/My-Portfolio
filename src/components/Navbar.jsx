import { Menu } from "lucide-react";
import { motion } from "framer-motion";
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/60 border-b border-[#D2C1B6]/40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">Fahira Farvin</h1>

        <div className="hidden md:flex gap-8">
          <a href="#about">About</a>
          <a href="#internships">Internships</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a href="/resume.pdf" target="_blank">
            Resume
          </a>
        </div>

        <Menu className="md:hidden" />
      </div>
    </nav>
  );
}
