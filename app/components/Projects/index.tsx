import { motion } from "framer-motion";
import projectsData from "@/data/ProjectsData";
import AnimatedSection from "../ui/AnimatedSection";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <AnimatedSection id="projects" className="bg-gray-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-5xl font-extrabold text-center text-white mb-16 pb-3 inline-block mx-auto tracking-wide border-b-4 border-fuchsia-400"
        >
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;
