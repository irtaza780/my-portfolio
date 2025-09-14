/**
 * Color utility functions for generating dynamic color variants
 */

// Convert hex to HSL
export function hexToHsl(hex: string): { h: number; s: number; l: number } {
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
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return { h: h * 360, s: s * 100, l: l * 100 };
}

// Convert HSL to hex
export function hslToHex(h: number, s: number, l: number): string {
  h = h / 360;
  s = s / 100;
  l = l / 100;

  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
  };

  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }

  const toHex = (c: number) => {
    const hex = Math.round(c * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// Generate color variants based on the original jacket colors
export function generateJacketColorVariants(baseColor: string): string[] {
  const baseHsl = hexToHsl(baseColor);
  
  // Define the relative variations from the original green colors
  // These are based on the original color variations in the SVG
  const variations = [
    { h: 0, s: 0, l: 0 },           // Base color
    { h: -2, s: 5, l: -5 },         // Slightly darker, less saturated
    { h: -3, s: 10, l: -8 },        // Darker variant
    { h: -1, s: 8, l: -3 },         // Medium dark
    { h: 1, s: 3, l: 2 },           // Slightly lighter
    { h: -2, s: 15, l: -10 },       // Much darker
    { h: 0, s: 12, l: -6 },         // Darker, more saturated
    { h: 1, s: 5, l: 1 },           // Very slight variation
    { h: -1, s: 8, l: -4 },         // Dark variant
    { h: 2, s: 2, l: 3 },           // Lighter variant
    { h: -4, s: 20, l: -12 },       // Very dark
    { h: 3, s: 8, l: 5 },           // Light variant
    { h: 0, s: 6, l: -2 },          // Slightly darker
    { h: 1, s: 4, l: 1 },           // Minimal variation
    { h: -2, s: 12, l: -7 },        // Dark variant
    { h: 2, s: 6, l: 4 },           // Light variant
    { h: -1, s: 10, l: -5 },        // Medium dark
    { h: 0, s: 8, l: -3 },          // Darker
    { h: 1, s: 3, l: 2 },           // Slight light
    { h: -3, s: 15, l: -9 },        // Very dark
    { h: 4, s: 10, l: 8 },          // Very light
    { h: -2, s: 8, l: -4 },         // Dark variant
    { h: -1, s: 5, l: -2 },         // Slightly dark
    { h: 2, s: 4, l: 3 },           // Light variant
    { h: 0, s: 7, l: -2 },          // Darker
    { h: 1, s: 5, l: 2 },           // Light variant
    { h: -1, s: 9, l: -4 },         // Dark variant
    { h: 0, s: 6, l: -1 },          // Slightly dark
    { h: 2, s: 3, l: 3 },           // Light variant
    { h: -2, s: 11, l: -6 },        // Dark variant
    { h: 1, s: 4, l: 2 },           // Light variant
    { h: -1, s: 7, l: -3 },         // Medium dark
    { h: 0, s: 5, l: -1 },          // Slightly dark
    { h: 3, s: 6, l: 5 },           // Light variant
    { h: -2, s: 9, l: -5 },         // Dark variant
    { h: 1, s: 3, l: 2 },           // Light variant
    { h: -1, s: 6, l: -2 },         // Slightly dark
    { h: 0, s: 4, l: 0 },           // Same as base
    { h: 2, s: 5, l: 3 },           // Light variant
    { h: -3, s: 12, l: -7 },        // Dark variant
    { h: 1, s: 4, l: 2 },           // Light variant
    { h: -1, s: 8, l: -3 },         // Dark variant
    { h: 0, s: 6, l: -1 },          // Slightly dark
    { h: 2, s: 4, l: 3 },           // Light variant
    { h: -2, s: 10, l: -5 },        // Dark variant
    { h: 1, s: 3, l: 2 },           // Light variant
    { h: -1, s: 7, l: -2 },         // Slightly dark
    { h: 0, s: 5, l: 0 },           // Same as base
    { h: 3, s: 7, l: 6 },           // Light variant
    { h: -2, s: 8, l: -4 },         // Dark variant
    { h: 1, s: 4, l: 2 },           // Light variant
    { h: -1, s: 6, l: -1 },         // Slightly dark
    { h: 0, s: 4, l: 1 },           // Slightly light
    { h: 2, s: 5, l: 4 },           // Light variant
    { h: -3, s: 11, l: -6 },        // Dark variant
    { h: 1, s: 3, l: 2 },           // Light variant
    { h: -1, s: 7, l: -2 },         // Slightly dark
    { h: 0, s: 5, l: 0 },           // Same as base
    { h: 2, s: 4, l: 3 },           // Light variant
    { h: -2, s: 9, l: -4 },         // Dark variant
    { h: 1, s: 3, l: 2 },           // Light variant
    { h: -1, s: 6, l: -1 },         // Slightly dark
    { h: 0, s: 4, l: 1 },           // Slightly light
    { h: 3, s: 6, l: 5 },           // Light variant
    { h: -2, s: 8, l: -3 },         // Dark variant
    { h: 1, s: 3, l: 2 },           // Light variant
    { h: -1, s: 5, l: -1 },         // Slightly dark
    { h: 0, s: 3, l: 1 },           // Slightly light
    { h: 2, s: 4, l: 3 },           // Light variant
    { h: -3, s: 10, l: -5 },        // Dark variant
    { h: 1, s: 2, l: 2 },           // Light variant
    { h: -1, s: 6, l: -1 },         // Slightly dark
    { h: 0, s: 4, l: 1 },           // Slightly light
    { h: 2, s: 3, l: 3 },           // Light variant
    { h: -2, s: 7, l: -3 },         // Dark variant
    { h: 1, s: 2, l: 2 },           // Light variant
    { h: -1, s: 5, l: -1 },         // Slightly dark
    { h: 0, s: 3, l: 1 },           // Slightly light
    { h: 3, s: 5, l: 4 },           // Light variant
    { h: -2, s: 6, l: -2 },         // Dark variant
    { h: 1, s: 2, l: 2 },           // Light variant
    { h: -1, s: 4, l: -1 },         // Slightly dark
    { h: 0, s: 2, l: 1 },           // Slightly light
    { h: 2, s: 3, l: 3 },           // Light variant
    { h: -3, s: 9, l: -4 },         // Dark variant
    { h: 1, s: 1, l: 2 },           // Light variant
    { h: -1, s: 5, l: -1 },         // Slightly dark
    { h: 0, s: 3, l: 1 },           // Slightly light
    { h: 2, s: 2, l: 3 },           // Light variant
    { h: -2, s: 6, l: -2 },         // Dark variant
    { h: 1, s: 1, l: 2 },           // Light variant
    { h: -1, s: 4, l: -1 },         // Slightly dark
    { h: 0, s: 2, l: 1 },           // Slightly light
    { h: 3, s: 4, l: 4 },           // Light variant
    { h: -2, s: 5, l: -2 },         // Dark variant
    { h: 1, s: 1, l: 2 },           // Light variant
    { h: -1, s: 3, l: -1 },         // Slightly dark
    { h: 0, s: 1, l: 1 },           // Slightly light
    { h: 2, s: 2, l: 3 },           // Light variant
    { h: -3, s: 8, l: -3 },         // Dark variant
    { h: 1, s: 0, l: 2 },           // Light variant
    { h: -1, s: 4, l: -1 },         // Slightly dark
    { h: 0, s: 2, l: 1 },           // Slightly light
    { h: 2, s: 1, l: 3 },           // Light variant
    { h: -2, s: 5, l: -2 },         // Dark variant
    { h: 1, s: 0, l: 2 },           // Light variant
    { h: -1, s: 3, l: -1 },         // Slightly dark
    { h: 0, s: 1, l: 1 },           // Slightly light
    { h: 3, s: 3, l: 4 },           // Light variant
    { h: -2, s: 4, l: -1 },         // Dark variant
    { h: 1, s: 0, l: 2 },           // Light variant
    { h: -1, s: 2, l: -1 },         // Slightly dark
    { h: 0, s: 0, l: 1 },           // Slightly light
    { h: 2, s: 1, l: 3 },           // Light variant
    { h: -3, s: 7, l: -2 },         // Dark variant
    { h: 1, s: -1, l: 2 },          // Light variant
    { h: -1, s: 3, l: -1 },         // Slightly dark
    { h: 0, s: 1, l: 1 },           // Slightly light
    { h: 2, s: 0, l: 3 },           // Light variant
    { h: -2, s: 4, l: -1 },         // Dark variant
    { h: 1, s: -1, l: 2 },          // Light variant
    { h: -1, s: 2, l: -1 },         // Slightly dark
    { h: 0, s: 0, l: 1 },           // Slightly light
    { h: 3, s: 2, l: 4 },           // Light variant
    { h: -2, s: 3, l: -1 },         // Dark variant
    { h: 1, s: -1, l: 2 },          // Light variant
    { h: -1, s: 1, l: -1 },         // Slightly dark
    { h: 0, s: -1, l: 1 },          // Slightly light
    { h: 2, s: 0, l: 3 },           // Light variant
  ];

  return variations.map(variation => {
    const newH = Math.max(0, Math.min(360, baseHsl.h + variation.h));
    const newS = Math.max(0, Math.min(100, baseHsl.s + variation.s));
    const newL = Math.max(0, Math.min(100, baseHsl.l + variation.l));
    
    return hslToHex(newH, newS, newL);
  });
}

// Original jacket colors for reference (the green variants)
export const originalJacketColors = [
  '#2bba5f', '#2bba5e', '#22873f', '#227a3a', '#2ab75c', '#22863e', '#259847',
  '#2bbb5f', '#23873f', '#2bb85d', '#45e7a6', '#46e7a7', '#259746', '#2cb95e',
  '#2cb95f', '#217334', '#23883f', '#259c49', '#238840', '#85ebc2', '#24803b',
  '#226832', '#259947', '#238a40', '#2cb75d', '#259a48', '#238940', '#269847',
  '#217333', '#259345', '#217534', '#226631', '#259b48', '#217233', '#217b37',
  '#259646', '#249244', '#259a47', '#227537', '#217434', '#22803c', '#216c31',
  '#43de9f', '#24823d', '#23823d', '#216930', '#246334', '#246a34', '#226530',
  '#22853c', '#227636', '#23863d', '#2cb35b', '#227838', '#2aa451', '#29984c',
  '#21602c', '#217234', '#249545', '#30a258', '#29ab54', '#226932', '#29ae56',
  '#226b32', '#216a31', '#237236', '#2ba853', '#23592c', '#2ba857', '#207d38',
  '#2cab59', '#217234', '#249545', '#30a258', '#29ab54', '#226932', '#29ae56',
  '#226b32', '#216a31', '#237236', '#2ba853', '#23592c', '#2ba857', '#207d38',
  '#2cab59'
];
