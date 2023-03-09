import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { ProjectCard } from "./ProjectCard";
import { StyledList } from "./style";

export const ProjectsList = () => {
  const [repos, setRepos] = useState([] as any);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await api.get("users/CToH10/repos");
        setRepos(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  return (
    <StyledList>
      {repos.map((repo: any) => {
        return <ProjectCard project={repo} key={repo.id} />;
      })}
    </StyledList>
  );
};
