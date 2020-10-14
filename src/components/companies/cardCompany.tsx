import {
  Card,
  CompanyLogo,
  CompanyName,
  CompanyRateNumbers,
  DescriptionCard,
  StarsRated,
} from "./companiesStyle";

export default function CardCompany() {
  return (
    <Card>
      <div className="header_card">
        <div className="div1_er_">
          <CompanyLogo>
            <img src="/images/Movicel-2.png" alt="" />
          </CompanyLogo>

          <div className="company_info_">
            <CompanyName>#2. MOVICEL</CompanyName>
            <CompanyRateNumbers>
              <span>123</span> avaliações
            </CompanyRateNumbers>
          </div>
        </div>

        {/* <StarsRated /> */}
      </div>

      <DescriptionCard>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        cupiditate nesciunt, adipisci libero reiciendis a officia vitae atque
        sunt, qui magnam dolorum, vel voluptatum soluta veniam ex culpa debitis
        dolor.
      </DescriptionCard>
    </Card>
  );
}
