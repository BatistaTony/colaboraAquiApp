import styled from "styled-components";
import { flexbox } from "../layout/layoutStyle";
import { Modal } from "../signUp/signUpStyle";

export const OverlaySignIn = styled.div`
  width: 100%;
  height: 100vh;
  ${flexbox()};
  background: url(/images/bgSign.png);
  background-size: cover;
`;

export const ModalSignIn = styled(Modal)`
  grid-template-columns: 65% 35%;
`;

export const DivForm = styled.div`
  width: 100%;
  background-color: red;
`;
