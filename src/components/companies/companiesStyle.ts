import styled from "styled-components";
import {
  colorsApp,
  flexbox,
  getFont,
  sizesForEachScreens,
  NormalFontSize,
} from "../layout/layoutStyle";
import { ButtonSignUp } from "../signUp/signUpStyle";
import { motion } from "framer-motion";

export const ContentCompanies = styled.div`
  width: 100%;
  height: auto;
  ${flexbox("column", "space-between", "center")};
  padding-top: 2%;

  ${sizesForEachScreens([1930, 1500], [4, 2.5], "padding-top", "%")};

  @media (max-height: 600px) {
    padding-top: 1%;
  }

  .cmp_f_g {
    width: 100%;
    ${flexbox("column")};
  }

  .my-node-enter {
    opacity: 0;
    display: block;
  }

  .my-node-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }

  .my-node-exit {
    opacity: 1;
  }

  .my-node-exit-active {
    opacity: 0;
    display: none;
  }
`;

export const TextCompanies = styled.p`
  width: 40%;
  height: auto;
  font-size: 45pt;
  ${getFont()};
  text-align: center;

  @media (max-width: 850px) {
    ${flexbox("column")};
    span {
      width: auto;
    }
  }

  mark {
    ${getFont("Bold")};
    color: ${colorsApp.roxo};
    background: transparent;
  }

  ${sizesForEachScreens(
    [3300, 2500, 1930, 1500, 1370, 1000, 850],
    [50, 60, 65, 50, 55, 60, 100],
    "width",
    "%"
  )};

  ${sizesForEachScreens(
    [3200, 2500, 2000, 1500, 1300, 900, 750],
    [40, 35, 28, 17, 14, 13, 12],
    "font-size",
    "pt"
  )};
`;

export const FilterStyled = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  ${flexbox("column")};
  margin-top: 60px;

  ${sizesForEachScreens(
    [3200, 2500, 2000, 1500],
    [50, 40, 30, 25],
    "margin-top",
    "px"
  )};

  .filter_1_ {
    ${flexbox("row")};
    width: 100%;
    height: 100px;
    position: relative;
    box-sizing: border-box;

    ${sizesForEachScreens(
      [3200, 2500, 1930, 1500, 1370],
      [90, 70, 60, 45, 40],
      "height",
      "px"
    )}
  }

  .filter_status {
    width: 100%;
    height: auto;
    ${flexbox("row")};
    list-style: none;
    margin-top: 60px;
    margin-bottom: 8%;

    ${sizesForEachScreens(
      [3200, 2500, 2000, 1500],
      [50, 40, 30, 25],
      "margin-top",
      "px"
    )};

    @media (max-width: 950px) {
      margin-bottom: 15px;
    }

    li {
      font-size: 23pt;
      ${getFont()};
      margin-left: 20px;
      padding: 15px;
      padding-left: 30px;
      padding-right: 30px;
      border-radius: 15px;
      cursor: default;
      transition: 0.5s;

      ${sizesForEachScreens(
        [3200, 3000, 2500, 1930, 1500, 850, 500],
        [20, 17, 15, 13, 11, 10, 9],
        "font-size",
        "pt"
      )};

      @media (max-width: 3200px) {
        padding: 13px;
        padding-left: 25px;
        padding-right: 25px;
      }

      @media (max-width: 2700px) {
        padding: 11px;
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 10px;
      }

      @media (max-width: 2200px) {
        padding: 10px;
        padding-left: 15px;
        padding-right: 15px;
      }

      @media (max-width: 1930px) {
        padding: 5px;
        padding-left: 10px;
        padding-right: 10px;
      }

      @media (max-width: 1500px) {
        padding-left: 7px;
        padding-right: 7px;
        border-radius: 7px;
      }

      @media (max-width: 900px) {
        padding-left: 5px;
        padding-right: 5px;
        margin-left: 10px;
      }

      &:hover {
        background: ${colorsApp.orange};
      }
    }

    .activeItem {
      background: ${colorsApp.orange};
    }
  }
