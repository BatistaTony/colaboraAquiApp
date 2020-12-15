import { useEffect, useState } from "react";
import { IConsumer } from "../../../types";
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
import firebase from "./../../../Firebase";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { registerConsumer } from "../../store/actions/consumer";
import InputPassword from "../signUp/inputPassword";

const initialState: IConsumer = {
  county: "",
  province: "",
  dataNascimento: 0,
  email: "",
  phone: "",
  fullName: "",
  isKeepAnonymous: true,
  userName: "",
  password: "",
};

export default function InformationData() {
  const [profileData, setProfileData] = useState<IConsumer>(initialState);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [errorIsOn, setWhereIsError] = useState<string | null>(null);
  const [userNameAccept, setUserNameAccept] = useState<boolean | null>(true);
  const provincesAngola = provinces.map((value) => value.state);
  const [counties, setCounties] = useState<Array<string> | null>([]);
  const [showPopUp, setShwoPopUp] = useState<boolean>(false);
  const [popMsg, setPopUpMsg] = useState<string>(
    "Perfil actualizado com sucesso"
  );
  const [popUpIsError, setPopUpIsError] = useState<boolean>(false);
  const consumerState: IConsumer = useSelector((state) => state.Consumer);

  const firestore = firebase.firestore();
  const dispatch = useDispatch();

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
    document.documentElement.scrollTop = 0;

    setTimeout(() => {
      setShwoPopUp(false);
      setPopUpIsError(false);
      setPopUpMsg("Perfil actualizado com sucesso");
    }, 5000);
  };

  const checkIfPhoneExists = async () => {
    const emailExists = await firebase
      .firestore()
      .collection("consumer")
      .where("phone", "==", profileData.phone)
      .get();

    if (emailExists.docs.length) {
      const result = emailExists.docs.filter((doc) => {
        return doc.id !== profileData.userId;
      });

      if (result.length) {
        setWhereIsError("phone");
        setErrorMsg("Telefone já existe");
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  };

  const checkError = (): boolean => {
    const fieldsNotEmpty = {
      phone: profileData.phone,
      dataNascimento: profileData.dataNascimento,
      userName: profileData.userName,
      password: profileData.password,
    };

    const arrayConsumerData = Object.entries(fieldsNotEmpty).reverse();

    const emptyProperties = arrayConsumerData.filter((value, index) => {
      if (value[1] === "" || value[1] === 0) {
        setWhereIsError(value[0]);
        setErrorMsg("Preenche este campo");
      }

      return value[1] === "";
    });
    return emptyProperties.length <= 0;
  };

  const updatePhoneNumber = () => {
    if (profileData.phone) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          user.updateEmail(`${profileData.phone}@colabora.com`);
        }
      });
    }
  };

  const checkValidEmail = () => {
    if (profileData.email) {
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi;
      const result = regex.test(profileData.email.toLowerCase());
      if (result) {
        return true;
      } else {
        setWhereIsError("email");
        setErrorMsg("email invalido");
        return false;
      }
    } else {
      return true;
    }
  };

  const updateDataOnDb = () => {
    firestore
      .collection("consumer")
      .doc(consumerState.userId)
      .set({
        address: {
          province: profileData.province ? profileData.province : "",
          county: profileData.county ? profileData.county : "",
        },
        fullName: profileData.fullName ? profileData.fullName : "",
        isKeepAnonymous: profileData.isKeepAnonymous
          ? profileData.isKeepAnonymous
          : "",
        phone: profileData.phone,
        userName: profileData.userName,
        email: profileData.email ? profileData.email : "",
        dataNascimento: profileData.dataNascimento,
      })
      .then((result) => {
        dispatch(registerConsumer(profileData));

        showPopUpTrick();
      })
      .catch((err) => {});
  };

  const isSignedUser = async () => {
    if (profileData.password) {
      return await firebase
        .auth()
        .signInWithEmailAndPassword(
          `${consumerState.phone}@colabora.com`,
          profileData.password
        )
        .then((result) => {
          let email = `${profileData.phone}@colabora.com`;
          if (email !== firebase.auth().currentUser.email) {
            updatePhoneNumber();
          }
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
              "Acesso bloqueado por varias tentativas, por favor tente mas tarde"
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

  const saveData = (): void => {
    if (profileData.userName) {
      if (userNameAccept) {
        if (checkError()) {
          if (checkValidEmail()) {
            if (checkDataNascimento()) {
              checkIfPhoneExists().then((result) => {
                if (result) {
                  isSignedUser().then((result) => {
                    if (result) {
                      updateDataOnDb();
                      setProfileData({ ...profileData, password: "" });
                    }
                  });
                }
              });
            }
          }
        }
      }
    } else if (checkError()) {
      if (checkDataNascimento()) {
        if (checkValidEmail()) {
          checkIfPhoneExists().then((result) => {
            if (result) {
              isSignedUser().then((result) => {
                if (result) {
                  updateDataOnDb();
                  setProfileData({ ...profileData, password: "" });
                }
              });
            }
          });
        }
      }
    }
  };

  const setCountiesToSelect = (province: string) => {
    const result = provinces.filter((value) => value.state === province);
    setCounties(result[0].counties);
  };

  const getUSerInfo = () => {
    setProfileData({ ...consumerState, password: "" });
  };

  useEffect(() => {
    getUSerInfo();
  }, []);

  useEffect(() => {
    setCountiesToSelect(consumerState.province);
  }, [consumerState]);

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
      {showPopUp && <PopUpProfile isError={popUpIsError} msg={popMsg} />}
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

      <DivOfFormGroup>
        <label htmlFor="password">Senha</label>
        <InputPassword
          errorIsOn={errorIsOn}
          errorMsg={errorMsg}
          name="password"
          id="password"
          placeholder=" "
          value={profileData.password}
          handleChange={handleChange}
        />
        {errorIsOn !== "password" && (
          <SimpleTextForm className={"simple_text"}>
            Para salvar alterações do prefil
          </SimpleTextForm>
        )}
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
