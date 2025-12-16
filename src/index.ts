/**
 * Main Entry Point
 */

export { generateDesignSystem, generateAndValidate, generateJSON } from "./generator";
export { getIndustryPreset, getFinancePreset, getEcommercePreset, getHealthcarePreset, getTechPreset } from "./presets";
export { validateSpec, formatJSON } from "./utils/validators";
export { generateColorScale, industryColorPalettes } from "./utils/colorGenerator";
export * from "./types";
