import { motion } from "framer-motion";
import AnimatedButton from "../../ui/AnimatedButton";

const HeroCTA = () => (
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
);

export default HeroCTA;
