import styled from "styled-components";
import {
  colorsApp,
  flexbox,
  getFont,
  sizesForEachScreens,
} from "../layout/layoutStyle";
import { motion } from "framer-motion";
import { ButtonToggleSuggestionText } from "../rateCompany/companySuggestionAndRateStyle";

export const OverlayModalCode = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  background-size: 100% 100%;
  position: fixed;
  left: 0;
  top: 0;
  ${flexbox("row", "center", "flex-start")};
  z-index: 999;
`;

export const ModalCodeStyle = styled(motion.div)`
  width: 35%;
  height: auto;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: white;
  padding: 30px;
  box-sizing: border-box;

  ${sizesForEachScreens(
    [1500, 1000, 900, 750],
    [40, 50, 60, 100],
    "width",
    "%"
  )};

  @media (max-width: 750px) {
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }

  .title_modal {
    width: 100%;

    @media (max-width: 750px) {
      text-align: left;
    }
  }

  .text_modal {
    text-align: left;
    width: 100%;

    span {
      ${getFont("Medium")};
      color: ${colorsApp.roxo};
    }
  }

  .inputCode {
    width: 50%;
    margin-top: 10px;
  }
`;

export const GroupBtn = styled.div`
  width: 100%;
  margin-top: 20px;
  ${flexbox("row", "space-between", "center")};

  .resend {
    margin-left: 0;
    background: ${colorsApp.yelloSecundary};
  }
`;

export const ButtonModal = styled(ButtonToggleSuggestionText)`
  border-radius: 10px;
  color: ${({ cancel }) => (cancel ? `white` : `black`)};
  margin-left: 20px;
  height: 80px;
  background: ${({ cancel }) =>
    cancel ? `${colorsApp.error}` : `${colorsApp.orange}`};

  ${sizesForEachScreens(
    [3200, 2500, 1930, 1500],
    ["70", "50", "40", "30"],
    "height",
    "px"
  )}

  ${sizesForEachScreens([2500, 2000], [7, 5], "border-radius", "px")};
`;
