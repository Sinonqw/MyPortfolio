import { motion } from "framer-motion";

const HeroTitle = () => (
  <motion.h1
    className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
  >
    <span className="text-indigo-400">Heorhii</span>
  </motion.h1>
);

export default HeroTitle;
