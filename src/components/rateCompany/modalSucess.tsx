import { useState } from "react";
import { OverlaySuggestion } from "./../companies/companiesStyle";
import {
  ButtonFinishRate,
  IllustrationModalSucessRate,
  ModalRateSucesStyle,
} from "./rateCompanyStyle";
import { AnimatePresence } from "framer-motion";

interface IProps {
  toggleModal: any;
}

export default function ModalRateSucess({ toggleModal }: IProps) {
  const [animateData, setAnimation] = useState({ opacity: 1, y: 0 });

  const changeAnimation = () => {
    setAnimation({ opacity: 1, y: -1000 });
  };

  const finishRate = () => {
    changeAnimation();

    setTimeout(() => {
      toggleModal();
    }, 200);
  };

  return (
    <AnimatePresence>
      <OverlaySuggestion>
        <ModalRateSucesStyle
          initial={{ opacity: 0, y: -500 }}
          animate={animateData}
          exit={{ opacity: 0 }}
        >
          <IllustrationModalSucessRate>
            <img src="/images/OnlineReview-rafiki.png" alt="" />
          </IllustrationModalSucessRate>

          <h1 className="title_modal_td_gf">
            Muito obrigado por <span>colaborar</span> !{" "}
          </h1>
          <p className="text_modal_rsgf_fdf">
            A sua avaliação ajudará as empresas a melhorarem os seus serviços
          </p>
          <ButtonFinishRate onClick={finishRate}>Concluir</ButtonFinishRate>
        </ModalRateSucesStyle>
      </OverlaySuggestion>
    </AnimatePresence>
  );
}
