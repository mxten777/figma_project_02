/**
 * Generate Healthcare Design System
 */

import { generateJSON } from "../generator";

const json = generateJSON({
  industry: "헬스케어",
  brandTone: "신뢰"
});

console.log(json);
