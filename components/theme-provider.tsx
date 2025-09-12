'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  getInitialTheme, 
  applyTheme, 
  updateThemeColors, 
  getCurrentPrimaryColor,
  saveColorPreference,
  getSavedColorPreference
} from '@/lib/theme-utils';

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
  isLoaded: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [primaryColor, setPrimaryColorState] = useState('#0066ff');
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize theme and color on mount
  useEffect(() => {
    const initialize = async () => {
      try {
        const initialTheme = getInitialTheme();
        const savedColor = getSavedColorPreference();
        
        setTheme(initialTheme);
        setPrimaryColorState(savedColor);
        
        applyTheme(initialTheme);
        updateThemeColors(savedColor);
        
        setIsLoaded(true);
      } catch (error) {
        console.error('Theme initialization error:', error);
        setIsLoaded(true); // Still set loaded to prevent infinite loading
      }
    };

    initialize();
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    if (!isLoaded) return; // Don't set up listener until loaded

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't manually set a theme
      const storedTheme = localStorage.getItem('theme');
      if (!storedTheme) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        applyTheme(newTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [isLoaded]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  const setPrimaryColor = (color: string) => {
    setPrimaryColorState(color);
    updateThemeColors(color);
    saveColorPreference(color);
  };

  const value: ThemeContextType = {
    theme,
    toggleTheme,
    primaryColor,
    setPrimaryColor,
    isLoaded,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
