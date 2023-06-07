import useSWR from 'swr';
import { ActType } from '../components/types';

export function useAct(id?: ActType['id']) {
  const key = id != null ? `/api/acts/${id}` : null;
  const { data, error, isLoading } = useSWR(key, (...args) => fetch(...args).then(res => res.json()))

  return {
    data: data as ActType,
    error,
    isLoading,
  }
}