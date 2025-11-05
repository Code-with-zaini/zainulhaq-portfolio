import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Robot3D({ onInteraction }: { onInteraction?: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isWaving, setIsWaving] = useState(false);

  useEffect(() => {
    // Wave animation on mount
    setTimeout(() => setIsWaving(true), 1000);
    setTimeout(() => setIsWaving(false), 2000);
  }, []);

  const handleClick = () => {
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 1000);
    onInteraction?.();
  };

  return (
    <motion.div
      className="relative cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Robot SVG */}
      <svg
        width="80"
        height="80"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Head */}
        <motion.rect
          x="30"
          y="20"
          width="40"
          height="35"
          rx="8"
          className="fill-card stroke-primary"
          strokeWidth="2"
          animate={{
            y: isHovered ? 18 : 20,
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Antenna */}
        <motion.line
          x1="50"
          y1="20"
          x2="50"
          y2="10"
          className="stroke-primary"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{
            y1: isHovered ? 18 : 20,
            y2: isHovered ? 8 : 10,
          }}
        />
        <motion.circle
          cx="50"
          cy="10"
          r="3"
          className="fill-primary"
          animate={{
            cy: isHovered ? 8 : 10,
            scale: [1, 1.3, 1],
          }}
          transition={{
            scale: { duration: 1, repeat: Infinity },
          }}
        />

        {/* Eyes */}
        <motion.circle
          cx="40"
          cy="35"
          r="4"
          className="fill-primary"
          animate={{
            scaleY: isHovered ? 0.3 : 1,
          }}
          transition={{ duration: 0.15 }}
        />
        <motion.circle
          cx="60"
          cy="35"
          r="4"
          className="fill-primary"
          animate={{
            scaleY: isHovered ? 0.3 : 1,
          }}
          transition={{ duration: 0.15 }}
        />

        {/* Body */}
        <rect
          x="25"
          y="60"
          width="50"
          height="30"
          rx="6"
          className="fill-card stroke-primary"
          strokeWidth="2"
        />

        {/* Chest panel */}
        <rect
          x="42"
          y="68"
          width="16"
          height="14"
          rx="2"
          className="fill-primary/20 stroke-primary"
          strokeWidth="1"
        />

        {/* Left arm */}
        <motion.g
          animate={{
            rotate: isWaving ? [0, -30, -10, -30, 0] : 0,
          }}
          transition={{ duration: 1 }}
          style={{ originX: '22px', originY: '65px' }}
        >
          <rect
            x="15"
            y="60"
            width="8"
            height="25"
            rx="4"
            className="fill-card stroke-primary"
            strokeWidth="2"
          />
        </motion.g>

        {/* Right arm */}
        <rect
          x="77"
          y="60"
          width="8"
          height="25"
          rx="4"
          className="fill-card stroke-primary"
          strokeWidth="2"
        />

        {/* Left leg */}
        <rect
          x="35"
          y="90"
          width="10"
          height="8"
          rx="2"
          className="fill-card stroke-primary"
          strokeWidth="2"
        />

        {/* Right leg */}
        <rect
          x="55"
          y="90"
          width="10"
          height="8"
          rx="2"
          className="fill-card stroke-primary"
          strokeWidth="2"
        />
      </svg>

      {/* Hover tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 bg-card border border-primary/20 rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap shadow-lg"
          >
            Hi! Click me 👋
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
