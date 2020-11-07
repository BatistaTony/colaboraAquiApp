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

width:63%;

${sizesForEachScreens([1500, 1170, 900], [73, 77, 90], "width", "%")};

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
  color: ${colorsApp.textSecundary};
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
    ${getFont()};
    color: ${colorsApp.textSecundary};
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
    margin-top: 7px;

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
    width: 100%;

    &:first-child {
      width: 100%;
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
`;

export const ItemSelect = styled.li`
  border: none;
  width: 100%;
  font-size: 30pt;
  padding-top: 35px;
  padding-bottom: 35px;
  padding-left: 50px;
  border: none;
  color: ${colorsApp.textPrimary};
  background: ${({ active }) => (active ? `${colorsApp.orange}` : "white")};

  ${sizesForEachScreens(
    [3300, 3000, 2700, 2300, 1930, 1500],
    [30, 25, 20, 18, 14, 12],
    "padding-bottom",
    "px"
  )};

  ${sizesForEachScreens(
    [3300, 3000, 2700, 2300, 1930, 1500, 1000],
    [30, 25, 20, 18, 14, 12],
    "padding-top",
    "px"
  )};

  ${sizesForEachScreens(
    [3200, 3000, 2500, 1930, 1000, 950],
    [35, 30, 25, 20, 15, 10],
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
`;

export const ListOfRating = styled.div`
  width: 100%;
  margin-top: 30px;
  height: auto;
  padding-bottom: 50px;
`;

export const ConsumerRateStyle = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const BodyRating = styled.div`
  width: 100%;
  padding-left: 15px;
  box-sizing: border-box;
  ${flexbox("column", "flex-start", "flex-start")};

  .min_bdy_fr_strA_ {
    ${flexbox("row", "flex-start", "center")};
  }

  @media (max-width: 750px) {
    padding-left: 10px;
  }
`;

const chooseBgForAvatar = (letter: string) => {
  switch (letter.toLowerCase()) {
    case "a" || "b" || "c": {
      return `${colorsApp.roxo}`;
    }

    case "d" || "f" || "g": {
      return `${colorsApp.sucess}`;
    }

    case "h" || "i" || "j": {
      return `${colorsApp.textPrimary}`;
    }

    case "k" || "l" || "m" || "n": {
      return `${colorsApp.kindaBlue}`;
    }

    default: {
      return `${colorsApp.orange}`;
    }
  }
};

export const ConsumerAvatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background: ${({ name }) => chooseBgForAvatar(name)};
  ${flexbox()};
  text-align: center;
  color: white;
  font-size: 12pt;
  ${getFont("Bold")};
`;

export const ConsumerName = styled.p`
  color: ${colorsApp.textPrimary};
  font-size: 12pt;
  ${getFont("Medium")};
  height: 30px;
  ${flexbox()};
`;

export const ConsumerStarsRating = styled.div`
  .bodyOfStars {
    padding: 0;
    background: transparent;
  }
  .startOnRating {
    padding: 0;
    margin-right: 1px;
  }
`;

export const RateTime = styled.p`
  height: auto;
  color: ${colorsApp.textSecundary};
  font-size: 9pt;
  ${getFont("Medium")};
  margin-left: 12px;

  @media (max-width: 750px) {
    font-size: 8pt;
    margin-left: 10px;
  }
`;

export const BodyTextRating = styled.p`
  width: 100%;
  height: auto;
  font-size: 23pt;
  ${getFont()};
  color: ${colorsApp.darkGreen};
  text-align: justify;
  margin-top: 10px;

  ${sizesForEachScreens(
    [3200, 3000, 2500, 1930, 1500, 950, 750],
    [23, 21, 18, 16, 11.5, 11, 10],
    "font-size",
    "pt"
  )};
`;

export const ButtonToggleSuggestionText = styled.button`
  color: ${colorsApp.roxo};
  height: 35px;
  padding-left: 15px;
  padding-right: 15px;
  border: none;
  outline: none;
  background: #f1f0f4;
  font-size: 9pt;
  ${getFont("Medium")};
  border-radius: 30px;
  margin-top: 15px;
  cursor: pointer;
`;

export const TextSuggestionRate = styled(motion.div)`
  width: 100%;
  height: auto;

  margin-top: 10px;
  padding-left: 15px;
  border-left: 3px solid ${colorsApp.roxo};
  padding-top: 5px;
  padding-bottom: 5px;
  box-sizing: border-box;

  .title_txt_fd_g {
    color: ${colorsApp.roxo};
    margin-bottom: 15px;
  }

  @media (max-width: 750px) {
    padding-left: 10px;
    border-left: 2.5px solid ${colorsApp.roxo};
  }

  p {
    font-size: 25pt;
    ${getFont("Medium")};
    color: ${colorsApp.darkGreen};
    text-align: justify;

    ${sizesForEachScreens(
      [3200, 3000, 2500, 1930, 1500, 950, 750],
      [23, 21, 18, 16, 11.5, 11, 10],
      "font-size",
      "pt"
    )};
  }
`;
