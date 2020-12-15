import { Fragment, useEffect, useState } from "react";
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
import { ICompany, IConsumer, IRankingState } from "./../../../types";
import ListOfCompanies from "./listCompanies";
import { useSelector } from "react-redux";
import SignUp from "../signUp/signUp";
import SearchIcon from "./../companies/searchIcone";
import firebase from "../../../Firebase";
import Loading from "../spinner/loading";

function ContainerCompanies() {
  const [filterBy, setFilterBy] = useState<string>("Todas");
  const [showSuggestion, setShowSuggestion] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [companies, setCompanies] = useState<Array<IRankingState>>([]);

  const firestore = firebase.firestore();
  const userState: IConsumer = useSelector((state) => state.Consumer);

  const getDataCompanies = async () => {
    let receivedCompanies = await firestore.collection("companies").get();

    const saved = [];

    receivedCompanies.forEach((doc) => {
      saved.push({ companyId: doc.id, ...doc.data() });
    });

    setCompanies(saved);
  };

  useEffect(() => {
    if (userState.userId) {
      getDataCompanies();
    }
  }, [userState]);

  useEffect(() => {
    if (userState.userId) {
      getDataCompanies();
    }
  }, []);

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
      {!(userState.phone.length > 0) && <SignUp />}

      {showSuggestion && <Suggestion toggleSuggestion={toggleSuggestion} />}

      <div className="cmp_f_g">
        <TextCompanies>
          <span>
            <mark>Pesquise</mark> por empresas ou orgãos.
          </span>
          <span>
            <mark> Escolhe</mark> a que desejas avaliar.
          </span>
          <span>
            <mark> Avalie</mark> e sugira melhorias !
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

      {filteredCompanies.length <= 0 ? (
        <Loading desktop={true} />
      ) : (
        <ListOfCompanies companies={filteredCompanies} search={search} />
      )}

      <ListCompanyMobile companies={companies.length}>
        {filteredCompanies.length <= 0 ? (
          <Loading />
        ) : (
          <Fragment>
            {filteredCompanies.map((value: IRankingState, index: number) => (
              <CardCompany key={index} data={value} />
            ))}
          </Fragment>
        )}
      </ListCompanyMobile>
    </ContentCompanies>
  );
}

export default ContainerCompanies;
