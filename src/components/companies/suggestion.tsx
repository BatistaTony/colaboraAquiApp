import {
  FormGroup,
  InputIcon,
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

export default function Suggestion() {
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
    return false;
  };

  const suggest = () => {};

  return (
    <OverlaySuggestion>
      <ModalSuggestion>
        <DivForm>
          <Title>Não encontrou o que procurava ?</Title>
          <TextForm className="text_simple">
            Sugira uma empresa e nós iremos adicionar dentro em breve
          </TextForm>

          <ErrorMessage>{errorMsg}</ErrorMessage>

          <DivGridForm className="grid-form-suggest">
            <FormGroup className="FormGroup" isEmpty={errorIsOn === "userName"}>
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
              ></textarea>
            </TextArea>

            <ButtonSuggestForm className="FormGroup" onClick={suggest}>
              Sugerir
            </ButtonSuggestForm>
          </DivGridForm>
        </DivForm>
      </ModalSuggestion>
    </OverlaySuggestion>
  );
}
