import React from 'react';
import { CSSTransition } from 'react-transition-group';

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
  Modal,
} from './rateCompanyStyle';

import ModalContext from './rateCompanyContext';

import Stars from '../stars/stars';

import RateModal from './rateModal';

const RateCompany = () => {
  const [showModal, setShowModal] = React.useState({ visible: false });
  const arr = [0, 1, 2, 3, 4];
  const text =
    'Péssima experiência com apoio ao   cliente e eles não são nada sérios, sem falar que a rede cai por tudo e por nada';

  const a = 4;

  const showTheModal = () => {
    if (showModal.visible === false) {
      setShowModal({ visible: true });
    } else setShowModal({ visible: false });
  };

  return (
    <ModalContext.Provider value={showModal}>
      <Container>
        <Header>
          <HeaderInforCompany>
            <CompanyLogo img={'/images/unitel.png'} />
            <div>
              <NameOfComapny> 1# UNITEL </NameOfComapny>
              <Avaliations> 120 Avaliações </Avaliations>
            </div>
          </HeaderInforCompany>
          <HeaderAvaliation>
            <StarsDiv>
              <Stars val={a} width={100} height={100} />
            </StarsDiv>

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
            <CompanyLogo img={'/images/unitel.png'} />
            <Row>
              <div>
                <NameOfComapny> 1# UNITEL </NameOfComapny>
                <Avaliations> 120 Avaliações </Avaliations>
              </div>
              <StarsDiv>
                <Stars val={a} width={100} height={100} />
              </StarsDiv>
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
        <Text>
          Empresa de telecomunicações, focada em telefonia móvel e um monte de
          coisas qualquer, empresa de telecomunicações, focada em telefonia
          móvel.
        </Text>
        <OpinionsContainer>
          {arr.map((item) => (
            <OpinionsCard kay={item}>
              <CardNameDiv>AK</CardNameDiv>
              <input placeholder={text} />

              <p>{text}</p>
            </OpinionsCard>
          ))}
        </OpinionsContainer>{' '}
        <CSSTransition
          in={showModal.visible}
          classNames="fade"
          timeout={300}
          unmountOnExit
        >
          <Modal isActive={showModal.visible}>
            <RateModal
              isActive={showModal.visible}
              showTheModal={showTheModal}
            ></RateModal>
          </Modal>
        </CSSTransition>
      </Container>
    </ModalContext.Provider>
  );
};

export default RateCompany;
