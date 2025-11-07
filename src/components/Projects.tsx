import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Bank Management System",
    description: "A comprehensive banking application built with C++ featuring account management, transaction processing, and file handling capabilities.",
    tech: ["C++", "OOP", "File Handling", "Data Structures"],
    features: ["Account Management", "Transaction History", "Balance Tracking", "Secure Authentication"],
    repoUrl: "https://github.com/Code-with-zaini/Bank-Management-Project",
    demoUrl: "",
  },
  {
    title: "Route Optimization Algorithm",
    description: "Implementation of Dijkstra's algorithm for finding the shortest path in weighted graphs, optimizing delivery routes and navigation systems.",
    tech: ["C++", "Graph Theory", "Dijkstra's Algorithm", "Data Structures"],
    features: ["Shortest Path Finding", "Graph Visualization", "Performance Optimization", "Real-world Applications"],
    repoUrl: "https://github.com/Code-with-zaini/User-Driven-Route-Finder-and-Optimizer",
    demoUrl: "",
  },
  {
    title: "Web Banking Application",
    description: "Full-stack web application for online banking with user authentication, account management, and transaction processing.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    features: ["User Authentication", "Transaction Management", "Account Dashboard", "Security Features"],
    repoUrl: "https://github.com/Code-with-zaini/Banking-System-PHP-SemesterProject",
    demoUrl: "",
  },
  {
    title: "Data Science Analysis Project",
    description: "Comprehensive data analysis and machine learning project using real-world datasets to predict trends and extract insights.",
    tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    features: ["Data Preprocessing", "Feature Engineering", "ML Models", "Visualization"],
    repoUrl: "https://github.com/Code-with-zaini/Exploratory-Data-analysis-with-Pyhton",
    demoUrl: "",
  },
  {
    title: "Data Wrangling with Python",
    description: "Advanced data cleaning and transformation pipeline handling messy datasets and preparing them for analysis.",
    tech: ["Python", "Pandas", "NumPy", "Data Cleaning"],
    features: ["Missing Data Handling", "Outlier Detection", "Data Transformation", "Automated Pipeline"],
    repoUrl: "https://github.com/Code-with-zaini/Data-Wrangling-with-Python",
    demoUrl: "",
  },
  {
    title: "Professional GitHub Profile",
    description: "Well-documented portfolio showcasing code quality, best practices, and comprehensive project documentation.",
    tech: ["Git", "Documentation", "Best Practices", "Open Source"],
    features: ["Clean Code", "Documentation", "Version Control", "Collaboration"],
    repoUrl: "https://github.com/Code-with-zaini/zainulhaq-portfolio",
    demoUrl: "",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">Explore my work and contributions</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10, 
                rotateY: 5,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="backdrop-blur-xl bg-card rounded-2xl border border-border shadow-lg hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 transition-all group overflow-hidden flex flex-col"
            >
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4 flex-1">
                  <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2 pt-4 border-t border-border">
                  {project.demoUrl && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 group/btn"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:text-primary" />
                        View Demo
                      </a>
                    </Button>
                  )}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={project.demoUrl ? "flex-1 group/btn" : "w-full group/btn"}
                    asChild
                  >
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4 group-hover/btn:text-primary" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href="https://github.com/Code-with-zaini"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
