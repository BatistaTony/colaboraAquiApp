import { useState } from "react";
import {
  ButtonSignUp,
  DivGridForm,
  ErrorMessage,
  FormGroup,
  QuestionSignUp,
  FormGroupGrand,
} from "./signUpStyle";
import { IConsumer } from "../../../types";
import CustomSelect from "./select";
import SucessModal from "./sucessModal";
import InputPassword from "./inputPassword";
import Link from "next/link";
import provinces from "./../../constants/provinces.json";

const initialState: IConsumer = {
  phone: "",
  province: "",
  county: "",
  dataNascimento: 0,
  password: "",
};

export default function FormSignUp() {
  const [consumerData, setConsumerData] = useState<IConsumer>(initialState);
  const [errorIsOn, setWhereIsError] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [showModalSucess, setShowModalSucess] = useState<boolean>(false);
  const provincesAngola = provinces.map((value) => value.state);
  const [counties, setCounties] = useState<Array<string> | null>([]);

  const handleSubmit = (event: any) => {
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

  const checkDataNascimento = (): Boolean => {
    const dataN = Number(consumerData.dataNascimento);

    if (dataN < 2018 && dataN > 1800) {
      return true;
    } else {
      setWhereIsError("dataNascimento");
      setErrorMsg("Apenas maior ou igual a 18 anos");
      return false;
    }
  };

  const handleChooseSelect = (property: string, value: string) => {
    if (property === "province") {
      setConsumerData({
        ...consumerData,
        [property]: value,
        county: "",
      });

      setCountiesToSelect(value);

      if (errorMsg === "Seleciona uma provincia") {
        setWhereIsError(null);
        setErrorMsg(null);
      }
    } else {
      setConsumerData({
        ...consumerData,
        [property]: value,
      });
    }
  };

  const checkError = (): boolean => {
    const arrayConsumerData = Object.entries(consumerData).reverse();

    const emptyProperties = arrayConsumerData.filter((value, index) => {
      if (value[1] === "" || value[1] === 0) {
        setWhereIsError(value[0]);
        setErrorMsg("Preenche este campo");
      }

      return value[1] === "";
    });

    return emptyProperties.length <= 0;
  };

  const signUpUser = (): void => {
    if (consumerData.phone) {
      if (checkError()) {
        if (checkDataNascimento()) {
          setShowModalSucess(!showModalSucess);
        }
      }
    } else if (checkError()) {
      if (checkDataNascimento()) {
        setShowModalSucess(!showModalSucess);
      }
    }
  };

  const setCountiesToSelect = (province: string) => {
    const result = provinces.filter((value) => value.state === province);
    setCounties(result[0].counties);
  };

  const checkIfGotCounties = () => {
    if (consumerData.province === "") {
      setWhereIsError("province");
      setErrorMsg("Seleciona uma provincia");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {showModalSucess && <SucessModal dataUser={consumerData} />}

      <DivGridForm>
        <FormGroupGrand>
          <FormGroup isEmpty={errorIsOn === "phone"}>
            <input
              type="text"
              name="phone"
              id="phone"
              onChange={handleChange}
              placeholder="Telefone"
              maxLength={15}
            />
          </FormGroup>
          {errorIsOn === "phone" && (
            <ErrorMessage className="error_name_">{errorMsg}</ErrorMessage>
          )}
        </FormGroupGrand>

        <CustomSelect
          defaultValueSelect={consumerData.province || "Província"}
          errorMsg={errorMsg}
          handleChange={(value: string) =>
            handleChooseSelect("province", value)
          }
          values={provincesAngola}
          isEmpty={errorIsOn === "province"}
        />

        <CustomSelect
          defaultValueSelect={consumerData.county || "Municipio"}
          errorMsg={errorMsg}
          handleChange={(value: string) => handleChooseSelect("county", value)}
          values={counties}
          disabled={consumerData.province === ""}
          isEmpty={errorIsOn === "county"}
          onClick={checkIfGotCounties}
        />

        <FormGroupGrand>
          <FormGroup isEmpty={errorIsOn === "dataNascimento"}>
            <input
              type="number"
              name="dataNascimento"
              id="dataNascimento"
              onChange={handleChange}
              placeholder="Ano de nascimento"
            />
          </FormGroup>
          {errorIsOn === "dataNascimento" && (
            <ErrorMessage className="error_name_">{errorMsg}</ErrorMessage>
          )}
        </FormGroupGrand>

        <InputPassword
          errorMsg={errorMsg}
          errorIsOn={errorIsOn}
          handleChange={handleChange}
          name="password"
          value={consumerData.password}
        />

        <ButtonSignUp onClick={signUpUser}>Continuar</ButtonSignUp>
        <QuestionSignUp>
          Já tens uma conta ?
          <Link href="/signin">
            <span>Entrar agora</span>
          </Link>
        </QuestionSignUp>
      </DivGridForm>
    </form>
  );
}