`;

export const SearchStyled = styled.div`
  width: 38%;
  display: grid;
  height: 100%;
  border-radius: 15px;
  grid-template-columns: 10% 90%;
  background: white;
  box-shadow: 0 0 10px ${colorsApp.orange};
  overflow: hidden;

  @media (max-width: 3000px) {
    grid-template-columns: 9% 91%;
  }

  @media (max-width: 3000px) {
    border-radius: 10px;
    box-shadow: 0 0 7px ${colorsApp.orange};
  }

  @media (max-width: 2500px) {
    border-radius: 5px;
    box-shadow: 0 0 5px ${colorsApp.orange};
  }

  @media (max-width: 1500px) {
    border-radius: 5px;
    box-shadow: 0 0 5px ${colorsApp.orange};
  }

  @media (max-width: 850px) {
    width: 80%;
    grid-template-columns: 12% 88%;
    border-radius: 5px;
  }

  .iconeSearch {
    ${flexbox()};

    svg {
      width: 35px;
      height: 35px;
      fill: ${colorsApp.soDark};

      @media (max-width: 2500px) {
        width: 30px;
        height: 30px;
      }

      @media (max-width: 1930px) {
        width: 25px;
        height: 25px;
      }

      @media (max-width: 1500px) {
        width: 17px;
        height: 17px;
      }

      @media (max-width: 750px) {
        width: 15px;
        height: 15px;
      }
    }
  }

  input {
    font-size: 30pt;
    height: 100%;
    ${getFont()};
    color: ${colorsApp.soDark};
    border: none;
    outline: none;
    background: transparent;
    box-sizing: border-box;
    text-align: left;

    &::placeholder {
      color: ${colorsApp.soDark};
    }

    ${sizesForEachScreens(
      [3200, 3000, 2500, 1930, 1500, 850],
      [26, 22, 19, 17, 12, 11],
      "font-size",
      "pt"
    )};
  }
`;

export const DivBtnMobile = styled.div`
  display: none;

  @media (max-width: 925px) {
    display: block;
    width: 100%;
    height: 33px;
    position: relative;
    ${flexbox()};
    margin-top: 10px;

    .btnMobile_suggest {
      display: block;
      position: relative;
      right: 0;
      margin: 0;
      ${flexbox()};

      font-size: 11pt;

      @media (max-width: 600px) {
        font-size: 10pt;
      }
    }
  }
`;

export const ButtonSuggest = styled.button`
  width: auto;
  height: auto;
  background: ${colorsApp.roxo};
  color: white;
  font-size: 25pt;
  height: 100%;
  position: absolute;
  border-radius: 18px;
  border: none;
  outline: none;
  padding-left: 50px;
  padding-right: 50px;
  right: 4%;

  ${getFont()};

  ${sizesForEachScreens(
    [3500, 2500, 1500],
    [15, 10, 7],
    "border-radius",
    "px"
  )};

  ${sizesForEachScreens(
    [3200, 3000, 2500, 1930, 1500, 850],
    [26, 22, 19, 17, 12, 11],
    "font-size",
    "pt"
  )};

  ${sizesForEachScreens(
    [3200, 2500, 2000, 1500, 900, 850],
    [40, 30, 25, 20, 15],
    "padding-left",
    "px"
  )};

  ${sizesForEachScreens(
    [3200, 2500, 2000, 1500, 900, 850],
    [40, 30, 25, 20, 15],
    "padding-right",
    "px"
  )};

  @media (max-width: 925px) {
    display: none;
  }
`;

export const CompanyList = styled.div`
  width: 100%;
  height: auto;
  ${flexbox("row", "center", "center")};
  position: absolute;
  bottom: 8%;

  @media (max-width: 950px) {
    display: none;
  }

  @media (min-width: 1024px) and (max-width: 1024px) and (min-height: 1366px) and (max-width: 1366px) {
    display: none;
  }

  ${sizesForEachScreens([1930, 1500, 1380], [10, 5, 4], "bottom", "%")};
