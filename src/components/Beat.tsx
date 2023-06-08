import { styled } from "styled-components";
import { BeatType } from "./types";
import Link from "next/link";
import { useActId } from "@/hooks/useRouterQueryId";
import { useCallback } from "react";
import { useDeleteBeat } from "@/hooks/useDeleteBeat";
import { useRouter } from "next/router";

interface BeatProps {
  beat: BeatType;
  showDetails?: boolean;
}

const Container = styled.div`
  border: 1px solid #eee;
  flex-grow: 1;
  padding: 5px;
  border-radius: 20px;
`;

const BeatDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
`;

export const Beat = ({beat, showDetails = false}: BeatProps): JSX.Element => {
  const actId = useActId();

  const { deleteBeat } = useDeleteBeat(beat.id);
  const handleDeleteBeat = useCallback(() => {
    deleteBeat()
      .then(() => {
        // re-sync act data
      })
      .catch(() => {
        console.error('Getting a 405 method not allowed from the endpoint');
      });
  }, [deleteBeat]);
  
  return (
    <Container>
      {beat.time}&nbsp;
      {beat.name}
      {showDetails && (
        <BeatDetails>
          Content: {beat.content}
          Notes: {beat.notes}
        </BeatDetails>
      )}
      {actId != null && (
        <Link href={`/act/${actId}/beat/${beat.id}`}>
          <button>View Beat</button>
        </Link>
      )}
      {actId != null && (
        <Link href={`/act/${actId}/beat/${beat.id}/edit`}>
          <button>Edit Beat</button>
        </Link>
      )}
      <button onClick={handleDeleteBeat}>Delete Beat</button>
    </Container>
  );
}