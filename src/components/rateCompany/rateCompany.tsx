import { Container, Text } from "./rateCompanyStyle";
import Data from "../../constants/Data";
import HeaderCompany from "./headerCompany";
import {
  ButtonSeeMore,
  DivBtnRatings,
  FilterConsumerRating,
  GroupOfSelect,
  ListOfRating,
  RatingsContainer,
  TotalRating,
} from "./companySuggestionAndRateStyle";
import CustomSelectRating from "./custonSelectRatings";
import { Fragment, useEffect, useState } from "react";
import ConsumerRating from "./consumerRating";

interface IFilter {
  sortBy: string;
  seeBy: string;
}

const initialFilter: IFilter = {
  seeBy: "Todas classificações",
  sortBy: "Mais recentes",
};

interface IRating {
  consumerName: string;
  stars: number;
  time: string;
  experience: string;
  feeling: string;
  suggestion: string;
}

const RateCompany = () => {
  const data = Data.find((item) => item.id === 1);

  const [filterData, setFilter] = useState<IFilter>(initialFilter);
  const [lengthRatings, setLengthRatings] = useState<number>(0);

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
    setLengthRatings(0);
  };

  const ratings = [
    {
      id: 1,
      consumerName: "BatistaTony",
      stars: 3,
      time: "Hoje",
      experience:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi ipsam, quos veniam nulla quae ipsa doloribus dolorum enim nihil? ",
      feeling: "Bom",
      suggestion: "",
    },

    {
      id: 2,
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
      id: 3,
      consumerName: "CaioTony",
      stars: 5,
      time: "7 dias atrás",
      experience:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi ipsam, quos veniam nulla quae ipsa doloribus dolorum enim nihil? ",
      feeling: "Muito Bom",
      suggestion: "",
    },
    {
      id: 4,
      consumerName: "BirdmanStunna",
      stars: 3,
      time: "Hoje",
      experience:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi ipsam, quos veniam nulla quae ipsa doloribus dolorum enim nihil? ",
      feeling: "Bom",
      suggestion: "",
    },

    {
      id: 5,
      consumerName: "DezarAntonio",
      stars: 1,
      time: "Ontem",
      experience:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi ipsam, quos veniam nulla quae ipsa doloribus dolorum enim nihil? ",
      feeling: "Muito Ruim",
      suggestion:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, unde. Dolore, culpa! Officia, eius fugiat nihil debitis modi accusantium corrupti assumenda. Ab ducimus doloribus vel suscipit vitae. Quaerat, nostrum laborum.  ",
    },

    {
      id: 6,
      consumerName: "TonyTony",
      stars: 5,
      time: "7 dias atrás",
      experience:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi ipsam, quos veniam nulla quae ipsa doloribus dolorum enim nihil? ",
      feeling: "Muito Bom",
      suggestion: "",
    },
    {
      id: 7,
      consumerName: "BatistaTony",
      stars: 3,
      time: "Hoje",
      experience:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi ipsam, quos veniam nulla quae ipsa doloribus dolorum enim nihil? ",
      feeling: "Bom",
      suggestion: "",
    },

    {
      id: 8,
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
      id: 9,
      consumerName: "CaioTony",
      stars: 5,
      time: "7 dias atrás",
      experience:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi ipsam, quos veniam nulla quae ipsa doloribus dolorum enim nihil? ",
      feeling: "Muito Bom",
      suggestion: "",
    },
    {
      id: 10,
      consumerName: "BirdmanStunna",
      stars: 3,
      time: "Hoje",
      experience:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi ipsam, quos veniam nulla quae ipsa doloribus dolorum enim nihil? ",
      feeling: "Bom",
      suggestion: "",
    },

    {
      id: 11,
      consumerName: "DezarAntonio",
      stars: 1,
      time: "Ontem",
      experience:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi ipsam, quos veniam nulla quae ipsa doloribus dolorum enim nihil? ",
      feeling: "Pessimo",
      suggestion:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, unde. Dolore, culpa! Officia, eius fugiat nihil debitis modi accusantium corrupti assumenda. Ab ducimus doloribus vel suscipit vitae. Quaerat, nostrum laborum.  ",
    },

    {
      id: 12,
      consumerName: "TonyTony",
      stars: 5,
      time: "7 dias atrás",
      experience:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi ipsam, quos veniam nulla quae ipsa doloribus dolorum enim nihil? ",
      feeling: "Normal",
      suggestion: "",
    },
  ];

  const filteredRatings = ratings.filter((state: IRating) => {
    if (filterData.seeBy === "Todas classificações") {
      return state;
    } else if (state.feeling === filterData.seeBy) {
      return state;
    }
  });

  useEffect(() => {
    if (!lengthRatings) {
      if (filteredRatings.length > 10) {
        setLengthRatings(10);
      } else {
        setLengthRatings(filteredRatings.length);
      }
    }
  });

  const seeMoreRating = () => {
    if (filteredRatings.length - lengthRatings > 10) {
      setLengthRatings(lengthRatings + 10);
    } else {
      setLengthRatings(ratings.length);
    }
  };

  return (
    <Container length={filteredRatings.length <= 3}>
      <HeaderCompany data={data} />
      <Text>{data.discription}</Text>

      <RatingsContainer>
        <FilterConsumerRating>
          <TotalRating>{ratings.length} avaliações</TotalRating>

          <GroupOfSelect>
            <CustomSelectRating
              values={sortOptions}
              handleChange={(value: string) => handleChnage("sortBy", value)}
              whatToDo="ordenar por"
              defaultValueSelect={filterData.sortBy}
              classNames="select1"
            />

            <CustomSelectRating
              values={classifications}
              handleChange={(value: string) => handleChnage("seeBy", value)}
              whatToDo="ver por"
              defaultValueSelect={filterData.seeBy}
              classNames="select2"
            />
          </GroupOfSelect>
        </FilterConsumerRating>

        <ListOfRating>
          {filteredRatings.slice(0, lengthRatings).map((data, index) => (
            <ConsumerRating key={data.id} data={data} />
          ))}
        </ListOfRating>

        <DivBtnRatings>
          <ButtonSeeMore
            onClick={lengthRatings !== filteredRatings.length && seeMoreRating}
          >
            {lengthRatings === filteredRatings.length ? (
              <Fragment>
                {filteredRatings.length === 0
                  ? "Sem avaliações"
                  : "Sem mais avaliações"}
              </Fragment>
            ) : (
              "Ver mais..."
            )}
          </ButtonSeeMore>
        </DivBtnRatings>
      </RatingsContainer>
    </Container>
  );
};

export default RateCompany;
