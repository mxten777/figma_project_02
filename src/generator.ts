/**
 * Main Generator Logic
 */

import { DesignSystemSpec, GeneratorInput, BrandTone } from "./types";
import { getIndustryPreset } from "./presets";
import { validateSpec, formatJSON } from "./utils/validators";

/**
 * Generate Design System Spec based on industry and brand tone
 */
export function generateDesignSystem(input: GeneratorInput): DesignSystemSpec {
  const brandTone = input.brandTone || "신뢰";
  
  // Get industry-specific preset
  const preset = getIndustryPreset(input.industry, brandTone);
  
  // Build the complete spec
  const spec: DesignSystemSpec = preset;
  
  return spec;
}

/**
 * Generate and validate design system
 */
export function generateAndValidate(input: GeneratorInput): {
  spec: DesignSystemSpec;
  validation: { valid: boolean; errors: string[] };
  json: string;
} {
  const spec = generateDesignSystem(input);
  const validation = validateSpec(spec);
  const json = formatJSON(spec);
  
  return {
    spec,
    validation,
    json,
  };
}

/**
 * Generate design system and return JSON string
 */
export function generateJSON(input: GeneratorInput): string;
export function generateJSON(industry: string, brandTone?: BrandTone): string;
export function generateJSON(inputOrIndustry: GeneratorInput | string, brandTone?: BrandTone): string {
  let spec: DesignSystemSpec;
  
  if (typeof inputOrIndustry === 'string') {
    // Called with (industry, brandTone)
    spec = generateDesignSystem({ industry: inputOrIndustry, brandTone: brandTone || "신뢰" });
  } else {
    // Called with GeneratorInput object
    spec = generateDesignSystem(inputOrIndustry);
  }
  
  return formatJSON(spec);
}
