import {
  OverlaySignUp,
  ModalIllustration,
  ModalSucess,
  TitleSucess,
  TextSucess,
  ButtonSucess,
  IllustrationMobile,
} from "./signUpStyle";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function SucessModal() {
  const [animateData, setAnimation] = useState({ opacity: 1, y: 0 });

  const changeAnimation = () => {
    setAnimation({ opacity: 1, y: -800 });
  };

  return (
    <AnimatePresence>
      <OverlaySignUp>
        <div className="wrp_div_vdg">
          <ModalSucess
            initial={{ opacity: 0, y: -500 }}
            animate={animateData}
            exit={{ opacity: 0 }}
          >
            <IllustrationMobile>
              <img src="/images/Grupo572.png" alt="" />
            </IllustrationMobile>
            <div className="div2">
              <div className="miniDiv">
                <TitleSucess>Tu és o consumidor, Tu tens o poder</TitleSucess>
                <TextSucess>
                  Ajude as empresas e orgãos nacionas a melhorarem os seus
                  serviços
                </TextSucess>

                <ButtonSucess onClick={changeAnimation}>Começar</ButtonSucess>
              </div>
            </div>
          </ModalSucess>
        </div>
      </OverlaySignUp>
    </AnimatePresence>
  );
}
