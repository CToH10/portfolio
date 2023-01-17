import { JsxElement } from "typescript";
import { Footer } from "../Footer";
import { Header } from "../Header";

interface iBase {
  children?: JsxElement;
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
