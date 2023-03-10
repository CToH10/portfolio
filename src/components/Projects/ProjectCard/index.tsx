import { StyledProjectCard } from "./style";

export const ProjectCard = ({ project }: any) => {
  let name: string = project.name
    .replaceAll("-", " ")
    .replaceAll("_", " ")
    .trim();
  let moduleRegex: RegExp = /m[0-9_.-]/g;
  let sprintRegex: RegExp = /sp[0-9_.-]/g;
  let classRegex: RegExp = /t14/g;
  let userRegex: RegExp = /ctoh10|CToH10/g;

  if (name.match(moduleRegex)) {
    name = name.replaceAll(moduleRegex, "");
  }

  if (name.match(sprintRegex)) {
    name = name.replaceAll(sprintRegex, "");
  }

  if (name.match(classRegex)) {
    name = name.replaceAll(classRegex, "");
  }

  if (name.match(userRegex)) {
    name = name.replaceAll(userRegex, "");
  }

  return (
    <>
      {project.language ? (
        <StyledProjectCard>
          <h4>{name}</h4>
          <p>{project.language}</p>
          <a href={project.html_url} target="_blank" rel="noopener noreferrer">
            Acesse o repositório
          </a>
        </StyledProjectCard>
      ) : (
        <></>
      )}
    </>
  );
};
