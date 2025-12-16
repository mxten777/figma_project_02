/**
 * Validation Utilities
 */

import { DesignSystemSpec } from "../types";

/**
 * Validate the generated design system spec
 */
export function validateSpec(spec: DesignSystemSpec): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Check meta
  if (!spec.meta.industry) errors.push("meta.industry is required");
  if (!spec.meta.brandTone) errors.push("meta.brandTone is required");
  if (!spec.meta.styleKeywords.length) errors.push("meta.styleKeywords must have at least one item");

  // Check colors - all scales must have 10 levels
  const colorScales = ["primary", "secondary", "gray"] as const;
  for (const scale of colorScales) {
    const levels = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"] as const;
    for (const level of levels) {
      if (!spec.colors[scale][level]) {
        errors.push(`colors.${scale}.${level} is required`);
      }
      if (spec.colors[scale][level] && !isValidHex(spec.colors[scale][level])) {
        errors.push(`colors.${scale}.${level} must be a valid HEX color`);
      }
    }
  }

  // Check accessibility notes
  if (spec.colors.accessibilityNotes.length < 3) {
    errors.push("colors.accessibilityNotes must have at least 3 items");
  }

  // Check sections
  if (spec.layout.sections.length < 4) {
    errors.push("layout.sections must have at least 4 items");
  }

  // Check variation summary
  if (spec.variationSummary.changedPoints.length < 3) {
    errors.push("variationSummary.changedPoints must have at least 3 items");
  }

  // Check figma guide
  if (!spec.figmaGuide.pages.length) {
    errors.push("figmaGuide.pages must have at least one page");
  }
  if (!spec.figmaGuide.namingRule) {
    errors.push("figmaGuide.namingRule is required");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Check if string is a valid HEX color
 */
function isValidHex(color: string): boolean {
  return /^#[0-9A-Fa-f]{6}$/.test(color);
}

/**
 * Format JSON output
 */
export function formatJSON(spec: DesignSystemSpec): string {
  return JSON.stringify(spec, null, 2);
}
