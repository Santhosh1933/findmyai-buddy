import { useQuery } from '@tanstack/react-query';
import { API_URLS } from '@/config/urls';
import type { Tool } from '@/types';

const fetchTools = async (): Promise<Tool[]> => {
  const response = await fetch(API_URLS.tools);
  if (!response.ok) {
    throw new Error('Failed to fetch tools');
  }
  return response.json();
};

export const useTools = () => {
  return useQuery({
    queryKey: ['tools'],
    queryFn: fetchTools,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useToolBySlug = (slug: string) => {
  const { data: tools, ...rest } = useTools();
  const tool = tools?.find((t) => t.slug === slug);
  return { data: tool, ...rest };
};

export const useFeaturedTools = () => {
  const { data: tools, ...rest } = useTools();
  const featured = tools?.filter((t) => t.featured) ?? [];
  return { data: featured, ...rest };
};

export const useToolOfTheWeek = () => {
  const { data: tools, ...rest } = useTools();
  const toolOfTheWeek = tools?.find((t) => t.toolOfTheWeek);
  return { data: toolOfTheWeek, ...rest };
};
