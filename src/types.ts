/**
 * 업종별 Figma Design System & Tailwind Spec Generator
 * Type Definitions
 */

export type BrandTone = "신뢰" | "프리미엄" | "친근" | "테크" | "미니멀" | "활기찬" | "고급";

export interface ColorScale {
  "50": string;
  "100": string;
  "200": string;
  "300": string;
  "400": string;
  "500": string;
  "600": string;
  "700": string;
  "800": string;
  "900": string;
}

export interface Meta {
  industry: string;
  brandTone: string;
  styleKeywords: string[];
  targetFeeling: string;
}

export interface FigmaGuide {
  pages: string[];
  namingRule: string;
  autoLayoutRules: {
    grid: string;
    spacingScale: number[];
    radiusScale: number[];
    typeScaleTokens: string[];
    breakpoints: string[];
  };
}

export interface LayoutHeader {
  heightPx: number;
  structure: string[];
  stickyBehavior: string;
  desktop: {
    paddingX: string;
    maxWidth: string;
    navItems: number;
  };
  mobile: {
    pattern: string;
    heightPx: number;
  };
  tailwindExample: string;
}

export interface LayoutHero {
  structure: string[];
  desktopGrid: string;
  mobileStack: string;
  padding: string;
  background: string;
  imageStyle: string;
  tailwindExample: string;
}

export interface LayoutFooter {
  structure: string[];
  legalItems: string[];
  tailwindExample: string;
}

export interface Section {
  name: string;
  goal: string;
  layoutRule: string;
  tailwindExample: string;
}

export interface Layout {
  header: LayoutHeader;
  hero: LayoutHero;
  footer: LayoutFooter;
  sections: Section[];
}

export interface Colors {
  primary: ColorScale;
  secondary: ColorScale;
  gray: ColorScale;
  usageRules: {
    primaryUse: string;
    secondaryUse: string;
    surfaceBg: string;
    border: string;
    textStrong: string;
    textWeak: string;
  };
  accessibilityNotes: string[];
}

export interface TypographyScale {
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
  letterSpacing: string;
}

export interface Typography {
  fontFamily: {
    primary: string;
    fallback: string;
    altSuggestion: string;
  };
  scale: {
    h1: TypographyScale;
    h2: TypographyScale;
    h3: TypographyScale;
    body: TypographyScale;
    caption: TypographyScale;
  };
}

export interface ButtonStyle {
  heightPx: number;
  padding: string;
  radius: string;
  tailwind: string;
}

export interface PrimaryButton extends ButtonStyle {
  bg: string;
  text: string;
  hover: string;
  disabled: string;
}

export interface SecondaryButton extends ButtonStyle {
  bg?: string;
  border: string;
  text: string;
  hover: string;
  disabled: string;
}

export interface Input {
  heightPx: number;
  radius: string;
  border?: string;
  placeholder: string;
  focusRing: string;
  tailwind: string;
}

export interface Card {
  radius: string;
  padding: string;
  shadow: string;
  border: string;
  tailwind: string;
}

export interface Components {
  button: {
    primary: PrimaryButton;
    secondary: SecondaryButton;
  };
  input: Input;
  card: Card;
}

export interface TailwindMapping {
  tailwindConfigExtend: {
    colors: {
      primary: string;
      secondary: string;
      gray: string;
    };
    fontFamily: {
      sans: string[];
    };
    aspectRatio?: {
      [key: string]: string;
    };
  };
  classSnippets: {
    container: string;
    header: string;
    hero: string;
    primaryButton: string;
    secondaryButton: string;
    card: string;
    input: string;
    thumbnail?: string;
    poster?: string;
  };
  implementationNotes: string[];
}

export interface VariationPoint {
  category: string;
  field: string;
  reason: string;
}

export interface VariationSummary {
  changedPoints: VariationPoint[];
  unchangedPrinciples: string[];
}

export interface DesignSystemSpec {
  meta: Meta;
  figmaGuide: FigmaGuide;
  layout: Layout;
  colors: Colors;
  typography: Typography;
  components: Components;
  tailwindMapping: TailwindMapping;
  variationSummary: VariationSummary;
}

export interface GeneratorInput {
  industry: string;
  brandTone?: BrandTone;
}
