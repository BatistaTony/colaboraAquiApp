import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { motion } from 'framer-motion';

import {
  Container,
  CompanyLogo,
  Header,
  HeaderInforCompany,
  HeaderInforCompanyMoblite,
  HeaderAvaliationMobile,
  Row,
  HeaderAvaliation,
  NameOfComapny,
  Avaliations,
  RateButton,
  Text,
  Bold,
  OpinionsContainer,
  OpinionsCard,
  CardNameDiv,
  StarsDiv,
  Modal1,
} from './rateCompanyStyle';

import ModalContext from './rateCompanyContext';

import Data from '../../constants/Data';

import RateModal from './rateModal';

import Stars from '../companies/starsRated';

const RateCompany = ({ id }: any) => {
  const [showModal, setShowModal] = React.useState({ visible: false });
  const arr = [0, 1, 2, 3, 4, 5, 6, 7];
  const text =
    'Péssima experiência com apoio ao   cliente e eles não são nada sérios, sem falar que a rede cai por tudo e por nada';

  const a = 4;

  const data = Data.find((item) => item.id === id);

  const showTheModal = () => {
    if (showModal.visible === false) {
      setShowModal({ visible: true });
    } else setShowModal({ visible: false });
  };

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -200 },
  };

  return (
    <ModalContext.Provider value={showModal}>
      <Container>
        <Header>
          <HeaderInforCompany>
            <CompanyLogo img={data.logo} />
            <div>
              <NameOfComapny>
                {data.ranking}# {data.name}{' '}
              </NameOfComapny>
              <Avaliations>{data.avaliations.all} Avaliações </Avaliations>
            </div>
          </HeaderInforCompany>
          <HeaderAvaliation>
            <Stars stars={data.stars} background="orange" />

            <RateButton
              onClick={() => {
                showTheModal();
              }}
            >
              Avaliar
              <img src={'/images/icons-star.png'} />
            </RateButton>
          </HeaderAvaliation>

          <HeaderInforCompanyMoblite>
            <CompanyLogo img={data.logo} />
            <Row>
              <div>
                <NameOfComapny>
                  {data.ranking}# {data.name}{' '}
                </NameOfComapny>
                <Avaliations>{data.avaliations.all} Avaliações </Avaliations>
              </div>
              <Stars stars={a} background="orange" />
            </Row>
          </HeaderInforCompanyMoblite>
          <HeaderAvaliationMobile>
            <RateButton
              onClick={() => {
                showTheModal();
              }}
            >
              Avaliar
              <img src={'/images/icons-star.png'} />
            </RateButton>
          </HeaderAvaliationMobile>
        </Header>
        <Text>{data.discription}</Text>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          style={{ width: '100%' }}
        >
          <OpinionsContainer>
            {arr.map((item) => (
              <OpinionsCard key={item}>
                <CardNameDiv>AK</CardNameDiv>
                <input placeholder={text} />

                <p>{text}</p>
              </OpinionsCard>
            ))}
          </OpinionsContainer>
        </motion.div>

        <div
          style={
            showModal.visible
              ? {
                  position: 'fixed',
                  zIndex: 2000,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  visibility: 'visible',
                  opacity: 1,
                  transition: 'opacity 0.3s linear',
                }
              : {
                  visibility: 'hidden',
                  opacity: 0,
                  transition: 'visibility 0.3s, opacity 0.3s linear',
                }
          }
        >
          <RateModal
            showTheModal={showTheModal}
            companyId={data.id}
            visible={showModal.visible}
          />
        </div>
      </Container>
    </ModalContext.Provider>
  );
};

export default RateCompany;
