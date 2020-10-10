import styled from "styled-components";
import {
  colorsApp,
  flexbox,
  getFont,
  sizesForEachScreens,
} from "../layout/layoutStyle";
import { ButtonLogin, Logo } from "./../navbar/navbarStyle";

export const HeroStyle = styled.div`
  width: 100%;
  height: auto;
  ${flexbox("column", "flex-start", "center")};
  box-sizing: border-box;
  position: relative;
`;

export const LogoHero = styled(Logo)`
  margin-top: 50px;
  img {
    width: 70rem;

    ${sizesForEachScreens(
      [1920, 1700, 1500, 1330, 1000, 750],
      [60, 50, 40, 35, 24, 20, 15],
      "width",
      "rem"
    )};
  }

  @media (max-width: 600px) {
    margin-top: 20px;
  }

  @media (max-width: 400px) {
    margin-top: 10px;
  }
`;

export const DivText = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  ${flexbox()};

  @media (max-width: 768px) and (max-height: 1024px) {
    ${flexbox("column")};
  }

  @media (max-width: 1024px) and (max-height: 1366px) {
    ${flexbox("column")};
  }
`;

export const Text = styled.p`
  margin-top: 15px;
  width: 50%;
  height: auto;
  text-align: center;
  color: ${colorsApp.soDark};
  font-size: 35pt;
  ${getFont("Medium")};

  ${sizesForEachScreens([1000, 750, 450, 300], [60, 75, 80, 90], "width", "%")};
  ${sizesForEachScreens([1500], [0], "margin-top", "")};

  ${sizesForEachScreens(
    [2000, 1500, 1300, 450],
    [28, 17, 14, 13],
    "font-size",
    "pt"
  )};
`;

export const ListStep = styled.ul`
  ${flexbox()};
  margin-top: 60px;

  ${sizesForEachScreens([1500, 750], [30, 25], "margin-top", "px")};

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Step = styled.li`
  width: auto;
  ${flexbox("row", "flex-start", "center")};
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-bottom: 15px;
    width: 150px;
  }

  span {
    font-size: 23pt;
    ${getFont("SemiBold")};

    ${sizesForEachScreens(
      [1500, 1000, 750, 450],
      [16, 13, 12, 11],
      "font-size",
      "pt"
    )};
  }
`;

export const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  color: white;
  background: ${colorsApp.soDark};
  border: ${({ borderColor }) =>
    borderColor ? `3px solid ${borderColor}` : "3px solid gray"};
  ${flexbox()};
  margin-right: 10px;

  ${sizesForEachScreens([1500, 750, 450], [28, 25, 23], "width", "px")};

  ${sizesForEachScreens([1500, 750, 450], [28, 25, 23], "height", "px")};

  h1 {
    font-size: 17pt;
    ${getFont("ExtraBold")};

    ${sizesForEachScreens([1500, 750, 450], [15, 13, 10], "font-size", "pt")};
  }
`;

export const ButtonStartRate = styled(ButtonLogin)`
  background: ${colorsApp.orange};
  ${getFont("Medium")};
  ${flexbox()};
  height: 50px;
  font-size: 25pt;
  color: ${colorsApp.soDark};
  padding-right: 20px;
  border-radius: 10px;
  padding-left: 20px;
  padding-top: 2%;
  padding-bottom: 2%;
  margin-top: 90px;
  box-shadow: 0 0 10px ${colorsApp.orange};

  img {
    width: 40px;
    height: 40px;
    margin-left: 15px;

    ${sizesForEachScreens([1500, 1000], [30, 25], "height", "px")};
    ${sizesForEachScreens([1500, 1000], [30, 25], "width", "px")};
  }

  &:hover {
    background: ${colorsApp.kindaBlue};
  }

  ${sizesForEachScreens([1500, 1000], [14, 13], "font-size", "pt")};
  ${sizesForEachScreens([1500, 600, 450], [50, 30, 20], "margin-top", "px")};
`;

const tableStyleIllustration = ` position: relative;
top: 0;
margin-top: 20px;`;

export const IllustrationRating = styled.div`
  position: absolute;
  width: auto;
  right: 0;
  top: 10%;

  ${sizesForEachScreens(
    [1920, 1650, 1370, 1270, 1080, 750],
    [14, 17, 19, 25, 30, 25],
    "top",
    "%"
  )};

  @media (max-width: 768px) and (max-height: 1024px) {
    ${tableStyleIllustration};
  }

  @media (max-width: 1024px) and (max-height: 1366px) {
    ${tableStyleIllustration};
  }

  @media (max-width: 750px) {
    display: none;
  }

  img {
    width: 40rem;
    margin-left: 20px;

    @media (max-width: 1370px) {
      width: 22rem;
    }

    ${sizesForEachScreens(
      [1920, 1650, 1370, 1150, 1000, 750],
      [32, 25, 22, 20, 18, 15],
      "width",
      "rem"
    )};
  }
`;
