import styled from 'styled-components';
import {
  colorsApp,
  flexbox,
  getFont,
  sizesForEachScreens,
} from '../layout/layoutStyle';

export const Container = styled.section`
  width: 100%;
  ${flexbox('column', 'flex-start', 'center')};
  overflow: scroll;
  background: #fff;
`;

export const StarsDiv = styled.div`
  width: 150px;
  height: 35px;
  align-self: center;

  @media (min-width: 1230px) {
    width: 150px;
    height: 35px;
  }
  @media (min-width: 3230px) {
    width: 200px;
    height: 35px;
  }
`;

export const Image = styled.img`
  width: 90%;
  height: auto;

  @media (min-width: 750px) {
    width: 70%;
  }
  @media (min-width: 1000px) {
    width: 60%;
  }
  @media (min-width: 1230px) {
    width: auto;
    height: auto;
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
  ${sizesForEachScreens([450], [10], 'margin-top', 'px')};

  ${sizesForEachScreens(
    [3200, 2500, 2000, 1500, 1300, 450],
    [40, 35, 28, 17, 14, 13],
    'font-size',
    'pt'
  )};
`;

export const Bold = styled.span`
  color: ${colorsApp.roxo};
  ${getFont('bold')};
`;

export const List = styled.div`
  width: 100vw;
  height: auto;

  position: relative;

  margin-top: 100px;
  ${flexbox('column', 'flex-start', 'center')};

  @media (max-width: 450px) {
    margin-top: 20px;
  }
`;

export const CardRankingContainer = styled.div`
  width: 80%;
  min-height: 130px;
  max-height: 200px;
  min-width: 300px;
  max-width: 1100px;
  position: relative;

  background: #fff;
  z-index: 1;

  ${flexbox('column', 'space-between', 'center')};
  padding: 10px 20px;

  margin: 15px 0;
  border-radius: 16px;
  box-sizing: border-box;
  box-shadow: 0px 4px 24px rgba(75, 85, 186, 0.05);
  @media (max-width: 450px) {
    height: auto !important;
  }
  @media (max-width: 750px) {
    height: 200px;
    min-height: 200px !important;
  }
  @media (min-width: 750px) {
    height: 200px;
    margin: 30px 0;
    min-height: 200px;
  }
  @media (min-width: 1000px) {
    ${flexbox('row', 'space-between', 'center')};
    margin: 40px 0;
    height: 130px !important;
    min-height: 130px;
  }
  @media (min-width: 1230px) {
    width: 90%;
  }
  @media (min-width: 1800px) {
    max-width: 1500px;
    height: 200px !important;
    padding: 10px 50px;
    border-radius: 32px;
  }
`;

export const FloatCircle = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: -20px;
  left: -20px;

  ${flexbox('row', 'center', 'center')};

  background: #293133;

  border-radius: 100%;
  border: 4px solid
    ${({ position, id }) =>
      id === position - position
        ? '#4b55ba'
        : id === position - (position - 1)
        ? '#FCBE0A'
        : '#575D5F'};

  p {
    color: #fff;
    ${getFont('bold')};
  }
  @media (max-width: 450px) {
    width: 30px;
    height: 30px;
    top: -15px;
    left: -5px;
    border: 2px solid #4b55ba;

    font-size: 16px;
  }
  @media (min-width: 1800px) {
    width: 60px;
    height: 60px;
    top: -30px;
    left: -30px;
    border: 6px solid #4b55ba;

    font-size: 28px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: auto;
  ${flexbox('row', 'space-between', 'center')};
  @media (max-width: 450px) {
    ${flexbox('column', 'space-between', 'flex-start')};
  }
  @media (min-width: 1000px) {
    width: 400px;
  }
`;
export const DivRow = styled.div`
  width: auto;
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
  border: 3px solid rgba(75, 85, 186, 0.06);
  margin-right: 10px;

  @media (min-width: 1800px) {
    width: 120px;
    height: 120px;
    background-size: 100px;
    border: 6px solid rgba(75, 85, 186, 0.06);
    margin-right: 20px;
  }
`;
export const CompanyName = styled.p`
  font-size: 20px;
  ${getFont('Bold')};
  color: #000;

  @media (min-width: 1800px) {
    font-size: 35px;
  }
`;
export const AllAvaliatiins = styled.p`
  font-size: 12px;
  ${getFont()};
  color: #6e6e6e;
  margin: 5px 0;

  @media (min-width: 1800px) {
    font-size: 27px;
  }
`;

export const StarContainer = styled.div`
  width: 150px;
  height: 35px;

  background: rgba(255, 255, 255, 0.1);

  border-radius: 8px;
  box-sizing: border-box;
  align-self: flex-start;
  margin: 20px 0;
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

export const AvaliationsDiv = styled.div`
  width: 100%;
  height: auto;

  margin-top: 10px;
  ${flexbox('column', 'flex-start', 'flex-start')};
  border-top: solid 1px rgba(112, 112, 112, 0.12);

  @media (min-width: 1000px) {
    border: none;
    width: auto;
    margin-top: 0;

    ${flexbox('column', 'flex-end', 'flex-end')};
  }
`;

export const Title = styled.p`
  font-size: 14px;
  ${getFont('Medium')};
  color: #6e6e6e;
  margin: 5px 0;
  align-self: flex-start;
  @media (min-width: 1800px) {
    font-size: 27px;
  }
`;
export const CardRow = styled.div`
  width: 100%;
  height: auto;
  ${flexbox('row', 'space-between', 'center')};

  @media (min-width: 750px) {
    width: 350px;
  }
  @media (min-width: 1800px) {
    width: 600px;
  }
`;
export const Avaliation = styled.div`
  width: auto;

  height: auto;
  position: relative;

  background: ${({ color }) =>
    color == 'positive'
      ? 'rgba(75, 85, 186, 0.11)'
      : color == 'normal'
      ? 'rgba(252, 190, 10, 0.11)'
      : 'rgba(249, 63, 63, 0.11)'};
  padding: 5px;

  border-radius: 6px;
  p {
    font-size: 12px;
    ${getFont('Medium')};
    color: ${({ color }) =>
      color == 'positive'
        ? 'rgb(75, 85, 186)'
        : color == 'normal'
        ? 'rgb(252, 190, 10)'
        : 'rgb(249, 63, 63)'};
  }

  @media (max-width: 450px) {
    width: 60px;
    height: 40px;
    padding: 0 4px;
  }
  @media (min-width: 1000px) {
    width: auto;
  }
  @media (min-width: 1800px) {
    width: auto;
    p {
      font-size: 22px;
    }
  }
`;
