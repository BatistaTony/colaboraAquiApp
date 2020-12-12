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
} from "../signUp/signUpStyle";
import {
  IllustrationObjectSignIn,
  ModalSignIn,
  OverlaySignIn,
} from "./signInStyle";
import Route from "next/router";
import Link from "next/link";
import firebase from "./../../../Firebase";

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
  const firebaseAuth = firebase.auth();

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

  const signInUser = () => {
    if (!checkError()) {
      if (checkPasswordLength()) {
        const email = `${consumerData.phone}@colabora.com`;

        firebaseAuth
          .signInWithEmailAndPassword(email, consumerData.password)
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
            console.log(email);
          });
        // Route.push("/companies");
      }
    }
  };

  const backToHome = () => {
    Route.push("/");
  };

  console.log(firebaseAuth.currentUser);

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
              Esqueci a senha{" "}
            </p>

            <ButtonSignUp className="FormGroup btnLOgin" onClick={signInUser}>
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
