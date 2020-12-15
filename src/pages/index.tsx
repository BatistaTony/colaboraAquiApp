import { useEffect, useState } from "react";
import { IRankingState } from "../../types";
import Hero from "../components/hero/hero";
import Layout from "../components/layout/layout";
import firebase from "./../../Firebase";
import { useDispatch } from "react-redux";
import { addRanking } from "./../store/actions/ranking";

interface IRate {
  companyId: string;
  horrivel: number;
  pessimo: number;
  normal: number;
  bom: number;
  muitoBom: number;
}

export default function Index() {
  const firestore = firebase.firestore();
  const [allCompaniesRates, setAllCompaniesRates] = useState<any>([]);
  const [rankingState, setRankingState] = useState<Array<IRankingState>>([]);

  const dispatch = useDispatch();

  const createArrayWithTotalRates = (rates: Array<any>) => {
    let companiesSaved: IRate | any = [];

    rates.map((company) => {
      companiesSaved.push({
        companyId: company,
        horrivel: 0,
        pessimo: 0,
        normal: 0,
        bom: 0,
        muitoBom: 0,
        companyRates: {
          normal: 0,
          positives: 0,
          negatives: 0,
        },
      });
    });

    return companiesSaved;
  };

  const getAllRatesAndPutOnArray = async (rates: Array<any>) => {
    const result = await firestore.collection("companyRates").get();

    const companiesSaved = rates;

    result.docs.map((rate, index) => {
      const copiedCompanies = companiesSaved;

      copiedCompanies.map((company, index) => {
        if (company.companyId === rate.data().companyId) {
          companiesSaved[index] = {
            companyId: rate.data().companyId,
            horrivel:
              rate.data().feeling === "Horrivel"
                ? companiesSaved[index].horrivel + 1
                : companiesSaved[index].horrivel,
            pessimo:
              rate.data().feeling === "Pessimo"
                ? companiesSaved[index].pessimo + 1
                : companiesSaved[index].pessimo,
            normal:
              rate.data().feeling === "Normal"
                ? companiesSaved[index].normal + 1
                : companiesSaved[index].normal,
            bom:
              rate.data().feeling === "Bom"
                ? companiesSaved[index].bom + 1
                : companiesSaved[index].bom,
            muitoBom:
              rate.data().feeling === "Muito Bom"
                ? companiesSaved[index].muitoBom + 1
                : companiesSaved[index].muitoBom,
            companyRates: {
              normal:
                rate.data().feeling === "Normal"
                  ? companiesSaved[index].companyRates.normal + 1
                  : companiesSaved[index].companyRates.normal,
              positives:
                rate.data().feeling === "Muito Bom" ||
                rate.data().feeling === "Bom"
                  ? companiesSaved[index].companyRates.positives + 1
                  : companiesSaved[index].companyRates.positives,
              negatives:
                rate.data().feeling === "Pessimo" ||
                rate.data().feeling === "Horrivel"
                  ? companiesSaved[index].companyRates.negatives + 1
                  : companiesSaved[index].companyRates.negatives,
            },
          };
        }
      });
    });

    setAllCompaniesRates(companiesSaved);
  };

  const createNewArray = async () => {
    const result = await firestore.collection("companyRates").get();

    const savedRates = [];

    result.docs.map((rate, index) => {
      if (!savedRates.includes(rate.data().companyId)) {
        savedRates.push(rate.data().companyId);
      }
    });

    const companies = createArrayWithTotalRates(savedRates);

    getAllRatesAndPutOnArray(companies);
  };

  const calculateStar = (rate: any) => {
    const weigh =
      rate.muitoBom * 5 +
      rate.bom * 4 +
      rate.normal * 3 +
      rate.pessimo * 2 +
      rate.horrivel * 1;
    const sumRates =
      rate.muitoBom + rate.bom + rate.normal + rate.pessimo + rate.horrivel;

    return {
      companyId: rate.companyId,
      companyStars: Math.round(weigh / sumRates),
      companyRates: rate.companyRates,
    };
  };

  const compareRates = (a, b) => {
    const rateA = a.companyStars;
    const rateB = b.companyStars;

    let comparison = 0;
    if (rateA > rateB) {
      comparison = 1;
    } else if (rateA < rateB) {
      comparison = -1;
    }
    return comparison;
  };

  const getRanking = async () => {
    const allRanking = allCompaniesRates.map((company) => {
      return calculateStar(company);
    });

    joinAllInOne(allRanking);
  };

  const joinAllInOne = async (allRanking: any) => {
    let allRankingSorted = allRanking.sort(compareRates).reverse();

    const allCompaniesSaved = [];

    const result = await firestore.collection("companies").get();

    result.docs.map((item) => {
      allCompaniesSaved.push({ companyId: item.id, ...item.data() });
    });

    const savedRanking: IRankingState[] = [];

    allRankingSorted.map((companyRate, index) => {
      allCompaniesSaved.map((company) => {
        if (company.companyId === companyRate.companyId) {
          savedRanking.push({
            ...companyRate,
            ...company,
            position: index + 1,
          });
        }
      });
    });

    setRankingState(savedRanking);
  };

  useEffect(() => {
    createNewArray();
  }, []);

  useEffect(() => {
    getRanking();
    dispatch(addRanking(rankingState));
  }, [allCompaniesRates]);

  useEffect(() => {
    dispatch(addRanking(rankingState));
  }, [rankingState]);

  return (
    <Layout>
      <Hero />
    </Layout>
  );
}
