import styled from "styled-components";
import {
  colorsApp,
  flexbox,
  getFont,
  sizesForEachScreens,
  NormalFontSize,
} from "../layout/layoutStyle";

import { motion } from "framer-motion";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: #fff;
  ${flexbox("column", "flex-start", "center")};
  overflow: auto;
  box-sizing: border-box;
`;

export const StarsDiv = styled.div`
  width: 150px;
  height: 35px;
  align-self: center;
  margin-left: 20px;

  @media (min-width: 1230px) {
    width: 200px;
    height: 45px;
  }
`;

export const Header = styled.div`
  width: 70%;
  height: auto;
  min-height: 200px;
  max-width: 1800px;
  position: relative;
  margin-top: 100px;

  ${flexbox("row", "space-between", "center")};

  @media (max-width: 750px) {
    margin-top: 20px;
    padding-top: 10px;
    width: 90%;
    ${flexbox("column", "space-around", "center")};
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
  ${flexbox("row", "space-between", "center")};

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
  ${flexbox("row", "justify-content", "center")};

  @media (max-width: 750px) {
    display: none;
  }
`;

export const CompanyLogo = styled.div`
  width: 160px;
  height: 160px;
  background-color: white;
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
    "width",
    "px"
  )};
  ${sizesForEachScreens(
    [6500, 3000, 2000, 1500, 1000, 750],
    [300, 180, 160, 120, 100, 80],
    "height",
    "px"
  )};
`;

export const NameOfComapny = styled.p`
  color: ${colorsApp.soDark};
  font-size: 40px;
  ${getFont("Bold")};

  margin: 0 10px;

  ${sizesForEachScreens(
    [6500, 2000, 1500, 750],
    [50, 40, 30, 20],
    "font-size",
    "px"
  )};
`;

export const Avaliations = styled.p`
  color: ${colorsApp.textSecundary};
  font-size: 26px;
  margin: 0 10px;
  ${getFont()};

  span {
    ${getFont("Bold")};
  }

  ${sizesForEachScreens(
    [6500, 2000, 1500, 750],
    [35, 25, 15, 14],
    "font-size",
    "px"
  )};
