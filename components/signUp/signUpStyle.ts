import styled from "styled-components";
import {
  colorsApp,
  flexbox,
  getFont,
  sizesForEachScreens,
} from "../layout/layoutStyle";

export const OverlaySignUp = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  ${flexbox()};

  form {
    width: 100%;
    height: auto;
    ${flexbox()};
  }

  @media (max-width: 750px) {
    overflow: auto;
    box-box-sizing: border-box;
  }
`;

const NormalFontSize = () =>
  sizesForEachScreens(
    [3200, 3000, 2500, 1930, 1500],
    [26, 22, 19, 17, 12],
    "font-size",
    "pt"
  );

export const Modal = styled.div`
  width: 60%;
  height: 70vh;
  background: white;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 35% 65%;
  position: relative;
  overflow: hidden;

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
  background: url(/images/signup.png);
  background-size: 90% 100%;
  background-repeat: no-repeat;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const ButtonBack = styled.button`
  color: ${colorsApp.soDark};
  outline: none;
  border: none;
  background: transparent;
  ${getFont("Medium")};
  font-size: 30pt;
  ${flexbox()};
  position: ${({ mobile }) => (mobile ? "relative" : "absolute")};
  bottom: 5%;
  left: ${({ mobile }) => (mobile ? "0" : "20px")};

  @media (min-width: 900px) {
    display: ${({ mobile }) => (mobile ? "none" : "block")};
  }

  img {
    width: 45px;
    height: 45px;

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
`;

export const Title = styled.h1`
  font-size: 48pt;
  ${getFont()};
  color: ${colorsApp.soDark};

  span {
    ${getFont("Medium")};
    color: ${colorsApp.orange};
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
  margin-top: 20px;
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
    grid-gap: 10px;
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

export const FormGroup = styled.div`
  width: 100%;
  border-radius: 7px;
  display: grid;
  grid-template-columns: 90% 10%;
  grid-template-rows: 100%;
  background: #f1f0f4;

  @media (max-width: 750px) {
    height: 40px;
    margin-bottom: 13px;
  }

  input {
    font-size: 30pt;
    height: 100%;
    ${getFont()};
    color: ${colorsApp.soDark};
    border: none;
    outline: none;
    background: transparent;
    padding-left: 40px;
    box-sizing: border-box;

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

  &:nth-child(3),
  &:nth-child(4) {
    cursor: default();
  }

  &:first-child {
    grid-column: 1/3;
    border: 2px solid ${colorsApp.orange};
    background: white;
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
  height: ${({ length }) => (length > 5 ? "180px" : "auto")};
  position: absolute;
  overflow-y: ${({ length }) => (length > 5 ? "auto" : "hidden")};
  top: 0;
  background: white;
  border-radius: 7px;
  box-shadow: 0 0 5px;

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
