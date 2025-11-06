import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Download } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hey there! I'm Zain's AI assistant 👋 — want to learn about his skills or projects?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Listen for contact form submissions
    const handleContactSubmit = () => {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: "✅ Message sent! Zain will reply to you soon. Thanks for reaching out!" },
      ]);
    };

    window.addEventListener('contact-form-submitted', handleContactSubmit);
    return () => window.removeEventListener('contact-form-submitted', handleContactSubmit);
  }, []);

  const quickCommands = [
    { label: 'Show projects', action: 'projects' },
    { label: 'Show education', action: 'education' },
    { label: 'Show skills', action: 'skills' },
    { label: 'Download CV', action: 'download-cv' },
    { label: 'Contact info', action: 'contact' },
  ];

  const handleQuickCommand = (action: string) => {
    const responses: Record<string, string> = {
      projects: "Great! Let me scroll to Zain's projects section for you. 🚀",
      education: "Perfect! I'll show you Zain's educational background. 🎓",
      skills: "Excellent choice! Here are Zain's technical skills. 💻",
      'download-cv': "📥 You can download Zain's CV by scrolling down to the Contact section and clicking the 'Download Resume' button!",
      contact: "Here's how you can reach Zain:\n\n📧 Email: zain@example.com\n💼 LinkedIn: linkedin.com/in/zain-ul-haq\n🐙 GitHub: github.com/Code-with-zaini\n\nOr scroll down to fill out the contact form!",
    };

    setMessages((prev) => [
      ...prev,
      { role: 'user', content: quickCommands.find(c => c.action === action)?.label || action },
    ]);

    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: responses[action] },
      ]);
      setIsTyping(false);

      // Scroll to section
      if (action !== 'contact' && action !== 'download-cv') {
        setTimeout(() => {
          const element = document.getElementById(action);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      } else if (action === 'download-cv' || action === 'contact') {
        setTimeout(() => {
          const element = document.getElementById('contact');
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }, 1000);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsTyping(true);

    // Enhanced response logic
    setTimeout(() => {
      const lowerMsg = userMessage.toLowerCase();
      
      if (lowerMsg.includes('project')) {
        handleQuickCommand('projects');
        return;
      } else if (lowerMsg.includes('education') || lowerMsg.includes('study') || lowerMsg.includes('university')) {
        handleQuickCommand('education');
        return;
      } else if (lowerMsg.includes('skill') || lowerMsg.includes('tech') || lowerMsg.includes('language')) {
        handleQuickCommand('skills');
        return;
      } else if (lowerMsg.includes('cv') || lowerMsg.includes('resume') || lowerMsg.includes('download')) {
        handleQuickCommand('download-cv');
        return;
      } else if (lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('reach') || lowerMsg.includes('message')) {
        handleQuickCommand('contact');
        return;
      } else if (lowerMsg.includes('who') || lowerMsg.includes('about')) {
        setMessages((prev) => [...prev, { 
          role: 'assistant', 
          content: "Zain ul Haq is a Data Science student at IST with expertise in Python, C++, SQL, and Machine Learning. He's passionate about AI and building innovative solutions! 🚀" 
        }]);
      } else if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
        setMessages((prev) => [...prev, { 
          role: 'assistant', 
          content: "Hello! 👋 I'm here to help you learn more about Zain. Feel free to ask about his projects, skills, education, or how to contact him!" 
        }]);
      } else {
        setMessages((prev) => [...prev, { 
          role: 'assistant', 
          content: "I can help you with:\n• Zain's projects 🚀\n• His education & skills 🎓\n• Contact information 📧\n• Download his CV 📥\n\nTry using the quick commands below!" 
        }]);
      }
      
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      {/* Chat toggle button */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="h-14 w-14 rounded-full bg-gradient-primary hover:opacity-90 shadow-lg hover:shadow-xl transition-all"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </motion.div>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[380px] h-[500px] backdrop-blur-xl bg-card/95 border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-primary p-4 text-white">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Zain's AI Assistant 🤖
              </h3>
              <p className="text-sm opacity-90">Always here to help!</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.role === 'user'
                        ? 'bg-gradient-primary text-white'
                        : 'bg-secondary text-foreground'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-secondary rounded-2xl px-4 py-2">
                    <div className="flex gap-1">
                      <motion.div
                        className="w-2 h-2 bg-primary rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-primary rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-primary rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick commands */}
            <div className="px-4 py-2 border-t border-border">
              <div className="flex flex-wrap gap-2">
                {quickCommands.map((cmd) => (
                  <Button
                    key={cmd.action}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickCommand(cmd.action)}
                    className="text-xs hover:bg-primary/10 hover:border-primary/40"
                  >
                    {cmd.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1"
                />
                <Button type="submit" size="icon" className="bg-gradient-primary hover:opacity-90">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
