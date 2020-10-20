import {
  OverlaySignUp,
  ModalIllustration,
  ModalSucess,
  TitleSucess,
  TextSucess,
  ButtonSucess,
  IllustrationMobile,
} from "./signUpStyle";
import Link from "next/link";

export default function SucessModal() {
  return (
    <OverlaySignUp>
      <div className="wrp_div_vdg">
        <ModalSucess
          initial={{ opacity: 0, y: -500 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ y: -500, opacity: 0 }}
        >
          <ModalIllustration
            className="illustration1"
            img={"/images/signup.png"}
          ></ModalIllustration>
          <div></div>
          <IllustrationMobile>
            <img src="/images/Grupo572.png" alt="" />
          </IllustrationMobile>
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
      </div>
    </OverlaySignUp>
  );
}
