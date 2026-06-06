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
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-xl font-semibold">UiPath Studio RPA</h3>

            <p className="text-[#456882] mt-2 mb-4">Skywin Academy</p>
            <p className="text-[#456882] leading-relaxed">
              Designed and developed a Supplier Record Creation Automation
              Workflow using UiPath Studio to automate the transfer of supplier
              data from Excel spreadsheets to a web-based form, reducing manual
              effort, minimizing data-entry errors, and improving process
              efficiency.
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              <span className="bg-[#D2C1B6] px-3 py-1 rounded-full text-sm">
                UiPath Studio
              </span>

              <span className="bg-[#D2C1B6] px-3 py-1 rounded-full text-sm">
                RPA
              </span>

              <span className="bg-[#D2C1B6] px-3 py-1 rounded-full text-sm">
                Excel Automation
              </span>

              <span className="bg-[#D2C1B6] px-3 py-1 rounded-full text-sm">
                DataTables
              </span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-xl font-semibold">
              Frontend React Development
            </h3>

            <a
              href="https://qryptex.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#456882] mt-2 mb-4 inline-block hover:underline"
            >
              Qryptex
            </a>

            <p className="text-[#456882] leading-relaxed">
              Completed hands-on training in modern frontend development using
              React and Tailwind CSS. Gained practical experience in project
              setup, component-based architecture, state management, responsive
              design, GitHub version control, deployment workflows, and building
              interactive user interfaces using industry-standard development
              practices.
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {[
                "React",
                "Tailwind CSS",
                "JavaScript",
                "GitHub",
                "Responsive Design",
                "Component Architecture",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-[#D2C1B6] px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
