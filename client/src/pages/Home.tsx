import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Blogs from "@/components/Blogs";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Blogs />
        <Education />
      </main>

      <footer id="contact" className="py-12 border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-heading font-bold mb-6">Let's Connect</h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Open to discussing SRE, DevOps, and Platform Engineering opportunities.
              Currently based in Chennai, Tamil Nadu, India.
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="mailto:ashwinsri04@gmail.com" className="bg-white/5 p-3 rounded-full hover:bg-primary hover:text-black transition-all duration-300">
                <Mail size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ashwin-sridharan-b8474520a" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-primary hover:text-black transition-all duration-300">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/ashwinsridharan0410" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-primary hover:text-black transition-all duration-300">
                <Github size={24} />
              </a>
            </div>
            
            <div className="text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} Ashwin Sridharan. All rights reserved.</p>
              <p className="mt-2 text-xs opacity-50">Built with React, Tailwind & Framer Motion</p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
