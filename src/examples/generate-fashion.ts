/**
 * Generate Fashion Design System
 */

import { generateJSON } from "../generator";

const json = generateJSON({
  industry: "패션",
  brandTone: "프리미엄"
});

console.log(json);
