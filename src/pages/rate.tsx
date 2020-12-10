import Layout from "./../components/layout/layout";
import PrivateRouter from "./privateRouter";

import RateCompany from "../components/rateCompany/rateCompany";
import { useRouter } from "next/router";
import queryString from "query-string";
import { useEffect, useState } from "react";
import firebase from "./../../Firebase";
import { ICompany } from "../../types";

function Rate() {
  const [data, setData] = useState<ICompany | any>({
    companyDescription: "",
    companyLogo: "",
    companyName: "",
    companyPositionRanking: 0,
    companyRatesNumber: 0,
    companyStars: 0,
    companyStatus: "",
    companyId: "",
  });

  const router = useRouter();

  const firestore = firebase.firestore();

  const getCompany = async () => {
    const query = queryString.parse(router.asPath.split(/\?/)[1]);

    const id: string | any = query.id;

    let receivedCompany = await firestore.collection("companies").doc(id).get();

    if (receivedCompany.exists) {
      setData({ companyId: id, ...receivedCompany.data() });
    } else {
      console.log("Not exists");
    }
  };

  useEffect(() => {
    getCompany();
  }, []);

  return (
    <Layout title={data.companyName ? data.companyName : "Avaliar"}>
      <RateCompany data={data} />
    </Layout>
  );
}

export default PrivateRouter(Rate);
