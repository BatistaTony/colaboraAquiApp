import { useEffect, useState } from "react";
import {
  ButtonSignUp,
  DivGridForm,
  ErrorMessage,
  FormGroup,
  FormSelect,
  InputIcon,
  QuestionSignUp,
  SelectList,
} from "./signUpStyle";
import { CSSTransition } from "react-transition-group";
import { IConsumer } from "../../../types";
import CustomSelect from "./select";
import ButtonBack from "./buttonBack";
import SucessModal from "./sucessModal";
import InputPassword from "./inputPassword";
import { translateProperty } from "../utils";
import Link from "next/link";
import { counties, provinces } from "./signUp.data";

const initialState: IConsumer = {
  userName: "",
  province: "",
  county: "",
  ageRange: "",
  password: "",
};

export default function FormSignUp() {
  const [consumerData, setConsumerData] = useState<IConsumer>(initialState);
  const [errorIsOn, setWhereIsError] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [showModalSucess, setShowModalSucess] = useState<boolean>(false);

  const [ageRanges, setAgeRange] = useState<string[]>([
    "15 a 16 anos",
    "17 a 25 anos",
    "30 a 40 anos",
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event: any) => {
    setConsumerData({
      ...consumerData,
      [event.target.name]: event.target.value,
    });
    setWhereIsError(null);
    setErrorMsg(null);
  };

  const handleChooseSelect = (property: string, value: string) => {
    setConsumerData({
      ...consumerData,
      [property]: value,
    });
    setWhereIsError(null);
    setErrorMsg(null);
  };

  const checkError = (): boolean => {
    const arrayConsumerData = Object.entries(consumerData).sort();

    const emptyProperties = arrayConsumerData.filter((value) => {
      if (value[1] === "") {
        setWhereIsError(value[0]);
        setErrorMsg(`${translateProperty(value[0])} é obrigatório`);
      }

      return value[1] === "";
    });

    return emptyProperties.length > 0;
  };

  const signUpUser = (): void => {
    if (!checkError()) {
      setShowModalSucess(!showModalSucess);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CSSTransition
        unmountOnExit
        addEndListener={() => {}}
        timout={200}
        in={showModalSucess}
        classNames="my-node"
      >
        <SucessModal />
      </CSSTransition>

      <ErrorMessage>{errorMsg}</ErrorMessage>
      <DivGridForm>
        <FormGroup isEmpty={errorIsOn === "userName"}>
          <input
            type="text"
            name="userName"
            id="userName"
            onChange={handleChange}
            placeholder="Nome do utilizador"
          />
        </FormGroup>

        <CustomSelect
          defaultValueSelect={consumerData.province || "Província"}
          handleChange={(value) => handleChooseSelect("province", value)}
          values={provinces}
          isEmpty={errorIsOn === "province"}
        />

        <CustomSelect
          defaultValueSelect={consumerData.county || "Municipio"}
          handleChange={(value) => handleChooseSelect("county", value)}
          values={counties}
          isEmpty={errorIsOn === "county"}
        />

        <CustomSelect
          defaultValueSelect={consumerData.ageRange || "Faixa etaria"}
          handleChange={(value) => handleChooseSelect("ageRange", value)}
          values={ageRanges}
          isEmpty={errorIsOn === "ageRange"}
        />

        <InputPassword errorIsOn={errorIsOn} handleChange={handleChange} />

        <QuestionSignUp>
          Já tens uma conta ? clique aqui para{" "}
          <Link href="/signin">
            <span>entrar</span>
          </Link>
        </QuestionSignUp>

        <ButtonSignUp onClick={signUpUser}>Continuar</ButtonSignUp>
        <ButtonBack classNames="mobileBtn" />
      </DivGridForm>
    </form>
  );
}
