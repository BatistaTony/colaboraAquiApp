import styled from 'styled-components';
import {
  colorsApp,
  flexbox,
  getFont,
  sizesForEachScreens,
} from '../layout/layoutStyle';

import { motion } from 'framer-motion';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  position: relative;

  background: #fff;
  ${flexbox('column', 'flex-start', 'center')};
  overflow: auto !important;

  box-sizing: border-box;
`;

export const StarsDiv = styled.div`
  width: 150px;
  height: 35px;
  align-self: center;

  @media (min-width: 1230px) {
    width: 200px;
    height: 45px;
  }
`;

export const Bold = styled.span`
  color: ${colorsApp.darkGreen};
  ${getFont('bold')};
`;

export const Header = styled.div`
  width: 70%;
  height: auto;
  min-height: 200px;
  max-width: 1800px;
  position: relative;

  ${flexbox('row', 'space-between', 'center')};

  margin-top: 100px;

  @media (max-width: 750px) {
    margin-top: 20px;
    padding-top: 10px;
    width: 90% !important;
    ${flexbox('column', 'space-around', 'center')};
  }
  @media (max-width: 1000px) {
    width: 80%;
    min-height: 240px;
  }
  @media (max-width: 1230px) {
    width: 70%;
  }
  @media (min-width: 1230px) {
    margin-bottom: 50px;
  }
`;

export const HeaderInforCompany = styled.div`
  height: auto;
  ${flexbox('row', 'space-between', 'center')};

  @media (max-width: 750px) {
    display: none;
  }
  @media (min-width: 1000px) {
    display: flex;
    flef-direction: row;
    justify-content: space-between;
  }
`;
export const HeaderAvaliation = styled.div`
  ${flexbox('row', 'justify-content', 'center')};

  @media (max-width: 750px) {
    display: none;
  }
`;

export const HeaderInforCompanyMoblite = styled.div`
  display: none;
  background: #fff;
  @media (max-width: 750px) {
    width: 100% !important;

    ${flexbox('column', 'center', 'center')};
  }
`;
export const HeaderAvaliationMobile = styled.div`
  display: none;

  @media (max-width: 750px) {
    width: 100% !important;
    ${flexbox('column', 'space-between', 'center')};
  }
`;
export const Row = styled.div`
  width: 100%;

  ${flexbox('row', 'space-between', 'center')};
`;

export const CompanyLogo = styled.div`
  width: 160px;
  height: 160px;

  background-color: #fff;
  background-image: ${({ img }) => ` url(${img})`};
  background-size: 70%;
  background-position-y: center;
  background-position-x: center;
  background-repeat: no-repeat;

  border-radius: 100%;
  margin-right: 10px;
  border: 1px solid rgba(41, 49, 51, 0.1);

  @media (max-width: 1000px) {
    font-size: 24px;
  }

  ${sizesForEachScreens(
    [6500, 3000, 2000, 1500, 1000, 750],
    [300, 180, 160, 120, 100, 80],
    'width',
    'px'
  )};
  ${sizesForEachScreens(
    [6500, 3000, 2000, 1500, 1000, 750],
    [300, 180, 160, 120, 100, 80],
    'height',
    'px'
  )};
`;

export const NameOfComapny = styled.p`
  color: ${colorsApp.soDark};
  font-size: 40px;
  ${getFont('Bold')};

  margin: 0 10px;

  ${sizesForEachScreens(
    [6500, 2000, 1500, 750],
    [50, 40, 30, 20],
    'font-size',
    'px'
  )};
`;
export const Avaliations = styled.p`
  color: ${colorsApp.soDark};
  font-size: 26px;
  ${getFont('Medium')};

  margin: 0 10px;

  margin: 0 10px;

  ${sizesForEachScreens(
    [6500, 2000, 1500, 750],
    [35, 25, 15, 14],
    'font-size',
    'px'
  )};
`;

export const Text = styled.p`
  width: 90%;
  max-width: 1800px;
  height: auto;

  text-align: left;
  color: ${colorsApp.darkGreen};
  font-size: 45pt;
  ${getFont()};

  margin-top: 20px;
  margin-bottom: 40px;

  @media (max-width: 750px) {
    margin-top: 20px !important;
    margin-bottom: 20px;
  }
  @media (min-width: 750px) {
    width: 70%;
  }

  ${sizesForEachScreens(
    [3200, 2500, 2000, 1500, 1300, 450],
    [40, 35, 28, 17, 14, 13],
    'font-size',
    'pt'
  )};
