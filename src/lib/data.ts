interface Feature {
  id: number;
  title: string;
  description: string;
}

interface Testimony {
  id: number;
  name: string;
  description: string;
  title: string;
}

interface shipping {
  id: number;
  title: string;
}

export const features: Feature[] = [
  {
    id: 1,
    title: "Affordable shipping",
    description: "Offers low-cost shipping options for customers.",
  },
  {
    id: 2,
    title: "1 & 1 Returns",
    description: "Provides a hassle-free return process for customers.",
  },
  {
    id: 3,
    title: "100% Secure payment",
    description: "Guarantee secured payment",
  },
  {
    id: 4,
    title: "Wide search",
    description: "Search for products from a wide range of categories.",
  },
  {
    id: 5,
    title: "24/7 Dedicated Support",
    description: "Anywhere, anytime customer support.",
  },
];

export const testimonials: Testimony[] = [
  {
    id: 1,
    name: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    title: "CEO",
  },
  {
    id: 2,
    name: "Maria Paul",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    title: "CTO",
  },
  {
    id: 3,
    name: "Jane Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    title: "COO",
  },
  {
    id: 4,
    name: "Smith John",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    title: "CFO",
  },
];
