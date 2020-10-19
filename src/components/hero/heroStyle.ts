import styled from "styled-components";
import {
  colorsApp,
  flexbox,
  getFont,
  sizesForEachScreens,
} from "../layout/layoutStyle";
import { Logo } from "../navbar/navbarStyle";

export const HeroStyle = styled.div`
  width: 100%;
  height: auto;
  ${flexbox("column", "flex-start", "center")};
  box-sizing: border-box;
  position: relative;
  z-index: ${({ showSignUp }) => (showSignUp ? "99" : "1")};

  .my-overlay-enter {
    opacity: 0;
    display: flex;
  }

  .my-overlay-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }

  .my-overlay-exit {
    opacity: 1;
  }

  .my-overlay-exit-active {
    opacity: 0;
    display: none;
  }
`;

export const BackGroundWithIllustration = styled.div`
  width: 100%;
  height: 110vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  display: grid;
  grid-template-columns: 40% 40%;
  justify-content: space-between;

  grid-template-rows: 100%;

  @media (max-width: 850px) {
    height: 100vh;
    grid-template-columns: 100%;
  }

  .illustration1_e {
    width: 40%;
    height: 100%;
    background: url(/images/bg2.svg);
    background-size: 100% 100%;
    background-position: left;
    position: absolute;
    left: 0;

    bottom: -3%;

    @media (max-width: 850px) {
      display: none;
    }
  }

  .illustration2_e {
    width: 60%;
    height: 100%;
    background: url(/images/caminho.svg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: right;
    position: absolute;
    right: -10%;
    bottom: -5%;

    @media (max-width: 850px) {
      height: 100vh;
      bottom: -15%;
      width: 100%;
      background-position: bottom;
      background-size: 100% 80%;
    }

    @media (max-width: 380px) and (max-height: 850px) {
      bottom: -20%;
    }

    @media (max-width: 1617px) and (max-height: 1392px) {
      bottom: -25%;
    }

    @media (min-width: 1024px) and (max-width: 1024px) and (min-height: 1366px) and (max-width: 1366px) {
      bottom: -24%;
    }
  }
`;

const pullPaddingLeft = () => `
 ${sizesForEachScreens(
   [1500, 1370, 1100, 970, 950, 900, 850],
   [-6, -10, -15, -20, -23, -25, 0],
   "margin-left",
   "%"
 )} 
  
  @media (min-width: 1024px) and (max-width: 1024px) and (min-height: 1366px) and (max-width: 1366px) {
    margin-left:0;
  }
  
  
  `;

export const LogoHero = styled(Logo)`
  margin-top: 50px;
  img {
    width: 90rem;

    ${sizesForEachScreens(
      [3200, 2700, 1920, 1700, 1500, 1330, 1000, 750],
      [80, 70, 60, 50, 40, 35, 24, 20, 15],
      "width",
      "rem"
    )};
  }

  ${pullPaddingLeft};

  @media (max-width: 1500px) {
    margin-top: 20px;
  }

  @media (max-width: 600px) {
    margin-top: 20px;
  }

  @media (max-width: 400px) {
    margin-top: 10px;
  }
`;

export const DivHero = styled.div`
  width: auto;
  height: auto;
  position: relative;
  ${flexbox("column")};

  @media (min-width: 1024px) and (max-width: 1024px) and (min-height: 1366px) and (max-width: 1366px) {
    margin-top: 20%;
  }
`;

export const Text = styled.p`
  margin-top: 15px;
  width: 50%;
  height: auto;
  text-align: center;
  color: ${colorsApp.soDark};
  font-size: 45pt;
  ${getFont("Medium")};

  ${sizesForEachScreens([1000, 750, 450, 300], [60, 75, 80, 90], "width", "%")};
  ${sizesForEachScreens([1500], [0], "margin-top", "")};

  ${pullPaddingLeft};

  ${sizesForEachScreens(
    [3200, 2500, 2000, 1500, 1300, 450],
    [40, 35, 28, 17, 14, 13],
    "font-size",
    "pt"
  )};
`;

export const ListStep = styled.ul`
  ${flexbox()};
  margin-top: 70px;

  ${sizesForEachScreens([1500, 750], [30, 25], "margin-top", "px")};

  @media (max-width: 600px) {
    width: 80%;
  }

  ${pullPaddingLeft};
`;

