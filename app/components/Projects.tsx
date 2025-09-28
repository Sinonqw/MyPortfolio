import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import projectsData from "@/data/ProjectsData";

// Интерфейс для данных проекта
interface Project {
  id: number;
  imageText: string;
  title: string;
  description: string;
  technologies: string;
  vercelLink: string;
  githubLink: string;
  imagePath: string; // Добавлено для динамических изображений
}

// Интерфейс для AnimatedSection
interface AnimatedSectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

// Мок-компонент AnimatedSection (для демонстрации анимации при прокрутке)
const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  id,
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`py-24 ${className}`}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.section>
  );
};

// Мок-компонент ProjectCard, стилизованный под Neon (Fuchsia & Cyan)
interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden flex flex-col h-full group border border-gray-700 hover:border-cyan-500 transition-all duration-300"
      whileHover={{
        scale: 1.03,
        boxShadow: "0 10px 35px rgba(47, 219, 255, 0.4)", // Cyan Glow on hover
      }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      {/* Dynamic Screenshot / Placeholder */}
      <div className="w-full h-48 relative overflow-hidden">
        <img
          src={project.imagePath}
          alt={project.imageText}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://placehold.co/600x400/374151/d1d5db?text=Image+Placeholder";
          }}
        />
        {/* Window buttons for style */}
        <div className="absolute top-3 left-3 flex space-x-2 z-10">
          <div className="w-3.5 h-3.5 bg-red-500 rounded-full"></div>
          <div className="w-3.5 h-3.5 bg-yellow-500 rounded-full"></div>
          <div className="w-3.5 h-3.5 bg-green-500 rounded-full"></div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3
          className="text-2xl font-bold text-cyan-400 mb-2 drop-shadow-[0_0_2px_rgba(47,219,255,0.3)]"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          {project.title}
        </h3>
        <p
          className="text-gray-400 mb-4 flex-grow"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {project.description}
        </p>
        <p
          className="text-sm text-gray-500 mb-4"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <strong className="text-fuchsia-400 drop-shadow-[0_0_2px_rgba(232,80,211,0.5)]">
            Tech Stack:
          </strong>{" "}
          {project.technologies}
        </p>

        {/* Links */}
        <div className="flex space-x-6 mt-auto">
          <motion.a
            href={project.vercelLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fuchsia-400 hover:text-fuchsia-200 flex items-center transition-colors font-medium text-base"
            whileHover={{ x: 5, color: "#f0abfc" }}
          >
            {/* External Link Icon */}
            <svg
              className="w-5 h-5 mr-2"
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
            className="text-cyan-400 hover:text-cyan-200 flex items-center transition-colors font-medium text-base"
            whileHover={{ x: 5, color: "#67e8f9" }}
          >
            {/* GitHub Icon (simplified SVG) */}
            <svg
              className="w-5 h-5 mr-2"
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

// --- Основной компонент Projects ---

const Projects = () => {
  return (
    <AnimatedSection id="projects" className="bg-gray-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок: Neon Accent (Fuchsia) */}
        <h2
          className="text-5xl font-extrabold text-center text-white mb-16 pb-3 inline-block mx-auto tracking-wide 
                     border-b-4 border-fuchsia-400"
          // Имитация шрифта Montserrat для заголовка
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            // Обертка для анимации Slide-In каждого проекта
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }} // Используем whileInView для появления при прокрутке
              transition={{ duration: 0.6, delay: index * 0.15 }} // Задержка для каскадного эффекта
              viewport={{ once: true }} // Срабатывает только один раз
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
