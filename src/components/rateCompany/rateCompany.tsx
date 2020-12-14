import { Container, Text } from "./rateCompanyStyle";
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
import { useRouter } from "next/router";
import queryString from "query-string";
import Loading from "../spinner/loading";

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
  const firestore = firebase.firestore();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const router = useRouter();

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

  const query = queryString.parse(router.asPath.split(/\?/)[1]);

  const companyId: string | any = query.id;

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
            if (doc.data().companyId === companyId) {
              savedRatings.push({ id: doc.id, ...doc.data() });
            }
          });

          const result = savedRatings.map(async (item) => {
            let consumer = await item.consumer.get().then((res) => res.data());
            return {
              ...item,
              ...consumer,
              id: item.id,
              consumerName: checkIfAnonymous(
                consumer.userName,
                consumer.fullName,
                consumer.isKeepAnonymous
              ),
            };
          });

          Promise.all(result).then((res) => setRatings(res));
        });
    }
  };

  useEffect(() => {
    getRatings();
  }, []);

  useEffect(() => {
    if (!lengthRatings) {
      if (filteredRatings.length > 10) {
        setLengthRatings(10);
      } else {
        setLengthRatings(filteredRatings.length);
      }
    } else {
      setLengthRatings(filteredRatings.length);
    }
  }, [filteredRatings]);

  const seeMoreRating = () => {
    if (filteredRatings.length - lengthRatings > 10) {
      setLengthRatings(lengthRatings + 10);
    } else {
      setLengthRatings(ratings.length);
    }
  };

  return (
    <Container length={filteredRatings.length < 3}>
      {data.companyId ? <HeaderCompany data={data} /> : <Loading />}
      <Text>{data.companyDescription}</Text>

      {data.companyId.length > 0 && (
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
              onClick={
                lengthRatings !== filteredRatings.length && seeMoreRating
              }
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
      )}
    </Container>
  );
};

export default RateCompany;
