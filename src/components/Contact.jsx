import { motion } from "framer-motion";
export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="contact"
      className="py-24 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>

        <p className="text-lg text-[#456882] mb-8">
          Feel free to reach out and explore my work.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/fahirafarvin"
            target="_blank"
            className="bg-[#1B3C53] text-white px-6 py-3 rounded-full hover:scale-105 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/fahira-farvin-752316322/"
            target="_blank"
            className="bg-[#456882] text-white px-6 py-3 rounded-full hover:scale-105 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:fahirafarvin04@gmail.com"
            className="border border-[#1B3C53] px-6 py-3 rounded-full hover:bg-white transition"
          >
            Email
          </a>
        </div>
      </div>
    </motion.section>
  );
}
