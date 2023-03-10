import { NavList } from "../NavList";
import { StyledHeader } from "./style";
import {
  FaHamburger,
  // ,FaBars
} from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <StyledHeader display={isOpen.toString()}>
      <h1 onClick={() => navigate("/")}>Luís Nunes</h1>

      <NavList />
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <CgClose color="var(--font-black-80)" />
        ) : (
          <FaHamburger color="var(--font-black-80)" />
        )}
      </button>
    </StyledHeader>
  );
};
