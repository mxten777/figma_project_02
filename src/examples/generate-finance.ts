/**
 * Generate Finance Design System
 */

import { generateJSON } from "../generator";

const json = generateJSON({
  industry: "금융",
  brandTone: "신뢰"
});

console.log(json);
