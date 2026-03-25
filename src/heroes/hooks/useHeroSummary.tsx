import { useQuery } from '@tanstack/react-query';
import { getSummaryAction } from '../actions/get-summary.action';

export const useHeroSummary = () => {
  return useQuery({
    queryKey: ['summary-info'],
    queryFn: () => getSummaryAction(),
    staleTime: 1000 * 60 * 5, // 5min
  });
};
