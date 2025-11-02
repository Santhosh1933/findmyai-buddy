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

export const mockTools: Tool[] = [
  {
    id: "1",
    name: "ChatGPT",
    slug: "chatgpt",
    tagline: "Conversational AI that helps you write, learn, and brainstorm",
    description: "ChatGPT is an advanced AI language model that can assist with writing, coding, analysis, and creative tasks through natural conversation.",
    about: "Developed by OpenAI, ChatGPT represents a breakthrough in conversational AI technology. It uses advanced natural language processing to understand context, generate human-like responses, and assist with a wide range of tasks from creative writing to technical problem-solving. The model has been trained on diverse internet text and can engage in nuanced conversations while maintaining context over extended interactions.",
    officialUrl: "https://chat.openai.com",
    thumbnailUrl: "/placeholder.svg",
    categories: ["Writing & Content", "Productivity", "Code & Development"],
    tags: ["conversational-ai", "writing", "coding", "analysis", "chatbot", "gpt"],
    rating: 4.8,
    reviewCount: 12543,
    featured: true,
    toolOfTheWeek: true,
    pricing: "Free with paid plans starting at $20/month"
  },
  {
    id: "2",
    name: "Midjourney",
    slug: "midjourney",
    tagline: "Create stunning AI-generated artwork and images",
    description: "Midjourney is a cutting-edge AI art generator that transforms text descriptions into beautiful, unique images and artwork.",
    about: "Midjourney is an independent research lab producing an AI program that creates images from textual descriptions. Known for its distinctive artistic style and high-quality outputs, Midjourney has become a favorite among digital artists, designers, and creative professionals. The platform operates through Discord and offers various subscription tiers to suit different creative needs.",
    officialUrl: "https://midjourney.com",
    thumbnailUrl: "/placeholder.svg",
    categories: ["Image & Design"],
    tags: ["image-generation", "art", "design", "creative", "diffusion"],
    rating: 4.7,
    reviewCount: 8932,
    featured: true,
    toolOfTheWeek: false,
    pricing: "Subscription starting at $10/month"
  },
  {
    id: "3",
    name: "Notion AI",
    slug: "notion-ai",
    tagline: "AI-powered workspace for notes, docs, and projects",
    description: "Notion AI integrates artificial intelligence directly into your workspace to help you write better, think bigger, and work faster.",
    about: "Notion AI brings the power of artificial intelligence to the popular Notion workspace platform. It helps users generate content, summarize documents, improve writing, and manage projects more efficiently. The AI assistant understands context from your existing notes and databases, making it a powerful tool for knowledge management and productivity.",
    officialUrl: "https://notion.so",
    thumbnailUrl: "/placeholder.svg",
    categories: ["Productivity", "Writing & Content"],
    tags: ["productivity", "notes", "documentation", "writing", "workspace"],
    rating: 4.6,
    reviewCount: 6421,
    featured: false,
    toolOfTheWeek: false,
    pricing: "Free with AI add-on at $10/month"
  },
  {
    id: "4",
    name: "Jasper AI",
    slug: "jasper-ai",
    tagline: "AI copywriter for marketing teams and content creators",
    description: "Jasper is an AI writing assistant specialized in creating high-quality marketing copy, blog posts, and social media content.",
    about: "Jasper AI is built specifically for marketing professionals and content creators who need to produce high-quality copy at scale. With over 50 templates and the ability to learn your brand voice, Jasper helps teams create compelling content across multiple channels. The platform supports multiple languages and integrates with popular tools like Surfer SEO and Grammarly.",
    officialUrl: "https://jasper.ai",
    thumbnailUrl: "/placeholder.svg",
    categories: ["Writing & Content"],
    tags: ["copywriting", "marketing", "content-creation", "seo", "blog"],
    rating: 4.5,
    reviewCount: 5234,
    featured: false,
    toolOfTheWeek: false,
    pricing: "Subscription starting at $49/month"
  },
  {
    id: "5",
    name: "Tableau AI",
    slug: "tableau-ai",
    tagline: "Data analytics and visualization powered by AI",
    description: "Tableau AI brings intelligent data insights and automated analytics to help businesses make data-driven decisions faster.",
    about: "Tableau AI combines powerful data visualization capabilities with artificial intelligence to make data analysis accessible to everyone. The platform uses AI to suggest relevant visualizations, detect anomalies, and provide natural language insights from your data. It's trusted by thousands of organizations worldwide for business intelligence and analytics.",
    officialUrl: "https://tableau.com",
    thumbnailUrl: "/placeholder.svg",
    categories: ["Data & Analytics"],
    tags: ["data-analytics", "visualization", "business-intelligence", "reporting"],
    rating: 4.7,
    reviewCount: 4123,
    featured: false,
    toolOfTheWeek: false,
    pricing: "Enterprise pricing starting at $70/user/month"
  },
  {
    id: "6",
    name: "Copy.ai",
    slug: "copy-ai",
    tagline: "AI-powered copywriting for marketing and sales",
    description: "Copy.ai generates high-quality marketing copy, product descriptions, and sales emails in seconds using advanced AI.",
    about: "Copy.ai is designed to help marketers and sales teams overcome writer's block and scale their content production. The platform offers a wide range of templates for different use cases, from social media posts to long-form blog content. With support for 25+ languages and a user-friendly interface, Copy.ai makes it easy to generate professional copy quickly.",
    officialUrl: "https://copy.ai",
    thumbnailUrl: "/placeholder.svg",
    categories: ["Writing & Content"],
    tags: ["copywriting", "marketing", "sales", "email", "product-descriptions"],
    rating: 4.4,
    reviewCount: 3892,
    featured: false,
    toolOfTheWeek: false,
    pricing: "Free plan available, Pro at $49/month"
  }
];

export const categories = [
  {
    name: "Writing & Content",
    description: "AI tools for content creation, copywriting, and editing",
    toolCount: 42,
    slug: "writing-content"
  },
  {
    name: "Image & Design",
    description: "Create, edit, and enhance images with AI",
    toolCount: 38,
    slug: "image-design"
  },
  {
    name: "Data & Analytics",
    description: "Analyze data and generate insights with AI",
    toolCount: 29,
    slug: "data-analytics"
  },
  {
    name: "Productivity",
    description: "Boost your workflow with AI-powered productivity tools",
    toolCount: 51,
    slug: "productivity"
  },
  {
    name: "Video & Audio",
    description: "Generate, edit, and enhance video and audio content",
    toolCount: 24,
    slug: "video-audio"
  },
  {
    name: "Code & Development",
    description: "AI assistants for coding and software development",
    toolCount: 33,
    slug: "code-development"
  }
];
