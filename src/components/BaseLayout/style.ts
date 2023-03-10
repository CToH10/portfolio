import styled from "styled-components";

export const StyledMain = styled.main`
  overflow: auto;

  width: 100%;
  min-height: 70%;
  height: 69%;

  padding-bottom: 2px;

  position: absolute;
  top: clamp(65px, 10vh, 70px);
`;

export const StyledGradient = styled.div`
  position: absolute;

  height: 100%;
  width: 100%;

  background: var(--color-grey-90);
  background: var(--moz-gradient-grey-to-black);
  background: var(--webkit-gradient-grey-to-black);
  background: var(--gradient-grey-to-black);
`;
