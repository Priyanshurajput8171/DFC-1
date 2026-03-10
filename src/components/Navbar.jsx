import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";


const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About Us", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Social Media Links", href: "#contact"},
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 background", 
        isScrolled ? "px-20 bg-background/80 backdrop-blur-md shadow-xs" : "px-10"
      )}
    >
      <div className="container flex items-center justify-between mx-auto">
        <a
          className="text-2xl font-bold text-primary flex items-center"
          href="#hero"
        >
        <img 
           src="/images/DFC-LOGO.png"
           alt="Logo"
           className="h-20 w-auto object-contain hover:scale-105 transition-transform duration-300"
        />
        </a>

        {/* desktop */}
        <div className="hidden md:flex space-x-8 font-bold text-primary text-xl">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 font-bold"
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* mobile */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden text-foreground p-2 z-50"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl font-bold text-primary">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;