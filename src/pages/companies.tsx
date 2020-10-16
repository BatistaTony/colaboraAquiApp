import { useState } from "react";
import CardCompany from "../components/companies/cardCompany";
import {
  ButtonControl,
  ButtonSuggest,
  CompanyList,
  ContentCompanies,
  FilterStyled,
  GroupCard,
  SearchStyled,
  TextCompanies,
} from "../components/companies/companiesStyle";
import Suggestion from "../components/companies/suggestion";
import Layout from "../components/layout/layout";
import { CSSTransition } from "react-transition-group";
import PrivateRouter from "./privateRouter";
import { InputIcon } from "../components/signUp/signUpStyle";

function Companies() {
  const [filterBy, setFilterBy] = useState<string>("Todas");
  const [showSuggestion, setShowSuggestion] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const handleChange = (event: any) => {
    setSearch(event.target.name);
  };

  const toggleSuggestion = () => {
    setShowSuggestion(!showSuggestion);
  };

  return (
    <Layout title="Empresas">
      <ContentCompanies>
        <CSSTransition
          unmountOnExit
          addEndListener={() => {}}
          timout={200}
          in={showSuggestion}
          classNames="my-node"
        >
          <Suggestion toggleSuggestion={toggleSuggestion} />
        </CSSTransition>
        <div className="cmp_f_g">
          <TextCompanies>
            <span>Pesquise</span> por empresas ou orgãos. <span>Escolhe</span> a
            que deseja avaliar. <span>Avalie</span> e sugira melhorias !
          </TextCompanies>
          <FilterStyled>
            <div className="filter_1_">
              <SearchStyled>
                <InputIcon>
                  <img src="/images/search.svg" alt="" />
                </InputIcon>
                <input
                  type="text"
                  onChange={handleChange}
                  defaultValue={search}
                  placeholder="pesquise por empresas"
                />
              </SearchStyled>
              <ButtonSuggest onClick={toggleSuggestion}>
                Sugerir empresa
              </ButtonSuggest>
            </div>

            <ul className="filter_status">
              <li
                onClick={() => setFilterBy("Todas")}
                className={filterBy === "Todas" ? "activeItem" : ""}
              >
                Todas
              </li>
              <li
                onClick={() => setFilterBy("Privada")}
                className={filterBy === "Privada" ? "activeItem" : ""}
              >
                Privada
              </li>
              <li
                onClick={() => setFilterBy("Publica")}
                className={filterBy === "Publica" ? "activeItem" : ""}
              >
                Publica
              </li>
            </ul>
          </FilterStyled>
        </div>

        <CompanyList>
          <ButtonControl>
            <button>
              <img src="images/back.png" alt="" />
            </button>
            <button>
              <img src="images/next.png" alt="" />
            </button>
          </ButtonControl>
          <GroupCard>
            <CardCompany />
            <CardCompany />
          </GroupCard>
        </CompanyList>
      </ContentCompanies>
    </Layout>
  );
}

export default Companies;