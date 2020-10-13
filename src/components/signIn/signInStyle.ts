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
  background-size: cover;
`;

export const ModalSignIn = styled(Modal)`
  grid-template-columns: 65% 35%;
  box-shadow: 0 0 10px gray;

  .btnBackSign {
    left: 60px;
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
      ${flexbox("row", "flex-start", "center")};
      height: 30px;
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
`;

export const DivForm = styled.div`
  width: 100%;
  background-color: red;
`;

export const IllustrationObjectSignIn = styled.div`
  width: 50%;
  height: 100%;
  background: url(/images/Grupo95.svg);
  background-size: 70% 70%;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
`;
