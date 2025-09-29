import React from "react";

interface ProjectInfoProps {
  title: string;
  description: string;
  technologies: string;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ title, description, technologies }) => (
  <>
    <h3 className="text-2xl font-bold text-indigo-400 mb-2">{title}</h3>
    <p className="text-gray-400 mb-4 flex-grow">{description}</p>
    <p className="text-sm text-gray-500 mb-4">
      <strong className="text-indigo-300">Technologies:</strong> {technologies}
    </p>
  </>
);

export default ProjectInfo;
