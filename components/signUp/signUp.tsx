import FormSignUp from "./formSignUp";
import {
  OverlaySignUp,
  Modal,
  ModalIllustration,
  DivForm,
  Title,
  TextForm,
  ButtonBack,
} from "./signUpStyle";

export default function SignUp() {
  return (
    <OverlaySignUp>
      <Modal>
        <ModalIllustration img={"/images/signup.png"}>
          <ButtonBack>
            <img src="/images/icons8-left.png" alt="" /> Voltar ao inicio
          </ButtonBack>
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
