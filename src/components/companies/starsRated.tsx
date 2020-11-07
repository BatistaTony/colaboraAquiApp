import { StarRate, StarsRated } from "./companiesStyle";
import Star from "./star";

interface IProps {
  stars: number;
  background?: string;
  color?: string;
  classNames?: string;
}

export default function StarsRatedCompany({
  stars,
  background,
  color,
  classNames,
}: IProps) {
  return (
    <StarsRated className="bodyOfStars" background={background}>
      {[1, 2, 3, 4, 5].map((value, index: number) => (
        <StarRate
          key={index}
          className={classNames}
          color={color}
          isRated={stars - index > 0}
        >
          <Star />
        </StarRate>
      ))}
    </StarsRated>
  );
}
