import { Footer } from "../Footer";
import { Header } from "../Header";
import { StyledGradient, StyledMain } from "./style";

interface iBase {
  children?: React.ReactNode;
}

export const BaseLayout = ({ children }: iBase) => {
  return (
    <StyledGradient>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </StyledGradient>
  );
};
