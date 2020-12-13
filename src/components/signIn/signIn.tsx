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
  QuestionSignUp,
  ButtonSignUp,
  ErrorMessage,
  FormGroupGrand,
  LoadingAnimation,
} from "../signUp/signUpStyle";
import {
  IllustrationObjectSignIn,
  ModalSignIn,
  OverlaySignIn,
} from "./signInStyle";
import Route from "next/router";
import Link from "next/link";
import firebase from "./../../../Firebase";
import SpinnerIcon from "../spinner/spinnerIcon";
import { useDispatch } from "react-redux";
import { registerConsumer } from "../../store/actions/consumer";

interface ISign {
  phone: string;
  password: string;
}

const initialState: ISign = {
  phone: "",
  password: "",
};

export default function SignInConsumer() {
  const [consumerData, setConsumerData] = useState<ISign>(initialState);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [errorIsOn, setWhereIsError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const firebaseAuth = firebase.auth();

  const dispatch = useDispatch();

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
        setErrorMsg(`Preenche este campo `);
      }

      return value[1] === "";
    });

    return emptyProperties.length > 0;
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

  const getUserData = (userId: string) => {
    firebase
      .firestore()
      .collection("consumer")
      .doc(userId)
      .get()
      .then((response) => {
        dispatch(registerConsumer({ userId: userId, ...response.data() }));
        Route.push("/companies");
      });
  };

  const signInUser = () => {
    setIsLoading(true);
    setErrorMsg(null);
    setWhereIsError(null);
    if (!checkError()) {
      if (checkPasswordLength()) {
        const email = `${consumerData.phone}@colabora.com`;

        firebaseAuth
          .signInWithEmailAndPassword(email, consumerData.password)
          .then((result) => {
            console.log(result.user.uid);
            getUserData(result.user.uid);
            setIsLoading(false);
          })
          .catch((error) => {
            if (error.code === "auth/user-not-found") {
              setWhereIsError("form");
              setErrorMsg("Utilizador nao existe");
            } else if (error.code === "auth/too-many-requests") {
              setWhereIsError("form");
              setErrorMsg(
                "Acesso bloqueado por varias tentativas, por favor tente mas tarde"
              );
            } else {
              setWhereIsError("form");
              setErrorMsg("Problema com a internet, tente novamente");
            }
          });
      }
    }
  };

  const backToHome = () => {
    Route.push("/");
  };

  return (
    <OverlaySignIn>
      <IllustrationObjectSignIn />
      <ModalSignIn
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ y: 300, opacity: 0 }}
      >
        <DivForm className="divForm_sign_p">
          <div className="divBtnBackT">
            <ButtonBack classNames="mobileBtn" onChange={backToHome} />
          </div>

          <Title>Comece a avaliar agora.</Title>
          <TextForm>A voz fo consumidor é a mais importante.</TextForm>

          <DivGridForm className="grid-form-sign">
            <FormGroupGrand className="frm_gr_gr">
              <FormGroup
                className="FormGroup"
                isEmpty={errorIsOn === "userName"}
              >
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  onChange={handleChange}
                  value={consumerData.phone}
                  placeholder="Telefone"
                />
              </FormGroup>
              {errorIsOn === "userName" && (
                <ErrorMessage className="error_name_">{errorMsg}</ErrorMessage>
              )}
            </FormGroupGrand>

            <InputPassword
              classNames={"FormGroup formPassword"}
              errorIsOn={errorIsOn}
              errorMsg={errorMsg}
              handleChange={handleChange}
              value={consumerData.password}
            />

            <p
              className={`textForgetPassword ${
                errorIsOn === "password" && "textFor_fhd_rn"
              } `}
            >
              Esqueci a senha
            </p>

            {errorIsOn === "form" && (
              <ErrorMessage className="error_name_ erroForm_h">
                {errorMsg}
              </ErrorMessage>
            )}

            {isLoading && (
              <LoadingAnimation signIn={true}>
                <SpinnerIcon />
              </LoadingAnimation>
            )}

            <ButtonSignUp
              disabled={isLoading}
              className="FormGroup btnLOgin"
              onClick={signInUser}
            >
              Entrar
            </ButtonSignUp>

            <QuestionSignUp className="FormGroup">
              Ainda não tem uma conta ?
              <Link href="/companies">
                <span>Registar-se</span>
              </Link>
            </QuestionSignUp>
          </DivGridForm>
        </DivForm>
        <ModalIllustration
          className="illustration1_"
          img={"/images/illust.png"}
        >
          <ButtonBack onChange={backToHome} classNames={"btnBackSign"} />
        </ModalIllustration>
      </ModalSignIn>
    </OverlaySignIn>
  );
}
