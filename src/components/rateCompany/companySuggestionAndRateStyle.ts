import { motion } from "framer-motion";
import styled from "styled-components";
import {
  colorsApp,
  flexbox,
  getFont,
  NormalFontSize,
  sizesForEachScreens,
} from "../layout/layoutStyle";
import { SelectList } from "./../signUp/signUpStyle";

const widthContainer = () => `

width:65%;

${sizesForEachScreens([1500, 1170, 900], [75, 80, 90], "width", "%")};

`;

export const RatingsContainer = styled.div`
  ${widthContainer}
  margin-top:40px;
`;

export const FilterConsumerRating = styled.div`
  position: relative;
  width: 100%;
  ${flexbox("row", "space-between", "center")};
  height: auto;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 20px;

  @media (max-width: 680px) {
    flex-direction: column;
    padding-bottom: 3px;
  }
`;

export const TotalRating = styled.p`
  height: auto;
  color: ${colorsApp.textPrimary};
  font-size: 30pt;
  ${getFont("Medium")};

  ${NormalFontSize()};

  @media (max-width: 680px) {
    width: 100%;
    text-align: left;
    margin-bottom: 10px;
  }

  @media (max-width: 550px) {
    text-align: center;
  }
`;

export const GroupOfSelect = styled.div`
  position: absolute;
  right: 0;
  width: auto;
  ${flexbox()};

  .select1 {
    width: 530px;

    ${sizesForEachScreens(
      [3200, 3000, 2500, 1930, 1500],
      [450, 400, 320, 290, 200],
      "width",
      "px"
    )};

    ul {
      width: 100%;
    }

    @media (max-width: 550px) {
      width: 90%;
      justify-content: flex-start;
    }
  }

  .select2 {
    @media (max-width: 680px) {
      justify-content: flex-end;
    }
  }
  @media (max-width: 680px) {
    position: relative;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
  }

  @media (max-width: 550px) {
    display: grid;
    grid-template-columns: 48% 48%;
    justify-content: space-between;
  }
`;

export const CustomSelectRatingStyle = styled.div`
  width: 560px;
  height: 100px;
  border: none;
  transition: 0.5s;
  display: grid;
  grid-template-columns: 88% 12%;
  box-sizing: border-box;
  margin-left: 15px;
  position: relative;

  ${sizesForEachScreens(
    [3200, 3000, 2500, 1930, 1500],
    [470, 430, 350, 320, 230],
    "width",
    "px"
  )};

  @media (max-width: 550px) {
    width: 100%;
    height: auto;
    margin-left: 0;
  }

  ${sizesForEachScreens(
    [3200, 2500, 1930, 1500],
    ["90", "70", "60", "45"],
    "height",
    "px"
  )}

  @media (max-width: 550px) {
    height: 45px;
    grid-template-columns: auto auto;
  }

  button {
    span {
      width: auto;
      box-sizing: border-box;
      padding-right: 25px;

      ${sizesForEachScreens(
        [3200, 3000, 2500, 1930, 1500, 750],
        [20, 18, 15, 13, 10, 7],
        "padding-right",
        "px"
      )}
    }
  }

  button {
    font-size: 30pt;
    ${getFont("Medium")};
    color: ${colorsApp.textPrimary};
    border: none;
    outline: none;
    background: transparent;
    box-sizing: border-box;
    text-align: right;
    ${flexbox("row", "flex-end", "center")};

    ${NormalFontSize()};

    @media (max-width: 450px) {
      font-size: 9pt;
    }

    @media (max-width: 390px) {
      font-size: 8.5pt;
    }
  }

  .iconeSeta {
    ${flexbox("row", "flex-end", "center")};

    width: 27px;
    height: 23px;
    margin-top: 10px;

    ${sizesForEachScreens(
      [3200, 3000, 2500, 1930, 1500, 550],
      [25, 22, 18, 16, 14, 11],
      "width",
      "px"
    )};
    ${sizesForEachScreens(
      [3200, 3000, 2500, 1930, 1500, 550],
      [22, 18, 16, 14, 12, 9],
      "height",
      "px"
    )};

    ${sizesForEachScreens(
      [3200, 3000, 1950, 1500, 1000],
      [4, 3, 4, 2, 3, 2.5],
      "margin-top",
      "px"
    )};
  }
`;

export const SelectRatingList = styled(SelectList)`
  height: auto;
  justify-self: flex-end;
  width: 90%;
  border-radius: 35px;

  &:first-child {
    width: 80%;
  }

  ${sizesForEachScreens(
    [2600, 2000, 1500, 1000],
    [30, 25, 15, 12],
    "border-radius",
    "px"
  )};

  @media (max-width: 550px) {
    width: 95%;

    &:first-child {
      width: 85%;
    }
  }

  @media (max-width: 3200px) {
    height: auto;
  }

  @media (max-width: 2500px) {
    height: auto;
  }

  @media (max-width: 1930px) {
    height: auto;
  }

  @media (max-width: 1500px) {
    height: auto;
  }

  li {
    border: none;
    width: 100%;
    font-size: 30pt;
    padding-top: 35px;
    padding-bottom: 35px;
    padding-left: 50px;
    border: none;

    ${sizesForEachScreens(
      [3300, 3000, 2700, 2300, 1930, 1500],
      [30, 25, 20, 18, 14, 12],
      "padding-bottom",
      "px"
    )};

    ${sizesForEachScreens(
      [3300, 3000, 2700, 2300, 1930, 1500],
      [30, 25, 20, 18, 14, 12],
      "padding-top",
      "px"
    )};

    ${sizesForEachScreens(
      [3200, 3000, 2500, 1930],
      [35, 30, 25, 20],
      "padding-left",
      "px"
    )}

    ${NormalFontSize()};

    @media (max-width: 450px) {
      font-size: 9pt;
    }

    @media (max-width: 390px) {
      font-size: 8.5pt;
    }

    &:hover {
      &:first-child {
        background: white;
      }
    }

    &:first-child {
      background: white;
      color: ${colorsApp.textSecundary};
    }
  }
`;

export const ConsumerRateStyle = styled.div``;

export const consumerAvatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background: ${colorsApp.orange};
  ${flexbox()};
  text-align: center;
  color: white;
  ${getFont("Bold")};
`;

export const consumerName = styled.h3`
  color: ${colorsApp.textPrimary};
  font-size: 12pt;
  ${getFont("Medium")};
`;

export const consumerStars = styled.div``;

export const RateTime = styled.p`
  height: auto;
  color: ${colorsApp.textSecundary};
  font-size: 40pt;
  ${getFont()};

  ${sizesForEachScreens(
    [3200, 2500, 2000, 1500, 1300, 900, 690, 308],
    [37, 34, 28, 17, 14, 13, 12, 11],
    "font-size",
    "pt"
  )};
`;
