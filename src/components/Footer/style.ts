import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--color-black);
  color: var(--color-grey-60);
  padding-bottom: 1vh;

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

    h3 {
      font-size: var(--font-size-20);
      width: 40%;
    }

    li {
      font-size: var(--font-size-12);
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
      }

      p {
        font-size: var(--font-size-12);
      }
    }
  }
  .footerHeader,
  .info {
    max-width: 650px;
    margin: 0 auto;
  }
`;
