import { styled } from "styled-components";
import { BeatType } from "./types";

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
    </Container>
  );
}