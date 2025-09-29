import { motion } from "framer-motion";

const Logo = () => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <a 
      href="#home" 
      className="text-2xl font-bold text-cyan-400 drop-shadow-[0_0_2px_rgba(47,219,255,0.7)]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {"<GOSHA />"}
    </a>
  </motion.div>
);

export default Logo;
