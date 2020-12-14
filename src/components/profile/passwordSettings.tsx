import { useState } from "react";
import InputPassword from "../signUp/inputPassword";
import PopUpProfile from "./popupProfile";
import {
  DivOfFormGroup,
  FormDataInfo,
  SimpleTextForm,
  DivBtnSaveData,
  BtnSaveData,
} from "./profileStyle";
import firebase from "./../../../Firebase";
import { useSelector } from "react-redux";
import { IConsumer } from "../../../types";

interface IPasswordSettings {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const initialState: IPasswordSettings = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export default function PasswordSettings() {
  const [passwordData, setDataPassword] = useState<IPasswordSettings>(
    initialState
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [errorIsOn, setWhereIsError] = useState<string | null>(null);
  const [showPopUp, setShwoPopUp] = useState<boolean>(false);
  const [popMsg, setPopUpMsg] = useState<string>(
    "Senha actualizada com sucesso"
  );
  const [popUpIsError, setPopUpIsError] = useState<boolean>(false);

  const consumerState: IConsumer = useSelector((state) => state.Consumer);

  const handleChange = (event: any) => {
    setDataPassword({
      ...passwordData,
      [event.target.name]: event.target.value,
    });

    setWhereIsError(null);
    setErrorMsg(null);
  };

  const showPopUpTrick = async () => {
    setShwoPopUp(true);
    document.documentElement.scrollTop = 0;

    setTimeout(() => {
      setShwoPopUp(false);
      setPopUpIsError(false);
      setPopUpMsg("Senha actualizada com sucesso");
    }, 5000);
  };

  const checkError = (): boolean => {
    const arrayConsumerData = Object.entries(passwordData).reverse();

    const emptyProperties = arrayConsumerData.filter((value, index) => {
      if (value[1] === "" || value[1] === 0) {
        setWhereIsError(value[0]);
        setErrorMsg("Preenche este campo");
      }

      return value[1] === "";
    });

    return emptyProperties.length <= 0;
  };

  const isPasswordEqual = () => {
    if (passwordData.newPassword === passwordData.confirmPassword) {
      return true;
    } else {
      setWhereIsError("confirmPassword");
      setErrorMsg("As senhas não condizem");
      return false;
    }
  };

  const updatePassword = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user
          .updatePassword(passwordData.newPassword)
          .then(() => {
            showPopUpTrick();
            setDataPassword(initialState);
          })
          .catch((error) => {
            if (error.code === "auth/weak-password") {
              setWhereIsError("newPassword");
              setErrorMsg("Senha muito curta");
            } else {
              setPopUpIsError(true);
              showPopUpTrick();
              setPopUpMsg("Erro de conexao, verifique a internet");
            }
          });
      }
    });
  };

  const isSignedUser = async () => {
    if (passwordData.currentPassword) {
      return await firebase
        .auth()
        .signInWithEmailAndPassword(
          `${consumerState.phone}@colabora.com`,
          passwordData.currentPassword
        )
        .then((result) => {
          return true;
        })
        .catch((error) => {
          if (error.code === "auth/user-not-found") {
            setWhereIsError("password");
            setErrorMsg("Senha errada");
            return false;
          } else if (error.code === "auth/too-many-requests") {
            setPopUpIsError(true);
            showPopUpTrick();
            setPopUpMsg(
              "Acesso a esta conta bloqueado por varias tentativas, por favor tente mas tarde !"
            );
            return false;
          } else {
            setPopUpIsError(true);
            showPopUpTrick();
            setPopUpMsg("Erro de conexão, verifique a internet");
            return false;
          }
        });
    }
  };

  const saveData = () => {
    if (checkError()) {
      if (isPasswordEqual()) {
        isSignedUser().then((result) => {
          if (result) {
            updatePassword();
          }
        });
      }
    }
  };

  return (
    <FormDataInfo>
      {showPopUp && <PopUpProfile isError={popUpIsError} msg={popMsg} />}
      <DivOfFormGroup data-type="select">
        <label htmlFor="currentPassword">Senha actual</label>
        <InputPassword
          errorIsOn={errorIsOn}
          errorMsg={errorMsg}
          name="currentPassword"
          id="currentPassword"
          placeholder=" "
          value={passwordData.currentPassword}
          classNames="currentPassword"
          handleChange={handleChange}
        />
        <SimpleTextForm
          className={
            errorIsOn === "currentPassword" ? "txtError" : "simple_text"
          }
        >
          {errorMsg ? errorMsg : "."}
        </SimpleTextForm>
      </DivOfFormGroup>

      <DivOfFormGroup
        data-type="select"
        data-name={errorIsOn === "newPassword" ? "fieldPassowrd" : ""}
      >
        <label htmlFor="newPassword">Nova senha</label>
        <InputPassword
          errorIsOn={errorIsOn}
          errorMsg={errorMsg}
          name="newPassword"
          id="newPassword"
          value={passwordData.newPassword}
          placeholder=" "
          handleChange={handleChange}
        />
        <SimpleTextForm
          className={errorIsOn === "newPassword" ? "txtError" : "simple_text"}
        >
          {errorMsg ? errorMsg : "."}
        </SimpleTextForm>
      </DivOfFormGroup>

      <DivOfFormGroup data-type="select">
        <label htmlFor="confirmPassword">Confirmar senha</label>
        <InputPassword
          errorIsOn={errorIsOn}
          errorMsg={errorMsg}
          name="confirmPassword"
          id="confirmPassword"
          value={passwordData.confirmPassword}
          placeholder=" "
          handleChange={handleChange}
        />
        <SimpleTextForm
          className={
            errorIsOn === "confirmPassword" ? "txtError" : "simple_text"
          }
        >
          {errorMsg ? errorMsg : "."}
        </SimpleTextForm>
      </DivOfFormGroup>

      <DivBtnSaveData>
        <BtnSaveData onClick={saveData}>Salvar alterações</BtnSaveData>
      </DivBtnSaveData>
    </FormDataInfo>
  );
}
