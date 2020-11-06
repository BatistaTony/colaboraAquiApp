import { Container, Text } from "./rateCompanyStyle";
import Data from "../../constants/Data";
import HeaderCompany from "./headerCompany";
import {
  FilterConsumerRating,
  GroupOfSelect,
  RatingsContainer,
  TotalRating,
} from "./companySuggestionAndRateStyle";
import CustomSelectRating from "./custonSelectRatings";
import { useState } from "react";

interface IFilter {
  sortBy: string;
  seeBy: string;
}

const initialFilter: IFilter = {
  seeBy: "",
  sortBy: "",
};

const RateCompany = () => {
  const data = Data.find((item) => item.id === 1);

  const [filterData, setFilter] = useState<IFilter>(initialFilter);

  const classifications = [
    "Todas classificações",
    "Horrivel",
    "Pessimo",
    "Normal",
    "Bom",
    "Muito Bom",
  ];
  const sortOptions = ["Mais recente", "Por classificação"];

  const handleChnage = (property: string, value: string) => {
    setFilter({
      ...filterData,
      [property]: value,
    });
  };

  return (
    <Container>
      <HeaderCompany data={data} />
      <Text>{data.discription}</Text>

      <RatingsContainer>
        <FilterConsumerRating>
          <TotalRating>3500 avaliações</TotalRating>

          <GroupOfSelect>
            <CustomSelectRating
              values={sortOptions}
              handleChange={(value: string) => handleChnage("sortBy", value)}
              whatToDo="ordenar por"
              defaultValueSelect={filterData.sortBy || "Mas recente"}
              classNames="select1"
            />

            <CustomSelectRating
              values={classifications}
              handleChange={(value: string) => handleChnage("seeBy", value)}
              whatToDo="ver por"
              defaultValueSelect={filterData.seeBy || "Todas Classificações"}
              classNames="select2"
            />
          </GroupOfSelect>
        </FilterConsumerRating>
      </RatingsContainer>
    </Container>
  );
};

export default RateCompany;
