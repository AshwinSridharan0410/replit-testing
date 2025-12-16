import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Johnson Controls",
    role: "Developer 1",
    period: "May 2024 - Present",
    location: "Pune, Maharashtra, India",
    description: "Built & Operated Multi-Cloud Kubernetes Platforms across AWS, GCP, Azure. Designed GitOps-Driven Release Pipelines enabling zero-downtime deployments. Resolved High-Severity Production Incidents (memory leaks, OOM kills) leveraging deep-dive debugging tools.",
    skills: ["Kubernetes", "AWS/GCP/Azure", "GitOps", "Tekton", "ArgoCD", "Linux Debugging"]
  },
  {
    company: "Johnson Controls",
    role: "Graduate Engineer",
    period: "Nov 2023 - May 2024",
    location: "Pune, Maharashtra, India",
    description: "Gained Hands-On Expertise in Linux & Network Administration. Developed & Containerized Applications across multiple tech stacks (.NET, Java, Node.js). Streamlined Build & Deployment Processes by automating packaging workflows.",
    skills: ["Linux Admin", "Docker", "Containerization", "Build Automation"]
  },
  {
    company: "Johnson Controls",
    role: "Intern",
    period: "May 2023 - Oct 2023",
    location: "Pune, Maharashtra, India",
    description: "Internship focused on foundational cloud and infrastructure technologies.",
    skills: ["Cloud Basics", "Infrastructure"]
  },
  {
    company: "Virtusa",
    role: "Intern",
    period: "Dec 2022 - Apr 2023",
    location: "Chennai, Tamil Nadu, India",
    description: "Utilized Spring Boot and Java for backend development. Enhanced front-end functionality using Angular. Delivered robust and user-friendly applications.",
    skills: ["Java", "Spring Boot", "Angular", "SQL"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Professional Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-white/10 ml-6 md:ml-10 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
                
                <div className="bg-card/50 border border-white/5 p-6 rounded-lg hover:border-primary/30 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <div className="flex items-center text-primary mt-1 font-medium">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 flex flex-col items-start md:items-end text-sm text-muted-foreground">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-3.5 h-3.5 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-3.5 h-3.5 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-300 font-mono border border-white/5">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
