import { Container, Text } from "./rateCompanyStyle";
import Data from "../../constants/Data";
import HeaderCompany from "./headerCompany";
import {
  FilterConsumerRating,
  GroupOfSelect,
  ListOfRating,
  RatingsContainer,
  TotalRating,
} from "./companySuggestionAndRateStyle";
import CustomSelectRating from "./custonSelectRatings";
import { useState } from "react";
import ConsumerRating from "./consumerRating";

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
  const sortOptions = ["Mais recentes", "Por classificação"];

  const handleChnage = (property: string, value: string) => {
    setFilter({
      ...filterData,
      [property]: value,
    });
  };

  const ratings = [
    {
      consumerName: "BatistaTony",
      stars: 3,
      time: "Hoje",
      experience:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi ipsam, quos veniam nulla quae ipsa doloribus dolorum enim nihil? ",
      feeling: "Bom",
      suggestion: "",
    },

    {
      consumerName: "AndersonKennedy",
      stars: 1,
      time: "Ontem",
      experience:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi ipsam, quos veniam nulla quae ipsa doloribus dolorum enim nihil? ",
      feeling: "Muito Ruim",
      suggestion:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, unde. Dolore, culpa! Officia, eius fugiat nihil debitis modi accusantium corrupti assumenda. Ab ducimus doloribus vel suscipit vitae. Quaerat, nostrum laborum.  ",
    },

    {
      consumerName: "CaioTony",
      stars: 5,
      time: "7 dias atrás",
      experience:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi ipsam, quos veniam nulla quae ipsa doloribus dolorum enim nihil? ",
      feeling: "Muito Bom",
      suggestion: "",
    },
  ];

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
              defaultValueSelect={filterData.sortBy || "Mais recentes"}
              classNames="select1"
            />

            <CustomSelectRating
              values={classifications}
              handleChange={(value: string) => handleChnage("seeBy", value)}
              whatToDo="ver por"
              defaultValueSelect={filterData.seeBy || "Todas classificações"}
              classNames="select2"
            />
          </GroupOfSelect>
        </FilterConsumerRating>

        <ListOfRating>
          {ratings.map((data, index) => (
            <ConsumerRating key={index} data={data} />
          ))}
        </ListOfRating>
      </RatingsContainer>
    </Container>
  );
};

export default RateCompany;
