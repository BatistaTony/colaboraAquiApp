import {
  OverlaySignUp,
  ModalIllustration,
  ModalSucess,
  TitleSucess,
  TextSucess,
  ButtonSucess,
} from "./signUpStyle";

export default function SucessModal() {
  return (
    <OverlaySignUp>
      <ModalSucess>
        <ModalIllustration
          className="illustration1"
          img={"/images/signup.png"}
        ></ModalIllustration>
        <div></div>
        <div className="div2">
          <div className="miniDiv">
            <TitleSucess>Tu és o consumidor, Tu tens o poder</TitleSucess>
            <TextSucess>
              Ajude as empresa e orgãos nacionas a melhorarem os seus serviços
            </TextSucess>
            <ButtonSucess>Começar</ButtonSucess>
          </div>
        </div>
        <ModalIllustration
          className="illustration2"
          img={"/images/bgS.png"}
        ></ModalIllustration>
      </ModalSucess>
    </OverlaySignUp>
  );
}
