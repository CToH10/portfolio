import { StyledContactHeader, StyledList } from "./style";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

export const ContactInfo = () => {
  return (
    <>
      <StyledContactHeader className="pageHeader">
        <h2>Formas de contato</h2>
        <p>
          Se você gostou do que viu, quer tirar dúvidas ou se conectar, pode
          chamar nos links abaixo
        </p>
      </StyledContactHeader>

      <StyledList>
        <li>
          <a
            href="https://www.linkedin.com/in/luisnunesdev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            /luisnunesdev
            <SiLinkedin />
          </a>
          <p>
            Respondo de segunda à sexta
            <br />
            Eventualmente em finais de semana
          </p>
        </li>
        <li>
          <a
            href="https://github.com/CToH10"
            target="_blank"
            rel="noopener noreferrer"
          >
            /CToH10
            <SiGithub />
          </a>
        </li>
        <li>
          <a href="mailto:">
            Email profissional
            <SiGmail />
          </a>
          <p>
            Respondo de segunda à sexta
            <br />
            Eventualmente em finais de semana
          </p>
        </li>
      </StyledList>
    </>
  );
};
