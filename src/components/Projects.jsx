import { motion } from "framer-motion";
export default function Projects() {
  const projects = [
    {
      title: "Diet Planner",
      description:
        "A responsive web application that helps users plan and organize healthy meal routines.",
    },
    {
      title: "Bootstrap Components",
      description:
        "A collection of reusable Bootstrap UI components for faster development.",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio showcasing projects, skills, and experience.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="projects"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Other Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
bg-white
p-6
rounded-3xl
shadow-lg
hover:-translate-y-2
hover:shadow-2xl
transition-all
duration-300
"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

              <p className="text-[#456882]">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
