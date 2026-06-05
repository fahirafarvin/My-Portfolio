import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="about"
      className="py-28 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-4xl font-bold mb-6">About Me</h2>

          <p className="text-lg leading-relaxed text-[#456882]">
            I am a Bachelor of Computer Applications student passionate about
            web development, programming, and problem solving. I enjoy
            transforming ideas into interactive digital experiences while
            continuously expanding my skills in modern technologies.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-lg">
          <h3 className="font-bold text-2xl mb-4">Quick Info</h3>

          <div className="space-y-3">
            <p>📍 Nagapattinam, Tamil Nadu</p>
            <p>🎓 BCA Student</p>
            <p>💻 Web Development</p>
            <p>🎨 UI Design</p>
            <p>🚀 Problem Solving</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
