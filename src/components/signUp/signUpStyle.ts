import styled from "styled-components";
import {
  colorsApp,
  flexbox,
  getFont,
  sizesForEachScreens,
  NormalFontSize,
} from "../layout/layoutStyle";
import { motion } from "framer-motion";

export const OverlaySignUp = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.9);
  background-size: 100% 100%;
  position: fixed;
  left: 0;
  top: 0;
  ${flexbox()};
  z-index: 99;

  form {
    width: 100%;
    height: auto;
    ${flexbox("column")};
  }

  .wrp_div_vdg {
    width: 100%;
    height: 100%;
    ${flexbox()};
  }

  @media (max-width: 750px) {
    overflow: auto;
    box-box-sizing: border-box;
  }

  @media (max-width: 900px) {
    background: white;
    z-index: 99999;
  }
`;

export const Modal = styled(motion.div)`
  width: 55%;
  height: 65vh;
  border-radius: 40px;
  display: grid;
  grid-template-columns: 35% 65%;
  position: relative;
  overflow: hidden;
  z-index: 9999;
  padding: 0;
  -webkit-box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
  background: white;

  ${sizesForEachScreens(
    [3200, 3000, 2500, 1930, 1500],
    [1900, 1700, 1500, 1200, 750],
    "width",
    "px"
  )}

  @media (max-width:1930px) {
    height: 60vh;
  }

  ${sizesForEachScreens([1500, 1370], [480, 450], "height", "px")}

  ${sizesForEachScreens(
    [3200, 2700, 2300, 1930, 1500, 1370],
    [35, 30, 25, 20, 15, 10],
    "border-radius",
    "px"
  )}

  @media (max-width: 750px) and (min-height: 700px) and (max-height: 850px) {
    height: 100vh;
    position: absolute;
    bottom: 0;
    justify-content: flex-end;
  }

  @media (max-width: 900px) {
    ${flexbox()};
    height: auto;
    border-radius: 0;
    width: 100%;
    -webkit-box-shadow: 0 0 0;
    -moz-box-shadow: 0 0 0;
    box-shadow: 0 0 0;

    .divBtnBackT {
      width: 100%;
      ${flexbox("row", "flex-start", "center")};
      padding-top: 15px;
      box-sizing: border-box;
      padding-left: 5%;
      position: fixed;
      top: 0;
      left: 0;

      @media (max-width: 600px) {
        padding-top: 10px;
      }

      @media (max-width: 600px) and (max-height: 690px) {
        position: relative;
      }

      @media (max-width: 750px) and (min-height: 700px) and (max-height: 850px) {
        position: absolute;
        top: 0;
      }
    }

    @media (max-width: 750px) {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 999;
    }
  }

  @media (max-width: 600px) and (min-height: 745px) {
    height: 100vh;
  }

  @media (max-width: 600px) and (max-height: 690px) {
    height: auto;
  }
`;

export const ModalIllustration = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ img }) => ` url(${img})`};
  background-size: 90% 100%;
  background-repeat: no-repeat;
  background-position: left;
  position: relative;
  ${flexbox("column", "flex-end", "flex-start")};
  margin: 0;
  padding: 0;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const ButtonBackStyle = styled.button`
  color: ${colorsApp.soDark};
  outline: none;
  border: none;
  background: transparent;
  ${getFont("Medium")};
  font-size: 25pt;
  ${flexbox()};
  margin-bottom: 17%;
  margin-left: 30px;

  ${sizesForEachScreens(
    [2560, 2150, 1500, 1385],
    [18, 17, 17.5, 16.5],
    "margin-bottom",
    "%"
  )};

  &:hover {
    cursor: pointer;
  }

  ${sizesForEachScreens(
    [3200, 2500, 1930, 1500],
    [35, 30, 15, 10],
    "margin-left",
    "px"
  )};

  img {
    width: 3.7rem;
    margin-right: 20px;

    ${sizesForEachScreens(
      [3150, 2900, 2500, 1930, 1700, 1500],
      [3.5, 3.2, 3, 2.5, 2, 1.5],
      "width",
      "rem"
    )};

    ${sizesForEachScreens(
      [3400, 3200, 2900],
      [15, 10, 5],
      "margin-right",
      "px"
    )};
  }

  ${sizesForEachScreens(
    [3200, 3000, 2500, 1930, 1500],
    [25, 23, 20, 17, 10.4],
    "font-size",
    "pt"
  )};