`;

export const ListCompanyMobile = styled.div`
  width: 94%;
  height: 65vh;
  display: none;

  overflow: auto;
  box-sizing: border-box;
  padding-bottom: 50px;
  padding-top: 15px;

  @media (max-width: 950px) {
    display: grid;
    grid-template-columns: 45% 45%;
    grid-gap: 20px;
    align-items: space-between;
  }

  @media (min-width: 1024px) and (max-width: 1024px) and (min-height: 1366px) and (max-width: 1366px) {
    display: grid;
    padding-bottom: 100px;
  }

  @media (max-width: 855px) {
    grid-template-columns: 90%;
  }

  @media (max-width: 750px) {
    grid-template-columns: 100%;
  }

  @media (max-height: 1290px) {
    height: 60vh;
  }

  @media (max-height: 1134px) {
    height: 57vh;
  }

  @media (max-height: 1050px) {
    height: 55vh;
  }

  @media (max-height: 990px) {
    height: 50vh;
  }

  @media (max-height: 900px) {
    height: 46vh;
  }

  @media (max-height: 790px) {
    height: 40vh;
  }

  @media (max-height: 697px) {
    height: 36vh;
  }

  @media (max-height: 650px) {
    height: 32vh;
  }
`;

export const GroupCard = styled.div`
  width: 72%;
  height: auto;
  display: grid;
  grid-template-columns: 47% 47%;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  justify-self: center;

  @media (max-width: 2464px) {
    grid-template-columns: 46% 46%;
  }

  @media (max-width: 1500px) {
    grid-template-columns: 45% 45%;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 46% 46%;
  }

  ${sizesForEachScreens(
    [3383, 1500, 1200, 1000],
    [75, 70, 72, 74],
    "width",
    "%"
  )};
