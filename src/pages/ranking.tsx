import RankingContent from "../components/rankingContent/rankingContent";
import Layout from "./../components/layout/layout";
import RankingLoader from "./rankingContent";

function Ranking() {
  return (
    <Layout title={"Ranking"}>
      <RankingContent />
    </Layout>
  );
}

export default RankingLoader(Ranking);
