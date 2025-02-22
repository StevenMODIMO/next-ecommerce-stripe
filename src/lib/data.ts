interface Feature {
  id: number;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: 1,
    title: "Payment Options",
    description: "Allows customers to choose from various payment methods.",
  },
  {
    id: 2,
    title: "Product Reviews",
    description: "Enables customers to leave reviews and ratings for products.",
  },
  {
    id: 3,
    title: "SEO",
    description: "Optimizes the website for better search engine visibility.",
  },
  {
    id: 4,
    title: "Security",
    description:
      "Implements measures to protect user data and prevent unauthorized access.",
  },
  {
    id: 5,
    title: "Support",
    description: "Provides assistance and resolves customer queries or issues.",
  },
];
