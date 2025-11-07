import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const subjects = [
  { name: "Statistical Analysis", progress: 85 },
  { name: "Machine Learning", progress: 80 },
  { name: "Data Visualization", progress: 90 },
  { name: "Database Systems", progress: 85 },
  { name: "Python Programming", progress: 95 },
  { name: "AI Algorithms", progress: 75 },
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg">My academic journey and expertise</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ scale: 1.01 }}
            className="backdrop-blur-xl bg-card p-8 md:p-12 rounded-3xl border-2 border-primary/20 shadow-2xl hover:shadow-primary/20 transition-all relative overflow-hidden"
          >
            <motion.div 
              className="absolute top-0 right-0 w-64 h-64 bg-gradient-primary opacity-10 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-gradient-primary text-primary-foreground">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">BS Data Science</h3>
                  <p className="text-xl text-primary">Institute of Space Technology</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 mb-8 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>2024 – 2028</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Islamabad, Pakistan</span>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <h4 className="text-xl font-semibold">Key Focus Areas</h4>
                </div>
                <div className="space-y-4">
                  {subjects.map((subject, index) => (
                    <motion.div
                      key={subject.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{subject.name}</span>
                        <span className="text-sm text-muted-foreground">{subject.progress}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${subject.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                          className="h-full bg-gradient-primary rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
                <h4 className="font-semibold mb-3 text-lg">Academic Highlights</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Strong foundation in statistical analysis and probability theory</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Hands-on experience with modern ML frameworks and tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Proficient in data preprocessing, feature engineering, and model evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Experience with both SQL and NoSQL database systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
