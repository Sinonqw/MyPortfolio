import { motion } from "framer-motion";
import ProjectImage from "./ProjectImage";
import ProjectInfo from "./ProjectInfo";
import ProjectLinks from "./ProjectLinks";

interface Project {
  imageText: string;
  title: string;
  description: string;
  technologies: string;
  vercelLink: string;
  githubLink: string;
  imagePath: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden flex flex-col h-full group"
      whileHover={{
        scale: 1.03,
        boxShadow: "0 10px 25px rgba(99, 102, 241, 0.4)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <ProjectImage src={project.imagePath} alt={project.imageText} />
      <div className="p-6 flex flex-col flex-grow">
        <ProjectInfo
          title={project.title}
          description={project.description}
          technologies={project.technologies}
        />
        <ProjectLinks
          vercelLink={project.vercelLink}
          githubLink={project.githubLink}
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
