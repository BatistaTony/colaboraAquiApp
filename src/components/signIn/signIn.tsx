import { useState } from "react";
import ButtonBack from "../signUp/buttonBack";
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
} from "../signUp/signUpStyle";
import {
  IllustrationObjectSignIn,
  ModalSignIn,
  OverlaySignIn,
} from "./signInStyle";

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
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [errorIsOn, setWhereIsError] = useState<string | null>(null);

  const handleChange = (event: any) => {
    setConsumerData({
      ...consumerData,
      [event.target.name]: event.target.value,
    });
  };

  const signInUser = () => {};

  return (
    <OverlaySignIn>
      <IllustrationObjectSignIn />
      <ModalSignIn>
        <DivForm>
          <Title>
            Começa agora no <span>Colabora</span>
          </Title>
          <TextForm>A voz fo consumidor é a mais importante.</TextForm>
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

            <FormGroup className="FormGroup" isEmpty={errorIsOn === "password"}>
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

            <p className="textForgetPassword">Esqueci a senha </p>

            <ButtonSignUp className="FormGroup" onClick={signInUser}>
              Entrar
            </ButtonSignUp>

            <QuestionSignUp className="FormGroup">
              Ainda não tem uma conta ?<span>Registar-se</span>
            </QuestionSignUp>

            <ButtonBack classNames="mobileBtn" />
          </DivGridForm>
        </DivForm>
        <ModalIllustration img={"/images/illust.png"}>
          <ButtonBack classNames={"btnBackSign"} />
        </ModalIllustration>
      </ModalSignIn>
    </OverlaySignIn>
  );
}
