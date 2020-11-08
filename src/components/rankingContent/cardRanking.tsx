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

const CardCompany = ({ data, position, index }) => {
  const { name, avaliations, ranking, logo, stars } = data;

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
          <FloatCircle position={position} id={index}>
            <p>{ranking}º</p>
          </FloatCircle>
          <Content>
            <DivRow>
              <CompanyLogoDiv img={logo}></CompanyLogoDiv>
              <div>
                <Link href="/rate?id=someid">
                  <CompanyName>{name}</CompanyName>
                </Link>
                <AllAvaliatiins>
                  <span>
                    <RenderAvaliation item={avaliations.all} />{" "}
                  </span>
                  Avaliações
                </AllAvaliatiins>
              </div>
            </DivRow>
            <Stars stars={stars} background="orange" />
          </Content>
          <AvaliationsDiv>
            <Title>Avaliações</Title>
            <CardRow>
              <Avaliation color={"positive"}>
                <p>
                  <RenderAvaliation item={avaliations.positive} /> Posituvas
                </p>
              </Avaliation>
              <Avaliation color={"normal"}>
                <p>
                  <RenderAvaliation item={avaliations.normal} /> Normais
                </p>
              </Avaliation>
              <Avaliation color={"negative"}>
                <p>
                  <RenderAvaliation item={avaliations.negative} /> Nevativas
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
