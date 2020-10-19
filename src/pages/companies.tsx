import { useState } from "react";
import CardCompany from "../components/companies/cardCompany";
import {
  ButtonControl,
  ButtonSuggest,
  CompanyList,
  ContentCompanies,
  DivBtnMobile,
  FilterStyled,
  GroupCard,
  ListCompanyMobile,
  SearchStyled,
  TextCompanies,
} from "../components/companies/companiesStyle";
import Suggestion from "../components/companies/suggestion";
import Layout from "../components/layout/layout";
import { CSSTransition } from "react-transition-group";
import PrivateRouter from "./privateRouter";
import { InputIcon } from "../components/signUp/signUpStyle";
import { ICompany } from "../../types";
import ListOfCompanies from "./../components/companies/listCompanies";

function Companies() {
  const [filterBy, setFilterBy] = useState<string>("Todas");
  const [showSuggestion, setShowSuggestion] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [companies, setCompanies] = useState<Array<ICompany>>([
    {
      companyPositionRanking: 1,
      companyRatesNumber: 150,
      companyName: "Movicel",
      companyLogo: "/images/Movicel-2.png",
      companyStars: 2,
      companyDescription:
        "Distinctio cupiditate nesciunt, adipisci libero reiciendis a officia vitae atque sunt, qui magnam dolorum, vel voluptatum soluta veniam ex culpa debitis dolor.",
      companyStatus: "Privada",
    },
    {
      companyPositionRanking: 1,
      companyRatesNumber: 450,
      companyName: "Unitel",
      companyLogo: "/images/unite.png",
      companyStars: 4,
      companyDescription:
        "Distinctio cupiditate nesciunt, adipisci libero reiciendis a officia vitae atque sunt, qui magnam dolorum, vel voluptatum soluta veniam ex culpa debitis dolor.",
      companyStatus: "Privada",
    },
    {
      companyPositionRanking: 1,
      companyRatesNumber: 450,
      companyName: "AngolaTelecom",
      companyLogo: "/images/unite.png",
      companyStars: 4,
      companyDescription:
        "Distinctio cupiditate nesciunt, adipisci libero reiciendis a officia vitae atque sunt, qui magnam dolorum, vel voluptatum soluta veniam ex culpa debitis dolor.",
      companyStatus: "Privada",
    },
    {
      companyPositionRanking: 1,
      companyRatesNumber: 450,
      companyName: "ENDE",
      companyLogo: "/images/unite.png",
      companyStars: 4,
      companyDescription:
        "Distinctio cupiditate nesciunt, adipisci libero reiciendis a officia vitae atque sunt, qui magnam dolorum, vel voluptatum soluta veniam ex culpa debitis dolor.",
      companyStatus: "Publica",
    },
    {
      companyPositionRanking: 1,
      companyRatesNumber: 450,
      companyName: "KEro",
      companyLogo: "/images/unite.png",
      companyStars: 4,
      companyDescription:
        "Distinctio cupiditate nesciunt, adipisci libero reiciendis a officia vitae atque sunt, qui magnam dolorum, vel voluptatum soluta veniam ex culpa debitis dolor.",
      companyStatus: "Publica",
    },
    {
      companyPositionRanking: 1,
      companyRatesNumber: 450,
      companyName: "Canadando",
      companyLogo: "/images/unite.png",
      companyStars: 4,
      companyDescription:
        "Distinctio cupiditate nesciunt, adipisci libero reiciendis a officia vitae atque sunt, qui magnam dolorum, vel voluptatum soluta veniam ex culpa debitis dolor.",
      companyStatus: "Privada",
    },
    {
      companyPositionRanking: 1,
      companyRatesNumber: 450,
      companyName: "Unitel",
      companyLogo: "/images/unite.png",
      companyStars: 4,
      companyDescription:
        "Distinctio cupiditate nesciunt, adipisci libero reiciendis a officia vitae atque sunt, qui magnam dolorum, vel voluptatum soluta veniam ex culpa debitis dolor.",
      companyStatus: "Privada",
    },
    {
      companyPositionRanking: 1,
      companyRatesNumber: 450,
      companyName: "AngolaTelecom",
      companyLogo: "/images/unite.png",
      companyStars: 4,
      companyDescription:
        "Distinctio cupiditate nesciunt, adipisci libero reiciendis a officia vitae atque sunt, qui magnam dolorum, vel voluptatum soluta veniam ex culpa debitis dolor.",
      companyStatus: "Privada",
    },
    {
      companyPositionRanking: 1,
      companyRatesNumber: 450,
      companyName: "ENDE",
      companyLogo: "/images/unite.png",
      companyStars: 4,
      companyDescription:
        "Distinctio cupiditate nesciunt, adipisci libero reiciendis a officia vitae atque sunt, qui magnam dolorum, vel voluptatum soluta veniam ex culpa debitis dolor.",
      companyStatus: "Publica",
    },
    {
      companyPositionRanking: 1,
      companyRatesNumber: 450,
      companyName: "KEro",
      companyLogo: "/images/unite.png",
      companyStars: 4,
      companyDescription:
        "Distinctio cupiditate nesciunt, adipisci libero reiciendis a officia vitae atque sunt, qui magnam dolorum, vel voluptatum soluta veniam ex culpa debitis dolor.",
      companyStatus: "Publica",
    },
    {
      companyPositionRanking: 1,
      companyRatesNumber: 450,
      companyName: "Canadando",
      companyLogo: "/images/unite.png",
      companyStars: 4,
      companyDescription:
        "Distinctio cupiditate nesciunt, adipisci libero reiciendis a officia vitae atque sunt, qui magnam dolorum, vel voluptatum soluta veniam ex culpa debitis dolor.",
      companyStatus: "Privada",
    },
  ]);

  const toggleSuggestion = () => {
    setShowSuggestion(!showSuggestion);
  };

  const regex = new RegExp(`${search}`, "gi");

  const filteredCompanies = companies
    .filter((company) => {
      if (filterBy === "Todas") {
        return company;
      } else {
        return company.companyStatus === filterBy;
      }
    })
    .filter((company) => company.companyName.match(regex));

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
            <span>
              <mark>Pesquise</mark> por empresas ou orgãos.
            </span>
            <span>
              <mark>Escolhe</mark> a que desejas avaliar.
            </span>
            <span>
              <mark>Avalie</mark> e sugira melhorias !
            </span>
          </TextCompanies>
          <FilterStyled>
            <div className="filter_1_">
              <SearchStyled>
                <InputIcon>
                  <img src="/images/search.svg" alt="" />
                </InputIcon>
                <input
                  type="text"
                  onChange={(event) => setSearch(event.target.value)}
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
          <DivBtnMobile>
            <ButtonSuggest
              className="btnMobile_suggest"
              onClick={toggleSuggestion}
            >
              Sugerir empresa
            </ButtonSuggest>
          </DivBtnMobile>
        </div>

        <ListOfCompanies companies={filteredCompanies} search={search} />
        <ListCompanyMobile companies={companies.length}>
          {filteredCompanies.map((value: ICompany, index: number) => (
            <CardCompany key={index} data={value} />
          ))}
        </ListCompanyMobile>
      </ContentCompanies>
    </Layout>
  );
}

export default PrivateRouter(Companies);
