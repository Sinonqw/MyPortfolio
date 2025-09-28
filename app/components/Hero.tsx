import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-24 pb-32 bg-gray-900 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.p
          className="text-xl text-indigo-400 mb-4 font-mono"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hi, my name is...
        </motion.p>
        <motion.h1
          className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="text-indigo-400">Heorhii</span>
        </motion.h1>
        <motion.p
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          I am a Full-Stack developer building modern, responsive, and
          high-performance web applications with a focus on clean code and user
          experience.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a href="#contact">
            <AnimatedButton className="bg-indigo-600 text-white hover:bg-indigo-700">
              Contact me
            </AnimatedButton>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
