/**
 * Generate Food Delivery Design System
 */

import { generateJSON } from "../generator";

const json = generateJSON({
  industry: "음식배달",
  brandTone: "친근"
});

console.log(json);
