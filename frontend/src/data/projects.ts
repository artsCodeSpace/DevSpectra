export interface Project {
  title: string;
  type: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
}

export const selectedProjects: Project[] = [
  {
    title: "Velocity",
    type: "SaaS Landing Platform",
    description:
      "Complete SaaS experience with landing pages, authentication and billing integration.",
    tags: [
      "Landing",
      "Authentication",
      "Billing",
    ],
    image: "/projects/velocity.avif",
  },

  {
    title: "Bazaar",
    type: "Marketplace Platform",
    description:
      "Multi-vendor marketplace with analytics dashboard and scalable commerce architecture.",
    tags: [
      "Marketplace",
      "Analytics",
      "E-Commerce",
    ],
    image: "/projects/bazaar.avif",
  },

  {
    title: "AstraCorp",
    type: "Corporate Website",
    description:
      "Brand website with careers portal and modern corporate experience.",
    tags: [
      "Brand",
      "Careers",
      "CMS",
    ],
    image: "/projects/astracorp.avif",
  },
];

export const recentProjects: Project[] = [
  {
    title: "Spiritual E-Commerce Website",
    type: "E-Commerce Website",
    description:
      "Developed a spiritual e-commerce platform with modern shopping experience.",
    tags: [
      "Next.js",
      "Commerce",
    ],
    image: "/projects/spiritual.jpg",
  },

  {
    title: "Scholar Portfolio Website",
    type: "Portfolio Website",
    description:
      "Built a professional portfolio platform for an academic researcher.",
    tags: [
      "Portfolio",
      "CMS",
    ],
    image: "/projects/scholar.jpg",
  },
];