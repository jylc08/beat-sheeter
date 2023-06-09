import useSWR from 'swr';
import { ActType } from '../components/types';

export function useActs() {
  const { data, error, isLoading, mutate } = useSWR('/api/acts', (...args) => fetch(...args).then(res => res.json()))

  return {
    // run-time type checking needed! (narrowing)
    data: data as ActType[],
    error,
    isLoading,
    mutate,
  }
}