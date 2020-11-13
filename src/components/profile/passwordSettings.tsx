import { useState } from "react";
import InputPassword from "../signUp/inputPassword";
import {
  DivOfFormGroup,
  FormDataInfo,
  SimpleTextForm,
  DivBtnSaveData,
  BtnSaveData,
} from "./profileStyle";

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

  const handleChange = (event: any) => {
    setDataPassword({
      ...passwordData,
      [event.target.name]: event.target.value,
    });

    setWhereIsError(null);
    setErrorMsg(null);
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

  const saveData = () => {
    if (checkError()) {
      if (isPasswordEqual()) {
        alert("data saved !");
        setDataPassword(initialState);
      }
    }
  };

  return (
    <FormDataInfo>
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
