// Utility functions for theme management and color calculations

export interface ColorHSL {
  h: number;
  s: number;
  l: number;
}

/**
 * Converts hex color to HSL
 */
export function hexToHsl(hex: string): ColorHSL {
  // Ensure hex is valid
  if (!hex || !hex.startsWith('#') || hex.length !== 7) {
    return { h: 240, s: 100, l: 50 }; // Default blue
  }

  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

/**
 * Converts HSL to hex color
 */
export function hslToHex(h: number, s: number, l: number): string {
  const hNorm = h / 360;
  const sNorm = s / 100;
  const lNorm = l / 100;

  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
  };

  let r, g, b;

  if (sNorm === 0) {
    r = g = b = lNorm; // achromatic
  } else {
    const q = lNorm < 0.5 ? lNorm * (1 + sNorm) : lNorm + sNorm - lNorm * sNorm;
    const p = 2 * lNorm - q;
    r = hue2rgb(p, q, hNorm + 1/3);
    g = hue2rgb(p, q, hNorm);
    b = hue2rgb(p, q, hNorm - 1/3);
  }

  const toHex = (c: number) => {
    const hex = Math.round(c * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Updates CSS custom properties for theme colors
 */
export function updateThemeColors(primaryColor: string) {
  if (typeof window === 'undefined') {
    return;
  }
  
  try {
    const hsl = hexToHsl(primaryColor);
    
    // Update CSS custom properties
    const root = document.documentElement;
    root.style.setProperty('--primary-hue', hsl.h.toString());
    root.style.setProperty('--primary-saturation', `${hsl.s}%`);
    root.style.setProperty('--primary-lightness', `${hsl.l}%`);
  } catch (error) {
    console.error('Error updating theme colors:', error);
  }
}

/**
 * Gets the current theme from localStorage or system preference
 */
export function getInitialTheme(): 'light' | 'dark' {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  }
  
  return 'light';
}

/**
 * Applies theme to document
 */
export function applyTheme(theme: 'light' | 'dark') {
  if (typeof window !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
}

/**
 * Gets the current primary color from CSS variables
 */
export function getCurrentPrimaryColor(): string {
  if (typeof window !== 'undefined') {
    const root = document.documentElement;
    const hue = parseInt(root.style.getPropertyValue('--primary-hue') || '240');
    const saturation = parseInt(root.style.getPropertyValue('--primary-saturation') || '100');
    const lightness = parseInt(root.style.getPropertyValue('--primary-lightness') || '50');
    
    return hslToHex(hue, saturation, lightness);
  }
  
  return '#0066ff'; // Default blue
}

/**
 * Saves color preference to localStorage
 */
export function saveColorPreference(color: string) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('primary-color', color);
  }
}

/**
 * Gets saved color preference from localStorage
 */
export function getSavedColorPreference(): string {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('primary-color') || '#0066ff';
  }
  return '#0066ff';
}
