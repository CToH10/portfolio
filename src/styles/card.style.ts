import styled from "styled-components";

export const StyledCard = styled.section`
  background-color: var(--color-black-opaque);
  backdrop-filter: blur(12px);
  /* background: var(--card-moz-gradient-grey-to-black);
  background: var(--card-webkit-gradient-grey-to-black);
  background: var(--card-gradient-grey-to-black); */

  color: var(--font-grey-60);

  position: relative;
  top: 10vh;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(8px, 5vw, 25px);

  width: fit-content;
  border: none;
  border-radius: var(--radius);

  padding: 8px;

  h4 {
    font-size: var(--font-size-32);
    font-weight: var(--semiBold);
  }

  p {
    font-size: var(--font-size-16);
    font-weight: var(--light);
  }
`;
