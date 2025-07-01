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

export { Feature, Testimony, Category };
