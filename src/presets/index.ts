/**
 * Preset Index - Export all industry presets
 */

import { DesignSystemSpec, BrandTone } from "../types";
import { getFinancePreset } from "./finance";
import { getEcommercePreset } from "./ecommerce";
import { getHealthcarePreset } from "./healthcare";
import { getTechPreset } from "./tech";
import { getEducationPreset } from "./education";
import { getFoodPreset } from "./food";
import { getRealEstatePreset } from "./realestate";
import { getFashionPreset } from "./fashion";
import { getGamingPreset } from "./gaming";
import { getTravelPreset } from "./travel";
import { getFitnessPreset } from "./fitness";
import { getHotelPreset } from "./hotel";
import { getAutomotivePreset } from "./automotive";
import { getMediaPreset } from "./media";

export function getIndustryPreset(industry: string, brandTone: BrandTone = "신뢰"): DesignSystemSpec {
  const normalizedIndustry = industry.toLowerCase().trim();

  // Match industry keywords
  if (normalizedIndustry.includes("금융") || normalizedIndustry.includes("finance") || normalizedIndustry.includes("bank")) {
    return getFinancePreset(brandTone);
  }
  
  if (normalizedIndustry.includes("이커머스") || normalizedIndustry.includes("ecommerce") || 
      normalizedIndustry.includes("쇼핑") || normalizedIndustry.includes("커머스") || normalizedIndustry.includes("shopping")) {
    return getEcommercePreset(brandTone);
  }
  
  if (normalizedIndustry.includes("헬스") || normalizedIndustry.includes("health") || 
      normalizedIndustry.includes("의료") || normalizedIndustry.includes("병원") || normalizedIndustry.includes("medical")) {
    return getHealthcarePreset(brandTone);
  }
  
  if (normalizedIndustry.includes("테크") || normalizedIndustry.includes("tech") || 
      normalizedIndustry.includes("saas") || normalizedIndustry.includes("software") || normalizedIndustry.includes("it")) {
    return getTechPreset(brandTone);
  }

  if (normalizedIndustry.includes("교육") || normalizedIndustry.includes("education") || 
      normalizedIndustry.includes("학습") || normalizedIndustry.includes("강의")) {
    return getEducationPreset(brandTone);
  }

  if (normalizedIndustry.includes("음식") || normalizedIndustry.includes("food") || 
      normalizedIndustry.includes("배달") || normalizedIndustry.includes("delivery") || normalizedIndustry.includes("맛집")) {
    return getFoodPreset(brandTone);
  }

  if (normalizedIndustry.includes("부동산") || normalizedIndustry.includes("real") || normalizedIndustry.includes("estate") || 
      normalizedIndustry.includes("집") || normalizedIndustry.includes("property")) {
    return getRealEstatePreset(brandTone);
  }

  if (normalizedIndustry.includes("패션") || normalizedIndustry.includes("fashion") || 
      normalizedIndustry.includes("의류") || normalizedIndustry.includes("쇼핑몰")) {
    return getFashionPreset(brandTone);
  }

  if (normalizedIndustry.includes("게임") || normalizedIndustry.includes("gaming") || 
      normalizedIndustry.includes("게이밍") || normalizedIndustry.includes("엔터")) {
    return getGamingPreset(brandTone);
  }

  if (normalizedIndustry.includes("여행") || normalizedIndustry.includes("travel") || 
      normalizedIndustry.includes("관광") || normalizedIndustry.includes("투어")) {
    return getTravelPreset(brandTone);
  }

  if (normalizedIndustry.includes("피트니스") || normalizedIndustry.includes("fitness") || 
      normalizedIndustry.includes("운동") || normalizedIndustry.includes("헬스장") || normalizedIndustry.includes("스포츠")) {
    return getFitnessPreset(brandTone);
  }

  if (normalizedIndustry.includes("호텔") || normalizedIndustry.includes("hotel") || 
      normalizedIndustry.includes("숙박") || normalizedIndustry.includes("리조트") || normalizedIndustry.includes("hospitality")) {
    return getHotelPreset(brandTone);
  }

  if (normalizedIndustry.includes("자동차") || normalizedIndustry.includes("automotive") || 
      normalizedIndustry.includes("카") || normalizedIndustry.includes("차량") || normalizedIndustry.includes("car")) {
    return getAutomotivePreset(brandTone);
  }

  if (normalizedIndustry.includes("미디어") || normalizedIndustry.includes("media") || 
      normalizedIndustry.includes("ott") || normalizedIndustry.includes("스트리밍") || normalizedIndustry.includes("streaming")) {
    return getMediaPreset(brandTone);
  }

  // Default to tech preset
  console.warn(`No specific preset found for industry "${industry}". Using Tech preset as default.`);
  return getTechPreset(brandTone);
}

export { getFinancePreset } from "./finance";
export { getEcommercePreset } from "./ecommerce";
export { getHealthcarePreset } from "./healthcare";
export { getTechPreset } from "./tech";
export { getEducationPreset } from "./education";
export { getFoodPreset } from "./food";
export { getRealEstatePreset } from "./realestate";
export { getFashionPreset } from "./fashion";
export { getGamingPreset } from "./gaming";
export { getTravelPreset } from "./travel";
export { getFitnessPreset } from "./fitness";
export { getHotelPreset } from "./hotel";
export { getAutomotivePreset } from "./automotive";
export { getMediaPreset } from "./media";
