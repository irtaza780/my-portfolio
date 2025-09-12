'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './theme-provider';

export function ThemeToggle() {
  const { theme, toggleTheme, isLoaded } = useTheme();

  if (!isLoaded) {
    return (
      <div className="glass rounded-full p-3 w-12 h-12 animate-pulse" />
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="glass rounded-full p-3 hover:scale-105 transition-transform relative overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 180 : 0,
          scale: theme === 'dark' ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun className="w-5 h-5 text-primary" />
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : -180,
          scale: theme === 'dark' ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon className="w-5 h-5 text-primary" />
      </motion.div>
      
      {/* Invisible placeholder to maintain button size */}
      <div className="w-5 h-5 opacity-0">
        <Sun className="w-5 h-5" />
      </div>
    </motion.button>
  );
}
