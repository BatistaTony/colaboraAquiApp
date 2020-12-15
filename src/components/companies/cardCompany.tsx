import { IRankingState } from "../../../types";
import {
  Card,
  CompanyLogo,
  CompanyName,
  CompanyRateNumbers,
  DescriptionCard,
} from "./companiesStyle";
import StarsRatedCompany from "./starsRated";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Router from "next/router";
import { useSelector } from "react-redux";

interface IProps {
  data: IRankingState;
}

export default function CardCompany({ data }: IProps) {
  const {
    companyId,
    companyDescription,
    companyLogo,
    companyName,
  } = data;

  const rankingState: IRankingState[] = useSelector(
    (state) => state.RankingState
  );

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const animationStyle = { opacity: 1, scale: 1, y: 0 };

  const callPage = () => {
    Router.push({
      pathname: `/rate`,
      query: { id: companyId },
    });
  };

  const checkIfGotRating = () => {
    const result = rankingState.filter(
      (company) => company.companyId === companyId
    );

    return result;
  };

  const getRatesProps = () => {
    return checkIfGotRating().length > 0 && checkIfGotRating()[0];
  };

  const calcTotal = () => {
    if (getRatesProps()) {
      const ratesNumber = getRatesProps().companyRates;
      const total =
        ratesNumber.normal + ratesNumber.negatives + ratesNumber.positives;
      return total;
    } else {
      return 0;
    }
  };

  const getStarsNumberAndPosition = () => {
    if (getRatesProps()) {
      return {
        stars: getRatesProps().companyStars,
        position: getRatesProps().position,
      };
    } else {
      return {
        stars: 0,
        position: "#",
      };
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.3, y: -100 }}
        animate={inView ? animationStyle : {}}
        exit={{ opacity: 0, scale: 0.3, y: -100 }}
      >
        <Card onClick={callPage}>
          <div className="header_card">
            <div className="div1_er_">
              <CompanyLogo img={companyLogo}></CompanyLogo>

              <div className="company_info_">
                <CompanyName>
                  #{getStarsNumberAndPosition().position}. {companyName}
                </CompanyName>

                <CompanyRateNumbers>
                  <span>{calcTotal()}</span> avaliações
                </CompanyRateNumbers>
              </div>
            </div>
            <div className="start_div_cmpy">
              <StarsRatedCompany
                background={""}
                stars={getStarsNumberAndPosition().stars}
              />
            </div>
          </div>

          <DescriptionCard>{companyDescription}</DescriptionCard>
        </Card>{" "}
      </motion.div>{" "}
    </AnimatePresence>
  );
}
