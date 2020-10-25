import Layout from "./../components/layout/layout";
import PrivateRouter from "./privateRouter";

function Rate() {
  return (
    <Layout title={"Avaliar"}>
      <h1>avaliar page</h1>
    </Layout>
  );
}

export default PrivateRouter(Rate);
