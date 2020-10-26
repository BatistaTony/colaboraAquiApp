import styled from 'styled-components';
import {
  colorsApp,
  flexbox,
  getFont,
  sizesForEachScreens,
} from '../layout/layoutStyle';

export const Container = styled.div`
  width: 100%;
  height: auto;

  ${flexbox('column', 'flex-start', 'center')};
  background-color: #fff;
  box-sizing: border-box;
  overflow: scroll;

  position: relative;
  z-index: 1;

  @media (min-width: 1230px) {
    overflow: none;
  }
`;

export const ModalBody = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: #707070;
  z-index: 10 !important;
  top: 0;
  display: none;
`;
export const ModalBody1 = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #ff4;
  z-index: 10 !important;
  top: 0;
`;

const pullPaddingLeft = () => `

@media (max-width: 1500px) {
  margin-left: -6%;
}

  @media (max-width: 1370px) {
    margin-left: -10%;
  }

  @media (max-width: 1100px) {
    margin-left: -15%;
  }

  @media (max-width: 925px) {
    margin-left: -18%;
  }

  @media (max-width: 850px) {
    margin-left: 0%;
  }

  
`;

export const Text = styled.p`
  width: 60%;
  height: auto;

  text-align: center;
  color: ${colorsApp.soDark};
  font-size: 45pt;
  ${getFont('Medium')};

  margin-top: 15px;
  ${sizesForEachScreens([1000, 750, 450, 300], [60, 75, 80, 90], 'width', '%')};
  ${sizesForEachScreens([1500], [0], 'margin-top', '')};

  ${pullPaddingLeft};

  ${sizesForEachScreens(
    [3200, 2500, 2000, 1500, 1300, 450],
    [40, 35, 28, 17, 14, 13],
    'font-size',
    'pt'
  )};
`;

export const DivRowColumn = styled.div`
  width: 100%;
  height: auto;
  ${flexbox('column', 'center', 'center')};
  box-sizing: border-box;
  position: relative;
  @media (max-width: 750px) {
    padding: 0 5%;
  }

  @media (max-height: 633px) {
  }

  @media (min-width: 1230px) {
    ${flexbox('row', 'center', 'center')};
  }
`;

export const Input = styled.input`
  width: 610px;
  height: 70px;
  display: flex;

  background: ${({ img }) => ` url(${img})`};
  background-size: 28px;
  background-position-y: center;
  background-position-x: 10px;
  background-repeat: no-repeat;
  padding: 0 50px;

  font-size: 24px;
  ${getFont('Medium')};
  color: #707070;

  border: none;
  border-radius: 10px;
  box-shadow: 0px 1px 6px rgba(75, 85, 186, 0.1);
  box-sizing: border-box;
  margin: 40px 0;

  &:focus {
    outline: none;
    box-shadow: 0px 1px 16px rgba(252, 190, 1, 0.2);
  }

  @media (max-width: 750px) {
    width: 100%;
    height: 55px;
    background-size: 21px;
    font-size: 16px;
    margin: 40px 0;
  }
`;

export const Button = styled.button`
  width: 208px;
  height: 55px;
  position: relative;
  right: 10px;

  background: rgba(31, 44, 47, 0.15);

  font-size: 20px;
  ${getFont('Medium')};
  color: #283335;

  border: none;
  outline: none;
  border-radius: 5px;
  margin-bottom: 40px;

  @media (max-width: 750px) {
    width: 280px;
    height: 50px;
    background-size: 21px;
    font-size: 18px;
  }

  @media (min-width: 1230px) {
    position: absolute;
    right: 8%;
    margin-bottom: 0;
  }
`;

export const TabCompaninesContent = styled.div`
  ${flexbox('column', 'center', 'center')};
`;

export const TabHeader = styled.div`
  width: 280px;
  margin-bottom: 40px;
  ${flexbox('row', 'space-between', 'center')};
  box-sizing: border-box;
`;

export const Tab = styled.div`
  height: 32px;

  text-align: center;
  cursor: pointer;
  font-size: 15px;
  ${getFont('Medium')};

  border-radius: 8px;

  padding: 0 10px;
  ${flexbox('row', 'center', 'center')};
  background: ${({ selected }) =>
    selected ? 'rgba(252, 190, 10, 0.1)' : 'white'};
  * {
    color: #707070;
  }
`;

export const TabBody = styled.div`
  width: 300px;
  height: auto;

  background: #fff;
  ${flexbox('column', 'center', 'center')};
  box-sizing: border-box;

  @media (max-width: 750px) {
    width: 100vw;
    padding: 0 5%;
  }
  @media (min-width: 1230px) {
    width: 84vw;
    position: relative;
    overflow-x: scroll;
    height: 400px;
    background: #f4f;
    ${flexbox('row', 'space-evenly', 'center')};
  }
`;

export const CardCompanyContainer = styled.div`
  width: 630px;
  height: 100px;

  background: #4d5274;
  ${flexbox('column', 'space-between', 'center')};
  padding: 20px 0;

  margin: 10px 0;
  border-radius: 8px;
  box-sizing: border-box;

  @media (max-width: 750px) {
    width: 100%;
    height: 300px;
  }
  @media (min-width: 1230px) {
    width: 630px !important;
    height: 300px;
    margin: 10px;
  }
`;

export const CardDivRowColumn = styled.div`
  width: 100%;
  height: auto;
  position: relative;

  ${flexbox('column', 'space-between', 'center')};

  box-sizing: border-box;
  @media (max-width: 750px) {
    padding: 0 5%;
  }

  @media (max-height: 633px) {
  }

  @media (min-width: 1230px) {
    ${flexbox('row', 'center', 'center')};
  }
`;
export const CardRow = styled.div`
  width: 100%;
  height: auto;
  ${flexbox('row', 'flex-start', 'center')};
`;
export const Row = styled.div`
  width: auto;
  height: auto;
  ${flexbox('column', 'flex-start', 'center')};

  @media (min-width: 1230px) {
    ${flexbox('row', 'space-evenly', 'center')};
  }
`;

export const CompanyLogoDiv = styled.div`
  width: 66px;
  height: 66px;
  background-color: #fff;
  background-image: ${({ img }) => ` url(${img})`};
  background-size: 50px;
  background-position-y: center;
  background-position-x: 10px;
  background-repeat: no-repeat;
  border-radius: 100%;
  margin-right: 10px;
`;
export const CompanyName = styled.p`
  font-size: 20px;
  ${getFont('Medium')};
  color: #fff;
`;

export const Avaliations = styled.p`
  font-size: 18px;
  ${getFont('Medium')};
  color: #fff;
`;

export const Description = styled.p`
  width: 90%;
  height: 120px;
  margin-left: 5%;
  max-lines: 3;
  font-size: 18px;
  ${getFont()};
  color: #fff;
`;
