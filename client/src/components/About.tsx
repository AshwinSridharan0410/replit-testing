import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const highlights = [
    "Architected resilient Kubernetes platforms with self-healing capabilities",
    "Reduced cloud costs by 25%+ through proactive infra hygiene",
    "Delivered declarative, multi-cloud infrastructure using Terraform & GitOps",
    "Built zero-downtime CI/CD pipelines with automated security gates",
    "Embedded end-to-end observability (Prometheus, Grafana, Loki)",
    "Engineered LLM-powered bots reducing troubleshooting time by 40%"
  ];

  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            I specialize in building developer-friendly platforms with automation, observability, and cost efficiency at the center. 
            From production-grade Kubernetes clusters to AI-integrated pipelines, I enable teams to ship with speed and confidence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-secondary/30 border-white/5 h-full">
              <CardHeader>
                <CardTitle className="text-xl font-heading text-primary">Core Expertise</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Reliable infrastructure, declarative CI/CD, Kubernetes platforms, Linux internals, and systems behaviour.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["SRE", "Cloud Architecture", "CI/CD", "Kubernetes", "Terraform", "Linux", "Observability", "GenAI Ops"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-white/5 hover:bg-white/10 text-primary-foreground border-primary/20 text-white">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-secondary/30 border-white/5 h-full">
              <CardHeader>
                <CardTitle className="text-xl font-heading text-primary">Key Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {highlights.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