`;

export const DivForm = styled.div`
  width: 100%;
  height: 100%;
  ${flexbox("column")};
  box-sizing: border-box;
  padding-right: 8%;

  @media (max-width: 1500px) {
    padding-top: 25px;
  }

  @media (max-width: 850px) {
    padding-right: 0;
  }

  .mobileBtn {
    display: none;
    @media (max-width: 900px) {
      position: relative;
      display: flex;
    }
  }

  @media (max-width: 600px) and (min-height: 745px) {
    height: 100vh;
    ${flexbox("column", "flex-end", "center")};
  }

  @media (max-width: 600px) and (max-height: 690px) {
    height: auto;
    ${flexbox("column", "flex-end", "center")};
  }
`;

export const Title = styled.h1`
  font-size: 42pt;
  ${getFont()};
  transition: 0.5s;
  color: ${colorsApp.soDark};

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
    font-size: 13pt;
    width: 80%;
    text-align: center;
  }
`;

export const TextForm = styled.p`
  width: 100%;
  text-align: center;
  height: auto;
  color: ${colorsApp.soDark};
  font-size: 27pt;
  ${getFont()};
  margin-top: 20px;

  ${NormalFontSize()};

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
    font-size: 11pt;
    width: 60%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const DivGridForm = styled.div`
  width: 84%;
  height: auto;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: repeat(3, 100px) auto auto auto;
  grid-gap: 30px;
  margin-top: 60px;

  @media (max-width: 750px) {
    grid-gap: 10px;
  }

  @media (max-height: 670px) {
    grid-gap: 10px;
  }

  ${sizesForEachScreens([2500, 1930, 1500], [50, 30, 20], "margin-top", "px")}

  ${sizesForEachScreens([1930, 1500], [20, 15], "grid-gap", "px")}

  ${sizesForEachScreens(
    [3200, 2500, 1930, 1500, 1370],
    [
      "repeat(3, 90px) auto auto auto",
      "repeat(3, 70px) auto auto auto",
      "repeat(3, 60px) auto auto auto",
      "repeat(3, 45px) auto auto auto",
      "repeat(3, 40px) auto auto auto",
    ],
    "grid-template-rows",
    ""
  )}

  @media (max-width: 900px) {
    width: 60%;
  }

  @media (max-width: 750px) {
    ${flexbox("column")};
    height: auto;
  }

  @media (max-width: 600px) {
    width: 87%;
  }

  .inputPassword {
    grid-template-columns: 87% 13%;

    @media (max-width: 1000px) {
      grid-template-columns: 88% 12%;
    }

    @media (max-width: 750px) {
      grid-template-columns: 90% 10%;
    }
  }
`;

export const ErrorMessage = styled.p`
  width: 100%;
  font-size: 20pt;
  text-align: center;
  ${getFont()};
  color: red;
  margin-bottom: -2px;
  box-sizing: border-box;
  grid-column: 1/3;
  ${NormalFontSize()};

  ${sizesForEachScreens(
    [3200, 3000, 2500, 1930, 1500],
    [30, 25, 20, 15, 0],
    "padding-left",
    "px"
  )}
`;

export const FormGroup = styled.div`
  width: 100%;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 88% 12%;
  grid-template-rows: 100%;
  background: #f1f0f4;
  border: ${({ isEmpty }) =>
    isEmpty ? "2px solid red" : "2px solid transparent"};
  transition: 0.5s;
  box-sizing: border-box;

  ${sizesForEachScreens([3200, 1930, 1500], [15, 10, 7], "border-radius", "px")}

  @media (max-width: 750px) {
    height: 45px;
    grid-template-columns: 90% 10%;
  }

  @media (max-width: 750px) {
    margin-bottom: 10px;
  }

  &:focus-within {
    background: white;
    border: 2px solid ${colorsApp.orange};
  }

  button {
    span {
      width: 100%;
    }
  }

  input,
  button {
    font-size: 30pt;
    height: 100%;
    ${getFont()};
    color: ${colorsApp.soDark};
    border: none;
    outline: none;
    background: transparent;
    padding-left: 45px;
    box-sizing: border-box;
    text-align: left;

    &::placeholder {
      color: ${colorsApp.soDark};
    }

    ${NormalFontSize()};

    ${sizesForEachScreens(
      [3200, 3000, 2500, 1930],
      [30, 25, 20, 15],
      "padding-left",
      "px"
    )}
  }

  &:first-child {
    grid-column: 1/3;
  }

  .iconeSee {
    img {
      width: 40px;
      height: 40px;

      @media (max-width: 2500px) {
        width: 30px;
        height: 30px;
      }

      @media (max-width: 1930px) {
        width: 25px;
        height: 25px;
      }

      @media (max-width: 1500px) {
        width: 16px;
        height: 16px;
      }

      @media (max-width: 750px) {
        width: 15px;
        height: 15px;
      }
    }
  }
`;

