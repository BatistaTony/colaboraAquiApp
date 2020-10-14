import styled from "styled-components";
import {
  colorsApp,
  flexbox,
  getFont,
  sizesForEachScreens,
  NormalFontSize,
} from "../layout/layoutStyle";
import { ButtonLogin } from "../navbar/navbarStyle";

export const OverlaySignUp = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ isSinglePage }) =>
    isSinglePage ? " url(/images/Grupo978.svg)" : "rgba(255, 255, 255, 0.5)"};
  background-size: 100% 100%;
  position: fixed;
  left: 0;
  top: 0;
  ${flexbox()};
  z-index: 999;

  form {
    width: 100%;
    height: auto;
    ${flexbox("column")};
  }

  @media (max-width: 750px) {
    overflow: auto;
    box-box-sizing: border-box;
  }
`;

export const Modal = styled.div`
  width: 60%;
  height: 70vh;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 35% 65%;
  position: relative;
  background: white;
  overflow: hidden;
  z-index: 9999;
  padding: 0;

  ${sizesForEachScreens(
    [3200, 3000, 2500, 1930, 1500],
    [1900, 1700, 1500, 1200, 750],
    "width",
    "px"
  )}

  ${sizesForEachScreens([1500, 1370], [500, 450], "height", "px")} 
  
  
  @media (max-width: 900px) {
    ${flexbox()};
    height: auto;
    border-radius: 0;
    width: 100%;
  }

  @media (max-width: 900px) and (max-height: 640px) {
    padding-top: 120px;
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
  font-size: 30pt;
  ${flexbox()};
  margin-bottom: 50px;
  margin-left: 40px;

  ${sizesForEachScreens(
    [3200, 3000, 1930],
    [40, 30, 20],
    "margin-bottom",
    "px"
  )};

  ${sizesForEachScreens([3200, 2500, 1930], [35, 30, 25], "margin-left", "px")};

  img {
    width: 45px;
    height: 45px;
    margin-right: 7px;

    ${sizesForEachScreens(
      [3200, 3000, 2500, 1930, 1500],
      [35, 30, 25, 20],
      "width",
      "px"
    )};

    ${sizesForEachScreens(
      [3200, 3000, 2500, 1930, 1500],
      [35, 30, 25, 20],
      "height",
      "px"
    )};
  }

  ${NormalFontSize()};
`;

export const DivForm = styled.div`
  width: 100%;
  height: 100%;
  ${flexbox("column")};

  @media (max-height: 670px) {
    padding-top: 10px;
    padding-bottom: 50px;
  }

  .mobileBtn {
    display: none;
    @media (max-width: 900px) {
      position: relative;
      display: flex;
    }
  }
`;

export const Title = styled.h1`
  font-size: 48pt;
  ${getFont()};
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
  width: 78%;
  text-align: center;
  height: auto;
  color: ${colorsApp.soDark};
  font-size: 30pt;
  ${getFont()};
  margin-top: 10px;

  ${NormalFontSize()};

  @media (max-width: 1190px) {
    width: 90%;
  }

  @media (max-width: 900px) {
    width: 70%;
  }

  @media (max-width: 750px) {
    font-size: 11pt;
    width: 80%;
  }
`;

export const DivGridForm = styled.div`
  width: 75%;
  height: auto;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: repeat(3, 100px) auto auto;
  grid-gap: 30px;

  @media (max-height: 670px) {
    grid-gap: 15px;
  }

  @media (max-width: 3200px) {
    grid-template-rows: repeat(3, 90px) auto auto;
  }

  @media (max-width: 2500px) {
    grid-template-rows: repeat(3, 70px) auto auto;
  }

  @media (max-width: 1930px) {
    grid-template-rows: repeat(3, 60px) auto auto;
    grid-gap: 11px;
  }

  @media (max-width: 1500px) {
    grid-template-rows: repeat(3, 45px) auto auto;
  }

  @media (max-width: 1370px) {
    grid-template-rows: repeat(3, 40px) auto auto;
  }

  @media (max-width: 900px) {
    width: 70%;
  }

  @media (max-width: 750px) {
    ${flexbox("column")};
  }

  @media (max-width: 650px) {
    width: 80%;
  }
`;

export const ErrorMessage = styled.p`
  width: 100%;
  font-size: 30pt;
  text-align: center;
  ${getFont()};
  color: red;
  margin-top: 10px;
  margin-bottom: 5px;

  ${NormalFontSize()};
`;

export const FormGroup = styled.div`
  width: 100%;
  border-radius: 7px;
  display: grid;
  grid-template-columns: 90% 10%;
  grid-template-rows: 100%;
  background: #f1f0f4;
  border: ${({ isEmpty }) => (isEmpty ? "2px solid red" : "none")};

  @media (max-width: 750px) {
    height: 40px;
    margin-bottom: 13px;
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
    padding-left: 40px;
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
    background: white;
    border: ${({ isEmpty }) =>
      isEmpty ? `2px solid red` : `2px solid ${colorsApp.orange}`};
    box-sizing: border-box;
  }
`;

export const InputIcon = styled.div`
  width: 100%;
  height: 100%;
  ${flexbox()};

  img {
    width: 45px;
    height: 45px;
    margin-right: 15px;

    ${sizesForEachScreens(
      [3200, 3000, 2500, 1930, 1500],
      [35, 30, 25, 20],
      "width",
      "px"
    )};

    ${sizesForEachScreens(
      [3200, 3000, 2500, 1930, 1500],
      [35, 30, 25, 20],
      "height",
      "px"
    )};
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
  border-radius: 7px;
  z-index: 10;
  box-shadow: 0 0 20px;

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
    padding-top: 11px;
    padding-bottom: 10px;
    cursor: default;
    padding-left: 15px;
    box-sizing: border-box;
    ${getFont()};
    font-size: 27pt;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.3);

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

  span {
    margin-left: 10px;
    color: ${colorsApp.orange};
    cursor: default;
  }
  ${NormalFontSize()};

  @media (max-width: 750px) {
    width: 80%;
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
  border-radius: 10px;
  border: none;
  background: ${colorsApp.orange};
  ${getFont("Medium")};
  font-size: 35pt;
  grid-column: 1/3;

  @media (max-width: 1500px) {
    border-radius: 5px;
  }

  ${sizesForEachScreens(
    [3200, 3000, 2500, 1930],
    [27, 25, 20, 15],
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
  background: ${colorsApp.orange};
  grid-template-columns: 35% 30% 35%;

  ${sizesForEachScreens(
    [3200, 3000, 2500, 1930, 1500, 1370],
    [1900, 1700, 1500, 1200, 750, 670],
    "width",
    "px"
  )}

  ${sizesForEachScreens([1500, 1370], [500, 400], "height", "px")} 

  @media  (max-width:900px) {
    height: 82vh;
    width: 100%;
    border-radius: 0;
    z-index: 99999;
    grid-template-columns: 25% auto auto;
    box-sizing: border-box;
    overflow: hidden;
    align-self: flex-end;
  }

  .illustration2 {
    margin-left: 150px;

    @media (max-width: 1500px) {
      margin-left: 50px;
    }

    @media (max-width: 900px) {
      display: block;
      margin-right: -90px;
    }

    @media (max-width: 750px) {
      margin-right: -50px;
    }

    @media (max-width: 650px) {
      margin-right: -30px;
    }
  }

  .illustration1 {
    background-position: right;

    @media (max-width: 900px) {
      display: block;
      opacity: 0;
    }
  }

  .div2 {
    width: 100%;
    height: 100%;
    position: absolute;
    ${flexbox("column")};
    box-sizing: border-box;

    @media (max-width: 900px) {
      justify-content: flex-start;
      padding-top: 10%;
    }

    @media (max-width: 750px) {
      padding-top: 7%;
    }

    @media (max-width: 650px) {
      padding-top: 5%;
    }
  }

  .miniDiv {
    width: 50%;
    ${flexbox("column")};

    ${sizesForEachScreens(
      [3000, 2500, 1930, 1370, 1000, 900],
      [45, 50, 60, 65, 70],
      "width",
      "%"
    )}
  }
`;

export const TitleSucess = styled(Title)`
  color: ${colorsApp.soDark};
  ${getFont("Medium")};
  text-align: center;
`;

export const TextSucess = styled(TextForm)`
  color: white;
  ${getFont("Medium")};
  width: 90%;
`;

export const ButtonSucess = styled(ButtonLogin)`
  background: ${colorsApp.soDark};
  color: white;
  margin-top: 40px;
  height: 70px;

  ${sizesForEachScreens([3000, 2500, 1930], [60, 50, 40], "height", "px")}

  ${sizesForEachScreens([3000, 2500, 1930], [30, 20, 10], "margin-top", "px")}
`;
