import {
  OverlaySignUp,
  ModalIllustration,
  ModalSucess,
  TitleSucess,
  TextSucess,
  ButtonSucess,
} from "./signUpStyle";
import Link from "next/link";

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
            <Link href="/companies">
              <ButtonSucess>Começar</ButtonSucess>
            </Link>
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
