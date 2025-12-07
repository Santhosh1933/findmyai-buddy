import { useQuery } from '@tanstack/react-query';
import { API_URLS } from '@/config/urls';
import type { Category } from '@/types';

const fetchCategories = async (): Promise<Category[]> => {
  const response = await fetch(API_URLS.categories);
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }
  return response.json();
};

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    staleTime: 5 * 60 * 1000,
  });
};

export const useCategoryBySlug = (slug: string) => {
  const { data: categories, ...rest } = useCategories();
  const category = categories?.find((c) => c.slug === slug);
  return { data: category, ...rest };
};
