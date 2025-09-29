import { useState, useMemo } from "react";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileMenuButton from "./MobileMenuButton";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = useMemo(() => [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ], []);

  return (
    <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-md shadow-2xl shadow-gray-950/50 border-b border-cyan-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <DesktopNav items={navItems} />
          <MobileMenuButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
        </div>
      </div>
      <MobileNav isOpen={isOpen} items={navItems} closeMenu={() => setIsOpen(false)} />
    </header>
  );
};

export default Header;
