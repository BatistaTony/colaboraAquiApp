import { StarRate, StarsRated } from "./companiesStyle";
import Star from "./star";

interface IProps {
  stars: number;
}

export default function StarsRatedCompany({ stars }: IProps) {
  return (
    <StarsRated>
      {[1, 2, 3, 4, 5].map((value, index: number) => (
        <StarRate key={index} isRated={stars - index > 0}>
          <Star />
        </StarRate>
      ))}
    </StarsRated>
  );
}
