import styled from "styled-components";
import { StyledCard } from "../../../styles/card.style";

export const StyledProjectCard = styled(StyledCard)`
  flex-direction: column;
  width: clamp(256px, 55vw, 90%);

  h4 {
    font-size: var(--font-size-24);
    max-width: 90%;
    height: clamp(30px, 5vh, 33px);

    text-transform: capitalize;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  p {
    font-size: var(--font-size-20);
  }

  a {
    font-size: var(--font-size-16);
    color: var(--font-grey-60);
  }
`;
