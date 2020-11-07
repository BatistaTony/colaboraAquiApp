import { useState } from "react";
import CardCompany from "./cardCompany";
import {
  ButtonSuggest,
  ContentCompanies,
  DivBtnMobile,
  FilterStyled,
  ListCompanyMobile,
  SearchStyled,
  TextCompanies,
} from "./companiesStyle";
import Suggestion from "./suggestion";
import Layout from "../layout/layout";
import { InputIcon } from "../signUp/signUpStyle";
import { ICompany, IConsumer } from "./../../../types";
import ListOfCompanies from "./listCompanies";
import { useSelector } from "react-redux";
import SignUp from "../signUp/signUp";
import SearchIcon from "./../companies/searchIcone";

function ContainerCompanies() {
  const [filterBy, setFilterBy] = useState<string>("Todas");
  const [showSuggestion, setShowSuggestion] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [companies, setCompanies] = useState<Array<ICompany>>([
    {
      companyPositionRanking: 1,
      companyRatesNumber: 8,
      companyName: "Movicel",
      companyLogo: "/images/Movicel-2.png",
      companyStars: 2,
      companyDescription:
        "Empresa de telecomunicações, mais focada em telefonia movel e um monte de outras coisa qualquer, Empresa de telecomunicações, mais focada em telefonia movel e um monte de outras coisa qualquer.",
      companyStatus: "Privada",
    },
    {
      companyPositionRanking: 1,
      companyRatesNumber: 150,
      companyName: "Unitel",
      companyLogo: "/images/Movicel-2.png",
      companyStars: 2,
      companyDescription:
        "Empresa de telecomunicações, mais focada em telefonia movel e um monte de outras coisa qualquer, Empresa de telecomunicações, mais focada em telefonia movel e um monte de outras coisa qualquer.",
      companyStatus: "Privada",
    },
    {
      companyPositionRanking: 1,
      companyRatesNumber: 150,
      companyName: "ENSA",
      companyLogo: "/images/Movicel-2.png",
      companyStars: 2,
      companyDescription:
        "Empresa de telecomunicações, mais focada em telefonia movel e um monte de outras coisa qualquer, Empresa de telecomunicações, mais focada em telefonia movel e um monte de outras coisa qualquer.",
      companyStatus: "Privada",
    },
    {
      companyPositionRanking: 1,
      companyRatesNumber: 500,
      companyName: "MINSA",
      companyLogo: "/images/Movicel-2.png",
      companyStars: 2,
      companyDescription:
        "Empresa de telecomunicações, mais focada em telefonia movel e um monte de outras coisa qualquer, Empresa de telecomunicações, mais focada em telefonia movel e um monte de outras coisa qualquer.",
      companyStatus: "Privada",
    },
    {
      companyPositionRanking: 1,
      companyRatesNumber: 150,
      companyName: "TELECON",
      companyLogo: "/images/Movicel-2.png",
      companyStars: 2,
      companyDescription:
        "Empresa de telecomunicações, mais focada em telefonia movel e um monte de outras coisa qualquer, Empresa de telecomunicações, mais focada em telefonia movel e um monte de outras coisa qualquer.",
      companyStatus: "Privada",
    },
    {
      companyPositionRanking: 1,
      companyRatesNumber: 10,
      companyName: "ZAP",
      companyLogo: "/images/Movicel-2.png",
      companyStars: 3,
      companyDescription:
        "Empresa de telecomunicações, mais focada em telefonia movel e um monte de outras coisa qualquer, Empresa de telecomunicações, mais focada em telefonia movel e um monte de outras coisa qualquer.",
      companyStatus: "Privada",
    },
    {
      companyPositionRanking: 1,
      companyRatesNumber: 150,
      companyName: "DSTV",
      companyLogo: "/images/Movicel-2.png",
      companyStars: 2,
      companyDescription:
        "Empresa de telecomunicações, mais focada em telefonia movel e um monte de outras coisa qualquer, Empresa de telecomunicações, mais focada em telefonia movel e um monte de outras coisa qualquer.",
      companyStatus: "Privada",
    },
    {
      companyPositionRanking: 1,
      companyRatesNumber: 150,
      companyName: "TVCABO",
      companyLogo: "/images/Movicel-2.png",
      companyStars: 5,
      companyDescription:
        "Empresa de telecomunicações, mais focada em telefonia movel e um monte de outras coisa qualquer, Empresa de telecomunicações, mais focada em telefonia movel e um monte de outras coisa qualquer.",
      companyStatus: "Privada",
    },
    {
      companyPositionRanking: 1,
      companyRatesNumber: 150,
      companyName: "ZAp Fibra",
      companyLogo: "/images/Movicel-2.png",
      companyStars: 2,
      companyDescription:
        "Empresa de telecomunicações, mais focada em telefonia movel e um monte de outras coisa qualquer, Empresa de telecomunicações, mais focada em telefonia movel e um monte de outras coisa qualquer.",
      companyStatus: "Privada",
    },
    {
      companyPositionRanking: 1,
      companyRatesNumber: 150,
      companyName: "TOYOTA",
      companyLogo: "/images/Movicel-2.png",
      companyStars: 4,
      companyDescription:
        "Empresa de telecomunicações, mais focada em telefonia movel e um monte de outras coisa qualquer, Empresa de telecomunicações, mais focada em telefonia movel e um monte de outras coisa qualquer.",
      companyStatus: "Privada",
    },
    {
      companyPositionRanking: 1,
      companyRatesNumber: 150,
      companyName: "KUBINGA",
      companyLogo: "/images/Movicel-2.png",
      companyStars: 2,
      companyDescription:
        "Empresa de telecomunicações, mais focada em telefonia movel e um monte de outras coisa qualquer, Empresa de telecomunicações, mais focada em telefonia movel e um monte de outras coisa qualquer.",
      companyStatus: "Privada",
    },
    {
      companyPositionRanking: 1,
      companyRatesNumber: 150,
      companyName: "TUPUCA",
      companyLogo: "/images/Movicel-2.png",
      companyStars: 2,
      companyDescription:
        "Empresa de telecomunicações, mais focada em telefonia movel e um monte de outras coisa qualquer, Empresa de telecomunicações, mais focada em telefonia movel e um monte de outras coisa qualquer.",
      companyStatus: "Privada",
    },
  ]);

  const userState: IConsumer = useSelector((state) => state.Consumer);

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
    <ContentCompanies>
      {!(userState.userName.length > 0) && <SignUp />}

      {showSuggestion && <Suggestion toggleSuggestion={toggleSuggestion} />}

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
              <InputIcon className="iconeSearch">
                <SearchIcon />
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
  );
}

export default ContainerCompanies;