`;

export const Text = styled.p`
  width: 70%;
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

  ${sizesForEachScreens(
    [3200, 2500, 2000, 1500, 1300, 450],
    [40, 35, 28, 17, 14, 13],
    "font-size",
    "pt"
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
      "width",
      "px"
    )};
    ${sizesForEachScreens(
      [6500, 3000, 2000, 1500, 1000],
      [40, 26, 22, 18, 16],
      "height",
      "px"
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
    "width",
    "px"
  )};
  ${sizesForEachScreens(
    [6500, 3000, 2000, 1500, 1000, 750],
    [80, 60, 55, 50, 40, 50],
    "height",
    "px"
  )};
  ${sizesForEachScreens(
    [6500, 3000, 2000, 1500, 750],
    [40, 22, 18, 16, 16],
    "font-size",
    "px"
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

export const ModalRate = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  ${flexbox("column")};
  box-sizing: border-box;
  z-index: 9999;

  @media (max-width: 550px) and (max-height: 850px) {
    justify-content: flex-end;
    padding-bottom: 10%;
  }
`;

export const ButtonBack = styled.button`
  width: auto;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  margin: 2.5%;
  border: none;
  outline: none;
  background: transparent;
  ${flexbox("row", "flex-start", "center")};

  @media (max-width: 750px) {
    margin: 4%;
  }

  img {
    width: 5rem;

    ${sizesForEachScreens(
      [2500, 1930, 1500, 900],
      [4, 3, 2, 1.8],
      "width",
      "rem"
    )};
  }

  p {
    color: ${colorsApp.darkGreen};
    font-size: 28pt;
    ${getFont()};
    margin-left: 30px;

    ${sizesForEachScreens(
      [2900, 2500, 1930, 1500],
      [20, 15, 10],
      "margin-left",
      "px"
    )};

    ${NormalFontSize()};
  }
`;

export const ContainerStepOne = styled(motion.div)`
  width: 100%;
  height: auto;
  ${flexbox("column")};
`;

export const RateCompanyText = styled.p`
  width: 100%;
  height: auto;
  text-align: center;
  color: ${colorsApp.darkGreen};
  font-size: 45pt;
  ${getFont("Medium")};

  span {
    ${getFont("SemiBold")};
  }

  ${sizesForEachScreens(
    [3400, 3200, 3100, 2900, 2400, 1930, 1600, 1400, 1100, 1000, 900, 650],
    [43, 41, 39, 35, 30, 25, 20, 18, 17, 15, 13, 12.5],
    "font-size",
    "pt"
  )};

  ${sizesForEachScreens([900], [90], "width", "%")}
`;

const widthContainer = () => `
  width:53%;
  ${sizesForEachScreens(
    [2850, 2550, 2150, 1370, 850, 750, 650, 600],
    [55, 57, 60, 63, 65, 70, 80, 90],
    "width",
    "%"
  )};

`;

export const RatingEmojiContainer = styled.div`
  ${widthContainer};
  height: auto;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  ${flexbox("row", "space-between", "center")};
  margin-top: 10rem;
  margin-bottom: 7rem;

  ${sizesForEachScreens(
    [3000, 2500, 2000, 1500],
    [8, 6, 4, 3.5],
    "margin-top",
    "rem"
  )};

  ${sizesForEachScreens(
    [3000, 2500, 2000, 1500],
    [5, 4, 3.7, 3.3],
    "margin-bottom",
    "rem"
  )};

  @media (max-height: 710px) {
    margin-top: 3rem;
    margin-bottom: 2.5rem;
  }

  @media (max-height: 660px) {
    margin-top: 2.8rem;
    margin-bottom: 2rem;
    grid-template-rows: repeat(4, 1fr) 1.5fr;
  }
`;

export const RatingSingleEmoji = styled.button`
  height: auto;
  width: 100%;
  display: grid;
  border: none;
  outline: none;
  background: #fff;
  grid-template-rows: repeat(5, 1fr);
  transition: 0.8s;
  color: #58676a;
  ${flexbox("column", "space-between", "center")};

  p {
    transition: 0.5s;
    text-align: center;
    width: 100%;
    margin-top: 30px;
    font-size: 40pt;
    ${({ clicked }) => (clicked ? `${getFont("Bold")}` : `${getFont()}`)}

    ${sizesForEachScreens(
      [3300, 2000, 1500, 1000, 850, 620, 500, 400],
      [30, 20, 16, 13.5, 12.5, 11.5, 10, 9, 8],
      "font-size",
      "pt"
    )};

    ${sizesForEachScreens(
      [2300, 1940, 1500, 1000, 750],
      [25, 20, 15, 10, 5],
      "margin-top",
      "px"
    )};
  }

  svg {
    width: 100%;
    height: 100%;

    .stop1 {
      stop-color: ${({ clicked }) => (clicked ? "#ffd85b" : "#f2e7e4")};
    }

    .stop2 {
      stop-color: ${({ clicked }) => (clicked ? "#fcb12a" : "#c6b5b2")};
    }

    #Caminho_599,
    #Caminho_606,
    #Caminho_613,
    #Caminho_616 {
      stroke: ${({ clicked }) => (clicked ? "#ff5c3a" : "#4d3c37")};
    }
  }

  &:hover {
    p {
      ${getFont("Bold")};
    }

    svg {
      .stop1 {
        stop-color: #ffd85b;
      }

      .stop2 {
        stop-color: #fcb12a;
      }

      #Caminho_599,
      #Caminho_606,
      #Caminho_613,
      #Caminho_616 {
        stroke: #ff5c3a;
      }
    }
  }
`;

export const EmojeStyle = styled.div`
  width: 7rem;

  ${sizesForEachScreens(
    [3000, 2550, 2150, 1500, 1370, 1000, 850, 620],
    [6, 5, 4.5, 4, 3, 2.5, 2, 1.7],
    "width",
    "rem"
  )};
`;

export const RateCompanyTextarea = styled.div`
  ${widthContainer};
  height: 250px;
  border: none;
  border-radius: 20px;
  overflow: hidden;
  box-sizing: border-box;
  background: #f1f0f4;
  border: 5px solid #f1f0f4;
  transition: 0.5s;

  ${sizesForEachScreens(
    [2900, 2500, 2000, 1800, 1500, 1100, 1000, 900],
    [240, 220, 205, 180, 110, 100, 95, 85],
    "height",
    "px"
  )};

  ${sizesForEachScreens(
    [2900, 2000, 1500, 1000],
    [18, 15, 10, 5],
    "border-radius",
    "px"
  )};

  ${sizesForEachScreens(
    [3000, 2500, 1500, 1000],
    [4, 3, 2, 1.5],
    "border-width",
    "px"
  )};

  textarea {
    width: 100%;
    height: 100%;
    padding: 35px;
    padding-left: 45px;
    background: transparent;
    color: ${colorsApp.textPrimary};
    font-size: 30pt;
    ${getFont()};
    resize: none;
    outline: none;
    border: none;

    ${sizesForEachScreens(
      [3200, 3000, 2500, 1930, 1500, 1000, 750],
      [26, 22, 19, 17, 12, 11, 10],
      "font-size",
      "pt"
    )};

    ${sizesForEachScreens(
      [2900, 2500, 2000, 1500, 1000],
      [30, 20, 15, 13, 10],
      "padding",
      "px"
    )};
    ${sizesForEachScreens(
      [2900, 2500, 2000, 1500],
      [35, 25, 20, 15],
      "padding-left",
      "px"
    )};
  }

  &:focus-within {
    border-color: ${colorsApp.roxo};
  }
