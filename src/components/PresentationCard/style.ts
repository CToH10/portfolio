import styled from "styled-components";
import { StyledCard } from "../../styles/card.style";

export const StyledPresentationCard = styled(StyledCard)`
  top: 32vh;

  flex-direction: column;
  gap: clamp(8px, 1vh, 25px);

  width: clamp(256px, 55vw, 90%);

  p {
    text-align: justify;
  }
`;
