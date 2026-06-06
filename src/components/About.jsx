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
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        <p className="text-lg leading-8 text-[#456882]">
          I am a Bachelor of Computer Applications (BCA) student with a strong
          interest in software development, web technologies, and
          problem-solving. I have hands-on experience building responsive web
          applications using React, JavaScript, Tailwind CSS, and modern
          development tools. Through academic projects, internships, and
          continuous learning, I am developing the technical and analytical
          skills required to create efficient, user-focused software solutions.
        </p>
      </div>
    </motion.section>
  );
}
