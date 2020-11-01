import React from 'react';
import { motion } from 'framer-motion';

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
  StarsDiv,
} from './rankingContentStyle';
import Star from '../stars/stars';

import Stars from '../companies/starsRated';

import RenderAvaliation from '../../constants/renderAvaliation';

const CardCompany = ({ data, position, index }) => {
  const { name, avaliations, ranking, logo, stars } = data;

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -200 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      style={{ width: '100%', height: '80%' }}
    >
      <CardRankingContainer>
        <FloatCircle position={position} id={index}>
          <p>{ranking}º</p>
        </FloatCircle>
        <Content>
          <DivRow>
            <CompanyLogoDiv img={logo}></CompanyLogoDiv>
            <div>
              <CompanyName>{name}</CompanyName>
              <AllAvaliatiins>
                <RenderAvaliation item={avaliations.all} />
                Avaliações
              </AllAvaliatiins>
            </div>
          </DivRow>
          <Stars stars={stars} background="orange" />
        </Content>
        <AvaliationsDiv>
          <Title>Avaliações</Title>
          <CardRow>
            <Avaliation color={'positive'}>
              <p>
                <RenderAvaliation item={avaliations.positive} /> Posituvas
              </p>
            </Avaliation>
            <Avaliation color={'normal'}>
              <p>
                <RenderAvaliation item={avaliations.normal} /> Normais
              </p>
            </Avaliation>
            <Avaliation color={'negative'}>
              <p>
                <RenderAvaliation item={avaliations.negative} /> Nevativas
              </p>
            </Avaliation>
          </CardRow>
        </AvaliationsDiv>
      </CardRankingContainer>
    </motion.div>
  );
};

export default CardCompany;
