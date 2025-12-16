import { motion } from "framer-motion";
import { Database, Server, Code, Terminal, Shield, Cpu } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Core Infrastructure",
      icon: <Server className="w-6 h-6 text-primary" />,
      skills: ["Kubernetes", "Docker", "Linux Internals", "AWS", "Azure", "GCP", "Terraform", "Ansible"]
    },
    {
      title: "DevOps & CI/CD",
      icon: <Terminal className="w-6 h-6 text-primary" />,
      skills: ["Jenkins", "Tekton", "ArgoCD", "GitOps", "Buildpacks", "Helm", "Artifactory"]
    },
    {
      title: "Observability",
      icon: <ActivityIcon className="w-6 h-6 text-primary" />,
      skills: ["Prometheus", "Grafana", "Loki", "Jaeger", "ELK Stack", "Datadog", "SLOs/SLAs"]
    },
    {
      title: "Development & Scripting",
      icon: <Code className="w-6 h-6 text-primary" />,
      skills: ["Python", "Go", "Bash", "Java", "React", "Node.js", "SQL", "Git"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Technical Arsenal</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-white/5 rounded-xl p-6 hover:border-primary/40 transition-all hover:bg-card/80 hover:-translate-y-1"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold mb-4 font-heading">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Certifications Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary/20 via-background to-background border border-primary/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between"
        >
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">Certifications</h3>
            <p className="text-muted-foreground">Verified expertise in cloud architecture and engineering.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-3 bg-black/40 px-5 py-3 rounded-lg border border-white/10">
              <Shield className="text-yellow-500 w-6 h-6" />
              <div>
                <div className="text-white font-bold">Google Cloud</div>
                <div className="text-xs text-muted-foreground">Professional Cloud Architect</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-black/40 px-5 py-3 rounded-lg border border-white/10">
              <Shield className="text-blue-500 w-6 h-6" />
              <div>
                <div className="text-white font-bold">Google Cloud</div>
                <div className="text-xs text-muted-foreground">Associate Cloud Engineer</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ActivityIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}
