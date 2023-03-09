import { StyledProfileCard } from "./style";
import perfil from "../../assets/img/perfil.png";
import { useState } from "react";

export const ProfileCard = () => {
  const [width, setWidht] = useState(window.innerWidth);
  window.onresize = () => setWidht(window.innerWidth);

  return (
    <StyledProfileCard className="profileCard">
      <figure>
        <img src={perfil} alt="Foto de perfil" />
        <figcaption>Foto de perfil</figcaption>
      </figure>
      <section className="profileInfo">
        <h4>Luís Nunes</h4>
        <p>{width < 700 ? "Dev Web FrontEnd" : "Desenvolvedor Web FrontEnd"}</p>
      </section>
    </StyledProfileCard>
  );
};
