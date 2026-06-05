import { motion } from "framer-motion";
export default function Skills() {
  const groups = {
    Frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Bootstrap"],

    Programming: ["Python", "Java", "C"],

    Tools: ["Git", "GitHub", "VS Code", "UiPath Studio"],
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="skills"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">Skills</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(groups).map(([title, items]) => (
            <div
              key={title}
              className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-all"
            >
              <h3 className="text-xl font-bold mb-5">{title}</h3>

              <div className="flex flex-wrap gap-3">
                {items.map((item) => (
                  <span
                    key={item}
                    className="bg-[#D2C1B6] px-3 py-2 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
