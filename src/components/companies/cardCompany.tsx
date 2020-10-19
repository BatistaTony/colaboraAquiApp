import { ICompany } from "../../../types";
import {
  Card,
  CompanyLogo,
  CompanyName,
  CompanyRateNumbers,
  DescriptionCard,
  StarsRated,
} from "./companiesStyle";
import StarsRatedCompany from "./starsRated";
import { motion } from "framer-motion";
import { useEffect } from "react";

interface IProps {
  data: ICompany;
  key: number;
}

export default function CardCompany({ data, key }: IProps) {
  const {
    companyDescription,
    companyLogo,
    companyName,
    companyPositionRanking,
    companyRatesNumber,
    companyStars,
  } = data;

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  useEffect(() => {
    console.log("Change");
  }, [companyName]);

  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
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
  );
}
