import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          {/* Enhanced Animated spinner with gradient rings */}
          <motion.div
            className="relative w-32 h-32 mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Outer glowing ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--primary)/0.3), hsl(var(--primary)))',
                filter: 'blur(8px)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
            
            {/* Middle ring */}
            <motion.div
              className="absolute inset-2 rounded-full border-4 border-transparent"
              style={{
                borderTopColor: 'hsl(var(--primary))',
                borderRightColor: 'hsl(var(--primary)/0.5)',
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            
            {/* Inner pulsing core */}
            <motion.div
              className="absolute inset-8 rounded-full bg-gradient-primary"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            
            {/* Glowing dots around the circle */}
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <motion.div
                key={angle}
                className="absolute w-2 h-2 bg-primary rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: '0 0',
                }}
                animate={{
                  rotate: 360,
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 1, repeat: Infinity, ease: 'easeInOut', delay: angle / 360 },
                }}
                initial={{
                  x: Math.cos((angle * Math.PI) / 180) * 48 - 4,
                  y: Math.sin((angle * Math.PI) / 180) * 48 - 4,
                }}
              />
            ))}
          </motion.div>

          {/* Loading text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Initializing...
            </h2>
            <p className="text-muted-foreground">Zain ul Haq Portfolio</p>
            
            {/* Progress bar */}
            <div className="mt-6 w-64">
              <div className="h-1 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">{progress}%</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
