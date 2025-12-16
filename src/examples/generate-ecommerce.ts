/**
 * Generate E-commerce Design System
 */

import { generateJSON } from "../generator";

const json = generateJSON({
  industry: "이커머스",
  brandTone: "친근"
});

console.log(json);
