import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  FileCode, 
  GitBranch, 
  Braces,
  Binary,
  Table,
  Activity,
  Layers,
  Cpu
} from "lucide-react";

const techStack = [
  { name: "Python", icon: Code2, color: "text-blue-500" },
  { name: "C++", icon: Cpu, color: "text-purple-500" },
  { name: "SQL", icon: Database, color: "text-cyan-500" },
  { name: "Pandas", icon: Table, color: "text-indigo-500" },
  { name: "NumPy", icon: Binary, color: "text-violet-500" },
  { name: "Scikit-learn", icon: Activity, color: "text-pink-500" },
  { name: "GitHub", icon: GitBranch, color: "text-slate-300" },
  { name: "HTML", icon: FileCode, color: "text-orange-500" },
  { name: "CSS", icon: Layers, color: "text-blue-400" },
  { name: "JavaScript", icon: Braces, color: "text-yellow-500" },
];

export function TechStackCarousel() {
  // Duplicate items for seamless loop
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <section className="py-12 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Tech Stack
          </span>
        </motion.h2>
      </div>

      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          className="flex gap-8"
          animate={{
            x: [0, -50 * techStack.length],
          }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {duplicatedStack.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 w-40 h-40 backdrop-blur-xl bg-card/40 rounded-2xl border border-border/50 hover:border-primary/40 transition-all duration-300 flex flex-col items-center justify-center gap-4 group hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity rounded-full" />
                <tech.icon className={`h-12 w-12 ${tech.color} group-hover:scale-110 transition-transform relative z-10`} />
              </div>
              <span className="font-semibold text-sm text-foreground/80 group-hover:text-primary transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
