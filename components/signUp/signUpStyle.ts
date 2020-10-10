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
  background: rgba(0, 0, 0, 0.5);
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
`;

export const Modal = styled.div`
  width: 60%;
  height: 70vh;
  background: white;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 30% 70%;
  position: relative;
  overflow: hidden;
`;

export const ModalIllustration = styled.div`
  width: 100%;
  height: 100%;
  background: url(/images/signup.png);
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  @media (max-width: 1930px) {
    background-size: cover;
  }

  // @media (max-width: 1500px) {
  //   background-size: 100% 100%;
  // }

  // @media (max-width: 1370px) {
  //   background-size: 100% 100%;
  // }
`;

export const ButtonBack = styled.button`
  color: ${colorsApp.soDark};
  outline: none;
  border: none;
  background: transparent;
  ${getFont("Medium")};
  font-size: 25pt;
  ${flexbox()};
  position: absolute;
  bottom: 5%;
  left: 13px;

  img {
    width: 30px;
    heihgt: 30px;
    margin-right: 5px;

    ${sizesForEachScreens([1930, 1500], [25, 20], "width", "px")};
    ${sizesForEachScreens([1930, 1500], [25, 20], "height", "px")};
  }

  ${sizesForEachScreens([2500, 1930, 1500], [20, 17, 12], "font-size", "pt")};
`;

export const DivForm = styled.div`
  width: 100%;
  height: 100%;
  ${flexbox("column")};
  // padding-bottom: 30px;
  // padding-top: 30px;
`;

export const Title = styled.h1`
  font-size: 40pt;
  ${getFont()};
  color: ${colorsApp.soDark};

  span {
    ${getFont("Medium")};
    color: ${colorsApp.orange};
  }

  ${sizesForEachScreens([2500, 1930, 1500], [30, 25, 15], "font-size", "pt")};
`;

export const TextForm = styled.p`
  width: 78%;
  text-align: center;
  height: auto;
  color: ${colorsApp.soDark};
  font-size: 25pt;
  ${getFont()};
  margin-top: 10px;

  ${sizesForEachScreens([2500, 1930, 1500], [20, 17, 12], "font-size", "pt")};
`;

export const DivGridForm = styled.div`
  width: 75%;
  heihgt: auto;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: repeat(4, 80px) auto;
  margin-top: 20px;
  grid-gap: 30px;
  bakcground: red;

  @media (max-width: 1930px) {
    grid-template-rows: repeat(4, 70px) auto;
  }

  @media (max-width: 1500px) {
    grid-template-rows: repeat(4, 45px) auto;
  }

  @media (max-width: 1370px) {
    grid-template-rows: repeat(4, 40px) auto;
  }
`;

export const FormGroup = styled.div`
  width: 100%;

  border-radius: 5px;
  display: grid;
  grid-template-columns: 90% 10%;
  grid-template-rows: 100%;
  background: #f1f0f4;

  input {
    font-size: 25pt;
    height: 100%;
    ${getFont()};
    color: ${colorsApp.soDark};
    border: none;
    outline: none;
    background: transparent;
    padding-left: 15px;
    box-sizing: border-box;

    &::placeholder {
      color: ${colorsApp.soDark};
    }

    ${sizesForEachScreens([2500, 1930, 1500], [20, 17, 12], "font-size", "pt")};
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
    width: 30px;
    heihgt: 30px;
    margin-right: 15px;

    ${sizesForEachScreens([1930, 1500], [25, 20], "width", "px")};
    ${sizesForEachScreens([1930, 1500], [25, 20], "height", "px")};
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
  border-radius: 5px;
  box-shadow: 0 0 5px;

  li {
    width: 100%;
    padding-top: 11px;
    padding-bottom: 10px;
    cursor: default;
    padding-left: 15px;
    box-sizing: border-box;
    ${getFont()};
    font-size: 20pt;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.3);

    ${sizesForEachScreens([2500, 1930, 1500], [18, 16, 11], "font-size", "pt")};
  }
`;

export const QuestionSignUp = styled.p`
  width: 100%;
  height: 100%;
  text-align: center;
  color: ${colorsApp.soDark};
  font-size: 25pt;
  ${getFont()};
  grid-column: 1/3;
  ${flexbox()};
  span {
    margin-left: 10px;
    color: ${colorsApp.orange};
  }

  ${sizesForEachScreens([2500, 1930, 1500], [20, 17, 12], "font-size", "pt")};
`;

export const ButtonSignUp = styled.button`
  width: 100%;
  color: ${colorsApp.soDark};
  padding-top: 30px;
  padding-bottom: 30px;
  outline: none;
  border-radius: 7px;
  border: none;
  background: ${colorsApp.orange};
  ${getFont("Medium")};
  font-size: 25pt;
  grid-column: 1/3;

  ${sizesForEachScreens([2500, 1930], [20, 15], "font-size", "pt")};
  ${sizesForEachScreens([1930, 1500], [20, 10], "padding-top", "px")};
  ${sizesForEachScreens([1930, 1500], [20, 10], "padding-bottom", "px")};
`;
