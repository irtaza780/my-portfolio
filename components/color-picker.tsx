'use client';

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check } from 'lucide-react';
import { useTheme } from './theme-provider';

const predefinedColors = [
  '#0066ff', // Blue
  '#8b5cf6', // Purple
  '#06b6d4', // Cyan
  '#10b981', // Emerald
  '#f59e0b', // Amber
  '#ef4444', // Red
  '#ec4899', // Pink
  '#84cc16', // Lime
];

export function ColorPicker() {
  const { primaryColor, setPrimaryColor, isLoaded } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [customColor, setCustomColor] = useState('#0066ff');
  const [buttonPosition, setButtonPosition] = useState({ top: 0, right: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Sync customColor with primaryColor when theme is loaded
  useEffect(() => {
    if (isLoaded && primaryColor) {
      setCustomColor(primaryColor);
    }
  }, [primaryColor, isLoaded]);

  // Update button position when opening
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setButtonPosition({
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right,
      });
    }
  }, [isOpen]);

  const handleColorSelect = (color: string) => {
    setPrimaryColor(color);
    setCustomColor(color);
    setIsOpen(false); // Close the picker after selection
  };

  const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value;
    setCustomColor(color);
    setPrimaryColor(color);
  };

  const handleHexInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let color = e.target.value;
    
    // Ensure it starts with #
    if (!color.startsWith('#') && color.length > 0) {
      color = '#' + color;
    }
    
    // Validate hex color format
    const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    
    // Always update the input field
    setCustomColor(color);
    
    // Only update the theme if it's a valid hex color
    if (hexRegex.test(color)) {
      setPrimaryColor(color);
    }
  };

  const colorPickerPortal = isOpen && typeof window !== 'undefined' ? createPortal(
    <AnimatePresence>
      <>
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9998] bg-black/20"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Color picker panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed p-4 bg-card border border-border rounded-2xl shadow-2xl z-[9999] w-64"
          style={{
            top: `${buttonPosition.top}px`,
            right: `${buttonPosition.right}px`,
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-foreground">Choose Theme Color</h3>
                
                {/* Predefined colors */}
                <div className="grid grid-cols-4 gap-2">
                  {predefinedColors.map((color) => (
                    <motion.button
                      key={color}
                      onClick={() => handleColorSelect(color)}
                      className="relative w-12 h-12 rounded-full border-2 border-border hover:border-ring transition-colors"
                      style={{ backgroundColor: color }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {primaryColor === color && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <Check className="w-5 h-5 text-white drop-shadow-lg" />
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Custom color input */}
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground">
                    Custom Color
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="color"
                      value={customColor}
                      onChange={handleCustomColorChange}
                      className="w-12 h-8 rounded border border-border cursor-pointer"
                    />
                    <input
                      type="text"
                      value={customColor}
                      onChange={handleHexInputChange}
                      className="flex-1 px-3 py-2 text-xs bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="#0066ff"
                      maxLength={7}
                    />
                  </div>
                </div>
              </div>
        </motion.div>
      </>
    </AnimatePresence>,
    document.body
  ) : null;

  return (
    <>
      <motion.button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="glass rounded-full p-3 hover:scale-105 transition-transform"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Palette className="w-5 h-5 text-primary" />
      </motion.button>
      
      {colorPickerPortal}
    </>
  );
}
