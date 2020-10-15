import { ICompany } from "../../../types";
import {
  Card,
  CompanyLogo,
  CompanyName,
  CompanyRateNumbers,
  DescriptionCard,
  StarsRated,
} from "./companiesStyle";
import StarsRatedCompany from "./starsRated";

interface IProps {
  data: ICompany;
}

export default function CardCompany({ data }: IProps) {
  const {
    companyDescription,
    companyLogo,
    companyName,
    companyPositionRanking,
    companyRatesNumber,
    companyStars,
  } = data;

  return (
    <Card>
      <div className="header_card">
        <div className="div1_er_">
          <CompanyLogo>
            <img src={companyLogo} alt="" />
          </CompanyLogo>

          <div className="company_info_">
            <CompanyName>#{companyPositionRanking}. {companyName}</CompanyName>
            <CompanyRateNumbers>
              <span>{companyRatesNumber}</span> avaliações
            </CompanyRateNumbers>
          </div>
        </div>
        <div className="start_div_cmpy">
          <StarsRatedCompany stars={companyStars} />
        </div>
      </div>

      <DescriptionCard>
        {companyDescription}
      </DescriptionCard>
    </Card>
  );
}
