import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

// --- Mockup Components and Types (Assumed imports for self-contained file) ---

// Интерфейс для AnimatedSection
interface AnimatedSectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

// Простой мок-компонент AnimatedSection для демонстрации
const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  id,
  className = "",
}) => {
  const ref = useRef(null);
  // Анимация срабатывает один раз, когда элемент появляется в зоне видимости
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


const About = () => {
  return (
    <AnimatedSection id="about" className="bg-gray-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок: Neon Accent (Cyan) */}
        <h2
          className="text-5xl font-extrabold text-center text-white mb-16 pb-3 inline-block mx-auto tracking-wide 
                     border-b-4 border-cyan-400"
          // Имитация шрифта Montserrat для заголовка
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          {/* Profile photo: Dark background with Neon Glow (Fuchsia) */}
          <motion.div
            className="w-48 h-48 sm:w-64 sm:h-64 flex-shrink-0 mb-8 lg:mb-0 rounded-full 
                       bg-gray-950 border-4 border-fuchsia-500 overflow-hidden shadow-2xl"
            // Добавляем эффект неонового свечения
            style={{
              boxShadow:
                "0 0 30px rgba(232, 80, 211, 0.7), inset 0 0 10px rgba(232, 80, 211, 0.5)",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* Использование заглушки, поскольку внешние изображения недоступны */}
            <img
              // Предполагаемый путь к изображению
              src="/Me.jpeg"
              alt="Profile"
              className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-500"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/256x256/27272a/f472b6?text=GOSHA";
              }}
            />
          </motion.div>

          {/* Text Content: Clean and Readable (Inter Font) */}
          <div
            className="text-gray-300 space-y-6 text-lg"
            // Имитация шрифта Inter для основного текста
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <p>
              Hi! I'm Gosha, a Frontend Developer currently studying in Poland.
              I love coding interactive websites and building projects that
              combine **creativity and functionality**.
            </p>
            <p>
              My goal is to **master frontend development**, create polished
              projects, and eventually take on freelance and real-world
              projects. I constantly learn new technologies and improve my
              skills to deliver **high-quality work**.
            </p>
            <p>
              {/* Key Skills: Secondary Neon Accent (Fuchsia) */}
              <strong className="text-fuchsia-400 drop-shadow-[0_0_2px_rgba(232,80,211,0.5)]">
                Hard skills:
              </strong>{" "}
              JavaScript, TypeScript, React, Next.js, Tailwind CSS, MongoDB.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
