import { BaseLayout } from "../../components/BaseLayout";
import { PresentationCard } from "../../components/PresentationCard";
import { ProfileCard } from "../../components/ProfileCard";
import { StacksCard } from "../../components/StacksCard";

export const ProfilePage = () => {
  return (
    <BaseLayout>
      <ProfileCard />
      <PresentationCard />
      <StacksCard />
    </BaseLayout>
  );
};
