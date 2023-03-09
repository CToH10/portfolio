import styled from "styled-components";

export const StyledNav = styled.nav`
  background-color: inherit;
  position: relative;
  ul {
    display: flex;
    gap: 1vw;
  }

  a {
    color: var(--font-grey-60);
  }

  .active {
    color: var(--font-yellow);
  }
`;
