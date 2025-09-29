import React from "react";
import AnimatedSectionAbout from "../ui/AnimatedSectionAbout";
import { motion } from "framer-motion";

const About = () => {
  const imageAnimation = {
    initial: { opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.7, delay: 0.2 },
    viewport: { once: true, amount: 0.5 },
  };

  const imageShadowStyle = {
    boxShadow:
      "0 0 30px rgba(232, 80, 211, 0.7), inset 0 0 10px rgba(232, 80, 211, 0.5)",
  };

  return (
    <AnimatedSectionAbout id="about" className="bg-gray-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl font-extrabold text-center text-white mb-16 pb-3 inline-block mx-auto tracking-wide 
                     border-b-4 border-cyan-400"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          <motion.div
            className="w-48 h-48 sm:w-64 sm:h-64 flex-shrink-0 mb-8 lg:mb-0 rounded-full 
                       bg-gray-950 border-4 border-fuchsia-500 overflow-hidden shadow-2xl"
            style={imageShadowStyle}
            {...imageAnimation}
          >
            <img
              src="/Me.jpeg"
              alt="Profile"
              className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-500"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/256x256/27272a/f472b6?text=GOSHA";
              }}
            />
          </motion.div>

          <div
            className="text-gray-300 space-y-6 text-lg"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <p>
              Hi I am Gosha a Frontend Developer currently studying in Poland. I
              enjoy creating interactive websites and building projects that
              combine creativity with functionality.
            </p>
            <p>
              My goal is to become highly skilled in frontend development make
              polished projects and eventually work on freelance and real world
              projects. I am always learning new technologies and improving my
              skills to deliver high quality work.
            </p>
            <p>
              <strong className="text-fuchsia-400 drop-shadow-[0_0_2px_rgba(232,80,211,0.5)]">
                Hard skills:
              </strong>{" "}
              JavaScript TypeScript React Next.js Tailwind CSS MongoDB
            </p>
          </div>
        </div>
      </div>
    </AnimatedSectionAbout>
  );
};

export default About;
