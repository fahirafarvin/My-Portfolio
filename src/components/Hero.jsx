import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#D2C1B6]/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#456882]/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[0.3em] text-[#456882] mb-4">
            Aspiring Software Developer
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Fahira
            <br />
            Farvin
          </h1>

          <p className="text-lg text-[#456882] leading-relaxed max-w-lg">
            Passionate about creating interactive web experiences, educational
            games, and user-focused applications that blend creativity with
            technology.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-[#1B3C53] text-white px-6 py-3 rounded-full hover:scale-105 transition"
            >
              Explore My Work
            </a>

            <a
              href="#contact"
              className="border border-[#1B3C53] px-6 py-3 rounded-full hover:bg-white transition"
            >
              Contact Me
            </a>
            <a
              href="https://fahirafarvin.github.io/My-Portfolio/Fahira_Farvin_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#1B3C53] text-white rounded-full hover:bg-[#456882] transition-all duration-300"
            >
              Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-6">Quick Overview</h3>

          <div className="space-y-4">
            <p>🎓 BCA Student</p>
            <p>💻 Frontend Development</p>
            <p>🤖 RPA Enthusiast</p>
            <p>📍 Tamil Nadu, India</p>
            <p>🚀 Open to Opportunities</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
