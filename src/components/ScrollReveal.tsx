import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

export function ScrollReveal({ children, direction = 'up', delay = 0 }: ScrollRevealProps) {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const directionOffset = {
    up: 50,
    down: -50,
    left: 50,
    right: -50,
  };

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' || direction === 'down' ? directionOffset[direction] : 0,
      x: direction === 'left' || direction === 'right' ? directionOffset[direction] : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
