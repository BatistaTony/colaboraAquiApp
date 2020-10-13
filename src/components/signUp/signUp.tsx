import Route from "next/router";
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

interface IProps {
  isSinglePage?: boolean;
}

export default function SignUpConsumer({ isSinglePage }: IProps) {
  const [showSignUp, toggleSignUp] = useContext(appContext);

  const backToHome = () => {
    if (isSinglePage) {
      Route.push("/");
      toggleSignUp();
    } else {
      toggleSignUp();
    }
  };

  return (
    <OverlaySignUp isSinglePage={isSinglePage}>
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
