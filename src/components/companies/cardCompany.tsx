import { ICompany } from "../../../types";
import {
  Card,
  CompanyLogo,
  CompanyName,
  CompanyRateNumbers,
  DescriptionCard,
} from "./companiesStyle";
import StarsRatedCompany from "./starsRated";
import AOS from "aos";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface IProps {
  data: ICompany;
}

export default function CardCompany({ data }: IProps) {
  const {
    companyDescription,
    companyLogo,
    companyName,
    companyPositionRanking,
    companyRatesNumber,
    companyStars,
  } = data;

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const animationStyle = { opacity: 1, scale: 1, y: 0 };

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.3, y: -100 }}
        animate={inView ? animationStyle : {}}
        exit={{ opacity: 0, scale: 0.3, y: -100 }}
      >
        <Card>
          <div className="header_card">
            <div className="div1_er_">
              <CompanyLogo img={companyLogo}></CompanyLogo>

              <div className="company_info_">
                <CompanyName>
                  #{companyPositionRanking}. {companyName}
                </CompanyName>
                <CompanyRateNumbers>
                  <span>{companyRatesNumber}</span> avaliações
                </CompanyRateNumbers>
              </div>
            </div>
            <div className="start_div_cmpy">
              <StarsRatedCompany stars={companyStars} />
            </div>
          </div>

          <DescriptionCard>{companyDescription}</DescriptionCard>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
