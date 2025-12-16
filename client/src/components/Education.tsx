import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Education() {
  const education = [
    {
      school: "Indian Institute of Technology, Madras",
      degree: "Bachelor of Science - BSc, Data Science",
      period: "Jan 2022 - Oct 2025"
    },
    {
      school: "Meenakshi Sundararajan Engineering College",
      degree: "Bachelor of Technology - BTech, Information Technology",
      period: "Sep 2019 - June 2023"
    }
  ];

  return (
    <section id="education" className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Education</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto grid gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-card/50 border-white/10 hover:border-primary/30 transition-colors">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-white">{edu.school}</CardTitle>
                    <p className="text-primary/80 font-medium">{edu.degree}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground ml-16">
                    <Calendar className="h-4 w-4 mr-2" />
                    {edu.period}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
