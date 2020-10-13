import { useContext } from "react";
import { appContext } from "../appContext";
import ButtonBack from "./buttonBack";
import FormSignUp from "./formSignUp";
import {
  OverlaySignUp,
  Modal,
  ModalIllustration,
  DivForm,
  Title,
  TextForm,
} from "./signUpStyle";

export default function SignUp() {
  const [showSIgnUp, toggleSignUp] = useContext(appContext);

  const backToHome = () => {
    toggleSignUp();
  };

  return (
    <OverlaySignUp>
      <Modal>
        <ModalIllustration onClick={backToHome} img={"/images/signup.png"}>
          <ButtonBack />
        </ModalIllustration>
        <DivForm>
          <Title>
            Começa agora no <span>Colabora</span>
          </Title>
          <TextForm>
            Apenas tu tens acesso as tuas informações. nós prezamos pela
            privacidade e direitos de expressão
          </TextForm>

          <FormSignUp />
        </DivForm>
      </Modal>
    </OverlaySignUp>
  );
}
