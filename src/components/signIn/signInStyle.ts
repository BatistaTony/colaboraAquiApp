import styled from "styled-components";
import {
  colorsApp,
  flexbox,
  getFont,
  sizesForEachScreens,
} from "../layout/layoutStyle";
import { Modal } from "../signUp/signUpStyle";

export const OverlaySignIn = styled.div`
  width: 100%;
  height: 100vh;
  ${flexbox()};
  background: url(/images/Grupo978.svg);
  background-size: 100% 100%;
  overflow: hidden;
`;

export const ModalSignIn = styled(Modal)`
  grid-template-columns: 62% 37%;
  box-shadow: 0 0 0.5px gray;

  .btnBackSign {
    margin-right: 100px;

    ${sizesForEachScreens(
      [3200, 3000, 2500, 1930],
      [70, 60, 50, 40],
      "margin-right",
      "px"
    )};
  }

  .grid-form-sign {
    grid-template-columns: 100%;
    margin-top: 20px;
    grid-gap: 15px;
    justify-content: center;

    .FormGroup {
      grid-column: 1/2;
    }

    .textForgetPassword {
      color: ${colorsApp.orange};
      font-size: 27pt;
      ${flexbox("row", "flex-start", "flex-end")};
      ${getFont()};
      cursor: default;
      width: 100%;
      text-align: left;
      ${sizesForEachScreens(
        [3200, 3000, 2500, 1930, 1500],
        [26, 22, 19, 17, 12],
        "font-size",
        "pt"
      )}
    }
  }

  .illustration1_ {
    ${flexbox("column", "flex-end", "flex-end")};
    background-size: 95% 100%;
    background-position: right;
    margin-left: 30px;

    ${sizesForEachScreens(
      [2500, 1930, 1500],
      [25, 20, 15],
      "margin-left",
      "px"
    )};

    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export const DivForm = styled.div`
  width: 100%;
  background-color: red;
`;

export const IllustrationObjectSignIn = styled.div`
  width: 60%;
  height: 90%;
  background: url(/images/Grupo95.svg);
  background-size: 70% 70%;
  background-position: -20% -20%;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: -5%;
  transform: rotate(4deg);
  z-index: -1;
`;
