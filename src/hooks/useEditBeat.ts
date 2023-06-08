import useSWRMutation from 'swr/mutation';
import { BeatType } from '@/components/types';
import { EditBeatArgs } from './useCreateBeat';
 
function editBeat(url: string, { arg }: { arg: EditBeatArgs }) {
  return fetch(url, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });
} 

export function useEditBeat(id?: BeatType['id']) {
  const key = id != null ? `/api/acts/beats/${id}` : null;
  const { trigger } = useSWRMutation(key, editBeat);
  return { editBeat: trigger };
}