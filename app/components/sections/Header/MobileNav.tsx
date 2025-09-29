import { motion, AnimatePresence } from "framer-motion";

interface MobileNavProps {
  isOpen: boolean;
  items: { name: string; href: string }[];
  closeMenu: () => void;
}

const MobileNav = ({ isOpen, items, closeMenu }: MobileNavProps) => {
  const handleClick = (href: string) => {
    closeMenu();
    setTimeout(() => {
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: "smooth" });
    }, 300); // под твой transition={{ duration: 0.3 }}
  };

  return (
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
              <button
                key={item.name}
                onClick={() => handleClick(item.href)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-fuchsia-700 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
