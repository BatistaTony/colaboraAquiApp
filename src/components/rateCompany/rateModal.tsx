import { useState, Fragment } from "react";
import CustomCheckBox from "./checboxRate";
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
} from "./modalStyle";
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
  const [animateData, setAnimation] = useState({ opacity: 1 });

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
    setAnimation({ opacity: 1 });
  };

  const checkDisabledButton = (): Boolean => {
    if (rateData.feeling === "" || rateData.consumerExperience === "") {
      return true;
    } else if (stepRate === 2 && rateData.consumerSuggestion === "") {
      return true;
    } else {
      return false;
    }
  };

  const userWillGiveSuggestion = () => {
    setIsGiveSuggestion(!isGiveSuggestion);
  };

  const sendSuggestion = () => {
    if (!checkDisabledButton()) {
      setShowModalSucess(!showModalSucess);
    }
  };

  const nextStep = (step: number) => {
    if (stepRate === 1) {
      if (!checkDisabledButton()) {
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
      initial={{ opacity: 0 }}
      animate={animateData}
      exit={{ opacity: 0 }}
      keepCenter={rateData.feeling === ""}
    >
      <ButtonBack onClick={stepRate === 1 ? closeModal : () => nextStep(1)}>
        <img src="/images/back.png" alt="" />
        <p>{stepRate === 1 ? "Cancelar sugestão" : "Voltar"}</p>
      </ButtonBack>

      {showModalSucess && <ModalRateSucess toggleModal={toggleModal} />}

      {stepRate === 1 ? (
        <ContainerStepOne
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0, duration: 0.4 }}
          exit={{ opacity: 0, x: -500 }}
        >
          <RateCompanyText>
            Como classificas a tua experiência com este
            <span> serviço/empresa ?</span>
          </RateCompanyText>

          <RatingEmojis
            feeling={rateData.feeling}
            handleFeeling={handleFeeling}
          />

          {rateData.feeling !== "" && (
            <Fragment>
              <TextareaRate
                value={rateData.consumerExperience}
                name="consumerExperience"
                placeholder="Descreva a experiencia "
                handleChange={handleChange}
              />

              <DivCheckBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                checked={isGiveSuggestion}
              >
                <CustomCheckBox
                  onClick={userWillGiveSuggestion}
                  isChecked={isGiveSuggestion}
                />

                <p onClick={userWillGiveSuggestion}>
                  Deixar sugestão de melhoria
                </p>
              </DivCheckBox>
            </Fragment>
          )}
        </ContainerStepOne>
      ) : (
        <GiveSuggestion
          value={rateData.consumerSuggestion}
          handleSuggestionValue={handleChange}
        />
      )}

      {rateData.feeling !== "" && (
        <DivBtnModalRate initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <SendRateButton
            onClick={
              isGiveSuggestion && stepRate === 1
                ? () => nextStep(2)
                : sendSuggestion
            }
            isDisabled={checkDisabledButton()}
          >
            {isGiveSuggestion && stepRate === 1
              ? "Continuar"
              : "Enviar Avaliação"}
          </SendRateButton>
        </DivBtnModalRate>
      )}
    </ModalRate>
  );
};

export default RateModal;
