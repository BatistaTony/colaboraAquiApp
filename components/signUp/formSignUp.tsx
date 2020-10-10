import { useEffect, useState } from "react";
import {
  ButtonSignUp,
  DivGridForm,
  FormGroup,
  FormSelect,
  InputIcon,
  QuestionSignUp,
  SelectList,
} from "./signUpStyle";
import { CSSTransition } from "react-transition-group";
import { IConsumer } from "../../types";

const initialState: IConsumer = {
  userName: "",
  county: "",
  ageRange: "",
  password: "",
  province: "",
};

export default function FormSignUp() {
  const [consumerData, setConsumerData] = useState<IConsumer>(initialState);

  const [showCounty, setShowCounty] = useState<boolean>(false);
  const [showAgeRanges, setShowAgeRanges] = useState<boolean>(false);

  const [ageRanges, setAgeRange] = useState<string[]>([
    "15 a 16",
    "17 a 25",
    "30 a 40",
  ]);
  const [counties, setCounties] = useState<string[]>([
    "Luanda",
    "Maianga",
    "Cazenga",
    "Bengo",
    "KIlamaba",
    "Cacuaco",
    "Benguela",
    "Viana",
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const showSelectList = (property: string) => {
    if (property === "ages") {
      setShowAgeRanges(!showAgeRanges);
      setShowCounty(false);
    } else if (property === "county") {
      setShowCounty(!showCounty);
      setShowAgeRanges(false);
    }
  };

  const handleChange = (event: any) => {
    setConsumerData({
      ...consumerData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChooseSelect = (property: string, value: string) => {
    setConsumerData({
      ...consumerData,
      [property]: value,
    });

    setShowCounty(false);
    setShowAgeRanges(false);
  };

  useEffect(() => {
    document.addEventListener("click", HideOpenedDiv, true);

    function HideOpenedDiv(event) {
      if (event.target.className !== "customSelect") {
        setShowCounty(false);
        setShowAgeRanges(false);
      }
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <DivGridForm>
        <FormGroup>
          <input
            type="text"
            name="userName"
            id="userName"
            onChange={handleChange}
            placeholder="Nome do utilizador"
          />
        </FormGroup>

        <FormGroup>
          <input
            type="text"
            name="province"
            id="province"
            onChange={handleChange}
            value={consumerData.province}
            placeholder="Provincia"
          />
        </FormGroup>

        <FormSelect>
          <input
            type="text"
            name="county"
            id="county"
            placeholder="Municipio"
            defaultValue={consumerData.county}
            onClick={() => showSelectList("county")}
            className="customSelect"
          />
          <InputIcon
            className="customSelect"
            onClick={() => showSelectList("county")}
          >
            <img
              className="customSelect"
              id="county"
              src="/images/icons8-eye.png"
              alt=""
            />
          </InputIcon>

          <CSSTransition
            unmountOnExit
            addEndListener={() => {}}
            timout={200}
            in={showCounty}
            classNames="my-node"
          >
            <SelectList length={counties.length}>
              {counties.map((value, index) => (
                <li
                  onClick={() => handleChooseSelect("county", value)}
                  key={index}
                >
                  {value}
                </li>
              ))}
            </SelectList>
          </CSSTransition>
        </FormSelect>

        <FormSelect>
          <input
            type="text"
            name="ageRange"
            id="ageRange"
            placeholder="Faixa etária"
            defaultValue={
              consumerData.ageRange ? consumerData.ageRange + " anos" : null
            }
            onClick={() => showSelectList("ages")}
            className="customSelect"
          />
          <InputIcon
            className="customSelect"
            onClick={() => showSelectList("ages")}
          >
            <img id="ageRange" src="/images/icons8-eye.png" alt="" />
          </InputIcon>

          <CSSTransition
            unmountOnExit
            addEndListener={() => {}}
            timout={200}
            in={showAgeRanges}
            classNames="my-node"
          >
            <SelectList length={ageRanges.length}>
              {ageRanges.map((value, index) => (
                <li
                  onClick={() => handleChooseSelect("ageRange", value)}
                  key={index}
                >
                  {value + " anos"}
                </li>
              ))}
            </SelectList>
          </CSSTransition>
        </FormSelect>

        <FormGroup>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            placeholder="Senha"
          />
          <InputIcon>
            <img src="/images/icons8-eye.png" alt="" />
          </InputIcon>
        </FormGroup>

        <QuestionSignUp>
          Já tens uma conta ? clique aqui para <span>entrar</span>
        </QuestionSignUp>

        <ButtonSignUp>Continuar</ButtonSignUp>
      </DivGridForm>
    </form>
  );
}
