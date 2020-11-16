import { motion } from "framer-motion";
import styled from "styled-components";
import {
  colorsApp,
  flexbox,
  getFont,
  NormalFontSize,
  sizesForEachScreens,
} from "../layout/layoutStyle";

const widthContainer = () => `

width:70%;

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
  margin-top: 30px;

  @media (max-width: 1500px) {
    margin-top: 15px;
  }

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
      [450, 400, 320, 290, 170],
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
    cursor: pointer-events;
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
    cursor: pointer;

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
    cursor: pointer;

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

export const SelectRatingList = styled(motion.ul)`
  list-style: none;
  width: 100%;
  height: auto;
  position: absolute;
  top: 108px;
  background: white;
  border-radius: 35px;
  z-index: 10;
  -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  ${sizesForEachScreens(
    [2600, 2000, 1500, 1000],
    [30, 25, 15, 12],
    "border-radius",
    "px"
  )};

  ${sizesForEachScreens(
    [3200, 2500, 1930, 1500, 1370],
    ["98", "88", "78", "53", "48"],
    "top",
    "px"
  )}

  @media (max-width: 3200px) {
    height: ${({ length }) => (length > 5 ? "300px" : "auto")};
    -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 2500px) {
    height: ${({ length }) => (length > 5 ? "270px" : "auto")};
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .active {
    background: ${colorsApp.orange};
  }

  li {
    cursor: default;
    box-sizing: border-box;
    ${getFont()};
    border: none;
    width: 100%;
    font-size: 30pt;
    padding-top: 35px;
    padding-bottom: 35px;
    padding-left: 50px;
    border: none;
    color: ${colorsApp.textPrimary};
    transition: 0.5s;
    cursor: pointer;

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
      &[tag-type="first"] {
        background: white;
      }

      background: ${colorsApp.orange};
    }

    &[tag-type="first"] {
      background: white;
      color: ${colorsApp.textSecundary};
    }
  }
`;

export const ListOfRating = styled.div`
  width: 100%;
  margin-top: 30px;
  padding-bottom: 50px;

  height: auto;
`;

export const ConsumerRateStyle = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const BodyRating = styled.div`
  width: 100%;
  padding-left: 35px;
  box-sizing: border-box;
  ${flexbox("column", "flex-start", "flex-start")};

  .min_bdy_fr_strA_ {
    ${flexbox("row", "flex-start", "center")};
  }

  ${sizesForEachScreens(
    [3000, 2500, 2000, 1500, 750],
    [30, 25, 20, 15, 10],
    "padding-left",
    "px"
  )}
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
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background: ${({ name }) =>
    name ? chooseBgForAvatar(name) : `${colorsApp.orange}`};
  ${flexbox()};
  text-align: center;
  color: white;
  font-size: 35pt;
  ${getFont("Bold")};

  ${sizesForEachScreens(
    [3200, 3000, 2500, 2000, 1700, 1600, 1490, 1390],
    [95, 85, 75, 65, 55, 50, 35, 30],
    "width",
    "px"
  )};
  ${sizesForEachScreens(
    [3200, 3000, 2500, 2000, 1700, 1600, 1490, 1390],
    [95, 85, 75, 65, 55, 50, 35, 30],
    "height",
    "px"
  )};

  ${sizesForEachScreens(
    [3000, 2500, 2000, 1700, 1600, 1500, 1490, 1390],
    [32, 28, 25, 21, 17, 14, 13, 12],
    "font-size",
    "pt"
  )};
`;

export const ConsumerName = styled.p`
  color: ${colorsApp.textPrimary};
  font-size: 35pt;
  ${getFont("Medium")};
  height: 100px;
  ${flexbox()};
  cursor: default;

  ${sizesForEachScreens(
    [3200, 3000, 2500, 2000, 1700, 1600, 1490, 1390],
    [95, 85, 75, 65, 55, 50, 35, 30],
    "height",
    "px"
  )};

  ${sizesForEachScreens(
    [3000, 2500, 2000, 1700, 1600, 1500, 1490, 1390],
    [32, 28, 25, 21, 17, 14, 13, 12],
    "font-size",
    "pt"
  )};
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
  font-size: 21pt;
  ${getFont("Medium")};
  margin-left: 20px;

  ${sizesForEachScreens(
    [3200, 2500, 1930, 1500, 750],
    [19, 15, 13, 9, 8],
    "font-size",
    "pt"
  )};

  ${sizesForEachScreens([2500, 1500, 750], [17, 15, 10], "margin-left", "px")}
