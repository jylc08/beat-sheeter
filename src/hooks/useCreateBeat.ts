import useSWRMutation from 'swr/mutation';
import { ActType, BeatType } from '@/components/types';

export type EditBeatArgs = Pick<BeatType, 'cameraAngle' | 'content'| 'name' | 'notes' | 'time'>;
 
function createNewBeat(url: string, { arg }: { arg: EditBeatArgs }) {
  return fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  }).then(res => res.json());
} 

export function useCreateBeat(id?: ActType['id']) {
  const key = id != null ? `/api/acts/${id}/beats` : null;
  const { trigger } = useSWRMutation(key, createNewBeat);
  return { createNewBeat: trigger };
}