import { Footer } from "../Footer";
import { Header } from "../Header";
import { StyledMain } from "./style";

interface iBase {
  children?: React.ReactNode;
}

export const BaseLayout = ({ children }: iBase) => {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
};
