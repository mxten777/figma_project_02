/**
 * Generate Real Estate Design System
 */

import { generateJSON } from "../generator";

const json = generateJSON({
  industry: "부동산",
  brandTone: "프리미엄"
});

console.log(json);
