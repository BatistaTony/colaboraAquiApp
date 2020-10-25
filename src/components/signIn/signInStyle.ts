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
  overflow: hidden;
`;

export const ModalSignIn = styled(Modal)`
  grid-template-columns: 69% 35%;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);

  .btnBackSign {
    align-self: center;
    margin-bottom: 3.5rem;

    @media (max-width: 1930px) {
      margin-bottom: 3rem;
    }

    @media (max-width: 1500px) {
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 750px) {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  .divForm_sign_p {
    .divBtnBackT {
      position: absolute;
      top: 0;
    }

    @media (max-width: 900px) {
      height: 100vh;
      ${flexbox("column", "center", "center")};
      padding-bottom: 2%;
      box-sizing: border-box;
      padding-right: 0;

      @media (max-width: 750px) {
        ${flexbox("column", "flex-end", "center")};
      }

      .divBtnBackT {
        padding-top: 15px;
      }
    }

    @media (max-width: 900px) {
      border: 0;
      box-shadow: 0 0 0px;
    }

    .grid-form-sign {
      grid-template-columns: 100%;
      width: 73%;

      justify-content: center;
      grid-template-rows: repeat(2, 100px) auto auto;

      ${sizesForEachScreens(
        [3200, 2500, 1930, 1500, 1370],
        [
          "repeat(2, 90px) auto auto",
          "repeat(2, 70px) auto auto",
          "repeat(2, 60px) auto auto",
          "repeat(2, 45px) auto auto",
          "repeat(2, 40px) auto auto",
        ],
        "grid-template-rows",
        ""
      )}

      @media (max-width:900px) {
        width: 45%;
      }

      @media (max-width: 800px) {
        width: 48%;
      }

      @media (max-width: 720px) {
        width: 55%;
      }

      @media (max-width: 600px) {
        width: 60%;
      }

      @media (max-width: 590px) {
        width: 85%;
      }

      .FormGroup {
        grid-column: 1/2;
        grid-template-columns: 100%;
      }

      .formPassword {
        grid-template-columns: 90% 10%;
      }

      .iconeSee {
        img {
          width: 55%;
          height: 50%;

          @media (max-width: 2500px) {
            width: 55%;
            height: 55%;
          }

          @media (max-width: 1500px) {
            width: 55%;
            height: 50%;
          }

          @media (max-width: 590px) {
            width: 50%;
            height: 50%;
          }

          @media (max-width: 525px) {
            width: 55%;
            height: 50%;
          }

          @media (max-width: 410px) {
            width: 53%;
            height: 50%;
          }
        }
      }

      .btnLOgin {
        @media (max-width: 600px) {
          margin-top: 50px;
        }
      }

      .textForgetPassword {
        color: ${colorsApp.orange};
        font-size: 27pt;
        ${flexbox("row", "flex-start", "center")};
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
      margin-left: 50px;

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
  }
`;

export const IllustrationObjectSignIn = styled.div`
  width: 70%;
  height: 95%;
  background: url(/images/Grupo95.svg);
  background-size: 70% 90%;
  background-position: -20% -20%;
  background-repeat: no-repeat;
  position: absolute;
  top: -10px;
  left: -5%;
  transform: rotate(4deg);
  z-index: -1;

  @media (max-width: 1050px) {
    width: 70%;
    height: 90%;
    background-size: 70% 70%;
    background-position: -20% -20%;
    top: 0;
    left: -5%;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;
