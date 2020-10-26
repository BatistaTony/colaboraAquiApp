import styled from 'styled-components';
import {
  colorsApp,
  flexbox,
  getFont,
  sizesForEachScreens,
} from '../layout/layoutStyle';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  position: relative;

  background: #fff;
  ${flexbox('column', 'flex-start', 'center')};
  overflow: scroll !important;

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

  // background: #ff4 !important;

  ${flexbox('row', 'space-between', 'center')};

  margin-top: 100px;

  @media (max-width: 750px) {
    margin-top: 20px;
    padding-top: 10px;
  }
  @media (max-width: 1000px) {
    width: 100% !important;
    ${flexbox('column', 'justify-content', 'center')};
    //background: #f4f !important;
    min-height: 300px;
  }
  @media (max-width: 1230px) {
    width: 90%;
  }
  @media (min-width: 1230px) {
    margin-bottom: 50px;
  }
`;

export const HeaderInforCompany = styled.div`
  height: auto;
  ${flexbox('row', 'space-between', 'center')};

  //background: #ff4 !important;

  @media (max-width: 1000px) {
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

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const HeaderInforCompanyMoblite = styled.div`
  display: none;

  @media (max-width: 1000px) {
    width: 100% !important;

    ${flexbox('column', 'center', 'center')};
  }
`;
export const HeaderAvaliationMobile = styled.div`
  display: none;

  @media (max-width: 1000px) {
    width: 100% !important;
    ${flexbox('column', 'space-between', 'center')};
  }
`;
export const Row = styled.div`
  width: 90%;

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
    [6500, 2000, 1500, 750],
    [300, 180, 160, 110],
    'width',
    'px'
  )};
  ${sizesForEachScreens(
    [6500, 2000, 1500, 750],
    [300, 180, 160, 110],
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
  @media (min-width: 1230px) {
    width: 70%;
  }

  ${sizesForEachScreens(
    [6000, 3200, 2500, 1500, 1000, 700, 450],
    [40, 34, 30, 26, 24, 20, 14],
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

    ${sizesForEachScreens([6500, 2000, 1500], [40, 26, 22], 'width', 'px')};
    ${sizesForEachScreens([6500, 2000, 1500], [40, 26, 22], 'height', 'px')};
  }

  @media (max-width: 750px) {
    height: 45px;
    font-size: 16px !important;
    width: 90% !important;

    img {
      width: 20px;
      height: 20px;
    }
  }
  @media (max-width: 1000px) {
    width: 90%;
    margin-left: 0;
  }

  ${sizesForEachScreens(
    [6500, 2000, 1500, 750],
    [320, 240, 208, 110],
    'width',
    'px'
  )};
  ${sizesForEachScreens([6500, 2000, 1500], [80, 60, 55], 'height', 'px')};
  ${sizesForEachScreens(
    [6500, 2000, 1500, 750],
    [40, 22, 18, 16],
    'font-size',
    'px'
  )};
`;

export const OpinionsContainer = styled.div`
  width: 70%;
  max-width: 1800px;
  height: auto;

  background: rgba(248, 248, 252, 0.5);
  padding: 40px 40px 140px 40px;
  box-sizing: border-box;

  @media (max-width: 750px) {
    padding: 40px 20px;
    padding-bottom: 140px;
  }

  @media (max-width: 1230px) {
    width: 90%;
  }
`;

export const OpinionsCard = styled.button`
  width: 100%;
  height: 60px;
  min-height: 60px;

  position: relative;
  transition: height 1s, background-color 1s, transform 1s;

  background: #fff;
  ${flexbox('row', 'flex-start', 'flex-start')};
  padding: 20px 10px;

  border: 0;
  border-radius: 16px;
  box-sizing: border-box;
  outline: none;
  margin-top: 10px;

  p {
    opacity: 0;
    width: 100%;
    background: transparent;
    display: none;
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
  :focus,
  :active {
    overflow: scroll;

    //padding: 20px 10px;
    background: #fff9e6;
    input {
      display: none;
    }
    align-items: flex-start;
    p {
      opacity: 1;
      display: block;
    }

    height: 150px;
    @media (max-width: 750px) {
      height: 200px;
    }
  }

  input {
    width: 100%;
    font-size: 21px;
    color: #656777;
    ${getFont()};
    pointer-events: none;
    text-overflow: ellipsis !important;
    border: none;

    background: transparent;

    ${sizesForEachScreens(
      [6500, 2000, 1500, 750, 320],
      [30, 25, 23, 21, 18],
      'font-size',
      'px'
    )};
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
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 100px;

  @media (max-width: 400px) {
    justify-content: center;
    padding-top: 10px;
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

  @media (max-width: 750px) {
    margin-top: 20px;
    margin-bottom: 0;
    font-size: 18px !important;
  }
  @media (max-width: 1000px) {
    font-size: 24px;
  }
  @media (main-width: 1230px) {
    width: 90%;
  }

  ${sizesForEachScreens(
    [3200, 2500, 1500, 1000, 700, 450],
    [40, 34, 26, 24, 20, 14],
    'font-size',
    'pt'
  )};
`;

export const RateCompanyTextarea = styled.textarea`
  width: 1000px;
  height: 170px;

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
  }
  @media (max-width: 1100px) {
    width: 90%;
    font-size: 20px;
  }
  @media (max-width: 2500px) {
    width: 70% !important;
    font-size: 20px;
  }
  ${sizesForEachScreens([6500, 1500], [1800, 1200], 'width', 'px')};
  ${sizesForEachScreens([6500, 2000, 1500], [400, 200, 170], 'height', 'px')};
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
    width: 90%;
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
  width: 952px;
  height: 178px;

  ${flexbox('row', 'space-between', 'center')};

  margin-bottom: 40px;

  @media (max-width: 350px) {
    height: 148px;
    margin-bottom: 20px;
  }
  @media (max-width: 1100px) {
    width: 90%;
    font-size: 20px;
  }
`;

export const RetingSingleEmoji = styled.button`
  height: 156px;
  width: 140px;

  border: none;
  outline: none;
  background: transparent;

  transition: background-image 0.8s, font-weight 0.8s, transform 0.8s;

  font-size: 24px;
  color: #58676a;

  ${({ active }) => (active ? `${getFont('bold')}` : `${getFont()}`)}

  ${flexbox('column', 'space-between', 'center')};

  div {
    height: 100px;
    width: 100px;
    background-image: ${({ img, active }) =>
      `  url(/images/emoji${img}-${active}.png)`};
    background-position-x: center;
    background-repeat: no-repeat;
    background-size: 100%;

    transition: background-image 0.8s, transform 0.8s;
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

    ${flexbox('column', 'center', 'center')};
    div {
      height: 35px !important;
      width: 35px !important;

      background-size: 35px;
    }
    p {
      font-size: 10px !important;
    }
  }
  @media (max-width: 750px) {
    height: 100px !important;

    font-size: 16px !important;
    div {
      height: 60px !important;
      width: 60px !important;
    }
  }

  @media (max-width: 1100px) {
    height: 140px;

    font-size: 20px;
    div {
      height: 80px;
      width: 80px;
    }
  }
`;

export const Background = styled.div`
  top: 10%;
  right: 0;
  left: 10%;
  bottom: 0;
  position: absolute;
  z-index: -2;

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

export const Modal = styled.div`
  position: fixed;
  z-index: 20;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  //overflow-y: scroll;

  background: #fff;

  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};

  background: #fff;

  transition: opacity 0.8s;

  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: 'opacity 300ms';
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    transition: 'opacity 300ms';
  }
`;
