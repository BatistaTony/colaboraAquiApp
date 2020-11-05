import { Container, Text } from "./rateCompanyStyle";
import Data from "../../constants/Data";
import HeaderCompany from "./headerCompany";

const RateCompany = () => {
  const data = Data.find((item) => item.id === 1);

  return (
    <Container>
      <HeaderCompany data={data} />
      <Text>{data.discription}</Text>
    </Container>
  );
};

export default RateCompany;
