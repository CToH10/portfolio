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
        <SiHtml5 color={"var(--color-black-80)"} />
        <SiCss3 color={"var(--color-black-80)"} />
        <SiJavascript color={"var(--color-black-80)"} />
        <SiTypescript color={"var(--color-black-80)"} />
        <SiReact
          onMouseEnter={() => console.log("oi")}
          color={"var(--color-black-80)"}
        />
        <SiNodedotjs color={"var(--color-black-80)"} />
        <SiGithub color={"var(--color-black-80)"} />
        <SiJirasoftware color={"var(--color-black-80)"} />
      </section>
    </StyledStacksCard>
  );
};
