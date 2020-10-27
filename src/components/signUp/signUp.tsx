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
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function SignUp() {
  const userState = useSelector((state) => state.Consumer);

  return (
    <OverlaySignUp>
      <AnimatePresence>
        <Modal
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ y: -200, opacity: 1 }}
        >
          <ModalIllustration img={"/images/signup.png"}>
            <Link href="/">
              <ButtonBack />
            </Link>
          </ModalIllustration>

          <DivForm>
            <div className="divBtnBackT">
              <Link href="/">
                <ButtonBack classNames="mobileBtn" />
              </Link>
            </div>

            <Title>
              Começa agora no <span>Colabora</span>.
            </Title>
            <TextForm>
              Apenas tu tens acesso as tuas informações. nós prezamos pela
              privacidade e direitos de expressão
            </TextForm>

            <FormSignUp />
          </DivForm>
        </Modal>
      </AnimatePresence>
    </OverlaySignUp>
  );
}
