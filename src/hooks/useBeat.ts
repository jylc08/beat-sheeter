import useSWR from 'swr';
import { BeatType } from "@/components/types";

export function useBeat(id?: BeatType['id']) {
  const key = id != null ? `/api/beats/${id}` : null;
  const { data, error, isLoading } = useSWR(key, (...args) => fetch(...args).then(res => res.json()))

  return {
    data: data as BeatType,
    error,
    isLoading,
  }
}