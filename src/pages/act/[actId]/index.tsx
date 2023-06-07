import { Beat } from "@/components/Beat";
import { useAct } from "@/hooks/useAct";
import { useActId } from "@/hooks/useActId";
import { useBeats } from "@/hooks/useBeats";
import Link from "next/link";
import { styled } from "styled-components";

const ActHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ActActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default function ActPage() {
  const actId = useActId();
  const { data: beats } = useBeats(actId);
  const { data: act } = useAct(actId);
  
  return (
    <>
      <ActHeader>
      {act != null && (<h1>{act.name}</h1>)}
        <ActActions>
          <Link href={`/act/${actId}/beat/new`}>
            <button>New Beat</button>
          </Link>
        </ActActions>
      </ActHeader>
      {beats?.map(beat => {
        return <Beat beat={beat} showDetails key={beat.id}/>;
      })}
    </>
  );
}