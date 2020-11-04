import  { useState } from "react";
import { motion } from "framer-motion";

import {
  Container,
  CompanyLogo,
  Header,
  HeaderInforCompany,
  HeaderAvaliation,
  NameOfComapny,
  Avaliations,
  RateButton,
  Text,
} from "./rateCompanyStyle";

import Data from "../../constants/Data";

import RateModal from "./rateModal";

import Stars from "../companies/starsRated";

const RateCompany = ({ id }: any) => {
  const [showModal, setShowModal] = useState(false);
 
 
  const data = Data.find((item) => item.id === id);

  const showTheModal = () => {
    alert(1);
    setShowModal(!showModal);
  };

  

  return (
    <Container>
      {true && (
        <div>
          <RateModal />
        </div>
      )}

      <Header>
        <HeaderInforCompany>
          <CompanyLogo img={data.logo} />
          <div>
            <NameOfComapny>
              {data.ranking}# {data.name}{" "}
            </NameOfComapny>
            <Avaliations>{data.avaliations.all} Avaliações </Avaliations>
          </div>
        </HeaderInforCompany>
        <HeaderAvaliation>
          <Stars stars={data.stars} background="orange" />

          <RateButton onClick={showTheModal}>
            Avaliar
            <img src={"/images/icons-star.png"} />
          </RateButton>
        </HeaderAvaliation>
      </Header>
      <Text>{data.discription}</Text>
    </Container>
  );
};

export default RateCompany;