export const Step = styled.li`
  width: auto;
  ${flexbox("row", "flex-start", "center")};
  margin-left: 50px;

  ${sizesForEachScreens(
    [2500, 2000, 1500, 1000, 750],
    [40, 30, 20, 15, 10],
    "margin-left",
    "px"
  )};

  span {
    font-size: 38pt;
    ${getFont("SemiBold")};

    ${sizesForEachScreens(
      [2500, 2000, 1500, 1000, 750, 450],
      [30, 25, 16, 13, 12, 11],
      "font-size",
      "pt"
    )};
  }
`;

export const StepNumber = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  color: white;
  background: ${colorsApp.soDark};
  border: ${({ borderColor }) =>
    borderColor ? `8px solid ${borderColor}` : "8px solid gray"};
  ${flexbox()};
  margin-right: 20px;

  @media (max-width: 3200px) {
    width: 60px;
    height: 60px;
    border-width: 7px;
    margin-right: 15px;
  }

  @media (max-width: 2700px) {
    width: 50px;
    height: 50px;
    border-width: 7px;
  }

  @media (max-width: 2300px) {
    width: 40px;
    height: 40px;
    border-width: 5px;
    margin-right: 10px;
  }

  @media (max-width: 1500px) {
    width: 30px;
    height: 30px;
    border-width: 3px;
  }

  @media (max-width: 1000px) {
    width: 27px;
    height: 27px;
  }

  @media (max-width: 750px) {
    width: 25px;
    height: 25px;
    margin-right: 7px;
  }

  h1 {
    font-size: 30pt;
    ${getFont("ExtraBold")};

    ${sizesForEachScreens(
      [3200, 2500, 2000, 1500, 750, 450],
      [20, 22, 18, 12, 12, 10],
      "font-size",
      "pt"
    )};
  }
`;

export const ButtonStartRate = styled.button`
  background: ${colorsApp.orange};
  ${getFont("Medium")};
  height: 50px;
  font-size: 30pt;
  border-radius: 12px;
  color: ${colorsApp.soDark};
  padding: 60px;
  padding-top: 65px;
  padding-bottom: 65px;
  margin-top: 3%;
  box-shadow: 0 0 10px ${colorsApp.orange};
  border: none;
  outline: none;
  ${flexbox()};

  ${pullPaddingLeft};

  ${sizesForEachScreens([3200, 2700, 2200], [55, 45, 35], "height", "px")};

  ${sizesForEachScreens(
    [3200, 2700, 2200, 1500, 1000, 750],
    [50, 40, 30, 25, 20, 18],
    "padding",
    "px"
  )};

  ${sizesForEachScreens(
    [3200, 2700, 2200, 1500, 1000],
    [55, 45, 35, 27, 25],
    "padding-top",
    "px"
  )};

  ${sizesForEachScreens(
    [3200, 2700, 2200, 1500, 1000],
    [55, 45, 35, 27, 25],
    "padding-bottom",
    "px"
  )};

  img {
    width: 60px;
    height: 60px;
    margin-left: 15px;

    ${sizesForEachScreens(
      [3200, 2700, 2200, 1500, 1000, 750],
      [50, 40, 35, 30, 25, 20],
      "height",
      "px"
    )};
    ${sizesForEachScreens(
      [3200, 2700, 2200, 1500, 1000, 750],
      [50, 40, 35, 30, 25, 20],
      "width",
      "px"
    )};
  }

  ${sizesForEachScreens(
    [3200, 2700, 2200, 1500, 1000, 750],
    [27, 24, 18, 14, 13, 12],
    "font-size",
    "pt"
  )};

  ${sizesForEachScreens([1500, 750], [50, 70], "margin-top", "px")};
`;

export const IllustrationRating = styled.div`
  position: absolute;
  width: auto;
  right: 0;
  bottom: 5%;
  transition: 0.5s;

  @media (max-width: 850px) {
    display: none;
  }

  img {
    width: 67rem;
    margin-left: 20px;

    ${sizesForEachScreens(
      [3200, 2700, 2200, 1920, 1650, 1370],
      [60, 50, 40, , 32, 25, 22],
      "width",
      "rem"
    )};
  }
`;
