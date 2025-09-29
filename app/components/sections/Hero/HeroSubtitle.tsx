import { motion } from "framer-motion";

const HeroSubtitle = () => (
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
);

export default HeroSubtitle;
