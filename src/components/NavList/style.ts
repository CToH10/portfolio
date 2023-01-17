import styled from "styled-components";

export const StyledNav = styled.nav`
  background-color: var(--color-black);
  position: relative;
  ul {
    display: flex;
    gap: 1vw;
  }

  a {
    color: var(--color-grey-60);
  }

  .active {
    color: var(--color-yellow);
  }
`;