`;

export const RateButton = styled.button`
  width: 208px;
  height: 55px;
  position: relative;

  background: #4b55ba;

  border-radius: 8px;
  border: 0;
  margin-left: 50px;
  outline: none;

  :hover {
    opacity: 0.5;
  }

  cursor: pinter;

  text-align: center;
  color: #fff;
  font-size: 26px;

  img {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 10px;

    ${sizesForEachScreens(
      [6500, 3000, 2000, 1500, 1000],
      [40, 26, 22, 18, 16],
      'width',
      'px'
    )};
    ${sizesForEachScreens(
      [6500, 3000, 2000, 1500, 1000],
      [40, 26, 22, 18, 16],
      'height',
      'px'
    )};
  }

  @media (max-width: 750px) {
    height: 45px;
    font-size: 16px !important;
    width: 100% !important;
    margin-left: 0 !important;

    img {
      width: 20px;
      height: 20px;
    }
  }
  @media (max-width: 1000px) {
    width: 90%;
    margin-left: 10px;
  }

  ${sizesForEachScreens(
    [6500, 3000, 2000, 1500, 1000, 750],
    [320, 240, 208, 180, 110, 90],
    'width',
    'px'
  )};
  ${sizesForEachScreens(
    [6500, 3000, 2000, 1500, 1000, 750],
    [80, 60, 55, 50, 40, 50],
    'height',
    'px'
  )};
  ${sizesForEachScreens(
    [6500, 3000, 2000, 1500, 750],
    [40, 22, 18, 16, 16],
    'font-size',
    'px'
  )};
`;

export const OpinionsContainer = styled.div`
  width: 70%;
  max-width: 1800px;
  height: auto !important;

  background: rgba(248, 248, 252, 0.5);
  padding: 40px 40px 140px 40px;
  box-sizing: border-box;

  margin: 0 auto;

  @media (max-width: 750px) {
    padding: 40px 20px 140px 20px;
    width: 90%;
  }
  p {
    text-align: justify;
  }
`;

export const OpinionsCard = styled.button`
  width: 100%;
  height: 60px;
  min-height: 60px;

  position: relative;
  transition: height 0.5s, background-color 0.5s, transform 0.5s;

  background: #fff;
  ${flexbox('row', 'flex-start', 'flex-start')};
  padding: 20px 16px;

  border: 0;
  border-radius: 16px;
  box-sizing: border-box;
  outline: none;
  margin-top: 10px;

  input {
    width: 100%;
    font-size: 21px;
    color: #656777;
    ${getFont()};
    pointer-events: none;
    text-overflow: ellipsis !important;
    border: none;

    opacity: 0;
    display: none;

    background: transparent;

    ${sizesForEachScreens(
      [6500, 2000, 1500, 750, 320],
      [30, 25, 23, 21, 18],
      'font-size',
      'px'
    )};
  }

  p {
    width: auto;
    background: transparent;
    font-size: 8px;
    color: #656777;
    ${getFont()};

    ${sizesForEachScreens(
      [6500, 2800, 2000, 1500, 750, 320],
      [30, 25, 23, 23, 21, 16],
      'font-size',
      'px'
    )};
  }

  ${({ open }) =>
    open &&
    `overflow: scroll; 
    background: #fff9e6;  
    height: 180px !important; 
    display: flex !important;
    flex-direction: column !important;
    justify-content: flex-start !important; 
    align-items: flex-start; !important`}

  input {
    ${({ open }) =>
      !open
        ? 'opacity: 1; display: block;'
        : 'opacity: 0 !important; display: none'}
  }

  p {
    ${({ open }) =>
      open
        ? 'opacity: 1; display: block; height: 120px'
        : 'opacity: 0; display: none'}
  }

  @media (max-width: 750px) {
    height: 200px;
  }

  ${sizesForEachScreens(
    [6500, 2000, 1500, 750],
    [100, 85, 70, 60],
    'height',
    'px'
  )};
  ${sizesForEachScreens(
    [6500, 2000, 1500, 750],
    [18, 14, 12, 10],
    'margin-top',
    'px'
  )};
