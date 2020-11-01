import {
  FormGroup,
  DivForm,
  TextForm,
  ErrorMessage,
  Title,
  DivGridForm,
  FormGroupGrand,
} from "../../components/signUp/signUpStyle";

import { useState } from "react";

import {
  OverlaySuggestion,
  ModalSuggestion,
  ButtonSuggestForm,
  TextArea,
  ButtonCloseSuggestion,
} from "./companiesStyle";
import CustomSelect from "../signUp/select";
import IconClose from "./closeIcone";

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

  const closeSuggestion = () => {
    toggleSuggestion();
    setSuggestionData(initialState);
    setErrorMsg("");
    setWhereIsError("");
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
      toggleSuggestion();
    }
  };

  return (
    <OverlaySuggestion>
      <div className="w_d_itr_">
        <ModalSuggestion
          initial={{ opacity: 0, y: -1000 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -1000 }}
        >
          <ButtonCloseSuggestion onClick={closeSuggestion}>
            <IconClose />
          </ButtonCloseSuggestion>
          <DivForm className="div_form_sugs_cmp_et">
            <Title className="title_sug_mb">
              Não encontrou o que procurava ?
            </Title>
            <TextForm className="text_simple">
              Sugira uma empresa e nós iremos adicionar dentro em breve
            </TextForm>

            <DivGridForm className="grid-form-suggest">
              <FormGroupGrand className="frm_gr_name_fgj_">
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
                {errorIsOn === "companyName" && (
                  <ErrorMessage>{errorMsg}</ErrorMessage>
                )}
              </FormGroupGrand>

              <CustomSelect
                errorMsg={errorMsg}
                defaultValueSelect={suggestionData.companyStatus || "Estatuto"}
                handleChange={(value) =>
                  handleChooseSelect("companyStatus", value)
                }
                values={status}
                classNames="select_suggest_cmp"
                isEmpty={errorIsOn === "status"}
              />

              <FormGroupGrand className="form_gr_camp_txt">
                <TextArea
                  className="form_df_gty_sdfgt_gf"
                  isEmpty={errorIsOn === "suggestionToCompany"}
                >
                  <textarea
                    placeholder="Breve descrição"
                    name="suggestionToCompany"
                    id="suggestionToCompany"
                    onChange={handleChange}
                  ></textarea>
                </TextArea>
                {errorIsOn === "suggestionToCompany" && (
                  <ErrorMessage>{errorMsg}</ErrorMessage>
                )}
              </FormGroupGrand>

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
