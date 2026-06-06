import { motion } from "framer-motion";
export default function Internships() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="internships"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Internships</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">
              Frontend React Development
            </h3>

            <a
              href="https://qryptex.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#456882] hover:underline"
            >
              Qryptex
            </a>

            <p className="text-[#456882]">
              Worked on React applications, reusable components, responsive UI
              design, and modern frontend development practices.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">UiPath Studio RPA</h3>

            <p className="text-[#456882] mb-4">Skywin Academy</p>

            <p className="text-[#456882]">
              Built automation workflows using UiPath Studio and learned Robotic
              Process Automation concepts.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
