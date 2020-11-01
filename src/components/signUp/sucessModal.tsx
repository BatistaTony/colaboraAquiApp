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
import { IConsumer } from "../../../types";
import { useDispatch } from "react-redux";
import { registerConsumer } from "../../store/actions/consumer";

interface IProps {
  dataUser: IConsumer;
}

export default function SucessModal({ dataUser }: IProps) {
  const [animateData, setAnimation] = useState({ opacity: 1, y: 0 });

  const dispatch = useDispatch();

  const changeAnimation = () => {
    setAnimation({ opacity: 1, y: -800 });
  };

  const login = () => {
    if (dataUser) {
      changeAnimation();
      setTimeout(() => {
        dispatch(registerConsumer(dataUser));
      }, 100);
    }
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
              <img src="/images/illustration-mobile.svg" alt="" />
            </IllustrationMobile>
            <div className="div2">
              <div className="miniDiv">
                <TitleSucess>Tu és o consumidor, Tu tens o poder</TitleSucess>
                <TextSucess>
                  Ajude as empresas e orgãos nacionas a melhorarem os seus
                  serviços
                </TextSucess>

                <ButtonSucess onClick={login}>Começar</ButtonSucess>
              </div>
            </div>
          </ModalSucess>
        </div>
      </OverlaySignUp>
    </AnimatePresence>
  );
}
