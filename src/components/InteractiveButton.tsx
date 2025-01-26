import React from 'react';
import { motion } from 'framer-motion';

interface InteractiveButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
  isSuccess?: boolean;
}

export function InteractiveButton({
  children,
  onClick,
  variant = 'primary',
  isLoading = false,
  isSuccess = false,
}: InteractiveButtonProps) {
  const baseClasses = `px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 relative overflow-hidden
    ${variant === 'primary' 
      ? 'bg-blue-600 text-white hover:bg-blue-700' 
      : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'}`;

  return (
    <motion.button
      className={baseClasses}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={false}
      animate={
        isSuccess
          ? { backgroundColor: '#10B981' }
          : isLoading
          ? { opacity: 0.7 }
          : { opacity: 1 }
      }
      disabled={isLoading}
    >
      {isLoading ? (
        <motion.div
          className="w-5 h-5 border-2 border-white rounded-full border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      ) : isSuccess ? (
        <motion.svg
          viewBox="0 0 24 24"
          className="w-5 h-5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        >
          <motion.path
            d="M20 6L9 17L4 12"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.svg>
      ) : (
        children
      )}
    </motion.button>
  );
}
