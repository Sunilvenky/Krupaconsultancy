import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';

interface AnimationWrapperProps {
  children: React.ReactNode;
  delay?: number;
}

export function AnimationWrapper({ children, delay = 0 }: AnimationWrapperProps) {
  const shouldReduceMotion = useReducedMotion();

  const animations = shouldReduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
      };

  return (
    <motion.div
      {...animations}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
