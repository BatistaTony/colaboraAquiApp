import { motion } from "framer-motion";
import { useState, Fragment } from "react";
import CheckBoxRate from "./checboxRate";
import GiveSuggestion from "./giveSuggestion";
import ModalRateSucess from "./modalSucess";

import {
  ButtonBack,
  RateCompanyText,
  RateCompanyTextarea,
  SendRateButton,
  ModalRate,
  DivBtnModalRate,
  DivCheckBox,
  ContainerStepOne,
} from "./rateCompanyStyle";
import RatingEmojis from "./rateEmojes";
import TextareaRate from "./textareaRate";

interface IRateCompany {
  feeling: string;
  consumerExperience: string;
  consumerSuggestion?: string;
}

const initialSatte: IRateCompany = {
  feeling: "",
  consumerExperience: "",
  consumerSuggestion: "",
};

interface IProps {
  toggleModal: any;
}

const RateModal = ({ toggleModal }: IProps) => {
  const [rateData, setRateData] = useState<IRateCompany>(initialSatte);
  const [isGiveSuggestion, setIsGiveSuggestion] = useState<boolean>(false);
  const [stepRate, setSetpRate] = useState<Number>(1);
  const [showModalSucess, setShowModalSucess] = useState<boolean>(false);
  const [animateData, setAnimation] = useState({ opacity: 1, x: 0 });

  const handleChange = (event: any) => {
    setRateData({
      ...rateData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFeeling = (face: string) => {
    setRateData({
      ...rateData,
      feeling: face,
    });
  };

  const changeAnimation = () => {
    setAnimation({ opacity: 1, x: 500 });
  };

  const userWillGiveSuggestion = () => {
    setIsGiveSuggestion(!isGiveSuggestion);
  };

  const sendSuggestion = () => {
    if (stepRate === 1 && rateData.consumerExperience && rateData.feeling) {
      setShowModalSucess(!showModalSucess);
    } else if (stepRate === 2 && rateData.consumerSuggestion) {
      setShowModalSucess(!showModalSucess);
    }
  };

  const nextStep = (step: number) => {
    if (stepRate === 1) {
      if (rateData.consumerExperience) {
        setSetpRate(step);
      }
    } else {
      setSetpRate(step);
    }
  };

  const closeModal = () => {
    changeAnimation();

    setTimeout(() => {
      toggleModal();
    }, 200);
  };

  return (
    <ModalRate
      initial={{ opacity: 0, x: 500 }}
      animate={animateData}
      exit={{ opacity: 0, x: 500 }}
    >
      <ButtonBack onClick={stepRate === 1 ? closeModal : () => nextStep(1)}>
        <img src="/images/back.png" alt="" />
        <p>{stepRate === 1 ? "Cancelar sugestão" : "Voltar"}</p>
      </ButtonBack>

      {showModalSucess && <ModalRateSucess toggleModal={toggleModal} />}

      {stepRate === 1 ? (
        <ContainerStepOne
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -500 }}
        >
          <RateCompanyText>
            Como classificas a tua experiência com este
            <span> serviço/empresa ?</span>
          </RateCompanyText>

          <RatingEmojis handleFeeling={handleFeeling} />

          <TextareaRate
            name="consumerExperience"
            placeholder="Descreva a experiencia "
            handleChange={handleChange}
          />

          <DivCheckBox checked={isGiveSuggestion}>
            <CheckBoxRate
              onClick={userWillGiveSuggestion}
              isGiveSuggestion={isGiveSuggestion}
            />

            <p onClick={userWillGiveSuggestion}>Deixar sugestão de melhoria</p>
          </DivCheckBox>
        </ContainerStepOne>
      ) : (
        <GiveSuggestion handleSuggestionValue={handleChange} />
      )}

      <DivBtnModalRate>
        <SendRateButton
          onClick={
            isGiveSuggestion && stepRate === 1
              ? () => nextStep(2)
              : sendSuggestion
          }
          isDisabled={
            rateData.consumerExperience === "" || rateData.feeling === ""
          }
        >
          {isGiveSuggestion && stepRate === 1
            ? "Continuar"
            : "Enviar Avaliação"}
        </SendRateButton>
      </DivBtnModalRate>
    </ModalRate>
  );
};

export default RateModal;