`;

export const Card = styled.div`
  width: 100%;
  height: 560px;
  border-radius: 30px;
  background-color: ${colorsApp.roxo};
  ${flexbox("column", "center", "center")};
  padding: 30px;

  @media (min-width: 1024px) and (max-width: 1024px) and (min-height: 1366px) and (max-width: 1366px) {
    height: 220px;
  }

  ${sizesForEachScreens([3248, 3199], [530, 500], "height", "px")};

  @media (max-width: 2924px) {
    height: auto;
    padding-top: 60px;
    padding-bottom: 60px;
  }

  @media (max-width: 1930px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  @media (max-width: 1700px) {
    padding: 15px;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  @media (max-width: 1500px) {
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 15px;
  }

  @media (max-width: 1000px) {
    padding: 18px;
  }

  @media (max-width: 837px) {
    margin-bottom: 10px;
    height: auto;
    padding: 15px;
  }

  .header_card {
    display: grid;
    width: 90%;
    grid-template-columns: 60% 40%;
    align-items: center;

    @media (max-width: 2924px) {
      width: 94%;
    }

    @media (max-width: 1500px) {
      width: 95%;
    }

    @media (max-width: 980px) {
      grid-template-columns: 65% 35%;
    }

    @media (max-width: 850px) {
      grid-template-columns: 68% 32%;
    }

    .div1_er_ {
      ${flexbox("row", "flex-start", "center")};

      .company_info_ {
        margin-left: 30px;

        @media (max-width: 1930px) {
          margin-left: 20px;
        }

        @media (max-width: 1500px) {
          margin-left: 10px;
        }

        @media (max-width: 850px) {
          margin-left: 8px;
        }
      }
    }

    .start_div_cmpy {
      width: 100%;
      ${flexbox("row", "flex-end", "center")};
    }
  }
`;

export const CompanyLogo = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 100%;
  background: white;
  ${flexbox()};
  overflow: hidden;
  padding: 10px;
  background: white;
  background-image: ${({ img }) => `url(${img})`};
  background-size: 80% 40%;
  background-position: center;
  background-repeat: no-repeat;

  ${sizesForEachScreens(
    [3200, 2900, 2500, 1930, 1500, 1200, 900, 850],
    [150, 140, 100, 90, 60, 50, 45, 30],
    "width",
    "px"
  )};

  ${sizesForEachScreens(
    [3200, 2900, 2500, 1930, 1500, 1200, 900, 850],
    [150, 140, 100, 90, 60, 50, 45, 30],
    "height",
    "px"
  )};

  img {
    width: 80%;

    @media (max-width: 850px) {
      width: 90%;
    }
  }
`;

export const CompanyName = styled.h1`
  font-size: 35pt;
  ${getFont("Bold")};
  color: white;

  ${sizesForEachScreens(
    [3500, 2500, 2000, 1700, 1600, 1500],
    [30, 25, 20, 18, 15, 13.5],
    "font-size",
    "pt"
  )};
`;

export const CompanyRateNumbers = styled.p`
  font-size: 30pt;
  ${getFont()};
  color: white;

  span {
    ${getFont("Bold")};
  }

  ${sizesForEachScreens(
    [3200, 3000, 2500, 1930, 1700, 1500, 1300, 750],
    [25, 22, 19, 17, 13, 11.5, 11, 9],
    "font-size",
    "pt"
  )};
`;

export const StarsRated = styled.div`
  border-radius: 25px;
  background: rgba(0, 0, 0, 0.3);
  position: relative;
  width: auto;
  ${flexbox()};
  padding: 17px;
  padding-left: 19px;
  padding-right: 19px;

  @media (max-width: 1930px) {
    border-radius: 10px;
    padding: 13px;
  }

  @media (max-width: 1500px) {
    border-radius: 10px;
    padding: 7px;
  }

  @media (max-width: 1080px) {
    padding: 5px;
  }
`;

export const StarRate = styled.div`
  width: 40px;
  height: 40px;
  margin-left: 5px;
  ${flexbox()};

  ${sizesForEachScreens(
    [3200, 2500, 1930, 1500, 1200, 1080, 850, 500],
    [40, 30, 20, 18, 15, 14, 13, 12],
    "width",
    "px"
  )};

  ${sizesForEachScreens(
    [3200, 2500, 1930, 1500, 1080, 850, 500],
    [40, 30, 20, 18, 15, 13, 12],
    "height",
    "px"
  )};

  svg {
    width: 100%;
    height: 100%;
    fill: ${({ isRated }) => (isRated ? `${colorsApp.orange}` : "gray")};
  }
`;

export const DescriptionCard = styled.p`
  font-size: 28pt;
  ${getFont()};
  color: white;
  width: 90%;
  margin-top: 50px;
  text-align: justify;

  @media (max-width: 2924px) {
    width: 94%;
    margin-top: 30px;
  }

  @media (max-width: 2000px) {
    margin-top: 20px;
  }

  @media (max-width: 1500px) {
    width: 95%;
    margin-top: 10px;
  }

  ${sizesForEachScreens(
    [3200, 2700, 2302, 2040, 1772, 1650, 1580, 1200],
    [25, 22, 19, 17, 15, 12.5, 11, 10],
    "font-size",
    "pt"
  )};

  @media (max-width: 500px) {
    text-align: justify;
  }
`;

export const ButtonControl = styled.div`
  width: 90%;
  ${flexbox("row", "space-between", "center")};
  position: absolute;
  box-sizing: border-box;

  @media (max-width: 1120px) {
    width: 95%;
  }

  @media (max-width: 950px) {
    display: none;
  }

  button {
    width: 80px;
    height: 80px;
    border: 2px solid gray;
    outline: none;
    ${flexbox()};
    border-radius: 100%;
    background: transparent;

    ${sizesForEachScreens(
      [3000, 2700, 2400, 1930, 1500, 1370],
      [70, 65, 60, 55, 50, 45, 40, 35, 30],
      "width",
      "px"
    )};

    ${sizesForEachScreens(
      [3000, 2700, 2400, 1930, 1500, 1370],
      [70, 65, 60, 55, 50, 45, 40, 35, 30],
      "height",
      "px"
    )};

    img {
      width: 70%;
      height: 70%;
    }
  }
`;

export const OverlaySuggestion = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.8);
  background-size: 100% 100%;
  position: fixed;
  left: 0;
  top: 0;
  ${flexbox()};
  z-index: 999;

  .w_d_itr_ {
    width: 100%;
    height: 100%;
    ${flexbox()};
  }
`;

export const ModalSuggestion = styled(motion.div)`
  width: 45%;
  height: auto;
  border-radius: 10px;
  ${flexbox()};
  background: white;
  box-shadow: 0 0 5px;
  box-sizing: border-box;
  position: relative;
  padding-top: 100px;
  padding-bottom: 100px;

  ${sizesForEachScreens(
    [2300, 1980, 1500, 1200, 950, 850, 800],
    [55, 60, 40, 65, 70, 80, 100],
    "width",
    "%"
  )}

  ${sizesForEachScreens(
    [3200, 2500, 1980, 1500, 850],
    [80, 70, 60, 50, 30, 25],
    "padding-top",
    "px"
  )}

${sizesForEachScreens(
    [3200, 2500, 1980, 1500, 850],
    [80, 70, 60, 50, 30, 25],
    "padding-bottom",
    "px"
  )}

  @media  (max-width:800px) {
    height: 100vh;
    box-shadow: 0 0 0px;
  }

  .div_form_sugs_cmp_et {
    padding-right: 0;
  }

  form {
    ${flexbox()};
  }

  .text_simple {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;

    @media (max-width: 800px) {
      width: 80%;
    }
  }

  .grid-form-suggest {
    width: 60%;
    grid-template-columns: 100%;

    .FormGroup {
      grid-column: 1/2;
      width: 100%;
      margin: 0;

      @media (max-width: 600px) {
        margin-bottom: 15px;
      }
    }

    .select_suggest_cmp {
      grid-template-columns: 93% 7%;
    }

    @media (max-width: 800px) {
      width: 75%;
      grid-gap: 15px;
    }

    @media (max-width: 700px) {
      width: 85%;
    }

    @media (max-width: 600px) {
      grid-gap: 0px;
    }
  }
`;

export const ButtonSuggestForm = styled(ButtonSignUp)``;

export const TextArea = styled.div`
  height: 100%;
  width: 100%;
  grid-row: 3/5;
  ${getFont()};
  color: ${colorsApp.soDark};
  box-sizing: border-box;
  text-align: left;
  background: #f1f0f4;
  border-radius: 7px;
  border: ${({ isEmpty }) => (isEmpty ? "2px solid red" : "none")};
  margin-bottom: 50px;
  &::placeholder {
    color: ${colorsApp.soDark};
  }

  @media (max-width: 750px) {
    margin: 0;
    margin-top: -10px;
  }

  @media (max-width: 600px) {
    margin-top: 10px;
    margin-bottom: 15px;
  }

  ${sizesForEachScreens([3200, 1930, 1500], [15, 10, 7], "border-radius", "px")}

  textarea {
    width: 100%;
    height: 100%;
    resize: none;
    background-color: transparent;
    border: none;
    padding-left: 40px;
    font-size: 30pt;
    outline: none;
    box-sizing: border-box;
    padding: 45px;

    &::placeholder {
      color: ${colorsApp.soDark};
    }

    ${sizesForEachScreens(
      [3200, 3000, 2500, 1930],
      [30, 25, 20, 15],
      "padding",
      "px"
    )}
    ${NormalFontSize()};
  }
`;

export const ButtonCloseSuggestion = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: none;
  outline: none;
  background: ${colorsApp.soDark};
  position: absolute;
  top: 0;
  right: 0;
  margin: 40px;
  ${flexbox()};

  @media (max-width: 1700px) {
    margin: 30px;
  }

  @media (max-width: 750px) {
    margin: 20px;
  }

  ${sizesForEachScreens([1930, 1500, 1370], [45, 30, 25], "width", "px")};

  ${sizesForEachScreens([1930, 1500, 1370], [45, 30, 25], "height", "px")};

  svg {
    width: 80%;
    height: 80%;
    fill: white;
  }
`;
