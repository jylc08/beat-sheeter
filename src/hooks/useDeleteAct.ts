import useSWRMutation from 'swr/mutation';
import { ActType } from '@/components/types';
 
function deleteAct(url: string) {
  return fetch(url, {
    method: 'DELETE',
  });
} 

export function useDeleteAct(id?: ActType['id']) {
  const key = id != null ? `/api/acts/${id}` : null;
  const { trigger } = useSWRMutation(key, deleteAct);
  return { deleteAct: trigger };
}