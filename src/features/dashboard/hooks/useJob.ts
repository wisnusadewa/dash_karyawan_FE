import { useQuery } from '@tanstack/react-query';
import useJobService from './useJobService';

const useJob = () => {
  const { getAllJobService } = useJobService();

  const getAllJob = () => {
    return useQuery({
      queryKey: ['alljob'],
      queryFn: getAllJobService,
      retry: false,
    });
  };
  return { getAllJob };
};

export default useJob;
