import { motion } from "framer-motion";
export default function Certificates() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-lg">
            <h3 className="font-semibold">UiPath Studio RPA</h3>

            <p className="text-[#456882] mt-2">Skywin Academy</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="font-semibold">Frontend React Development</h3>

            <p className="text-[#456882] mt-2">Qryptex</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="font-semibold">More Certifications</h3>

            <p className="text-[#456882] mt-2">Coming Soon</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