`;

export const DivCheckBox = styled.div`
  ${widthContainer};
  position: relative;
  margin-top: 2rem;
  ${flexbox("row", "flex-start", "center")};
  height: auto;

  ${sizesForEachScreens(
    [3000, 2500, 2000],
    [1.5, 1.3, 1],
    "margin-top",
    "rem"
  )};

  @media (max-width: 1000px) {
    padding-top: 5px;
  }

  .divCheckMark {
    width: 24px;
    height: 24px;
    background: transparent;
    position: absolute;
    left: 11px;
    top: 15px;
    border-radius: 5px;
    border: ${({ checked }) =>
      checked ? `2px solid ${colorsApp.roxo}` : "2px solid rgb(185, 184, 184)"};
    cursor: default;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow: hidden;
    cursor: pinter;
    transform: scale(2);

    ${sizesForEachScreens(
      [3000, 2500, 2000, 1700],
      ["scale(1.8)", "scale(1.6)", "scale(1.4)", "scale(1.3)"],
      "transform",
      ""
    )}

    ${sizesForEachScreens([2500, 2000], [8, 4], "left", "px")}

    ${sizesForEachScreens(
      [3200, 3100, 3000, 2500, 2000, 1930],
      [12, 10, 8, 6, 5, 4],
      "top",
      "px"
    )}

    @media (max-width: 1500px) {
      left: 0;
      top: 0;
      transform: scale(1);
    }

    ${sizesForEachScreens(
      [1000, 900, 750],
      ["scale(0.8)", "scale(0.7)", "scale(0.6)"],
      "transform",
      ""
    )}

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
      border: none;
      outline: none;
    }

    &:hover input ~ .checkmark {
      background: rgb(231, 230, 230);
    }

    & input:checked ~ .checkmark {
      background-color: ${colorsApp.roxo};
      border: none;
      width: 100%;
      height: 100%;
    }

    .checkmark {
      top: 0;
      left: 0;
      position: absolute;
      background: transparent;
      height: 100%;
      width: 100%;
      transition: 0.4s;
      ${flexbox()};
    }

    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
      transition: 0.4s;
    }

    & input:checked ~ .checkmark:after {
      display: block;
    }

    & .checkmark:after {
      width: 5px;
      height: 12px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      transition: 0.4s;
      bottom: 7px;
    }
  }

  p {
    font-size: 30pt;
    ${getFont("Medium")};
    color: ${colorsApp.textSecundary};
    margin-left: 5rem;
    cursor: pointer;

    ${sizesForEachScreens(
      [3000, 2700, 2000, 1500, 1000, 900],
      [4.5, 4, 3.5, 2.7, 2.2, 2],
      "margin-left",
      "rem"
    )}

    @media (max-width:1500px) {
      margin-top: 2px;
    }

    @media (max-width: 1000px) {
      margin-top: -1px;
    }

    ${sizesForEachScreens(
      [3200, 3000, 2500, 1930, 1500, 1000, 750],
      [26, 22, 19, 17, 12, 11, 10],
      "font-size",
      "pt"
    )};
  }
`;

export const DivBtnModalRate = styled.div`
  ${widthContainer};
  ${flexbox("row", "flex-end", "flex-end")};
  margin-top: 20px;

  @media (max-height: 660px) {
    margin-top: 10px;
  }

  @media (max-width: 650px) {
    margin-top: 5px;
  }
