import { motion, AnimatePresence } from "framer-motion";

interface MobileNavProps {
  isOpen: boolean;
  items: { name: string; href: string }[];
  closeMenu: () => void;
}

const MobileNav = ({ isOpen, items, closeMenu }: MobileNavProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.nav
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden bg-gray-800 border-t border-fuchsia-500/30"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-fuchsia-700 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.nav>
    )}
  </AnimatePresence>
);

export default MobileNav;
