import React from 'react';

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

import RenderAvaliation from '../../constants/renderAvaliation';

const CardCompany = ({ data, position, index }) => {
  const { name, avaliations, ranking, logo, id } = data;

  return (
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
        <StarsDiv>
          <Star val={3} width={100} height={100} />
        </StarsDiv>
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
  );
};

export default CardCompany;
