import { motion } from "framer-motion";
export default function FeaturedProject() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-[#456882] mb-2">Featured Project</p>

        <h2 className="text-5xl font-bold mb-2">Ascendia</h2>

        <p className="text-[#456882] mb-8">Currently In Development</p>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden h-[320px]">
            <img
              src={`${import.meta.env.BASE_URL}Ascendia.png`}
              alt="Ascendia Screenshot"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <p className="text-[#456882] leading-relaxed mb-6">
              A dark-academia inspired coding adventure where players solve
              escape-room puzzles by writing real HTML elements that directly
              affect the game world.
            </p>

            <div className="mb-6">
              <h3 className="font-bold mb-2">Challenge</h3>

              <p className="text-[#456882]">
                Learning platforms often feel repetitive and disconnected from
                real interaction.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-bold mb-2">Solution</h3>

              <p className="text-[#456882]">
                Transform coding concepts into interactive escape-room puzzles
                where code changes the environment in real time.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {["React", "Tailwind", "SVG", "JavaScript", "Lucide"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="bg-[#D2C1B6] px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
            <a
              href="https://github.com/fahirafarvin/Learning-Game"
              target="_blank"
              className="inline-block mt-6 bg-[#1B3C53] text-white px-6 py-3 rounded-full hover:scale-105 transition"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
