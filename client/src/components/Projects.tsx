import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Layers, Terminal, Database, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Multi-Cloud Kubernetes Platform",
    description: "Architected resilient platforms across AWS, GCP, and Azure. Onboarded 25+ critical workloads and validated production readiness via chaos testing and load simulations.",
    tags: ["Kubernetes", "Terraform", "Chaos Mesh", "Multi-Cloud"],
    icon: <CloudIcon className="h-10 w-10 text-primary mb-4" />,
    link: "#"
  },
  {
    title: "GitOps Release Pipelines",
    description: "Designed zero-downtime deployment pipelines using Tekton and ArgoCD with automated rollback, health checks, and Jira integration for 100% traceability.",
    tags: ["ArgoCD", "Tekton", "GitOps", "CI/CD"],
    icon: <Layers className="h-10 w-10 text-primary mb-4" />,
    link: "#"
  },
  {
    title: "Full-Stack Observability",
    description: "Embedded end-to-end observability using Prometheus, Grafana, and Loki. Reduced alert fatigue by 60% via tuned SLOs and actionable dashboards.",
    tags: ["Prometheus", "Grafana", "Loki", "Jaeger"],
    icon: <Activity className="h-10 w-10 text-primary mb-4" />,
    link: "#"
  },
  {
    title: "Internal Developer Portal",
    description: "Built a Flask-based portal for CI/CD visibility and a production-ready RAG chatbot that accelerated troubleshooting by 40% through instant knowledge access.",
    tags: ["Python", "Flask", "RAG", "Azure OpenAI"],
    icon: <Terminal className="h-10 w-10 text-primary mb-4" />,
    link: "#"
  }
];

function CloudIcon({ className }: { className?: string }) {
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
      <path d="M17.5 19c0-1.7-1.3-3-3-3h-11c-1.7 0-3 1.3-3 3s1.3 3 3 3h11c1.7 0 3-1.3 3-3z" />
      <path d="M17.5 19c2.5 0 4.5-2 4.5-4.5S20 10 17.5 10c-.5 0-1 .1-1.4.2" />
      <path d="M16.1 10.2C16 6.8 13.2 4 9.8 4 6.6 4 3.9 6.4 3.6 9.6" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of technical initiatives focusing on automation, scale, and reliability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-card border-white/5 hover:border-primary/50 transition-all duration-300 h-full group overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:bg-primary/10" />
                
                <CardHeader>
                  <div className="mb-2">{project.icon}</div>
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-background/50 border-white/10 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-primary group-hover:translate-x-1 transition-all">
                    View Details <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="border-white/10 hover:bg-white/5" asChild>
            <a href="https://github.com/ashwinsridharan0410" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" /> View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
