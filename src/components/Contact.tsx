import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Download, ExternalLink, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactCards = [
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Connect with me professionally",
    link: "https://linkedin.com/in/zain-ul-haq",
    linkText: "View Profile",
  },
  {
    icon: Github,
    title: "GitHub",
    description: "Explore my open-source projects",
    link: "https://github.com/Code-with-zaini",
    linkText: "Visit GitHub",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Let's collaborate or connect",
    link: "mailto:zain@example.com",
    linkText: "Send Email",
  },
];

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "✅ Message Sent!",
        description: "Zain will reply to you soon. Thanks for reaching out!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);

      // Trigger chatbot response
      window.dispatchEvent(new CustomEvent('contact-form-submitted'));
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">Let's connect and build something amazing together</p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Side by side layout: Contact cards on left, form on right */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left side - Contact Cards & Resume */}
            <div className="space-y-6">
              <div className="grid gap-6">
                {contactCards.map((card, index) => (
                  <motion.a
                    key={card.title}
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="backdrop-blur-xl bg-card/80 p-6 rounded-2xl border border-border/50 shadow-lg hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/40 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="inline-flex p-3 rounded-xl bg-gradient-primary/10 text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <card.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-1">{card.title}</h3>
                        <p className="text-muted-foreground text-sm">{card.description}</p>
                      </div>
                      <ExternalLink className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all" />
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Resume Download */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="backdrop-blur-xl bg-card/80 p-6 rounded-2xl border-2 border-primary/30 shadow-2xl shadow-primary/10 text-center relative overflow-hidden group"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                
                <h3 className="text-xl font-bold mb-3 relative z-10">Download Resume</h3>
                <p className="text-muted-foreground text-sm mb-4 relative z-10">
                  Complete overview of skills & experience
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 transition-all relative z-10 group-hover:shadow-lg group-hover:shadow-primary/40 w-full"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download PDF
                </Button>
              </motion.div>
            </div>

            {/* Right side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="backdrop-blur-xl bg-card/80 p-8 rounded-2xl border border-border/50 shadow-2xl h-fit sticky top-24"
            >
              <div className="text-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", duration: 0.6 }}
                  className="inline-flex p-4 rounded-2xl bg-gradient-primary/10 text-primary mb-4"
                >
                  <Send className="h-8 w-8" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
                <p className="text-muted-foreground text-sm">
                  Have a project or opportunity? Let's discuss!
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Your name"
                    className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="your.email@example.com"
                    className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    placeholder="What's this about?"
                    className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:opacity-90 transition-all group hover:shadow-lg hover:shadow-primary/30"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-20 pt-8 border-t border-border"
      >
        <p className="text-muted-foreground">
          © 2025 Zain ul Haq. Built with React & Tailwind CSS.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Designed with passion for data science and innovation
        </p>
      </motion.div>
    </section>
  );
}
