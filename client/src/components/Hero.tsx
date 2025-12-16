import { motion } from "framer-motion";
import { ArrowRight, Terminal, Cloud, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatarImage from "@assets/profile_pic_1765854786187.jpg";
import bgImage from "@assets/generated_images/abstract_dark_tech_background_with_neon_circuits.png";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-mono text-primary font-medium">Google Cloud Certified (PCA, ACE)</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-6">
              Building Reliable <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Infrastructure</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              I'm <span className="text-white font-semibold">Ashwin Sridharan</span>, a Site Reliability Engineer passionate about designing scalable, secure, and intelligent cloud-native systems that don't just run — they thrive.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-background hover:bg-primary/90 font-bold" asChild>
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="mt-12 flex items-center space-x-8 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Terminal size={18} className="text-primary" />
                <span className="text-sm font-mono">DevOps</span>
              </div>
              <div className="flex items-center space-x-2">
                <Cloud size={18} className="text-primary" />
                <span className="text-sm font-mono">Cloud Arch</span>
              </div>
              <div className="flex items-center space-x-2">
                <Server size={18} className="text-primary" />
                <span className="text-sm font-mono">SRE</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-96 h-96 mx-auto">
              {/* Glowing ring behind avatar */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-2 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={avatarImage} 
                  alt="Ashwin Sridharan" 
                  className="rounded-xl w-full h-full object-cover bg-gradient-to-br from-gray-800 to-black"
                />
              </div>
              
              {/* Floating code snippet card */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-[#1e1e1e] p-4 rounded-lg border border-white/10 shadow-xl max-w-xs"
              >
                <div className="flex space-x-1.5 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <code className="text-xs font-mono text-gray-300">
                  <span className="text-purple-400">const</span> <span className="text-blue-400">uptime</span> = <span className="text-green-400">99.99</span>;<br/>
                  <span className="text-purple-400">if</span> (system.load &gt; threshold) <span className="text-yellow-400">{"{"}</span><br/>
                  &nbsp;&nbsp;scale.up();<br/>
                  <span className="text-yellow-400">{"}"}</span>
                </code>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
