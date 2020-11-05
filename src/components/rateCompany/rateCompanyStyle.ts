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
  height: auto;
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
  position: relative;
  margin-top: 100px;
  ${flexbox("row", "space-between", "center")};
`;

export const HeaderInforCompany = styled.div`
  height: auto;
  ${flexbox("row", "space-between", "center")};
`;
export const HeaderAvaliation = styled.div`
  ${flexbox("row", "justify-content", "center")};
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
  font-size: 26pt;
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

export const RateButton = styled.button`
  width: 208px;
  height: 55px;
  position: relative;
  background: ${colorsApp.roxo};
  border-radius: 8px;
  border: 0;
  margin-left: 50px;
  outline: none;
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

export const Text = styled.p`
  width: 70%;
  height: auto;
  text-align: left;
  color: ${colorsApp.darkGreen};
  font-size: 45pt;
  ${getFont()};
  margin-bottom: 40px;
  background: red;

  ${sizesForEachScreens(
    [3200, 2500, 2000, 1500, 1300, 450],
    [40, 35, 28, 17, 14, 13],
    "font-size",
    "pt"
  )};
`;
