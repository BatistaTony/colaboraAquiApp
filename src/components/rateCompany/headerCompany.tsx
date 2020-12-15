import { useState } from "react";
import {
  CompanyLogo,
  Header,
  HeaderInforCompany,
  HeaderAvaliation,
  NameOfComapny,
  Avaliations,
  RateButton,
} from "./rateCompanyStyle";
import RateModal from "./rateModal";
import Stars from "../companies/starsRated";
import { ICompany, IRankingState } from "../../../types";
import { useSelector } from "react-redux";

interface IProps {
  data: ICompany;
}

export default function HeaderCompany({ data }: IProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const rankingState: IRankingState[] = useSelector(
    (state) => state.RankingState
  );

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const checkIfGotRating = () => {
    const result = rankingState.filter(
      (company) => company.companyId === data.companyId
    );

    return result;
  };

  const getRatesProps = () => {
    return checkIfGotRating().length > 0 && checkIfGotRating()[0];
  };

  const calcTotal = () => {
    if (getRatesProps()) {
      const ratesNumber = getRatesProps().companyRates;
      const total =
        ratesNumber.normal + ratesNumber.negatives + ratesNumber.positives;
      return total;
    } else {
      return 0;
    }
  };

  const getStarsNumberAndPosition = () => {
    if (getRatesProps()) {
      return {
        stars: getRatesProps().companyStars,
        position: getRatesProps().position,
      };
    } else {
      return {
        stars: 0,
        position: "#",
      };
    }
  };

  return (
    <Header>
      <HeaderInforCompany>
        <CompanyLogo img={data.companyLogo} />

        <div className="containerFor_Dgsgdf_Gdfd_df">
          <div className="companyInfo">
            <NameOfComapny>
              #{getStarsNumberAndPosition().position} {data.companyName}
            </NameOfComapny>
            <Avaliations>
              <span>{calcTotal()}</span> Avaliações{" "}
            </Avaliations>
          </div>

          <div className="starsContainer">
            <Stars
              stars={getStarsNumberAndPosition().stars}
              background="orange"
            />
          </div>
        </div>
      </HeaderInforCompany>

      <HeaderAvaliation>
        <RateButton onClick={toggleModal}>
          Avaliar
          <img src={"/images/icons-star.png"} />
        </RateButton>
      </HeaderAvaliation>

      {showModal && (
        <div>
          <RateModal companyId={data.companyId} toggleModal={toggleModal} />
        </div>
      )}
    </Header>
  );
}
