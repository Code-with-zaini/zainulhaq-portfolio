import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Brain, BarChart3, Users, Lightbulb } from "lucide-react";
import { Progress } from "./ui/progress";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Python", level: 90 },
      { name: "C++", level: 85 },
      { name: "SQL", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "HTML/CSS", level: 85 },
      { name: "PHP", level: 70 },
    ],
  },
  {
    title: "Data Science & ML",
    icon: Brain,
    skills: [
      { name: "Pandas", level: 88 },
      { name: "NumPy", level: 85 },
      { name: "Scikit-learn", level: 82 },
      { name: "TensorFlow", level: 75 },
      { name: "Keras", level: 78 },
      { name: "PyTorch", level: 70 },
    ],
  },
  {
    title: "Data Visualization",
    icon: BarChart3,
    skills: [
      { name: "Matplotlib", level: 85 },
      { name: "Seaborn", level: 85 },
      { name: "Plotly", level: 80 },
      { name: "Tableau", level: 75 },
      { name: "Power BI", level: 72 },
      { name: "D3.js", level: 65 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Database,
    skills: [
      { name: "Jupyter", level: 90 },
      { name: "VS Code", level: 88 },
      { name: "Git/GitHub", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Docker", level: 70 },
    ],
  },
  {
    title: "Data Analytics",
    icon: Lightbulb,
    skills: [
      { name: "Data Wrangling", level: 90 },
      { name: "EDA", level: 88 },
      { name: "Statistical Analysis", level: 85 },
      { name: "Feature Engineering", level: 82 },
      { name: "Model Evaluation", level: 80 },
      { name: "A/B Testing", level: 75 },
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      { name: "Analytical Thinking", level: 92 },
      { name: "Problem Solving", level: 90 },
      { name: "Communication", level: 85 },
      { name: "Team Collaboration", level: 88 },
      { name: "Time Management", level: 85 },
      { name: "Adaptability", level: 90 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Skills & Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg">Technologies and tools I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <SkillCard key={category.title} category={category} index={categoryIndex} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="backdrop-blur-xl bg-card p-6 rounded-2xl border border-border shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-300 group hover:scale-[1.02]"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-gradient-primary/10 text-primary group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
          <category.icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold">{category.title}</h3>
      </div>

      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
            className="space-y-2"
          >
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">{skill.name}</span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 + 0.3 }}
                className="text-xs text-muted-foreground font-semibold"
              >
                {skill.level}%
              </motion.span>
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 + skillIndex * 0.05 + 0.2, ease: "easeOut" }}
              className="origin-left"
            >
              <Progress 
                value={skill.level} 
                className="h-2 bg-primary/10 group-hover:shadow-sm group-hover:shadow-primary/20 transition-shadow" 
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
