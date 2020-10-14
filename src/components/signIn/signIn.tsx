import { useState } from "react";
import ButtonBack from "../signUp/buttonBack";
import InputPassword from "../signUp/inputPassword";
import {
  DivForm,
  ModalIllustration,
  Title,
  TextForm,
  DivGridForm,
  FormGroup,
  InputIcon,
  QuestionSignUp,
  ButtonSignUp,
  ErrorMessage,
} from "../signUp/signUpStyle";
import { translateProperty } from "../utils";
import {
  IllustrationObjectSignIn,
  ModalSignIn,
  OverlaySignIn,
} from "./signInStyle";
import Route from "next/router";
import Link from "next/link";

interface ISign {
  userName: string;
  password: string;
}

const initialState: ISign = {
  userName: "",
  password: "",
};

export default function SignInConsumer() {
  const [consumerData, setConsumerData] = useState<ISign>(initialState);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [errorIsOn, setWhereIsError] = useState<string | null>(null);

  const handleChange = (event: any) => {
    setConsumerData({
      ...consumerData,
      [event.target.name]: event.target.value,
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

  const signInUser = () => {
    if (!checkError()) {
      Route.push("/companies");
    }
  };

  const backToHome = () => {
    Route.push("/");
  };

  return (
    <OverlaySignIn>
      <IllustrationObjectSignIn />
      <ModalSignIn>
        <DivForm>
          <Title>
            Começa agora no <span>Colabora</span>
          </Title>
          <TextForm>A voz fo consumidor é a mais importante.</TextForm>

          <ErrorMessage>{errorMsg}</ErrorMessage>

          <DivGridForm className="grid-form-sign">
            <FormGroup className="FormGroup" isEmpty={errorIsOn === "userName"}>
              <input
                type="text"
                name="userName"
                id="userName"
                onChange={handleChange}
                value={consumerData.userName}
                placeholder="Nome do utilizador"
              />
            </FormGroup>

            <InputPassword
              classNames={"FormGroup"}
              errorIsOn={errorIsOn}
              handleChange={handleChange}
            />

            <p className="textForgetPassword">Esqueci a senha </p>

            <ButtonSignUp className="FormGroup" onClick={signInUser}>
              Entrar
            </ButtonSignUp>

            <QuestionSignUp className="FormGroup">
              Ainda não tem uma conta ?{" "}
              <Link href="/signup">
                <span>Registar-se</span>
              </Link>
            </QuestionSignUp>

            <ButtonBack classNames="mobileBtn" />
          </DivGridForm>
        </DivForm>
        <ModalIllustration
          className="illustration1_"
          img={"/images/illust.png"}
        >
          <ButtonBack onClick={backToHome} classNames={"btnBackSign"} />
        </ModalIllustration>
      </ModalSignIn>
    </OverlaySignIn>
  );
}
