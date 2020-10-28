import { ICompany } from "../../../types";
import {
  Card,
  CompanyLogo,
  CompanyName,
  CompanyRateNumbers,
  DescriptionCard,
} from "./companiesStyle";
import StarsRatedCompany from "./starsRated";
import {
  motion,
  AnimatePresence,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { useEffect, useState } from "react";

interface IProps {
  data: ICompany;
}

interface IAnimation {
  opacity?: number;
  y?: number;
  scale?: number;
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

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
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