`;

export const SendRateButton = styled.button`
  background: ${({ isDisabled }) =>
    isDisabled ? `#f1f0f4` : `${colorsApp.roxo}`};
  border-radius: 10px;
  border: 0;
  outline: none;
  margin-top: 40px;
  text-align: center;
  color: ${({ isDisabled }) =>
    isDisabled ? `${colorsApp.textSecundary}` : `white`};
  font-size: 30pt;
  width: 500px;
  height: 110px;
  ${getFont("Medium")};

  ${sizesForEachScreens(
    [3200, 3000, 2500, 2000, 1700, 1500, 1000],
    [450, 420, 400, 350, 290, 230, 200],
    "width",
    "px"
  )};

  ${sizesForEachScreens(
    [3200, 3000, 2500, 2000, 1700, 1500, 1370],
    [100, 95, 80, 70, 60, 50, 45],
    "height",
    "px"
  )};

  ${sizesForEachScreens(
    [3200, 3000, 2900, 2500, 2100, 1900, 1500, 1370],
    [28, 25, 23, 20, 18, 16, 14, 12],
    "font-size",
    "pt"
  )};

  ${sizesForEachScreens([2500, 1500], [7, 5], "border-radius", "px")};

  @media (max-width: 650px) {
    width: 100%;
    height: auto;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  &:hover {
    cursor: pinter;
  }
`;

export const GiveSuggestionContianer = styled(motion.div)`
  width: 100%;
  height: auto;
  ${flexbox("column")};
  margin-bottom: 7rem;

  @media (max-width: 2500px) {
    margin-bottom: 5rem;
  }

  @media (max-width: 1500px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 550px) and (max-height: 850px) {
    margin-bottom: 1rem;
  }

  .textGivSUgg {
    width: 100%;
    height: auto;
    text-align: center;
    color: ${colorsApp.darkGreen};
    font-size: 33pt;
    ${getFont("Medium")};
    margin-top: 15px;
    margin-bottom: 5rem;

    @media (max-width: 2500px) {
      margin-bottom: 3rem;
    }

    @media (max-width: 1500px) {
      margin-bottom: 1.5rem;
      margin-top: 10px;
    }

    ${sizesForEachScreens(
      [3200, 3000, 2900, 2500, 2100, 1900, 1500, 1370, 1000],
      [30, 28, 25, 23, 20, 18, 16, 14, 13],
      "font-size",
      "pt"
    )};

    ${sizesForEachScreens([900], [90], "width", "%")}
  }
`;

export const ModalRateSucesStyle = styled(motion.div)`
  background: white;
  border-radius: 10px;
  ${flexbox("column")};
  box-sizing: border-box;
  position: relative;
  -webkit-box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
  width: 1200px;
  height: 1200px;

  ${sizesForEachScreens(
    [3000, 2500, 2000, 1700, 1500],
    [1000, 870, 810, 700, 500],
    "width",
    "px"
  )};

  ${sizesForEachScreens(
    [3000, 2500, 2000, 1700, 1500],
    [1000, 870, 810, 700, 500],
    "height",
    "px"
  )};

  @media (max-width: 800px) {
    height: 100vh;
    box-shadow: 0 0 0px;
  }

  .title_modal_td_gf {
    width: 80%;
    text-align: center;
    font-size: 42pt;
    ${getFont()};
    transition: 0.5s;
    color: ${colorsApp.textPrimary};

    span {
      ${getFont("Medium")};
      color: ${colorsApp.orange};
      cursor: default;
    }

    ${sizesForEachScreens(
      [3200, 3000, 2500, 1930, 1500, 900],
      [40, 35, 30, 25, 15, 18],
      "font-size",
      "pt"
    )};

    @media (max-width: 750px) {
      font-size: 15pt;
      width: 90%;
      text-align: center;
    }
  }

  .text_modal_rsgf_fdf {
    width: 80%;
    text-align: center;
    height: auto;
    color: ${colorsApp.textPrimary};
    font-size: 33pt;
    ${getFont()};
    margin-top: 20px;

    ${sizesForEachScreens(
      [3200, 3000, 2500, 1930, 1500],
      [26, 22, 19, 17, 12],
      "font-size",
      "pt"
    )};

    @media (max-width: 1700px) {
      margin-top: 10px;
    }

    @media (max-width: 1500px) {
      margin-top: 7px;
    }

    @media (max-width: 1350px) {
      margin-top: 5px;
      font-size: 11pt;
    }

    @media (max-width: 900px) {
      width: 55%;
    }

    @media (max-width: 750px) {
      font-size: 11.5pt;
      width: 60%;
      text-align: center;
    }

    @media (max-width: 600px) {
      width: 90%;
    }
  }
`;

export const ButtonFinishRate = styled.button`
  background: ${colorsApp.roxo};
  ${getFont("Medium")};
  font-size: 30pt;
  border-radius: 7px;
  color: white;
  border: none;
  outline: none;
  ${flexbox()};
  width: 40%;
  margin-top: 3%;
  height: 100px;

  &:hover {
    cursor: pointer;
  }

  ${sizesForEachScreens(
    [3200, 2500, 1930, 1500],
    [90, 70, 60, 45],
    "height",
    "px"
  )}

  ${sizesForEachScreens(
    [3200, 2700, 2200, 1500, 1000],
    [27, 24, 18, 14, 13],
    "font-size",
    "pt"
  )};

  @media (max-width: 750px) {
    height: auto;
    padding-bottom: 15px;
    padding-top: 15px;
    position: fixed;
    bottom: 3%;
    flex: 0;
    width: 78%;
  }
`;

export const IllustrationModalSucessRate = styled.div`
  margin-bottom: 30px;

  img {
    width: 40rem;

    ${sizesForEachScreens(
      [3000, 2500, 2000, 1700, 1500],
      [35, 30, 25, 20, 15],
      "width",
      "rem"
    )};
  }
`;
