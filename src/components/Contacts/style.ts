import styled from "styled-components";

export const StyledContactHeader = styled.section`
  position: relative;
  top: 10vh;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 95%;

  display: flex;
  flex-direction: column;
  gap: 2vh;

  padding: 0 clamp(20px, 3vw, 50px);

  h2 {
    width: fit-content;
    border-bottom: 1px solid var(--color-black-80);

    font-size: var(--font-size-32);
    font-weight: var(--semiBold);

    color: var(--font-black-80);
  }

  p {
    font-size: var(--font-size-14);
    font-weight: var(--regular);

    color: var(--font-black-80);
  }

  @media (min-width: 700px) {
    width: 600px;
    padding: 0;
  }
`;

export const StyledList = styled.ul`
  position: relative;
  top: 20vh;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 50%;

  display: flex;
  flex-direction: column;
  gap: 3vh;

  @media (min-width: 700px) {
    align-items: center;
  }

  li {
    width: fit-content;
    position: relative;
    min-width: 150px;

    svg {
      color: var(--color-black-80);
    }

    @media (min-width: 700px) {
      width: 165px;
    }
  }

  li a {
    display: flex;
    gap: clamp(8px, 2vw, 20px);
    text-decoration: none;

    font-size: var(--font-size-20);
    font-weight: var(--regular);

    color: var(--font-black-80);

    @media (min-width: 700px) {
      justify-content: space-between;
    }
  }

  li p {
    width: fit-content;
    background-color: var(--color-black-opaque);
    backdrop-filter: blur(12px);

    border: none;
    border-radius: calc(var(--radius) * 2);

    padding: clamp(2px, 1vh, 12px) clamp(4px, 2vw, 16px);

    font-size: var(--font-size-12);
    font-weight: var(--light);
    color: var(--font-black-80);

    position: absolute;
    top: -5vh;
    right: -215px;
    right: -19vw;

    visibility: hidden;
  }

  li:hover {
    border-bottom: 1px solid var(--color-black);
    font-weight: var(--semiBold);

    a {
      color: var(--font-black);
    }

    svg {
      color: var(--color-black);
    }

    p {
      visibility: visible;
    }
  }
`;
