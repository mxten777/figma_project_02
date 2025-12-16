/**
 * Color Generation Utilities
 */

import { ColorScale } from "../types";

/**
 * Generate a color scale from base color
 */
export function generateColorScale(baseHex: string, name: "primary" | "secondary" | "gray"): ColorScale {
  // This is a simplified version - you can integrate more sophisticated color generation
  const rgb = hexToRgb(baseHex);
  
  return {
    "50": lighten(rgb, 0.95),
    "100": lighten(rgb, 0.90),
    "200": lighten(rgb, 0.75),
    "300": lighten(rgb, 0.60),
    "400": lighten(rgb, 0.40),
    "500": baseHex,
    "600": darken(rgb, 0.15),
    "700": darken(rgb, 0.30),
    "800": darken(rgb, 0.45),
    "900": darken(rgb, 0.60),
  };
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
}

function rgbToHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map((x) => {
    const hex = Math.round(Math.max(0, Math.min(255, x))).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }).join("");
}

function lighten(rgb: { r: number; g: number; b: number }, factor: number): string {
  return rgbToHex(
    rgb.r + (255 - rgb.r) * factor,
    rgb.g + (255 - rgb.g) * factor,
    rgb.b + (255 - rgb.b) * factor
  );
}

function darken(rgb: { r: number; g: number; b: number }, factor: number): string {
  return rgbToHex(
    rgb.r * (1 - factor),
    rgb.g * (1 - factor),
    rgb.b * (1 - factor)
  );
}

/**
 * Predefined color palettes by industry
 */
export const industryColorPalettes = {
  finance: {
    primary: "#0052CC",
    secondary: "#00875A",
    gray: "#42526E",
  },
  ecommerce: {
    primary: "#FF6B35",
    secondary: "#F7931E",
    gray: "#4A5568",
  },
  healthcare: {
    primary: "#00A9E0",
    secondary: "#7AC142",
    gray: "#5A6C7D",
  },
  tech: {
    primary: "#6366F1",
    secondary: "#8B5CF6",
    gray: "#64748B",
  },
  education: {
    primary: "#3B82F6",
    secondary: "#10B981",
    gray: "#6B7280",
  },
  food: {
    primary: "#EF4444",
    secondary: "#F59E0B",
    gray: "#6B7280",
  },
  fashion: {
    primary: "#EC4899",
    secondary: "#8B5CF6",
    gray: "#64748B",
  },
  real_estate: {
    primary: "#0891B2",
    secondary: "#059669",
    gray: "#64748B",
  },
};
