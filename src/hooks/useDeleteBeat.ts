import useSWRMutation from 'swr/mutation';
import { BeatType } from '@/components/types';
 
function deleteBeat(url: string) {
  return fetch(url, {
    method: 'DELETE',
  });
} 

export function useDeleteBeat(id?: BeatType['id']) {
  const key = id != null ? `/api/acts/beats/${id}` : null;
  const { trigger } = useSWRMutation(key, deleteBeat);
  return { deleteBeat: trigger };
}