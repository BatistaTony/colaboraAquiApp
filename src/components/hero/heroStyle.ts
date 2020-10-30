import styled from "styled-components";
import {
  colorsApp,
  flexbox,
  getFont,
  sizesForEachScreens,
} from "../layout/layoutStyle";
import { Logo } from "../navbar/navbarStyle";
import { motion } from "framer-motion";

export const HeroStyle = styled.div`
  width: 100%;
  height: auto;
  ${flexbox("column", "flex-start", "center")};
  box-sizing: border-box;
  position: relative;
  z-index: ${({ showSignUp }) => (showSignUp ? "99" : "1")};
`;

export const BackGroundWithIllustration = styled(motion.div)`
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
    transition: 0.5s;

    bottom: -3%;

    @media (max-width: 850px) {
      display: none;
    }
  }

  .illustration2_e {
    width: 60%;
    height: 115%;
    background: url(/images/caminho.svg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: right;
    position: absolute;
    right: -10%;
    bottom: -5%;
    transition: 0.5s;

    @media (max-width: 1617px) and (max-height: 1392px) {
      bottom: -25%;
      width: 70%;
      height: 160%;
    }

    @media (min-width: 1024px) and (max-width: 1024px) and (min-height: 1366px) and (max-width: 1366px) {
      bottom: -24%;
    }

    @media (max-width: 950px) {
      bottom: -30%;
    }

    @media (max-width: 850px) {
      height: 120%;
      bottom: -15%;
      right: -20%;
      width: 120%;
      background-position: bottom;
      background-size: 100% 100%;
    }

    @media (max-width: 380px) and (max-height: 850px) {
      bottom: -30%;
    }

    @media (max-height: 1024px) {
      bottom: -35%;
    }

    @media (max-height: 820px) {
      bottom: -35%;
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
    width: 75rem;

    ${sizesForEachScreens(
      [2700, 1920, 1700, 1500, 1000, 750, 325],
      [60, 50, 40, 30, 25, 20, 16, 13],
      "width",
      "rem"
    )};
  }

  ${pullPaddingLeft};

  @media (max-width: 1500px) {
    margin-top: 20px;
  }

  @media (max-width: 750px) and (max-height: 600px) {
    margin-top: -5px;
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
  margin-top: 50px;
  width: 50%;
  height: auto;
  text-align: center;
  color: ${colorsApp.textPrimary};
  font-size: 45pt;
  ${getFont("Medium")};

  ${sizesForEachScreens([1000, 750, 450, 300], [60, 75, 80, 90], "width", "%")};

  @media (max-height: 903px) {
    margin-top: 30px;
  }

  @media (max-height: 600px) {
    margin-top: 20px;
  }

  @media (max-height: 524px) {
    margin-top: 10px;
  }

  ${pullPaddingLeft};

  ${sizesForEachScreens(
    [3200, 2500, 2000, 1500, 1300, 450, 325],
    [40, 35, 28, 20, 16, 14, 12],
    "font-size",
    "pt"
  )};
`;

export const ListStep = styled.ul`
  ${flexbox()};
  margin-top: 80px;

  @media (max-height: 903px) {
    margin-top: 30px;
  }

  @media (max-width: 325px) {
    flex-direction: column;
  }

  ${pullPaddingLeft};
`;

export const Step = styled(motion.li)`
  width: auto;
  ${flexbox("row", "flex-start", "center")};
  margin-left: 50px;

  @media (max-width: 325px) {
    margin-bottom: 10px;
    width: 100px;
    justify-content: flex-start;
  }

  ${sizesForEachScreens(
    [2500, 2000, 1500, 1000, 750],
    [40, 30, 20, 15, 10],
    "margin-left",
    "px"
  )};

  span {
    font-size: 38pt;
    ${getFont("SemiBold")};
    color: ${colorsApp.textPrimary};

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
  background: ${colorsApp.textPrimary};
  border: ${({ borderColor }) =>
    borderColor ? `8px solid ${borderColor}` : "8px solid gray"};
  ${flexbox()};
  margin-right: 20px;
  box-sizing: border-box;

  @media (max-width: 3200px) {
    width: 60px;
    height: 60px;
    border-width: 7px;
    margin-right: 15px;
  }

  @media (max-width: 2300px) {
    width: 50px;
    height: 50px;
    border-width: 5px;
    margin-right: 10px;
  }

  @media (max-width: 1500px) {
    width: 35px;
    height: 35px;
    border-width: 3px;
  }

  @media (max-width: 1300px) {
    width: 30px;
    height: 30px;
    border-width: 3px;
  }

  h1 {
    font-size: 23pt;
    ${getFont("ExtraBold")};
    ${flexbox()};
    width: 100%;
    height: 100%;

    ${sizesForEachScreens(
      [3200, 2500, 1900, 1500, 1300],
      [20, 15, 16, 12, 10],
      "font-size",
      "pt"
    )};
  }
`;

export const ButtonStartRate = styled(motion.button)`
  background: ${colorsApp.orange};
  ${getFont("Medium")};
  height: 50px;
  font-size: 30pt;
  border-radius: 7px;
  color: ${colorsApp.textPrimary};
  padding: 60px;
  padding-top: 55px;
  padding-bottom: 55px;
  margin-top: 7%;
  box-shadow: 0 0 10px ${colorsApp.orange};
  border: none;
  outline: none;
  ${flexbox()};

  ${pullPaddingLeft};

  &:hover {
    cursor: pointer;
  }

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

  @media (max-width: 750px) {
    padding-bottom: 15px;
    flex: 1;
    padding-top: 15px;
  }

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

  @media (max-width: 750px) {
    margin-top: 10%;
  }

  @media (max-height: 500px) {
    margin-top: 4%;
  }

  @media (max-width: 850px) and (max-height: 600px) {
    margin-top: 10%;
  }
`;

export const IllustrationRating = styled(motion.div)`
  position: absolute;
  width: auto;
  right: -2%;
  bottom: 10%;

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
