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
import Layout from "../components/layout/layout";
import { FormGroup, InputIcon } from "../components/signUp/signUpStyle";
import PrivateRouter from "./privateRouter";

function Companies() {
  const [filterBy, setFilterBy] = useState<string>("Todas");

  return (
    <Layout title="Empresas">
      <ContentCompanies>
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
              <input type="text" placeholder="pesquise por empresas" />
            </SearchStyled>
            <ButtonSuggest>Sugerir empresa</ButtonSuggest>
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
