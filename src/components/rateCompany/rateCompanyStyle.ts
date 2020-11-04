import styled from "styled-components";
import {
  colorsApp,
  flexbox,
  getFont,
  sizesForEachScreens,
} from "../layout/layoutStyle";

import { motion } from "framer-motion";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  position: relative;

  background: #fff;
  ${flexbox("column", "flex-start", "center")};
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

export const Header = styled.div`
  width: 70%;
  height: auto;
  min-height: 200px;
  max-width: 1800px;
  position: relative;

  ${flexbox("row", "space-between", "center")};

  margin-top: 100px;

  @media (max-width: 750px) {
    margin-top: 20px;
    padding-top: 10px;
    width: 90% !important;
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

export const Row = styled.div`
  width: 100%;

  ${flexbox("row", "space-between", "center")};
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
  color: ${colorsApp.soDark};
  font-size: 26px;
  ${getFont("Medium")};

  margin: 0 10px;

  margin: 0 10px;

  ${sizesForEachScreens(
    [6500, 2000, 1500, 750],
    [35, 25, 15, 14],
    "font-size",
    "px"
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

export const ModalRate = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  ${flexbox("column")};
  box-sizing: border-box;
  z-index: 9999;
`;

export const ButtonBack = styled.button`
  width: auto;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  margin: 2%;
  border: none;
  outline: none;
  background: transparent;
  ${flexbox("row", "flex-start", "center")};

  img {
    width: 2rem;
  }

  p {
    color: ${colorsApp.darkGreen};
    font-size: 12pt;
    ${getFont("Medium")};
    margin-left: 10px;
  }
`;

export const RateCompanyText = styled.p`
  width: 100%;
  height: auto;
  text-align: center;
  color: ${colorsApp.darkGreen};
  font-size: 20pt;
  ${getFont("Medium")};
  margin-top: 60px;
  margin-bottom: 40px;

  span {
    ${getFont("SemiBold")};
  }
`;

export const RatingEmojiContainer = styled.div`
  width: 60%;
  height: auto;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  ${flexbox("row", "space-between", "center")};
  margin-bottom: 40px;
`;

export const EmojeStyle = styled.div`
  width: 3.5rem;

  svg {
    width: 100%;
    height: 100%;

    #Elipse_104 {
      transition: 0.5s;
      fill: ${({ clicked }) => clicked && `${colorsApp.orange}`};
    }

    &:hover {
      #radial-gradient {
        .stop1 {
          stop-color: #f12c06;
        }

        .stop2 {
          stop-color: #faed34;
        }
      }
    }
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

  ${sizesForEachScreens(
    [6500, 3300, 2000, 1500, 1000, 750, 400],
    [40, 30, 20, 16, 14, 10, 10],
    "font-size",
    "pt"
  )};

  ${flexbox("column", "space-between", "center")};

  p {
    transition: 0.5s;
    text-align: center;
    width: 100%;
    margin-top: 20px;
    ${({ active }) => (active ? `${getFont("Bold")}` : `${getFont()}`)}
  }

  &:hover {
    p {
      ${getFont("Bold")};
    }
  }
`;

export const RateCompanyTextarea = styled.div`
  width: 60%;
  height: 100px;
  border: none;
  border-radius: 7px;
  overflow: hidden;
  box-sizing: border-box;
  background: #f1f0f4;
  border: 2px solid #f1f0f4;
  transition: 0.5s;

  textarea {
    width: 100%;
    height: 100%;
    padding: 15px;
    background: transparent;
    color: ${colorsApp.textPrimary};
    font-size: 12pt;
    ${getFont()};
    resize: none;
    outline: none;
    border: none;
  }

  &:focus-within {
    border: 2px solid ${colorsApp.roxo};
  }
`;

export const DivCheckBox = styled.div`
  width: 60%;
  position: relative;
  margin-top: 20px;
  ${flexbox("row", "flex-start", "center")};
  height: 28px;

  .divCheckMark {
    width: 25px;
    height: 90%;
    background: transparent;
    position: absolute;
    left: 0;
    top: 0;
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

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
      border: none;
    }

    &:hover input ~ .checkmark {
      background: rgb(231, 230, 230);
    }

    & input:checked ~ .checkmark {
      background-color: ${colorsApp.roxo};
      border: none;
    }

    .checkmark {
      top: 0;
      left: 0;
      position: absolute;
      background: transparent;
      height: 100%;
      width: 100%;
      transition: 0.4s;
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
      left: 10px;
      top: 3px;
      width: 5px;
      height: 12px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      transition: 0.4s;
    }
  }

  p {
    ${getFont("Medium")};
    color: ${colorsApp.textSecundary};
    margin-left: 40px;
    cursor: pointer;
  }
`;

export const DivBtnModalRate = styled.div`
  width: 60%;
  ${flexbox("row", "flex-end", "flex-end")};
  margin-top: 20px;
`;

export const SendRateButton = styled.button`
  background: ${colorsApp.roxo};
  border-radius: 5px;
  border: 0;
  outline: none;
  margin-top: 40px;
  text-align: center;
  color: white;
  font-size: 12pt;
  padding: 10px 20px 10px 20px;
  ${getFont("Medium")};

  &:hover {
    cursor: pinter;
  }
`;
