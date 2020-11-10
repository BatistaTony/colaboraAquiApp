import Layout from "../components/layout/layout";
import HeaderProfile from "../components/profile/header";
import { ProfileContent } from "../components/profile/profileStyle";

export default function ConsumerProfile() {
  return (
    <Layout title="BatistaThony">
      <ProfileContent>
        <HeaderProfile />
      </ProfileContent>
    </Layout>
  );
}
