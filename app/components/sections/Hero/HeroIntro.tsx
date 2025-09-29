import { motion } from "framer-motion";

const HeroIntro = () => (
  <motion.p
    className="text-xl text-indigo-400 mb-4 font-mono"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    Hi, my name is...
  </motion.p>
);

export default HeroIntro;
