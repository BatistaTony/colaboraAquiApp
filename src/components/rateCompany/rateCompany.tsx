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
import { ICompany, IRating } from "../../../types";
import firebase from "./../../../Firebase";

interface IFilter {
  sortBy: string;
  seeBy: string;
}

const initialFilter: IFilter = {
  seeBy: "Todas classificações",
  sortBy: "Mais recentes",
};

type TRateCompany = {
  data: ICompany;
};

const RateCompany = ({ data }: TRateCompany) => {
  const [filterData, setFilter] = useState<IFilter>(initialFilter);
  const [lengthRatings, setLengthRatings] = useState<number>(0);
  const [companyId, setCompanyId] = useState<string>("");
  const firestore = firebase.firestore();

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

  const [ratings, setRatings] = useState<IRating[] | any>([]);

  let filteredRatings = ratings.filter((state: IRating) => {
    if (filterData.seeBy === "Todas classificações") {
      return state;
    } else if (state.feeling === filterData.seeBy) {
      return state;
    }
  });

  const checkIfAnonymous = (
    userName: string,
    fullName: string,
    isAnonymous: boolean
  ) => {
    if (isAnonymous) {
      return userName;
    } else {
      return fullName;
    }
  };

  const getRatings = () => {
    if (companyId) {
      firestore
        .collection("companyRates")

        .onSnapshot((queryData) => {
          var savedRatings = [];

          queryData.forEach((doc) => {
            console.log(data.companyId);
            if (doc.data().companyId === companyId) {
              savedRatings.push(doc.data());
            }
          });

          const result = savedRatings.map(async (item) => {
            let consumer = await item.consumer.get().then((res) => res.data());

            return {
              ...item,
              ...consumer,
              consumerName: checkIfAnonymous(
                consumer.userName,
                consumer.fullName,
                consumer.isKeepAnonymous
              ),
            };
          });

          Promise.all(result).then((res) => console.log(res));
          Promise.all(result).then((res) => setRatings(res));
        });
    } else {
      console.log("id not exist");
    }
  };

  useEffect(() => {
    setCompanyId(data.companyId);

    getRatings();

    if (!lengthRatings) {
      if (filteredRatings.length > 10) {
        setLengthRatings(10);
        console.log("come");
      } else {
        setLengthRatings(filteredRatings.length);
        console.log(filteredRatings.length);
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
    <Container length={filteredRatings.length < 3}>
      <HeaderCompany data={data} />
      <Text>{data.companyDescription}</Text>

      <RatingsContainer length={filteredRatings.length < 3}>
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

        <ListOfRating length={filteredRatings.length < 3}>
          {filteredRatings.slice(0, lengthRatings).map((data) => (
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
