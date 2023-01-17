import { Footer } from "../Footer";
import { Header } from "../Header";

interface iBase {
  children?: React.ReactNode;
}

export const BaseLayout = ({ children }: iBase) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
