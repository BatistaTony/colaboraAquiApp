import Route from "next/router";

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
  toggleSignUp: () => void;
}

export default function SignUpConsumer({ isSinglePage, toggleSignUp }: IProps) {
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
        <ModalIllustration img={"/images/signup.png"}>
          <ButtonBack onChange={backToHome} />
        </ModalIllustration>

        <DivForm>
          <div className="divBtnBackT">
            <ButtonBack classNames="mobileBtn" onChange={backToHome} />
          </div>

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
