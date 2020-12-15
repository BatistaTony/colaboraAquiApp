import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  CardRankingContainer,
  FloatCircle,
  DivRow,
  AllAvaliatiins,
  CardRow,
  Content,
  CompanyLogoDiv,
  CompanyName,
  Avaliation,
  AvaliationsDiv,
  Title,
} from "./rankingContentStyle";
import Link from "next/link";

import Stars from "../companies/starsRated";

import RenderAvaliation from "../../constants/renderAvaliation";
import { IRankingState } from "../../../types";

interface IPropsCard {
  data: IRankingState;
}

const CardCompany = ({ data }: IPropsCard) => {
  const {
    companyLogo,
    companyName,
    companyRates,
    companyStars,
    position,
  } = data;

  const totalRates =
    companyRates.negatives + companyRates.normal + companyRates.positives;

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const animationStyle = { opacity: 1, y: 0 };

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? animationStyle : {}}
        exit={{ opacity: 0, y: 100 }}
        style={{ width: "100%", height: "auto" }}
      >
        <CardRankingContainer>
          <FloatCircle position={position} id={position}>
            <p>{position}º</p>
          </FloatCircle>
          <Content>
            <DivRow>
              <CompanyLogoDiv img={companyLogo}></CompanyLogoDiv>
              <div>
                <Link href={`/rate?id=${data.companyId}`}>
                  <CompanyName>{companyName}</CompanyName>
                </Link>
                <AllAvaliatiins>
                  <span>
                    <RenderAvaliation item={totalRates} />{" "}
                  </span>
                  Avaliações
                </AllAvaliatiins>
              </div>
            </DivRow>
            <Stars
              classNames="fiveStars"
              stars={companyStars}
              background="orange"
            />
          </Content>
          <AvaliationsDiv>
            <Title>Avaliações</Title>
            <CardRow>
              <Avaliation color={"positive"}>
                <p>
                  <RenderAvaliation item={companyRates.positives} /> Positivas
                </p>
              </Avaliation>
              <Avaliation color={"normal"}>
                <p>
                  <RenderAvaliation item={companyRates.normal} /> Normais
                </p>
              </Avaliation>
              <Avaliation color={"negative"}>
                <p>
                  <RenderAvaliation item={companyRates.negatives} /> Negativas
                </p>
              </Avaliation>
            </CardRow>
          </AvaliationsDiv>
        </CardRankingContainer>
      </motion.div>
    </AnimatePresence>
  );
};

export default CardCompany;
