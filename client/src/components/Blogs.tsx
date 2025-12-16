import { motion } from "framer-motion";
import { BookOpen, Terminal, Network, Cpu, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import blogHeaderImage from "@assets/generated_images/minimalist_tech_blog_header_with_linux_terminal_aesthetic.png";

const blogSeries = [
  {
    title: "The Hidden Corners of Linux",
    subtitle: "30 Days of Deep Kernel Magic",
    description: "A deep dive into the Linux kernel, exploring memory management, process scheduling, and system calls that power the world's servers.",
    icon: <Terminal className="h-6 w-6 text-primary" />,
    tags: ["Linux Kernel", "Systems Programming", "C"],
    link: "https://medium.com/@ashwinsridharan0410" // Placeholder link
  },
  {
    title: "The Networking Playbook",
    subtitle: "30 Days from Basics to Pro",
    description: "Mastering computer networks from the physical layer to application protocols. Understanding TCP/IP, DNS, BGP, and modern cloud networking.",
    icon: <Network className="h-6 w-6 text-primary" />,
    tags: ["Networking", "TCP/IP", "Cloud"],
    link: "https://medium.com/@ashwinsridharan0410" // Placeholder link
  },
  {
    title: "MLOps Atlas",
    subtitle: "Maps for Modern Machine Learning Systems",
    description: "Navigating the complex landscape of MLOps. From model training and versioning to deployment, monitoring, and scaling AI in production.",
    icon: <Cpu className="h-6 w-6 text-primary" />,
    tags: ["MLOps", "AI", "DevOps"],
    link: "https://medium.com/@ashwinsridharan0410" // Placeholder link
  }
];

export default function Blogs() {
  return (
    <section id="blogs" className="py-24 bg-secondary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="text-xs font-mono text-primary font-medium">Technical Writing</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Engineering Chronicles</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Sharing knowledge and deep dives into complex technical topics on Medium. 
            Exploring the intersection of Systems, Networking, and AI.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {blogSeries.map((series, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-card border-white/5 hover:border-primary/50 transition-all duration-300 h-full group hover:-translate-y-2 flex flex-col">
                <div className="h-2 w-full bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-secondary rounded-lg group-hover:bg-primary/20 transition-colors">
                      {series.icon}
                    </div>
                    <Badge variant="outline" className="font-mono text-xs border-white/10">Series</Badge>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {series.title}
                  </CardTitle>
                  <CardDescription className="font-medium text-primary/80">
                    {series.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {series.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {series.tags.map(tag => (
                      <span key={tag} className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded border border-white/5">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0 mt-auto">
                  <Button variant="ghost" className="w-full justify-between group-hover:text-primary hover:bg-transparent pl-0" asChild>
                    <a href={series.link} target="_blank" rel="noopener noreferrer">
                      Read on Medium <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-white/5 hover:bg-white/10 text-white border border-white/10" asChild>
            <a href="https://medium.com/@ashwinsridharan0410" target="_blank" rel="noopener noreferrer">
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
