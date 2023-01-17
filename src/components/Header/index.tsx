import { NavList } from "../NavList";
import { StyledHeader } from "./style";
import { FaHamburger } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <StyledHeader display={isOpen}>
      <h1>Luís Nunes</h1>

      <NavList />
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CgClose /> : <FaHamburger />}
      </button>
    </StyledHeader>
  );
};
