import styled, { keyframes } from "styled-components";
import { colorsApp, flexbox } from "../layout/layoutStyle";

export const DivSpinner = styled.div`
  width: 100%;
  height: 100vh;
  ${flexbox()};
`;

const SpinninerAnimation = keyframes`

    
    100%{
        transform: rotate(360deg);
    }
`;

export const SpinnerSpinning = styled.div`
  svg {
    fill: ${colorsApp.orange};
    width: 40px;
    height: 40px;

    animation-name: ${SpinninerAnimation};
    animation-duration: 0.6s;
    animation-iteration-count: infinite;
  }
`;
