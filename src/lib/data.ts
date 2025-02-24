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

interface Category {
  id: number;
  title: string;
  value: string
}

export const categories: Category[] = [
  {
    id: 1,
    title: "Camera",
    value: "camera"
  },
  {
    id: 2,
    title: "Gaming",
    value: "gaming"
  },
  {
    id: 3,
    title: "Fashion",
    value: "fashion"
  },
  {
    id: 4,
    title: "Books",
    value: "books"
  },
  {
    id: 5,
    title: "Travel",
    value: "travel"
  },
  {
    id: 6,
    title: "Grocery",
    value: "grocery"
  },
  {
    id: 7,
    title: "Watches",
    value: "watches"
  },
  {
    id: 8,
    title: "Automotive",
    value: "automotive"
  },
  {
    id: 9,
    title: "Furniture",
    value: "furniture"
  },
  {
    id: 10,
    title: "Television",
    value: "television"
  }
]

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
