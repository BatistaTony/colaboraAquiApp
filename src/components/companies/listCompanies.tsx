import { useEffect, useState } from "react";
import { ICompany } from "../../../types";
import CardCompany from "./cardCompany";
import { CompanyList, ButtonControl, GroupCard } from "./companiesStyle";

interface IProps {
  companies: Array<ICompany>;
  search: string;
}

export default function LisOfCompanies({ companies, search }: IProps) {
  const [cardNumber, setCardNumber] = useState<number>(0);
  const [twoCompanies, setTwoCompanies] = useState<Array<ICompany>>([
    companies[cardNumber],
    companies[cardNumber + 1],
  ]);

  useEffect(() => {
    setTwoCompanies([companies[cardNumber], companies[cardNumber + 1]]);
    setCardNumber(0);
  }, [companies]);

  const sumAndSubtNumber = async (signal: string) => {
    if (signal === "subtration") {
      const subtration = cardNumber - 1;
      await setCardNumber(subtration);
      if (subtration - 1 >= 0) {
        await setTwoCompanies([
          companies[subtration - 1],
          companies[subtration],
        ]);
      } else {
        await setTwoCompanies([companies[subtration]]);
      }
    } else if (signal === "sum") {
      const sum = cardNumber + 1;
      await setCardNumber(sum);

      await setTwoCompanies([companies[sum], companies[sum + 1]]);
    }
  };

  const nextGroup = () => {
    if (cardNumber + 2 < companies.length) {
      sumAndSubtNumber("sum");
    }
  };

  const prevGroup = () => {
    if (cardNumber >= 2) {
      sumAndSubtNumber("subtration");
    }
  };

  return (
    <CompanyList>
      <ButtonControl>
        <button onClick={prevGroup}>
          <img src="images/back.png" alt="" />
        </button>
        <button onClick={nextGroup}>
          <img src="images/next.png" alt="" />
        </button>
      </ButtonControl>

      <GroupCard key={cardNumber}>
        {twoCompanies.map(
          (value: ICompany, index: number) =>
            value && <CardCompany key={index} data={value} />
        )}
      </GroupCard>
    </CompanyList>
  );
}
