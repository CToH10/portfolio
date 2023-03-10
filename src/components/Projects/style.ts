import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2vh;

  padding: clamp(15px, 5vh, 22px);
  width: 100%;

  li {
    width: clamp(256px, 55vw, 90%);
  }

  @media (min-width: 700px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    padding: clamp(15px, 5vh, 22px) 10px;
    li {
      max-width: 47%;
    }
  }
`;
