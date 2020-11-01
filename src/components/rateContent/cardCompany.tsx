import React from 'react';

import {
  CardCompanyContainer,
  ModalBody,
  ModalBody1,
  CardDivRowColumn,
  CardRow,
  CompanyLogoDiv,
  CompanyName,
  Avaliations,
  Description,
} from './rateContentStyle';
import Star from '../stars/stars';

const CardCompany = ({ data }) => {
  const { name, ranking, avaliations, logo, discription } = data;
  const max_HEIGHT_Text = 120;

  return (
    <CardCompanyContainer>
      <ModalBody>
        <ModalBody1></ModalBody1>
      </ModalBody>
      <CardDivRowColumn>
        <CardRow>
          <CompanyLogoDiv img={logo}></CompanyLogoDiv>
          <div>
            <CompanyName>
              #{ranking} {name}
            </CompanyName>
            <Avaliations>{avaliations} Avaliações</Avaliations>
          </div>
        </CardRow>
        <Star></Star>
      </CardDivRowColumn>
      <div>
        {discription.length > max_HEIGHT_Text ? (
          <Description>
            {`${discription.substring(0, max_HEIGHT_Text)}... `}
            <a href="#"> Read more</a>
          </Description>
        ) : (
          <Description>{discription}</Description>
        )}
      </div>
    </CardCompanyContainer>
  );
};

export default CardCompany;
