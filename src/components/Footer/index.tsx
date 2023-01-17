import { NavList } from "../NavList";
import { StyledFooter } from "./style";

export const Footer = () => {
  return (
    <StyledFooter>
      <section className="footerHeader">
        <h3>Luís Nunes</h3>
        <NavList />
      </section>
      <section className="info">
        <section className="personal">
          <h4>Quem sou?</h4>
          <p>Dev FrontEnd Júnior com experiência em Scrum, Jira e GitFlow</p>
        </section>
        <section className="stacks">
          <h4>Stacks</h4>
          <p>
            HTML/CSS/JS/TS
            <br />
            React.js/router-dom
            <br />
            styled-components
            <br />
            yup+hookForm
            <br />
            Inglês avançado
          </p>
        </section>
      </section>
    </StyledFooter>
  );
};
