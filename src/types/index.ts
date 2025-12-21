export interface ToolSEO {
  metaDescription: string;
  keywords: string[];
  linkType: 'dofollow' | 'nofollow';
}

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
  featured: boolean;
  pricing: string;
  seo: ToolSEO;
}

export interface ListedTool {
  name: string;
  slug: string;
  path: string;
  thumbnail: string;
  toolOfTheWeek?: boolean;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  toolCount: number;
  toolOfTheWeek: string;
  listedTools: ListedTool[];
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
