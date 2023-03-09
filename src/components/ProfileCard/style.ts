import styled from "styled-components";
import { StyledCard } from "../../styles/card.style";

export const StyledProfileCard = styled(StyledCard)`
  figure {
    height: 75px;
    width: 75px;
  }

  figure img {
    border-radius: var(--image-radius);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  figcaption {
    display: none;
  }
`;
