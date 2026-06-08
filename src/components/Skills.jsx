import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaJava,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiUipath,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JavaScript", icon: SiJavascript },
    { name: "React", icon: FaReact },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "Java", icon: FaJava },
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "UiPath Studio", icon: SiUipath },
  ];

  return (
    <motion.section
      id="skills"
      className="py-24 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="
                  bg-white/80
                  backdrop-blur-md
                  rounded-3xl
                  shadow-lg
                  p-6
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-4
                  hover:-translate-y-2
                  hover:shadow-2xl
                  transition-all
                  duration-300
                "
              >
                <Icon size={40} className="text-[#456882]" />

                <p className="font-medium text-center">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
