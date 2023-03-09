import styled from "styled-components";

export const StyledMain = styled.main`
  overflow: auto;

  width: 100%;
  max-height: 70%;

  position: absolute;
  top: clamp(65px, 10vh, 70px);

  background: var(--color-grey-90);
  background: var(--moz-gradient-grey-to-black);
  background: var(--webkit-gradient-grey-to-black);
  background: var(--gradient-grey-to-black);

  /* padding-bottom: 20px; */
`;