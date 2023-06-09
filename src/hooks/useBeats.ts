import useSWR from 'swr';
import { ActType, BeatType } from '../components/types';

export function useBeats(id?: ActType['id']) {
  const key = id != null ? `/api/acts/${id}/beats` : null;
  const { data, error, isLoading, mutate } = useSWR(key, (...args) => fetch(...args).then(res => res.json()))

  return {
    data: data as BeatType[],
    error,
    isLoading,
    mutate,
  }
}