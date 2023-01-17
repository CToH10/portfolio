import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { ContactPage } from "../pages/contact";
import { ExperiencesPage } from "../pages/experiences";
import { HomePage } from "../pages/home";
import { ProfilePage } from "../pages/profile";
import { ProjectsPage } from "../pages/projects";

export const RoutesProvider = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/experiences" element={<ExperiencesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};
