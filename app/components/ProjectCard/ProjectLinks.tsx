import { motion } from "framer-motion";

interface ProjectLinksProps {
  vercelLink: string;
  githubLink: string;
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({ vercelLink, githubLink }) => (
  <div className="flex space-x-4 mt-auto">
    <motion.a
      href={vercelLink}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-indigo-400 flex items-center transition-colors"
      whileHover={{ x: 3 }}
    >
      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
      </svg>
      Demo
    </motion.a>

    <motion.a
      href={githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-indigo-400 flex items-center transition-colors"
      whileHover={{ x: 3 }}
    >
      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.417 2.865 8.176 6.83 9.49.5.092.682-.217.682-.483 0-.237-.008-.827-.014-1.624-2.784.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.46-1.11-1.46-.908-.62.069-.608.069-.608 1.004.072 1.532 1.03 1.532 1.03.892 1.528 2.342 1.085 2.91.829.091-.643.35-1.085.67-1.336-2.227-.253-4.568-1.114-4.568-4.943 0-1.09.39-1.984 1.03-2.686-.103-.253-.448-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.563 9.563 0 0112 6.866c.85.006 1.705.115 2.504.337 1.91-1.296 2.75-1.026 2.75-1.026.546 1.378.201 2.397.098 2.65.64.702 1.03 1.596 1.03 2.686 0 3.837-2.343 4.686-4.576 4.935.359.309.678.922.678 1.864 0 1.343-.012 2.428-.012 2.75 0 .267.18.58.688.484C21.137 20.198 24 16.43 24 12.017 24 6.484 19.522 2 14 2h-2z"
          clipRule="evenodd"
        ></path>
      </svg>
      GitHub
    </motion.a>
  </div>
);

export default ProjectLinks;
