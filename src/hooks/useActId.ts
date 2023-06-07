import { ActType } from "@/components/types";
import { useRouter } from "next/router";

export function useActId(): ActType['id'] | undefined {
  const router = useRouter();

  const actId = router.query.actId;
  if (typeof actId !== 'string') {
    return undefined;
  }

  const actIdNum = parseInt(actId, 10);
  if (isNaN(actIdNum)) {
    return undefined;
  }

  return actIdNum;
}