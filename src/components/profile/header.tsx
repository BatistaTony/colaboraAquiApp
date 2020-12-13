import { useEffect, useState } from "react";
import {
  ActionTitleProfile,
  HeaderProfileStyle,
  InfoWorning,
  NumbersOfUserRates,
  RatesMadeByUser,
  SimpleTxtOfRates,
  UserAvatarProfile,
  UserInfoContainer,
  UserNameProfile,
} from "./profileStyle";

import firebase from "./../../../Firebase";
import { IConsumer } from "../../../types";
import { useSelector } from "react-redux";

export default function HeaderProfile() {
  const firestore = firebase.firestore();
  const consumerState: IConsumer = useSelector((state) => state.Consumer);

  const [userData, setUserData] = useState<IConsumer>({
    fullName: "",
    phone: "",
    userName: "",
  });

  const [userRates, setUserRates] = useState<number>(0);

  const getUserRates = () => {
    firestore.collection("companyRates").onSnapshot((queryData) => {
      queryData.forEach((doc) => {
        doc
          .data()
          .consumer.get()
          .then((doc) => {
            const saved = [];
            if (doc.id === consumerState.userId) {
              saved.push(doc);
            }
            setUserRates(saved.length);
          });
      });
    });
  };

  const getUSerInfo = () => {
    setUserData(consumerState);
  };

  useEffect(() => {
    getUserRates();
    getUSerInfo();

    return () => {};
  }, []);

  return (
    <HeaderProfileStyle>
      <div className="divOne">
        <UserAvatarProfile
          name={
            consumerState.userName
              ? consumerState.userName[0].toUpperCase()
              : "C"
          }
        >
          {consumerState.userName
            ? consumerState.userName[0].toUpperCase()
            : "C"}
        </UserAvatarProfile>

        <UserInfoContainer>
          <div className="name_div_and_sgdry_THfdhf">
            <UserNameProfile>
              {userData.userName ? userData.userName : userData.phone}
            </UserNameProfile>
            <ActionTitleProfile>
              <span></span> Editar Perfil
            </ActionTitleProfile>
          </div>
          <InfoWorning>
            Todas as tuas informações estão protegidas, apenas tu tens acesso.
          </InfoWorning>
        </UserInfoContainer>
      </div>

      <div className="divSecond">
        <RatesMadeByUser>
          <NumbersOfUserRates>
            <img src="/images/icons8-star.png" alt="" />
            <p className="btnLabel_hsd_d">
              <span>{userRates}</span> Avaliações
            </p>
          </NumbersOfUserRates>
          <SimpleTxtOfRates>realizadas até o momento</SimpleTxtOfRates>
        </RatesMadeByUser>
      </div>
    </HeaderProfileStyle>
  );
}
