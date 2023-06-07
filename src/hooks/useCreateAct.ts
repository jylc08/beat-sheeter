import useSWRMutation from 'swr/mutation';

function createNewAct(url: string, { arg: actName }: { arg: string }) {
  return fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: actName,
    })
  }).then(res => res.json());
} 

export function useCreateAct() {
  const { trigger } = useSWRMutation('/api/acts', createNewAct);
  return { createNewAct: trigger };
}