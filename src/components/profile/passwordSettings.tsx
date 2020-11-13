import InputPassword from "../signUp/inputPassword";
import {
  DivOfFormGroup,
  FormDataInfo,
  FormGroupUserData,
  OnlinePresence,
  DivCheckBoxProfile,
  SimpleTextForm,
  DivBtnSaveData,
  BtnSaveData,
} from "./profileStyle";

export default function PasswordSettings() {
  const handleChange = (event: any) => {};

  return (
    <FormDataInfo>
      <DivOfFormGroup data-type="select">
        <label htmlFor="currentPassword">Senha actual</label>
        <InputPassword
          errorIsOn={""}
          errorMsg={""}
          id="currentPassword"
          handleChange={() => handleChange}
        />
        <SimpleTextForm className="simple_text">
          {"Apenas para assegurar o teu perfil"}
        </SimpleTextForm>
      </DivOfFormGroup>

      <DivOfFormGroup data-type="select">
        <label htmlFor="newPassword">Nova senha</label>
        <InputPassword
          errorIsOn={""}
          errorMsg={""}
          id="newPassword"
          handleChange={() => handleChange}
        />
        <SimpleTextForm className="simple_text">
          {"Apenas para assegurar o teu perfil"}
        </SimpleTextForm>
      </DivOfFormGroup>

      <DivOfFormGroup data-type="select">
        <label htmlFor="confirmPassword">Confirmar senha</label>
        <InputPassword
          errorIsOn={""}
          errorMsg={""}
          id="confirmPassword"
          handleChange={() => handleChange}
        />
        <SimpleTextForm className="simple_text">
          {"Apenas para assegurar o teu perfil"}
        </SimpleTextForm>
      </DivOfFormGroup>

      <DivBtnSaveData>
        <BtnSaveData>Salvar alterações</BtnSaveData>
      </DivBtnSaveData>
    </FormDataInfo>
  );
}
