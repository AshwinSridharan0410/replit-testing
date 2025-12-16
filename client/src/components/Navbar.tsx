import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => scrollToSection(e, "#hero")}
          className="text-2xl font-heading font-bold tracking-tighter hover:text-primary transition-colors"
        >
          ashwin<span className="text-primary">.sre</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-4 ml-4 border-l border-white/10 pl-6">
            <a href="https://github.com/ashwinsridharan0410" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ashwin-sridharan-b8474520a" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <Button variant="outline" size="sm" className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary">
              <FileText className="mr-2 h-4 w-4" /> Resume
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-6"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-lg font-medium text-foreground hover:text-primary"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-6 pt-4 border-t border-white/10">
              <a href="https://github.com/ashwinsridharan0410" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ashwin-sridharan-b8474520a" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="mailto:ashwinsri04@gmail.com" className="text-muted-foreground hover:text-white">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
