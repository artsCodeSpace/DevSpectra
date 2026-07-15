import { Code2, ShoppingBag, Palette, Megaphone, type LucideIcon } from "lucide-react";

export type ServiceKey = "webdev" | "ecommerce" | "branding" | "marketing";

export interface ServiceItem {
  key: ServiceKey;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  stats: { label: string; value: string }[];
  accent: string;
}

export const SERVICES: ServiceItem[] = [
  {
    key: "webdev",
    icon: Code2,
    title: "Custom Web Development",
    tagline: "Fast. Accessible. Built to scale.",
    description:
      "Modern React, Next.js and TanStack Start apps engineered for Core Web Vitals, SEO, and long-term maintainability.",
    features: [
      "React / Next.js / TanStack",
      "Progressive Web Apps",
      "Cloud-native deployments",
      "Type-safe end to end",
    ],
    stats: [
      { label: "Lighthouse", value: "98+" },
      { label: "TTFB", value: "<200ms" },
    ],
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    key: "ecommerce",
    icon: ShoppingBag,
    title: "E-commerce",
    tagline: "Stores that sell while you sleep.",
    description:
      "Scalable storefronts with product management, secure checkout, and analytics baked in from day one.",
    features: [
      "Stripe / Razorpay checkout",
      "Inventory & orders dashboard",
      "SEO-ready product pages",
      "Multi-vendor ready",
    ],
    stats: [
      { label: "Conversion", value: "+38%" },
      { label: "Uptime", value: "99.9%" },
    ],
    accent: "from-fuchsia-500 to-pink-500",
  },
  {
    key: "branding",
    icon: Palette,
    title: "UI / UX & Branding",
    tagline: "Identity that converts.",
    description:
      "Design systems, brand identity, and conversion-focused interfaces that make your product unforgettable.",
    features: [
      "Design systems in Figma",
      "Logo & brand identity",
      "Motion & micro-interactions",
      "Accessibility first",
    ],
    stats: [
      { label: "Engagement", value: "+62%" },
      { label: "Bounce", value: "-41%" },
    ],
    accent: "from-cyan-400 to-violet-500",
  },
  {
    key: "marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    tagline: "Grow with data, not luck.",
    description:
      "SEO, content, and paid strategy engineered around your funnel — with dashboards that tell the truth.",
    features: [
      "Technical & on-page SEO",
      "Content strategy",
      "Paid ads & retargeting",
      "Analytics dashboards",
    ],
    stats: [
      { label: "Organic", value: "+3.2x" },
      { label: "CAC", value: "-47%" },
    ],
    accent: "from-emerald-400 to-cyan-400",
  },
];
