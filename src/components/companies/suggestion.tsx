import {
  FormGroup,
  DivForm,
  TextForm,
  ErrorMessage,
  Title,
  DivGridForm,
} from "../../components/signUp/signUpStyle";

import { useState } from "react";

import {
  OverlaySuggestion,
  ModalSuggestion,
  ButtonSuggestForm,
  TextArea,
  ButtonCloseSuggestion,
} from "./companiesStyle";
import { translateProperty } from "../utils";
import CustomSelect from "../signUp/select";

interface ISuggestion {
  companyName: string;
  companyStatus: string;
  suggestionToCompany: string;
}

const initialState = {
  companyName: "",
  companyStatus: "",
  suggestionToCompany: "",
};

interface IProps {
  toggleSuggestion: any;
}

export default function Suggestion({ toggleSuggestion }: IProps) {
  const [suggestionData, setSuggestionData] = useState<ISuggestion>(
    initialState
  );

  const [status, setStatus] = useState<string[]>(["Publica", "Privada"]);

  const [errorIsOn, setWhereIsError] = useState<string | null>(null);

  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleChange = (event: any) => {
    setSuggestionData({
      ...suggestionData,
      [event.target.name]: event.target.value,
    });
    setWhereIsError(null);
    setErrorMsg(null);
  };

  const handleChooseSelect = (property: string, value: string) => {
    setSuggestionData({
      ...suggestionData,
      [property]: value,
    });
    setWhereIsError(null);
    setErrorMsg(null);
  };

  const checkError = (): boolean => {
    if (suggestionData.companyName === "") {
      setErrorMsg("Nome da empresa é obrigatório ");
      setWhereIsError("companyName");
      return true;
    } else if (suggestionData.companyStatus === "") {
      setErrorMsg("EStatuto da empresa é obrigatório ");
      setWhereIsError("status");

      return true;
    } else if (suggestionData.suggestionToCompany === "") {
      setErrorMsg("Descrição da sugestão é obrigatório ");
      setWhereIsError("suggestionToCompany");

      return true;
    } else {
      return false;
    }
  };

  const sendSuggestion = () => {
    if (!checkError()) {
      alert("suggested");
    }
  };

  return (
    <OverlaySuggestion>
      <div className="w_d_itr_">
        <ModalSuggestion
          initial={{ opacity: 0, y: -1000 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <ButtonCloseSuggestion onClick={toggleSuggestion}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g data-name="Layer 2">
                <g data-name="close">
                  <rect
                    width="24"
                    height="24"
                    transform="rotate(180 12 12)"
                    opacity="0"
                  />
                  <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
                </g>
              </g>
            </svg>
          </ButtonCloseSuggestion>
          <DivForm>
            <Title>Não encontrou o que procurava ?</Title>
            <TextForm className="text_simple">
              Sugira uma empresa e nós iremos adicionar dentro em breve
            </TextForm>

            <ErrorMessage>{errorMsg}</ErrorMessage>

            <DivGridForm className="grid-form-suggest">
              <FormGroup
                className="FormGroup"
                isEmpty={errorIsOn === "companyName"}
              >
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  onChange={handleChange}
                  value={suggestionData.companyName}
                  placeholder="Nome da empresa"
                />
              </FormGroup>

              <CustomSelect
                defaultValueSelect={suggestionData.companyStatus || "Estatuto"}
                handleChange={(value) =>
                  handleChooseSelect("companyStatus", value)
                }
                values={status}
                isEmpty={errorIsOn === "status"}
              />

              <TextArea isEmpty={errorIsOn === "suggestionToCompany"}>
                <textarea
                  placeholder="Breve descrição"
                  name="suggestionToCompany"
                  id="suggestionToCompany"
                  onChange={handleChange}
                ></textarea>
              </TextArea>

              <ButtonSuggestForm className="FormGroup" onClick={sendSuggestion}>
                Enviar sugestão
              </ButtonSuggestForm>
            </DivGridForm>
          </DivForm>
        </ModalSuggestion>
      </div>
    </OverlaySuggestion>
  );
}