`;

export const BodyTextRating = styled.p`
  width: 100%;
  height: auto;
  font-size: 27pt;
  ${getFont()};
  color: ${colorsApp.darkGreen};
  text-align: justify;
  margin-top: 20px;

  ${sizesForEachScreens([2500, 2000, 1500], [20, 17, 10], "margin-top", "px")}

  ${sizesForEachScreens(
    [3200, 3000, 2500, 1930, 1700, 1500, 1390, 950, 750],
    [25, 22, 19, 16, 13, 12, 11.5, 11, 10],
    "font-size",
    "pt"
  )};
`;

export const ButtonToggleSuggestionText = styled.button`
  color: ${colorsApp.roxo};
  height: 100px;
  padding-left: 40px;
  padding-right: 40px;
  border: none;
  outline: none;
  background: #f1f0f4;
  font-size: 25pt;
  ${getFont("Medium")};
  border-radius: 50px;
  margin-top: 30px;
  cursor: pointer;

  ${sizesForEachScreens(
    [2500, 2000, 1700, 1500, 1390],
    [35, 30, 25, 20, 15, 13],
    "padding-left",
    "px"
  )};

  ${sizesForEachScreens(
    [2500, 2000, 1700, 1500, 1390],
    [35, 30, 25, 20, 15, 13],
    "padding-right",
    "px"
  )};

  ${sizesForEachScreens(
    [2500, 2000, 1700, 1500],
    [35, 30, 25, 20, 15],
    "border-radius",
    "px"
  )};

  ${sizesForEachScreens(
    [2500, 2000, 1500, 1390],
    [25, 20, 15, 10],
    "margin-top",
    "px"
  )};

  ${sizesForEachScreens(
    [3200, 3000, 2500, 2000, 1700, 1600, 1490, 1390],
    [95, 85, 75, 65, 55, 50, 35, 30],
    "height",
    "px"
  )};

  ${sizesForEachScreens(
    [3200, 3000, 2500, 1930, 1700, 1500, 1390],
    [23, 20, 17, 14, 12, 11, 9],
    "font-size",
    "pt"
  )};
`;

export const TextSuggestionRate = styled(motion.div)`
  width: 100%;
  height: auto;

  margin-top: 20px;
  padding-left: 30px;
  border-left: 5px solid ${colorsApp.roxo};
  padding-top: 15px;
  padding-bottom: 15px;
  box-sizing: border-box;

  ${sizesForEachScreens([2500, 2000, 1500], [20, 17, 10], "margin-top", "px")};
  ${sizesForEachScreens(
    [2500, 2000, 1500],
    [25, 20, 15],
    "padding-left",
    "px"
  )};

  ${sizesForEachScreens([2500, 2000, 750], [4, 3, 2.5], "border-width", "px")};
  ${sizesForEachScreens([2500, 2000, 1500], [10, 7, 5], "padding-top", "px")};
  ${sizesForEachScreens(
    [2500, 2000, 1500],
    [10, 7, 5],
    "padding-bottom",
    "px"
  )};

  .title_txt_fd_g {
    color: ${colorsApp.roxo};
    margin-bottom: 15px;

    ${sizesForEachScreens(
      [2500, 2000, 1500],
      [10, 7, 5],
      "margin-bottom",
      "px"
    )};
  }

  @media (max-width: 750px) {
    padding-left: 10px;
  }

  p {
    font-size: 27pt;
    ${getFont("Medium")};
    color: ${colorsApp.darkGreen};
    text-align: justify;

    ${sizesForEachScreens(
      [3200, 3000, 2500, 1930, 1700, 1500, 1390, 950, 750],
      [25, 22, 19, 16, 13, 12, 11.5, 11, 10],
      "font-size",
      "pt"
    )};
  }
`;

export const DivBtnRatings = styled.div`
  width: 100%;
  height: auto;
  ${flexbox()};
  margin-bottom: 70px;

  ${sizesForEachScreens(
    [2500, 2000, 1500],
    [55, 35, 25],
    "margin-bottom",
    "px"
  )}
`;

export const ButtonSeeMore = styled(ButtonToggleSuggestionText)`
  color: ${colorsApp.textPrimary};
  background: transparent;
  font-size: 30pt;

  ${NormalFontSize()};
`;