`;

export const CardNameDiv = styled.div`
  width: 34px;
  height: 34px;

  background: #f8f8fc;
  ${flexbox('row', 'center', 'center')};
  text-align: center;

  border-radius: 100%;
  margin-right: 10px;

  font-size: 13px;
  color: #656777;
  ${getFont('bold')};

  ${sizesForEachScreens(
    [6500, 2000, 1500, 750],
    [25, 17, 15, 13],
    'font-size',
    'px'
  )};

  ${sizesForEachScreens(
    [6500, 2000, 1500, 750],
    [60, 45, 30, 34],
    'width',
    'px'
  )};
  ${sizesForEachScreens(
    [6500, 2000, 1500, 750],
    [60, 45, 30, 34],
    'height',
    'px'
  )};
`;

export const RateCompanyContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 700px;
  overflow-y: auto !important;
  overflow-x: hidden;
  position: absolute;
  z-index: 1;
  background: #fff;

  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;

  box-sizing: border-box;

  @media (max-width: 400px) {
    justify-content: center;
  }
  @media (max-width: 750px) {
    justify-content: center;
    min-height: auto;
  }
  @media (min-width: 2500px) {
    justify-content: center;
  }
`;

export const ButtonBack = styled.button`
  width: 40px;
  height: 20px;
  position: fixed;
  top: 60px;
  left: 5%;

  background: transparent;
  background-image: ${({ img }) => ` url(${img})`};
  background-size: 100%;
  background-position-y: center;
  background-position-x: center;
  background-repeat: no-repeat;

  border: none;
  outline: none;

  @media (max-width: 750px) {
    top: 20px;
    left: 5%;
  }

  @media (min-width: 2500px) {
    width: 80px;
    height: 40px;

    top: 100px;
    left: 5%;
  }
`;

export const RateCompanyTex = styled.p`
  width: 70%;
  height: auto;

  text-align: center;
  color: ${colorsApp.darkGreen};
  font-size: 40pt;
  ${getFont()};

  margin-top: 60px;
  margin-bottom: 40px;
  @media (max-width: 480px) {
    width: 90% !important;
  }
  @media (max-width: 750px) {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 18px !important;
  }
  @media (max-width: 1000px) {
    font-size: 24px;
  }
  @media (main-width: 1230px) {
    width: 90%;
  }

  ${sizesForEachScreens(
    [6600, 3200, 2500, 1500, 1000, 700, 450],
    [40, 30, 30, 26, 24, 20, 14],
    'font-size',
    'pt'
  )};
`;

export const RateCompanyTextarea = styled.textarea`
  width: 70%;
  height: 170px;
  max-width: 1800px;

  padding: 20px 30px;

  color: ${colorsApp.soDark};
  font-size: 24px;
  ${getFont()};

  border: solid 1px rgba(112, 112, 112, 0.5);
  border-radius: 16px;

  resize: none;

  &:focus {
    outline: none;
    border: solid 2px rgba(252, 190, 1);
  }

  box-sizing: border-box;
  @media (max-width: 750px) {
    font-size: 16px !important;
    width: 90% !important;
    padding: 10px 20px;
  }
  @media (min-width: 750px) {
    width: 70% !important;
    font-size: 20px;
  }
  @media (min-width: 1100px) {
    width: 70% !important;
    font-size: 20px;
  }

  ${sizesForEachScreens([6500, 1500], [1800, 1200], 'width', 'px')};
  ${sizesForEachScreens([6500, 2000, 1500], [300, 180, 150], 'height', 'px')};
  ${sizesForEachScreens(
    [6500, 2000, 1500, 750],
    [40, 22, 18, 16],
    'font-size',
    'px'
  )};
`;

