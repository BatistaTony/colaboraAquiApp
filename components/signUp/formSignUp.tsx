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
import { IConsumer } from "../../types";
import CustomSelect from "./select";
import ButtonBack from "./buttonBack";

const initialState: IConsumer = {
  userName: "",
  province: "",
  county: "",
  ageRange: "",
  password: "",
};

export default function FormSignUp() {
  const [consumerData, setConsumerData] = useState<IConsumer>(initialState);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorIsOn, setWhereIsError] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [ageRanges, setAgeRange] = useState<string[]>([
    "15 a 16 anos",
    "17 a 25 anos",
    "30 a 40 anos",
  ]);
  const [counties, setCounties] = useState<string[]>([
    "Luanda",
    "Maianga",
    "Cazenga",
    "Bengo",
    "KIlamaba",
    "Cacuaco",
    "Benguela",
    "Viana",
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

  const translateProperty = (property: string): string => {
    switch (property) {
      case "userName": {
        return "Nome utilizador";
      }

      case "ageRange": {
        return "Faixa étaria";
      }

      case "county": {
        return "Municipio";
      }

      case "province": {
        return "Província";
      }

      case "password": {
        return "Senha";
      }

      default: {
        return "";
      }
    }
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
      //waiting for API
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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

        <FormGroup isEmpty={errorIsOn === "province"}>
          <input
            type="text"
            name="province"
            id="province"
            onChange={handleChange}
            value={consumerData.province}
            placeholder="Provincia"
          />
        </FormGroup>

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

        <FormGroup isEmpty={errorIsOn === "password"}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            onChange={handleChange}
            placeholder="Senha"
          />
          <InputIcon onClick={() => setShowPassword(!showPassword)}>
            <img src="/images/icons8-eye.png" alt="" />
          </InputIcon>
        </FormGroup>

        <QuestionSignUp>
          Já tens uma conta ? clique aqui para <span>entrar</span>
        </QuestionSignUp>

        <ButtonSignUp onClick={signUpUser}>Continuar</ButtonSignUp>
        <ButtonBack classNames="mobileBtn" />
      </DivGridForm>
    </form>
  );
}
