import styled from "styled-components";

interface iStyledHeader {
  display?: boolean;
}

export const StyledHeader = styled.header<iStyledHeader>`
  background-color: var(--color-black);
  color: var(--color-grey-60);

  position: absolute;
  left: 0;
  top: 0;

  box-shadow: 0px 2px 4px 0px var(--color-grey-shadow);

  width: 100%;
  height: clamp(65px, 10vh, 70px);

  display: flex;
  justify-content: space-around;
  align-items: center;

  nav {
    position: absolute;
    top: 10vh;
    left: 5%;

    display: ${({ display }) => (display ? "block" : "none")};

    width: fit-content;
    width: clamp(280px, 90vw, 350px);
    height: 3vh;

    border-radius: 4px;

    ul {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    @media (min-width: 700px) {
      display: block;
      position: relative;
      top: 0;
      right: 0;
    }
  }

  button {
    background-color: var(--color-black);
    border: 1px solid var(--color-black);
    width: 9vw;
    height: 5vh;

    @media (min-width: 700px) {
      display: none;
    }

    svg {
      display: block;
      color: var(--color-grey-60);
      width: 100%;
      height: 100%;

      :hover {
        color: var(--color-yellow);
      }
    }
  }
`;