export const SendRateButton = styled.button`
  width: 300px;
  height: 68px;
  position: relative;

  background: #4b55ba;

  border-radius: 8px;
  border: 0;
  outline: none;
  margin-top: 40px;

  :hover {
    opacity: 0.5;
  }

  cursor: pinter;

  text-align: center;
  color: #fff;
  font-size: 26px;
  @media (max-width: 350px) {
    margin-top: 10px;
  }
  @media (max-width: 750px) {
    width: 90% !important;
    height: 45px;
    font-size: 16px !important;
  }

  ${sizesForEachScreens([6500, 2000, 1500], [420, 340, 308], 'width', 'px')};
  ${sizesForEachScreens([6500, 2000, 1500], [80, 60, 55], 'height', 'px')};
  ${sizesForEachScreens(
    [6500, 2000, 1500, 750],
    [40, 22, 18, 16],
    'font-size',
    'px'
  )};
`;

export const RetingEmojiContainer = styled.div`
  width: 70%;
  max-width: 1800px;
  height: 178px;

  ${flexbox('row', 'space-between', 'center')};
  margin: 0 auto;
  margin-bottom: 40px;
  @media (max-width: 350px) {
    height: 148px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    width: 90% !important;
  }
  @media (max-width: 750px) {
    font-size: 14px !important;
    width: 90% !important;
    height: 90px !important;
    ${flexbox('row', 'space-between', 'space-between')};
  }
  @media (min-width: 750px) {
    width: 70% !important;
  }

  ${sizesForEachScreens([6500, 1500], [1700, 1100], 'width', 'px')};
`;

export const RetingSingleEmoji = styled.button`
  height: 136px;
  width: 100%;

  border: none;
  outline: none;
  background: #fff;

  transition: background-image 0.8s, font-weight 0.8s, transform 0.8s;

  color: #58676a;

  ${sizesForEachScreens(
    [6500, 3300, 2000, 1500, 1000, 750, 400],
    [40, 30, 20, 16, 14, 10, 10],
    'font-size',
    'pt'
  )};

  ${({ active }) => (active ? `${getFont('bold')}` : `${getFont()}`)}

  ${flexbox('column', 'center', 'center')};

  div {
    height: 80px;
    width: 80px;
    background-image: ${({ img, active }) =>
      `  url(/images/emoji${img}-${active}.png)`};
    background-position-x: center;
    background-repeat: no-repeat;
    background-size: 100%;

    transition: background-image 0.8s, transform 0.8s;

    ${sizesForEachScreens(
      [6500, 3300, 2000, 1500, 1000, 750, 400],
      [100, 80, 70, 60, 50, 40, 35],
      'width',
      'px'
    )};
    ${sizesForEachScreens(
      [6500, 3300, 2000, 1500, 1000, 750, 400],
      [100, 80, 70, 60, 50, 40, 35],
      'height',
      'px'
    )};
    ${sizesForEachScreens(
      [6500, 3300, 2000, 1500, 1000, 750, 400],
      [30, 25, 20, 20, 20, 15, 10],
      'margin-bottom',
      'px'
    )};
  }

  p {
    transition: font-weight 0.8s, transform 0.8s;
  }

  :focus,
  :active,
  :hover {
    ${getFont('bold')};

    div {
      background-image: ${({ img }) => ` url(/images/emoji${img}-true.png)`};
    }
  }
  @media (max-width: 400px) {
    height: 50px !important;
    width: 90%;

    ${flexbox('column', 'center', 'center')};
  }
  @media (max-width: 600px) {
    font-size: 10px !important;
  }
  @media (max-width: 750px) {
    height: 100px !important;
  }

  @media (max-width: 1100px) {
    height: 140px;
  }
  @media (min-width: 1100px) {
    height: 240px;
    margin: 40px 0;
  }
  @media (min-width: 3000px) {
    margin-top: 100px !important;
    margin-bottom: 100px !important;
  }
`;

export const Background = styled.div`
  top: 10%;
  right: 0;
  left: 10%;
  bottom: 0;
  position: absolute;
  z-index: -1;

  background: transparent;

  ${flexbox('column', 'space-between', 'flex-start')};

  @media (max-width: 700px) {
    ${flexbox('row', 'space-between', 'flex-start')};
    bottom: 74%;
    top: 5%;
    right: 50%;
    left: 5%;

    img:first-child {
      width: 80px;
      height: 80px;
    }
    img:last-child {
      display: none;
    }
  }
`;

export const Modal1 = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 2000;

  display: ${({ show }) => (show ? 'flex' : 'none')};

  overflow-y: auto;

  background: #fff;

  flex-direction: column;
  justify-content: flex-start;
`;
