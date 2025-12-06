import { useQuery } from '@tanstack/react-query';
import { API_URLS } from '@/config/urls';
import type { Ad } from '@/types';

const fetchAds = async (): Promise<Ad[]> => {
  const response = await fetch(API_URLS.ads);
  if (!response.ok) {
    throw new Error('Failed to fetch ads');
  }
  return response.json();
};

export const useAds = () => {
  return useQuery({
    queryKey: ['ads'],
    queryFn: fetchAds,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useAdByPosition = (position: string) => {
  const { data: ads, ...rest } = useAds();
  const ad = ads?.find((a) => a.position === position && a.enabled);
  return { data: ad, ...rest };
};

export const useEnabledAds = () => {
  const { data: ads, ...rest } = useAds();
  const enabledAds = ads?.filter((a) => a.enabled) ?? [];
  return { data: enabledAds, ...rest };
};
