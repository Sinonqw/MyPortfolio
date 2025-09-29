import React from "react";

interface ProjectImageProps {
  src: string;
  alt: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt }) => (
  <div className="w-full h-48 relative overflow-hidden">
    <img
      src={src}
      alt={alt}
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
);

export default ProjectImage;