export const InputIcon = styled.div`
  width: 100%;
  height: 100%;
  ${flexbox("row", "flex-start", "center")};

  @media (max-width: 750px) {
    ${flexbox("row", "center", "center")};
  }

  img {
    width: 35px;
    height: 27px;

    @media (max-width: 2500px) {
      width: 30px;
      height: 25px;
    }

    @media (max-width: 2313px) {
      width: 25px;
      height: 20px;
    }

    @media (max-width: 1930px) {
      width: 20px;
      height: 16px;
    }

    @media (max-width: 1500px) {
      width: 12px;
      height: 12px;
    }

    @media (max-width: 750px) {
      width: 12px;
      height: 12px;
    }
  }
`;

export const FormSelect = styled(FormGroup)`
  position: relative;
`;

export const SelectList = styled.ul`
  list-style: none;
  width: 100%;
  height: ${({ length }) => (length > 5 ? "380px" : "auto")};
  position: absolute;
  overflow-y: ${({ length }) => (length > 5 ? "auto" : "hidden")};
  top: 0;
  background: white;
  border-radius: 20px;
  z-index: 10;
  box-shadow: 0 0 20px;

  ${sizesForEachScreens([3200, 1930, 1500], [15, 10, 7], "border-radius", "px")}

  @media (max-width: 3200px) {
    height: ${({ length }) => (length > 5 ? "300px" : "auto")};
    box-shadow: 0 0 15px;
  }

  @media (max-width: 2500px) {
    height: ${({ length }) => (length > 5 ? "270px" : "auto")};
    box-shadow: 0 0 10px;
  }

  @media (max-width: 1930px) {
    height: ${({ length }) => (length > 5 ? "250px" : "auto")};
    box-shadow: 0 0 7px;
  }

  @media (max-width: 1500px) {
    height: ${({ length }) => (length > 5 ? "185px" : "auto")};
    box-shadow: 0 0 5px;
  }

  li {
    width: 100%;
    cursor: default;
    padding: 30px;
    box-sizing: border-box;
    ${getFont()};
    font-size: 27pt;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.3);

    ${sizesForEachScreens(
      [3300, 3000, 2700, 2300, 1930, 1500],
      [25, 22, 18, 15, 13, 11],
      "padding",
      "px"
    )};

    ${NormalFontSize()};
  }
`;

export const QuestionSignUp = styled.p`
  width: 100%;
  height: 100%;
  text-align: center;
  color: ${colorsApp.soDark};
  font-size: 30pt;
  ${getFont()};
  grid-column: 1/3;
  margin-top: 5px;

  @media (max-width: 750px) {
    margin-top: 10px;
  }

  span {
    margin-left: 10px;
    color: ${colorsApp.orange};
    cursor: default;

    &:hover {
      cursor: pointer;
    }
  }
  ${NormalFontSize()};

  @media (max-width: 750px) {
    width: 90%;
    margin-bottom: 10px;
    font-size: 11pt;
  }
`;

export const ButtonSignUp = styled.button`
  width: 100%;
  color: ${colorsApp.soDark};
  padding-top: 30px;
  padding-bottom: 30px;
  outline: none;
  border-radius: 15px;
  border: none;
  background: ${colorsApp.orange};
  ${getFont("Medium")};
  font-size: 35pt;
  grid-column: 1/3;
  margin-top: 20px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 2500px) {
    border-radius: 10px;
    margin-top: 10px;
  }

  @media (max-width: 1500px) {
    border-radius: 5px;
    margin-top: 0;
  }

  @media (max-width: 750px) {
    margin-top: 15px;
  }

  ${sizesForEachScreens(
    [3200, 3000, 2500, 1930, 1500],
    [27, 25, 20, 15, 14],
    "font-size",
    "pt"
  )};
  ${sizesForEachScreens([1930, 1500], [20, 10], "padding-top", "px")};
  ${sizesForEachScreens([1930, 1500], [20, 10], "padding-bottom", "px")};

  @media (max-width: 750px) {
    height: 50px;
    font-size: 12.5pt;
  }
`;

