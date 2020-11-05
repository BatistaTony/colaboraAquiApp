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

interface IProps {
  data: any;
}

export default function HeaderCompany({ data }) {
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Header>
      <HeaderInforCompany>
        <CompanyLogo img={data.logo} />

        <div className="containerFor_Dgsgdf_Gdfd_df">
          <div className="companyInfo">
            <NameOfComapny>
              {data.ranking}# {data.name}
            </NameOfComapny>
            <Avaliations>
              <span>{data.avaliations.all}</span> Avaliações{" "}
            </Avaliations>
          </div>

          <div className="starsContainer">
            <Stars stars={data.stars} background="orange" />
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
          <RateModal toggleModal={toggleModal} />
        </div>
      )}
    </Header>
  );
}
