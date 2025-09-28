import React from "react";
import { motion } from "framer-motion";

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
      <div className="w-full h-48 relative overflow-hidden">
        <img
          src={project.imagePath}
          alt={project.imageText}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://placehold.co/600x400/374151/d1d5db?text=Image+Placeholder";
          }}
        />
        <div className="absolute top-2 left-2 flex space-x-1 z-10">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-indigo-400 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
        <p className="text-sm text-gray-500 mb-4">
          <strong className="text-indigo-300">Technologies:</strong>{" "}
          {project.technologies}
        </p>

        <div className="flex space-x-4 mt-auto">
          <motion.a
            href={project.vercelLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-indigo-400 flex items-center transition-colors"
            whileHover={{ x: 3 }}
          >
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
            Demo
          </motion.a>

          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-indigo-400 flex items-center transition-colors"
            whileHover={{ x: 3 }}
          >
            <svg
              className="w-5 h-5 mr-1"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.417 2.865 8.176 6.83 9.49.5.092.682-.217.682-.483 0-.237-.008-.827-.014-1.624-2.784.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.46-1.11-1.46-.908-.62.069-.608.069-.608 1.004.072 1.532 1.03 1.532 1.03.892 1.528 2.342 1.085 2.91.829.091-.643.35-1.085.67-1.336-2.227-.253-4.568-1.114-4.568-4.943 0-1.09.39-1.984 1.03-2.686-.103-.253-.448-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.563 9.563 0 0112 6.866c.85.006 1.705.115 2.504.337 1.91-1.296 2.75-1.026 2.75-1.026.546 1.378.201 2.397.098 2.65.64.702 1.03 1.596 1.03 2.686 0 3.837-2.343 4.686-4.576 4.935.359.309.678.922.678 1.864 0 1.343-.012 2.428-.012 2.75 0 .267.18.58.688.484C21.137 20.198 24 16.43 24 12.017 24 6.484 19.522 2 14 2h-2z"
                clipRule="evenodd"
              ></path>
            </svg>
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;