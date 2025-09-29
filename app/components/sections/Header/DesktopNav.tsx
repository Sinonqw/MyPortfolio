import { motion } from "framer-motion";

interface DesktopNavProps {
  items: { name: string; href: string }[];
}

const DesktopNav = ({ items }: DesktopNavProps) => (
  <nav className="hidden md:flex space-x-8">
    {items.map((item, index) => (
      <motion.a
        key={item.name}
        href={item.href}
        className="text-gray-300 hover:text-fuchsia-400 transition-colors duration-200 font-medium"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 * index }}
      >
        {item.name}
      </motion.a>
    ))}
  </nav>
);

export default DesktopNav;
