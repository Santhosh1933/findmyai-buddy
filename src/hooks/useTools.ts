import { useQuery } from '@tanstack/react-query';
import { useCategories } from './useCategories';
import type { Tool } from '@/types';

const fetchToolByPath = async (path: string): Promise<Tool> => {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Failed to fetch tool from ${path}`);
  }
  return response.json();
};

const fetchAllTools = async (paths: string[]): Promise<Tool[]> => {
  const uniquePaths = [...new Set(paths)];
  const tools = await Promise.all(uniquePaths.map(fetchToolByPath));
  return tools;
};

export const useTools = () => {
  const { data: categories, isLoading: categoriesLoading } = useCategories();
  
  const allToolPaths = categories?.flatMap(cat => cat.listedTools.map(t => t.path)) ?? [];
  const uniquePaths = [...new Set(allToolPaths)];
  
  return useQuery({
    queryKey: ['tools', uniquePaths],
    queryFn: () => fetchAllTools(uniquePaths),
    enabled: !categoriesLoading && uniquePaths.length > 0,
    staleTime: 5 * 60 * 1000,
  });
};

export const useToolBySlug = (slug: string) => {
  const { data: categories } = useCategories();
  
  const toolInfo = categories?.flatMap(cat => cat.listedTools).find(t => t.slug === slug);
  const toolPath = toolInfo?.path;
  
  return useQuery({
    queryKey: ['tool', slug],
    queryFn: () => fetchToolByPath(toolPath!),
    enabled: !!toolPath,
    staleTime: 5 * 60 * 1000,
  });
};

export const useFeaturedTools = () => {
  const { data: tools, ...rest } = useTools();
  const featured = tools?.filter((t) => t.featured) ?? [];
  return { data: featured, ...rest };
};

export const useToolOfTheWeek = () => {
  const { data: categories } = useCategories();
  
  // Get first category's tool of the week as the main one
  const firstCategory = categories?.[0];
  const toolOfTheWeekSlug = firstCategory?.toolOfTheWeek;
  const toolInfo = firstCategory?.listedTools.find(t => t.slug === toolOfTheWeekSlug);
  const toolPath = toolInfo?.path;
  
  return useQuery({
    queryKey: ['toolOfTheWeek', toolOfTheWeekSlug],
    queryFn: () => fetchToolByPath(toolPath!),
    enabled: !!toolPath,
    staleTime: 5 * 60 * 1000,
  });
};

export const useToolsByCategory = (categorySlug: string) => {
  const { data: categories, isLoading: categoriesLoading } = useCategories();
  
  const category = categories?.find(cat => cat.slug === categorySlug);
  const toolPaths = category?.listedTools.map(t => t.path) ?? [];
  
  return useQuery({
    queryKey: ['tools', 'category', categorySlug],
    queryFn: () => fetchAllTools(toolPaths),
    enabled: !categoriesLoading && toolPaths.length > 0,
    staleTime: 5 * 60 * 1000,
  });
};
