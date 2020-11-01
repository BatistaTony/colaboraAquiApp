import { StarRate, StarsRated } from './companiesStyle';
import Star from './star';

interface IProps {
  stars: number;
  background: string;
}

export default function StarsRatedCompany({ stars, background }: IProps) {
  return (
    <StarsRated background={background}>
      {[1, 2, 3, 4, 5].map((value, index: number) => (
        <StarRate key={index} isRated={stars - index > 0}>
          <Star />
        </StarRate>
      ))}
    </StarsRated>
  );
}
