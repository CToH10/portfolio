import styled from "styled-components";

interface iStyledHeader {
  display?: string;
}

export const StyledHeader = styled.header<iStyledHeader>`
  background-color: var(--color-black-opaque);
  backdrop-filter: blur(12px);
  color: var(--font-black-80);

  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;

  box-shadow: 0px 2px 4px 0px var(--color-grey-shadow);

  width: 100%;
  height: clamp(65px, 10vh, 70px);

  display: flex;
  justify-content: space-around;
  align-items: center;

  h1 {
    cursor: pointer;
    font-size: var(--font-size-32);
    font-weight: var(--semiBold);
  }

  @media (min-width: 700px) {
    justify-content: center;
    gap: 150px;

    h1 {
      width: 161px;
    }
  }

  nav {
    position: absolute;
    top: 10vh;
    left: 0;

    display: ${({ display }) => (display === "true" ? "flex" : "none")};

    width: 100%;
    height: 3vh;

    border-radius: 4px;
    justify-content: center;

    padding: 1vh 0;

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
      background-color: transparent;
      width: 289px;

      ul {
        width: 100%;
        justify-content: space-between;
      }
    }
  }

  button {
    background-color: transparent;
    border: 1px transparent var(--color-black);
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
