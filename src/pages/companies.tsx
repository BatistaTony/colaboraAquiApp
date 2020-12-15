import Layout from "../components/layout/layout";
import ContainerCompanies from "../components/companies/containerCompanies";
import RankingLoader from "./rankingContent";

function Companies() {
  return (
    <Layout title="Avaliar">
      <ContainerCompanies />
    </Layout>
  );
}

export default RankingLoader(Companies);
