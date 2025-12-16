/**
 * Generate Education Design System
 */

import { generateJSON } from "../generator";

const json = generateJSON({
  industry: "교육",
  brandTone: "친근"
});

console.log(json);
