import { useEffect, useState } from "react";
import { IProfile } from "../../../types";
import FormGroupProfile from "./FormGrouProfile";
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
import provinces from "./../../constants/provinces.json";
import CustomSelect from "../signUp/select";
import CustomCheckBox from "../rateCompany/checboxRate";
import PopUpProfile from "./popupProfile";

const initialState: IProfile = {
  county: "Cabinda",
  province: "Cabinda",
  dataNascimento: 1990,
  email: "andersonkennedydev@gmail.com",
  phone: "9412 345 679",
  fullName: "Anderson Augusto",
  isKeepAnonymous: false,
  userName: "AndersonKennedy",
};

export default function InformationData() {
  const [profileData, setProfileData] = useState<IProfile>(initialState);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [errorIsOn, setWhereIsError] = useState<string | null>(null);
  const [userNameAccept, setUserNameAccept] = useState<boolean | null>(true);
  const provincesAngola = provinces.map((value) => value.state);
  const [counties, setCounties] = useState<Array<string> | null>([]);
  const [showPopUp, setShwoPopUp] = useState<boolean>(false);

  const handleChange = (event: any) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });

    if (userNameAccept) {
      setWhereIsError(null);
      setErrorMsg(null);
    }
  };

  const checkDataNascimento = (): Boolean => {
    const dataN = Number(profileData.dataNascimento);

    if (dataN < 2018 && dataN > 1800) {
      return true;
    } else {
      setWhereIsError("dataNascimento");
      setErrorMsg("Apenas maior ou igual a 18 anos");
      return false;
    }
  };

  const checkUserName = (name: string) => {
    const nomes = ["tony", "batistatony", "JoaoTOny", "rayThon"];

    const result = nomes.filter((state) => state === name);

    if (result.length) {
      setWhereIsError("userName");
      setUserNameAccept(false);
      setErrorMsg("Este nome já existe, por favor tente outro");
    } else {
      setUserNameAccept(true);
      setErrorMsg("");
    }

    if (name === "") {
      setUserNameAccept(null);
      setWhereIsError("");
      setErrorMsg("");
    }
  };

  const handleChooseSelect = (property: string, value: string) => {
    if (property === "province") {
      setProfileData({
        ...profileData,
        [property]: value,
        county: "",
      });

      setCountiesToSelect(value);

      if (errorMsg === "Seleciona uma provincia") {
        setWhereIsError(null);
        setErrorMsg(null);
      }
    } else {
      setProfileData({
        ...profileData,
        [property]: value,
      });
    }

    if (userNameAccept) {
      setWhereIsError(null);
      setErrorMsg(null);
    }
  };

  const showPopUpTrick = async () => {
    setShwoPopUp(true);

    setTimeout(() => {
      setShwoPopUp(false);
    }, 4000);
  };

  const checkError = (): boolean => {
    const arrayConsumerData = Object.entries(profileData).reverse();

    const emptyProperties = arrayConsumerData.filter((value, index) => {
      if (value[1] === "" || value[1] === 0) {
        setWhereIsError(value[0]);
        setErrorMsg("Preenche este campo");
      }

      return value[1] === "";
    });

    return emptyProperties.length <= 0;
  };

  const saveData = (): void => {
    if (profileData.userName) {
      if (userNameAccept) {
        if (checkError()) {
          if (checkDataNascimento()) {
            showPopUpTrick();
          }
        }
      }
    } else if (checkError()) {
      if (checkDataNascimento()) {
        showPopUpTrick();
      }
    }
  };

  const setCountiesToSelect = (province: string) => {
    const result = provinces.filter((value) => value.state === province);
    setCounties(result[0].counties);
  };

  useEffect(() => {
    setCountiesToSelect(profileData.province);
  }, []);

  const checkIfGotCounties = () => {
    if (profileData.province === "") {
      setWhereIsError("province");
      setErrorMsg("Seleciona uma provincia");
    }
  };

  const isToBeAnonymous = () => {
    setProfileData({
      ...profileData,
      isKeepAnonymous: !profileData.isKeepAnonymous,
    });
  };

  return (
    <FormDataInfo>
      {showPopUp && <PopUpProfile msg="Perfil actualizado com sucesso" />}
      <FormGroupProfile
        onChange={handleChange}
        errorIsOn={errorIsOn}
        label="Nome completo"
        msg={
          errorIsOn === "fullName"
            ? errorMsg
            : "Esta informação é totalmente privada, apenas tu podes decidir mostrar ou não"
        }
        name="fullName"
        value={profileData.fullName}
      />

      <FormGroupProfile
        onChange={handleChange}
        errorIsOn={errorIsOn}
        label="Nome de usuario"
        msg={
          errorIsOn === "userName"
            ? errorMsg
            : "Este é o nome que os outros usuarios verão"
        }
        name="userName"
        value={profileData.userName}
        onKeyUp={(event: any) => checkUserName(event.target.value)}
      />

      <FormGroupProfile
        onChange={handleChange}
        errorIsOn={errorIsOn}
        label="Data de nascimento"
        msg={
          errorIsOn === "dataNascimento"
            ? errorMsg
            : "Apenas para assegurar o teu perfil"
        }
        name="dataNascimento"
        value={profileData.dataNascimento}
        type="number"
      />

      <FormGroupProfile
        onChange={handleChange}
        errorIsOn={errorIsOn}
        label="Telefone"
        msg={
          errorIsOn === "phone"
            ? errorMsg
            : "Para o login e recuperação da conta"
        }
        name="phone"
        value={profileData.phone}
      />

      <FormGroupProfile
        onChange={handleChange}
        errorIsOn={errorIsOn}
        label="Email"
        msg={errorIsOn === "email" ? errorMsg : "Para receber notificações"}
        name="email"
        value={profileData.email}
      />

      <DivOfFormGroup data-type="select">
        <label htmlFor="">Província</label>
        <CustomSelect
          defaultValueSelect={profileData.province}
          errorMsg={""}
          handleChange={(value: string) =>
            handleChooseSelect("province", value)
          }
          values={provincesAngola}
          isEmpty={errorIsOn === "province"}
        />
        <SimpleTextForm
          className={errorIsOn === "province" ? "txtError" : "simple_text"}
        >
          {errorIsOn === "province"
            ? errorMsg
            : "Apenas para assegurar o teu perfil"}
        </SimpleTextForm>
      </DivOfFormGroup>

      <DivOfFormGroup data-type="select">
        <label htmlFor="">Municipio</label>
        <CustomSelect
          defaultValueSelect={profileData.county}
          errorMsg={""}
          handleChange={(value: string) => handleChooseSelect("county", value)}
          values={counties}
          disabled={profileData.province === ""}
          isEmpty={errorIsOn === "county"}
          onClick={checkIfGotCounties}
        />
        <SimpleTextForm
          className={errorIsOn === "county" ? "txtError" : "simple_text"}
        >
          {errorIsOn === "county"
            ? errorMsg
            : "Apenas para assegurar o teu perfil"}
        </SimpleTextForm>
      </DivOfFormGroup>

      <OnlinePresence>
        <h1 className="presentTitle">Presença Online</h1>

        <DivCheckBoxProfile checked={profileData.isKeepAnonymous}>
          <CustomCheckBox
            onClick={isToBeAnonymous}
            isChecked={profileData.isKeepAnonymous}
          />

          <p className="label_checckboc" onClick={isToBeAnonymous}>
            Manter avalições anonima:
          </p>
        </DivCheckBoxProfile>

        <SimpleTextForm className="simple_text">
          O teun nome estará oculto nas avaliações, outros usuarios verão apenas
          o teu username{" "}
        </SimpleTextForm>
      </OnlinePresence>

      <DivBtnSaveData>
        <BtnSaveData onClick={saveData}>Salvar alterações</BtnSaveData>
      </DivBtnSaveData>
    </FormDataInfo>
  );
}
