import { StyledStacksCard } from "./style";
import {
  SiJavascript,
  SiCss3,
  SiTypescript,
  SiGithub,
  SiJirasoftware,
  SiNodedotjs,
  SiHtml5,
  SiReact,
  // SiReacthookform,
  // SiReactrouter
  // SiStyledcomponents
} from "react-icons/si";

export const StacksCard = () => {
  return (
    <StyledStacksCard>
      <h4>Minhas stacks</h4>
      <section className="stacks">
        <SiHtml5 />
        <SiCss3 />
        <SiJavascript />
        <SiTypescript />
        <SiReact onMouseEnter={() => console.log("oi")} />
        <SiNodedotjs />
        <SiGithub />
        <SiJirasoftware />
      </section>
    </StyledStacksCard>
  );
};
