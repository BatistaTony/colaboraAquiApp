import { useEffect, useState } from "react";
import {
  ButtonSignUp,
  DivGridForm,
  ErrorMessage,
  FormGroup,
  QuestionSignUp,
  FormGroupGrand,
  LoadingAnimation,
} from "./signUpStyle";
import { IConsumer } from "../../../types";
import CustomSelect from "./select";
import SucessModal from "./sucessModal";
import InputPassword from "./inputPassword";
import Link from "next/link";
import provinces from "./../../constants/provinces.json";
import firebase from "./../../../Firebase";
import ModalSecretCode from "./modalCode";
import SpinnerIcon from "../spinner/spinnerIcon";

const initialState: IConsumer = {
  phone: "",
  province: "",
  county: "",
  dataNascimento: null,
  password: "",
};

export default function FormSignUp() {
  const [consumerData, setConsumerData] = useState<IConsumer>(initialState);
  const [errorIsOn, setWhereIsError] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [showModalSucess, setShowModalSucess] = useState<boolean>(false);
  const provincesAngola = provinces.map((value) => value.state);
  const [counties, setCounties] = useState<Array<string> | null>([]);
  const [confirmationResult, setConfirmationResult] = useState<any>({});
  const [showModalCode, setShowModalCode] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const firebaseAuth = firebase.auth();

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

  const toggleModalCode = () => {
    setShowModalCode(!showModalCode);
  };

  const toggleModalSucess = () => {
    setShowModalSucess(!showModalSucess);
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

  const authWithPhone = () => {
    const appVerify = new firebase.auth.RecaptchaVerifier("sign-in-button", {
      size: "invisible",
    });

    firebaseAuth
      .signInWithPhoneNumber(consumerData.phone, appVerify)
      .then((response) => {
        setConfirmationResult(response);
        setShowModalCode(true);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.code === "auth/invalid-phone-number") {
          setWhereIsError("phone");
          setErrorMsg("Telefone Invalido  (Ex: +244999999999)");
        } else {
          setWhereIsError("form");
          console.log(error);
          setErrorMsg("Erro de conexão de internet");
        }
        setIsLoading(false);
      });
  };

  const checkIfPhoneExists = async () => {
    const emailExists = await firebase
      .firestore()
      .collection("consumer")
      .where("phone", "==", consumerData.phone)
      .get();

    if (emailExists.docs.length) {
      setWhereIsError("phone");
      setErrorMsg("Telefone já existe");
      return false;
    } else {
      return true;
    }
  };

  const signUpUser = (): void => {
    setErrorMsg(null);
    setWhereIsError(null);
    if (consumerData.phone) {
      if (checkError()) {
        if (checkDataNascimento()) {
          if (checkPasswordLength()) {
            checkIfPhoneExists().then((response) => {
              if (response) {
                setIsLoading(true);
                authWithPhone();
              }
            });
          }
        }
      }
    } else if (checkError()) {
      if (checkDataNascimento()) {
        if (checkPasswordLength()) {
          checkIfPhoneExists().then((response) => {
            if (response) {
              setIsLoading(true);
              authWithPhone();
            }
          });
        }
      }
    }
  };

  const checkPasswordLength = () => {
    if (consumerData.password.length >= 6) {
      return true;
    } else {
      setWhereIsError("password");
      setErrorMsg("Senha muito curta");
      return false;
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
      {showModalSucess && (
        <SucessModal dataUser={{ ...consumerData, password: "" }} />
      )}
      {showModalCode && (
        <ModalSecretCode
          consumerData={consumerData}
          confirmationResult={confirmationResult}
          toggleModalCode={toggleModalCode}
          toggleModalSucess={toggleModalSucess}
        />
      )}

      <DivGridForm>
        <FormGroupGrand>
          <FormGroup isEmpty={errorIsOn === "phone"}>
            <input
              type="text"
              name="phone"
              id="phone"
              onChange={handleChange}
              placeholder="Telefone  (Ex: +244999999999)"
              maxLength={15}
              value={consumerData.phone}
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
              value={consumerData.dataNascimento}
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

        {errorIsOn === "form" && (
          <ErrorMessage className="error_name_ erroForm_h">
            {errorMsg}
          </ErrorMessage>
        )}

        {isLoading && (
          <LoadingAnimation>
            <SpinnerIcon />
          </LoadingAnimation>
        )}

        <ButtonSignUp
          id="sign-in-button"
          onClick={signUpUser}
          disabled={isLoading}
        >
          Continuar
        </ButtonSignUp>
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
