/**
 * Generate Tech/SaaS Design System
 */

import { generateJSON } from "../generator";

const json = generateJSON({
  industry: "테크",
  brandTone: "테크"
});

console.log(json);
