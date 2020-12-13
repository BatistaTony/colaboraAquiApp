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
import { ICompany } from "../../../types";

interface IProps {
  data: ICompany;
}

export default function HeaderCompany({ data }: IProps) {
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Header>
      <HeaderInforCompany>
        <CompanyLogo img={data.companyLogo} />

        <div className="containerFor_Dgsgdf_Gdfd_df">
          <div className="companyInfo">
            <NameOfComapny>
              {data.companyPositionRanking}# {data.companyName}
            </NameOfComapny>
            <Avaliations>
              <span>{data.companyRatesNumber}</span> Avaliações{" "}
            </Avaliations>
          </div>

          <div className="starsContainer">
            <Stars stars={data.companyStars} background="orange" />
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