export const ModalSucess = styled(Modal)`
  grid-template-columns: 100%;
  background: url(/images/sucess.png);
  background-size: cover;

  @media (max-width: 900px) {
    height: 100vh;
    width: 100%;
    border-radius: 0;
    z-index: 99999;
    background: ${colorsApp.orange};

    box-sizing: border-box;
    overflow: hidden;
    align-self: flex-end;
    ${flexbox("column")};
  }

  .div2 {
    width: 100%;
    height: 100%;
    position: absolute;
    ${flexbox("column")};
    box-sizing: border-box;

    @media (max-width: 900px) {
      justify-content: flex-start;
      position: relative;
    }
  }

  .miniDiv {
    width: 100%;
    height: 100%;
    ${flexbox("column")};
    box-sizing: border-box;
    padding-left: 4%;
    transition: 0.5s;

    ${sizesForEachScreens(
      [3324, 3000, 2500, 1930, 900],
      [5, 6, 8, 9, 0],
      "padding-left",
      "%"
    )};

    @media (max-width: 600px) {
      width: 80%;
    }

    @media (max-width: 450px) {
      width: 85%;
    }

    @media (max-width: 900px) {
      margin-top: -2rem;
      justify-content: flex-start;
    }
  }
`;

export const IllustrationMobile = styled.div`
  @media (min-width: 900px) {
    display: none;
  }

  display: block;
  ${flexbox("column")};

  width: 100%;
  height: 60vh;
  margin-top: 2rem;

  @media (max-height: 570px) {
    height: 70vh;
  }

  @media (max-width: 600px) {
    height: 60vh;
  }

  @media (max-height: 568px) {
    height: 55vh;
  }

  img {
    width: 14rem;

    @media (max-height: 575px) {
      width: 10rem;
    }
  }
`;

export const TitleSucess = styled.h1`
  color: ${colorsApp.soDark};
  ${getFont("Bold")};
  text-align: center;
  font-size: 45pt;

  @media (max-width: 900px) {
    margin-top: 0;
  }

  @media (max-width: 600px) {
    width: 100%;
  }

  @media (max-height: 400px) {
    background: red;
  }

  ${sizesForEachScreens(
    [3590, 3427, 3000, 2500, 1930, 1500, 1000, 700, 400],
    [42, 40, 38, 35, 28, 17, 15, 14, 12.2],
    "font-size",
    "pt"
  )};
`;

export const TextSucess = styled.p`
  ${getFont("Medium")};
  width: 47%;
  text-align: center;
  height: auto;
  color: white;
  font-size: 35pt;
  margin-top: 10px;

  @media (max-width: 1500px) {
    margin-top: 5px;
  }

  ${sizesForEachScreens(
    [3622, 3270, 2500, 1930, 1500, 750, 600],
    [50, 52, 54, 57, 54, 60, 100],
    "width",
    "%"
  )}

  ${sizesForEachScreens(
    [3500, 3000, 3270, 1930, 1500, 1300, 1000, 600, 500],
    [33, 30, 28, 24, 14, 13, 12.5, 12, 11],
    "font-size",
    "pt"
  )};
`;

export const ButtonSucess = styled.button`
  background: ${colorsApp.soDark};
  color: white;
  margin-top: 5rem;
  height: 100px;
  border: none;
  outline: none;
  border-radius: 20px;
  padding-left: 7rem;
  padding-right: 7rem;
  font-size: 33pt;

  @media (max-width: 3000px) {
    margin-top: 4rem;
  }

  @media (max-width: 2500px) {
    border-radius: 15px;
    margin-top: 3rem;
  }

  @media (max-width: 1500px) {
    border-radius: 7px;
    margin-top: 2rem;
  }

  @media (max-width: 600px) {
    position: fixed;
    bottom: 5%;
    width: 70%;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  @media (max-width: 450px) {
    width: 85%;
  }

  @media (max-height: 570px) {
    bottom: 3%;
  }

  &:hover {
    cursor: pointer;
  }

  ${sizesForEachScreens(
    [3400, 2500, 1930, 1700, 1500, 1300],
    [31, 28, 25, 20, 14, 13],
    "font-size",
    "pt"
  )};
  ${sizesForEachScreens(
    [3400, 2500, 1930, 1700, 1500, 600],
    [85, 75, 65, 55, 42, 45],
    "height",
    "px"
  )};

  ${sizesForEachScreens(
    [3400, 2500, 1930, 1500],
    [6, 5, 4, 2.5],
    "padding-left",
    "rem"
  )};
  ${sizesForEachScreens(
    [3400, 2500, 1930, 1500],
    [6, 5, 4, 2.5],
    "padding-right",
    "rem"
  )};
`;
