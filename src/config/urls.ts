// API URLs Configuration
export const API_URLS = {
  tools: '/data/tools.json',
  categories: '/data/categories.json',
  ads: '/data/ads.json',
} as const;

// External URLs Configuration
export const EXTERNAL_URLS = {
  twitter: 'https://twitter.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
} as const;

// Route URLs Configuration
export const ROUTES = {
  home: '/',
  directory: '/directory',
  about: '/about',
  tool: (slug: string) => `/tool/${slug}`,
  category: (slug: string) => `/directory?category=${slug}`,
} as const;
