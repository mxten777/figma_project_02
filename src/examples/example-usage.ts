/**
 * Example Usage - General
 */

import { generateAndValidate } from "../generator";
import { writeFileSync } from "fs";
import { join } from "path";

// Example 1: Generate for Finance industry
console.log("🎨 Generating Design System for Finance Industry...\n");
const financeResult = generateAndValidate({
  industry: "금융",
  brandTone: "신뢰"
});

console.log("✅ Validation:", financeResult.validation.valid ? "PASSED" : "FAILED");
if (!financeResult.validation.valid) {
  console.error("❌ Errors:", financeResult.validation.errors);
}

// Save to file
const outputPath = join(process.cwd(), "output");
writeFileSync(
  join(outputPath, "finance-design-system.json"),
  financeResult.json,
  "utf-8"
);
console.log("📁 Saved to: output/finance-design-system.json\n");

// Example 2: Generate for E-commerce
console.log("🎨 Generating Design System for E-commerce...\n");
const ecommerceResult = generateAndValidate({
  industry: "이커머스",
  brandTone: "친근"
});

console.log("✅ Validation:", ecommerceResult.validation.valid ? "PASSED" : "FAILED");
writeFileSync(
  join(outputPath, "ecommerce-design-system.json"),
  ecommerceResult.json,
  "utf-8"
);
console.log("📁 Saved to: output/ecommerce-design-system.json\n");

// Example 3: Generate for Healthcare
console.log("🎨 Generating Design System for Healthcare...\n");
const healthcareResult = generateAndValidate({
  industry: "헬스케어",
  brandTone: "신뢰"
});

console.log("✅ Validation:", healthcareResult.validation.valid ? "PASSED" : "FAILED");
writeFileSync(
  join(outputPath, "healthcare-design-system.json"),
  healthcareResult.json,
  "utf-8"
);
console.log("📁 Saved to: output/healthcare-design-system.json\n");

// Example 4: Generate for Tech/SaaS
console.log("🎨 Generating Design System for Tech/SaaS...\n");
const techResult = generateAndValidate({
  industry: "테크",
  brandTone: "테크"
});

console.log("✅ Validation:", techResult.validation.valid ? "PASSED" : "FAILED");
writeFileSync(
  join(outputPath, "tech-design-system.json"),
  techResult.json,
  "utf-8"
);
console.log("📁 Saved to: output/tech-design-system.json\n");

console.log("✨ All design systems generated successfully!");
