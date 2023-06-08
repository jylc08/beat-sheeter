import { ActType, BeatType } from "@/components/types";
import { useRouter } from "next/router";

function useRouterQueryId(id: string): ActType['id'] | BeatType['id'] | undefined {
  const router = useRouter();

  const queryId = router.query[id];
  if (typeof queryId !== 'string') {
    return undefined;
  }

  const queryIdNum = parseInt(queryId, 10);
  if (isNaN(queryIdNum)) {
    return undefined;
  }

  return queryIdNum;
}

export function useActId() {
  return useRouterQueryId('actId');
}

export function useBeatId() {
  return useRouterQueryId('beatId');
}