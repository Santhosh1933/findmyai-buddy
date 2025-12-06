export interface Tool {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  about: string;
  officialUrl: string;
  thumbnailUrl: string;
  categories: string[];
  tags: string[];
  rating: number;
  reviewCount: number;
  featured: boolean;
  toolOfTheWeek: boolean;
  pricing: string;
}

export interface Category {
  name: string;
  description: string;
  toolCount: number;
  slug: string;
}

export interface Ad {
  id: string;
  position: string;
  enabled: boolean;
  size: "small" | "medium" | "large" | "sidebar";
  banner: string;
  link: string;
  alt: string;
}
