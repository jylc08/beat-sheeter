import { styled } from "styled-components";
import { ActType, BeatType } from "./types"
import { useBeats } from "@/hooks/useBeats";
import { Beat } from "./Beat";
import Link from "next/link";

interface ActProps {
  act: ActType;
}

const BeatList = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const ActContainer = styled(Link)`
  border: 1px solid #eee;
  border-radius: 20px;
`;

export const Act = ({act}: ActProps): JSX.Element => {
  const { data: beats } = useBeats(act.id);

  return (
    <ActContainer href={`/act/${act.id}`}>
      <h1>{act.name}</h1>
      <BeatList>
        {beats?.map(beat => {
          return <Beat beat={beat}/>;
        })}
      </BeatList>
    </ActContainer>
  );
}