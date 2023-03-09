import styled from "styled-components";
import { StyledCard } from "../../styles/card.style";

export const StyledStacksCard = styled(StyledCard)`
  top: 11vh;

  flex-direction: column;
  gap: clamp(8px, 1vh, 25px);

  width: clamp(256px, 55vw, 90%);

  .stacks {
    display: flex;
    gap: 2.5vw;
  }
`;
