import { useState } from "react";

import {
  ButtonBack,
  RateCompanyText,
  RateCompanyTextarea,
  SendRateButton,
  ModalRate,
  DivBtnModalRate,
  DivCheckBox,
} from "./rateCompanyStyle";
import RatingEmojis from "./rateEmojes";

interface IRateCompany {
  feeling: string;
  consumerExperience: string;
}

const initialSatte: IRateCompany = {
  feeling: "",
  consumerExperience: "",
};

const RateModal = () => {
  const [rateData, setRateData] = useState<IRateCompany>(initialSatte);
  const [isGiveSuggestion, setIsGiveSuggestion] = useState<boolean>(false);

  const handleChange = (event: any) => {
    setRateData({
      ...rateData,
      [event.target.name]: event.target.value,
    });
  };

  const sendSuggestion = () => {};

  return (
    <ModalRate>
      <ButtonBack>
        <img src="/images/back.png" alt="" />
        <p>Cancelar sugestão</p>
      </ButtonBack>

      <RateCompanyText>
        Como classificas a tua experiência com este
        <span> serviço/empresa ?</span>
      </RateCompanyText>

      <RatingEmojis />

      <RateCompanyTextarea>
        <textarea
          name="consumerExperience"
          placeholder="Descreva sua experiencia"
          onChange={handleChange}
        ></textarea>
      </RateCompanyTextarea>

      <DivCheckBox checked={isGiveSuggestion}>
        <label className="divCheckMark">
          <input
            type="checkbox"
            id="isGiveSuggestion"
            onClick={() => setIsGiveSuggestion(!isGiveSuggestion)}
            checked={isGiveSuggestion}
          />
          <span className="checkmark"></span>
        </label>

        <p onClick={() => setIsGiveSuggestion(!isGiveSuggestion)}>
          Deixar sugestão de melhoria
        </p>
      </DivCheckBox>

      <DivBtnModalRate>
        <SendRateButton>
          {isGiveSuggestion ? "Continuar" : "Enviar Avaliação"}
        </SendRateButton>
      </DivBtnModalRate>
    </ModalRate>
  );
};

export default RateModal;
