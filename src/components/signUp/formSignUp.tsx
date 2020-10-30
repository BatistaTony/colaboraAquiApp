import {  useState } from "react";
import {
  ButtonSignUp,
  DivGridForm,
  ErrorMessage,
  FormGroup,
  QuestionSignUp,
  FormGroupGrand,
} from "./signUpStyle";
import { CSSTransition } from "react-transition-group";
import { IConsumer } from "../../../types";
import CustomSelect from "./select";
import SucessModal from "./sucessModal";
import InputPassword from "./inputPassword";
import Link from "next/link";
import { counties, provinces } from "./signUp.data";
import IconTextBox from "./iconNameTextbox";

const initialState: IConsumer = {
  userName: "",
  province: "",
  county: "",
  dataNascimento: "",
  password: "",
};

export default function FormSignUp() {
  const [consumerData, setConsumerData] = useState<IConsumer>(initialState);
  const [errorIsOn, setWhereIsError] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [showModalSucess, setShowModalSucess] = useState<boolean>(false);
  const [userNameAccept, setUserNameAccept] = useState<boolean | null>(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const checkUserName = (event: any) => {
    const nomes = ["tony", "batistatony", "JoaoTOny", "rayThon"];

    const result = nomes.filter((state) => state === event.target.value);

    if (result.length) {
      setWhereIsError("userName");
      setUserNameAccept(false);
      setErrorMsg("Este nome já existe, por favor tente outro");
    } else {
      setUserNameAccept(true);
    }

    if (event.target.value === "") {
      setUserNameAccept(null);
      setWhereIsError("");
      setErrorMsg("");
    }
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
    const arrayConsumerData = Object.entries(consumerData).reverse();

    const emptyProperties = arrayConsumerData.filter((value, index) => {
      if (value[1] === "") {
        setWhereIsError(value[0]);
        setErrorMsg("Preenche este campo");
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
        <SucessModal dataUser={consumerData} />
      </CSSTransition>

      <DivGridForm>
        <FormGroupGrand>
          <FormGroup
            isEmpty={errorIsOn === "userName"}
            nameAccept={userNameAccept}
            className={userNameAccept === false && "textbox_name"}
          >
            <input
              type="text"
              name="userName"
              id="userName"
              onKeyUp={checkUserName}
              onChange={handleChange}
              placeholder="Nome do utilizador"
            />
            {userNameAccept != null && (
              <div className="iconTextBox">
                <IconTextBox userAccept={userNameAccept} />
              </div>
            )}
          </FormGroup>
          {errorIsOn === "userName" && (
            <ErrorMessage className="error_name_">{errorMsg}</ErrorMessage>
          )}
        </FormGroupGrand>

        <CustomSelect
          defaultValueSelect={consumerData.province || "Província"}
          errorMsg={errorMsg}
          handleChange={(value) => handleChooseSelect("province", value)}
          values={provinces}
          isEmpty={errorIsOn === "province"}
        />

        <CustomSelect
          defaultValueSelect={consumerData.county || "Municipio"}
          errorMsg={errorMsg}
          handleChange={(value) => handleChooseSelect("county", value)}
          values={counties}
          isEmpty={errorIsOn === "county"}
        />

        <FormGroupGrand>
          <FormGroup isEmpty={errorIsOn === "dataNascimento"}>
            <input
              type="number"
              name="dataNascimento"
              id="dataNascimento"
              onChange={handleChange}
              placeholder="Ano de nascimento"
              max="2000"
              min="1700"
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
