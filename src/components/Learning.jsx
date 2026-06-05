import { motion } from "framer-motion";
export default function Learning() {
  const learning = [
    "Advanced React",
    "Data Structures",
    "Problem Solving",
    "UI/UX Design",
    "RPA Automation",
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Currently Learning</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {learning.map((item) => (
            <span key={item} className="bg-[#D2C1B6] px-5 py-3 rounded-full">
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
