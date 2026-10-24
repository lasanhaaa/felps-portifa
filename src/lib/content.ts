export const site = {
  name: "Felps",
  url: "https://felps.me",
  email: "hello@felps.me",
  location: "Sao Carlos, Brasil",
  timeZone: "America/Sao_Paulo",
  copyright: "Copyright © 2025 Felipe terra",
  madeIn: "Made in framer",
} as const;

export const socials = [
  { label: "Behance", href: "https://www.behance.net/FelipeTerra" },
  { label: "Instagram", href: "https://www.instagram.com/felps_ls/" },
] as const;

export const services = ["Web Design (UI/UX)", "Product design", "Art direction", "Motion Design"] as const;

export type Project = {
  name: string;
  href: string;
  /** Art-directed images, matching the Framer breakpoints. */
  images: {
    /** ≥ 1920px */
    xl: { src: string; width: number; height: number };
    /** 1200px – 1919px */
    desktop: { src: string; width: number; height: number };
    /** < 1200px */
    mobile: { src: string; width: number; height: number };
  };
};

export const projects: Project[] = [
  {
    name: "Greenlife",
    href: "https://greenlife-investment.de/",
    images: {
      xl: { src: "/images/work/greenlife-xl.png", width: 2252, height: 1940 },
      desktop: { src: "/images/work/greenlife.png", width: 2252, height: 1940 },
      mobile: { src: "/images/work/greenlife-mobile.png", width: 1730, height: 1484 },
    },
  },
  {
    name: "Yunilabs",
    href: "https://www.yunilabs.de/",
    images: {
      xl: { src: "/images/work/yunilabs-xl.png", width: 2252, height: 1940 },
      desktop: { src: "/images/work/yunilabs.png", width: 3000, height: 2000 },
      mobile: { src: "/images/work/yunilabs-mobile.png", width: 1740, height: 1484 },
    },
  },
  {
    name: "Fleetery",
    href: "https://www.fleetlery.com/en",
    images: {
      xl: { src: "/images/work/fleetery-xl.png", width: 2252, height: 1940 },
      desktop: { src: "/images/work/fleetery.png", width: 4096, height: 2731 },
      mobile: { src: "/images/work/fleetery-mobile.png", width: 1748, height: 1484 },
    },
  },
  {
    name: "Total Return",
    href: "https://invest.web3universe.de/total-return",
    images: {
      xl: { src: "/images/work/total-return-xl.png", width: 2252, height: 1940 },
      desktop: { src: "/images/work/total-return.png", width: 4096, height: 2731 },
      mobile: { src: "/images/work/total-return-mobile.png", width: 1732, height: 1484 },
    },
  },
];

export const about =
  "With a passion for design since childhood, I started my career at 15 and have since maintained a continuous commitment to research and improvement in the field, always seeking new knowledge and innovation.";
