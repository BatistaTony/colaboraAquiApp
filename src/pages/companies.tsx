import Layout from "../components/layout/layout";
import PrivateRouter from "./privateRouter";
import ContainerCompanies from "../components/companies/containerCompanies";

function Companies() {
  return (
    <Layout title="Avaliar">
      <ContainerCompanies />
    </Layout>
  );
}

export default PrivateRouter(Companies);
