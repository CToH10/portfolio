import { Link, useLocation } from "react-router-dom";
import { StyledNav } from "./style";

export const NavList = () => {
  const activePage = useLocation().pathname;
  return (
    <StyledNav>
      <ul>
        <li>
          {
            <Link
              to="/profile"
              className={activePage === "/profile" ? "active" : ""}
            >
              Perfil
            </Link>
          }
        </li>
        <li>
          {
            <Link
              to="/projects"
              className={activePage === "/projects" ? "active" : ""}
            >
              Projetos
            </Link>
          }
        </li>
        <li>
          {
            <Link
              to="/experiences"
              className={activePage === "/experiences" ? "active" : ""}
            >
              Experiências
            </Link>
          }
        </li>
        <li>
          {
            <Link
              to="/contact"
              className={activePage === "/contact" ? "active" : ""}
            >
              Contato
            </Link>
          }
        </li>
      </ul>
    </StyledNav>
  );
};
