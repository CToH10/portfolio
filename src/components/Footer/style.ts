import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--color-black);
  color: var(--color-grey-60);
  padding: 1vh 0;

  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2vh;

  position: absolute;
  bottom: 0;
  left: 0;

  .footerHeader {
    display: flex;
    align-items: flex-end;
    border-bottom: 2px solid var(--color-grey-90);
    padding-bottom: 1vh;
    width: 95%;
    margin: 0 auto;

    justify-content: space-between;

    h3 {
      font-size: var(--font-size-20);
      font-weight: var(--semiBold);
      width: 40%;

      @media (min-width: 700px) {
        font-size: var(--font-size-24);
      }
    }

    li {
      font-size: var(--font-size-12);
      font-weight: var(--light);

      @media (min-width: 700px) {
        font-size: var(--font-size-14);
      }
    }

    nav {
      width: fit-content;
    }
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    width: 95%;
    margin: 0 auto;

    section {
      max-width: 48%;
      min-width: 40%;
      width: fit-content;

      h4 {
        font-size: var(--font-size-12);
        font-weight: var(--semiBold);

        @media (min-width: 700px) {
          font-size: var(--font-size-14);
        }
      }

      p {
        font-size: var(--font-size-12);
        font-weight: var(--light);

        @media (min-width: 700px) {
          font-size: var(--font-size-14);
        }
      }
    }
  }
  .footerHeader,
  .info {
    max-width: 600px;
    margin: 0 auto;
  }
`;
